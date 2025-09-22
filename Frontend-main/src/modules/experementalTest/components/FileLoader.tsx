import { FC } from 'react';
import { Button, Card, Flex, Group, Stack, Text } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import { useLanguage } from '@hooks/useLanguage.ts';

interface MediaFile {
  file: File;
  previewUrl: string;
  type: 'image' | 'video' | 'audio';
}

interface FileLoaderProps {
  files: MediaFile[]; // Массив файлов из родительского компонента
  setFiles: (files: MediaFile[]) => void; // Функция для обновления файлов
}

export const FileLoader: FC<FileLoaderProps> = ({ files, setFiles }) => {
  const { l } = useLanguage();

  // Обработка добавленных файлов
  const handleFiles = (newFiles: File[]) => {
    const newMedia = newFiles.map(file => {
      let type: MediaFile['type'] = 'image';
      if (file.type.startsWith('video')) type = 'video';
      else if (file.type.startsWith('audio')) type = 'audio';

      return {
        file,
        previewUrl: URL.createObjectURL(file),
        type,
      };
    });

    setFiles([...files, ...newMedia]); // Обновляем состояние в родительском компоненте
  };

  // Удаление файла
  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  return (
    <Stack gap="md">
      {/* Поле загрузки файлов */}
      <Dropzone onDrop={handleFiles} accept={['image/*', 'video/*', 'audio/*']}>
        <Group p="center">
          <Text>{l.fileLoaderSeveralFiles}</Text>
        </Group>
      </Dropzone>

      {/* Список загруженных файлов */}
      {files.length > 0 && (
        <Stack>
          {files.map((item, index) => (
            <Card withBorder key={index} p="sm">
              <Flex align="center" justify="space-between">
                <div>
                  {item.type === 'image' && (
                    <img src={item.previewUrl} alt="uploaded" width={100} />
                  )}
                  {item.type === 'video' && (
                    <video src={item.previewUrl} controls width={100} />
                  )}
                  {item.type === 'audio' && (
                    <audio src={item.previewUrl} controls />
                  )}
                  <Text size="sm">{item.file.name}</Text>
                </div>
                <Button color="red" size="xs" onClick={() => removeFile(index)}>
                  {l.btnDelete}
                </Button>
              </Flex>
            </Card>
          ))}
        </Stack>
      )}
    </Stack>
  );
};
