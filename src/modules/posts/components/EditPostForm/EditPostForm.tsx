import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PostService } from '@api'; // Для загрузки данных поста и удаления медиа
import { IMedia } from '@app-types';
import { categories, tags } from '@constants';
import { useUploadFile } from '@hooks/useUploadFile.ts';
import { FileInput, Flex, Group, Input } from '@mantine/core';
import { TextInput } from '@mantine/core';
import { FileLoader } from '@modules/experementalTest/components/FileLoader.tsx';

import { Editor } from '@tinymce/tinymce-react';
import {
  BlueButton,
  FormBox,
  GreyButton,
  Heading1,
  Heading4,
  TagMultiSelect,
} from '@ui';
import { usePostEdit } from '@modules/posts/hooks/usePostEdit.ts';

interface MediaFile {
  file: File;
  previewUrl: string;
  type: 'image' | 'video' | 'audio';
}

interface BlobInfo {
  blob: () => Blob;
}

export const EditPostForm = () => {
  const apiKey = 'qup8181vvir7d4vosyyut4evohlj4r0h4w84vsbbhx4k0k2y';
  const uploadFile = useUploadFile();
  const postEdit = usePostEdit();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); // ID поста

  // Состояния для данных поста
  const [title, setTitle] = useState('');
  const [previewImg, setPreviewImg] = useState<File | null>(null);
  const [content, setContent] = useState<string>('');
  const [selectTagIds, setSelectTagIds] = useState<number[]>([]);
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);

  // Для хранения старых медиафайлов (IMedia[])
  const [oldMediaFiles, setOldMediaFiles] = useState<IMedia[]>([]);

  // Для хранения старого preview (для сравнения)
  const [oldPreviewImage, setOldPreviewImage] = useState<IMedia | null>(null);

  // Для хранения старых изображений контента (ID)
  const [oldContentImages, setOldContentImages] = useState<IMedia[]>([]);

  // Загрузка поста при монтировании
  useEffect(() => {
    if (!id) return;

    async function fetchPost() {
      try {
        const data = await PostService.getPostById(Number(id));
        setTitle(data.data.data.title);
        setContent(data.data.data.content);
        setSelectTagIds(data.data.data.tags);

        // previewImage - сюда можно подставить File? Но скорее URL
        setOldPreviewImage(data.previewImage);

        // Загрузка медиафайлов для загрузчика
        setOldMediaFiles(data.mediaFiles);

        // Преобразуем mediaFiles в MediaFile[], чтобы можно было работать с ними в FileLoader (если нужно)
        // Но если у вас FileLoader работает только с File, можно оставить только previewUrl или null

        setMediaFiles([]); // Пока пустой, т.к. новые файлы — это добавленные

        setOldContentImages(data.contentImages); // Картинки в контенте
      } catch (e) {
        console.error('Ошибка загрузки поста', e);
      }
    }

    fetchPost();
  }, [id]);

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };

  // Функция удаления старых медиафайлов, которых нет в новых
  async function deleteRemovedMediaFiles(newMediaIds: number[]) {
    for (const oldFile of oldMediaFiles) {
      if (!newMediaIds.includes(oldFile.id)) {
        try {
          await PostService.deleteMediaById(oldFile.id);
          console.log(`Удалён файл id=${oldFile.id}`);
        } catch (e) {
          console.error(`Ошибка удаления файла id=${oldFile.id}`, e);
        }
      }
    }
  }

  const handleSubmit = async () => {
    if (!id) return;

    // 1. Обработка контента (получаем обновленный html и выделенные картинки)
    const processedContent = processHtmlContent(content);

    // 2. Загрузка previewImg, если он изменился
    let previewImageData: IMedia | null = oldPreviewImage;
    if (previewImg) {
      const previewResponse = await uploadFile.mutateAsync(previewImg);
      previewImageData = {
        id: 0, // id будет новым, сервер вернёт свой
        url: previewResponse.data.data.url,
      };
    }

    // 3. Загрузка новых изображений из контента (в обработанном контенте)
    const uploadedImages: IMedia[] = await Promise.all(
      processedContent.images.map(async img => {
        if (img.id) return img; // Если уже есть id — значит не нужно загружать заново
        const response = await uploadFile.mutateAsync(img.file);
        return {
          id: 0, // серверный id
          url: response.data.data.url,
        };
      }),
    );

    // 4. Загрузка новых медиафайлов (из FileLoader)
    const uploadedMediaFiles: IMedia[] = await Promise.all(
      mediaFiles.map(async file => {
        if ('id' in file && (file as any).id) return file as IMedia; // Если у файла есть id, берем его
        const response = await uploadFile.mutateAsync(file.file);
        return {
          id: 0,
          url: response.data.data.url,
        };
      }),
    );

    // 5. Формируем ID новых файлов для сравнения и удаления
    const newMediaIds = uploadedMediaFiles
      .map(f => f.id)
      .filter(Boolean) as number[];

    // 6. Удаляем старые файлы, которых нет в новых
    await deleteRemovedMediaFiles(newMediaIds);

    // 7. Собираем массив ID изображений контента
    const contentImageIds = uploadedImages
      .map(img => img.id)
      .filter(Boolean) as number[];

    // 8. Вызов мутации обновления
    postEdit.mutate({
      postId: Number(id),
      previewImage: previewImageData!,
      title,
      content: processedContent.content,
      postImages: contentImageIds,
      tags: selectTagIds,
      postFiles: newMediaIds,
    });

    // 9. После успешного обновления перейти назад
    postEdit.isSuccess && navigate(`/channel/${id}`);
  };

  return (
    <FormBox>
      <Heading1>Редактирование поста</Heading1>
      <Group justify="center" grow>
        <Flex direction="column" gap="md">
          <TextInput
            size="md"
            mt="sm"
            radius="lg"
            label={<Heading4 mb={5}>Название поста</Heading4>}
            placeholder="Введите название поста"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <FileInput
            accept="image/png,image/jpeg"
            clearable
            size="md"
            mt="sm"
            radius="lg"
            label={<Heading4 mb={5}>Превью изображение</Heading4>}
            value={previewImg}
            onChange={setPreviewImg}
            placeholder={oldPreviewImage?.url || 'Выберите файл'}
          />
          <div style={{ margin: '15px 0 0 0' }} id="Редактор">
            <Input.Wrapper
              label={<Heading4 mb={5}>Содержание поста</Heading4>}
              size="20px"
              pb="5px"
            />
            <Editor
              apiKey={apiKey}
              value={content}
              onEditorChange={handleEditorChange}
              init={{
                min_height: 400,
                autoresize_bottom_margin: 40,
                width: '100%',
                plugins: 'link image media autoresize',
                menubar: 'format table tools help',
                toolbar:
                  'undo redo | bold italic underline strikethrough| alignleft aligncenter alignright | link image media',
                automatic_uploads: true,
                file_picker_types: 'image',
                images_upload_handler: async (blobInfo: BlobInfo) => {
                  return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve(reader.result as string);
                    reader.onerror = error => reject(error);
                    reader.readAsDataURL(blobInfo.blob());
                  });
                },
                media_live_embeds: true,
              }}
            />
          </div>
          <Input.Wrapper label={<Heading4>Теги поста</Heading4>} size="20px" />
          <TagMultiSelect
            tags={tags}
            categories={categories}
            selectedTagIds={selectTagIds}
            onChange={setSelectTagIds}
          />
          <FileLoader files={mediaFiles} setFiles={setMediaFiles} />
          <Flex
            mih={50}
            gap="xs"
            justify="center"
            align="center"
            direction={{ base: 'column', xs: 'row' }}
          >
            <GreyButton
              mt="sm"
              w={'fit-content'}
              onClick={() => navigate(`/channel/${id}`)}
            >
              Отменить
            </GreyButton>
            <BlueButton
              type="submit"
              mt="sm"
              w={'fit-content'}
              onClick={handleSubmit}
            >
              Сохранить
            </BlueButton>
          </Flex>
        </Flex>
      </Group>
    </FormBox>
  );
};
