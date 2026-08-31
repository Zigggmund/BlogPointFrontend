import { FC, useState } from 'react';
import { useLanguage } from '@hooks/useLanguage.ts';
import { Flex, Group, rem, Text } from '@mantine/core';
import {
  Dropzone as MantineDropzone,
  DropzoneProps,
  FileRejection,
  FileWithPath,
  IMAGE_MIME_TYPE,
} from '@mantine/dropzone';
import { IconCheck, IconPhoto, IconX } from '@tabler/icons-react';
import { Heading3 } from '@ui/Heading/Heading3.tsx';

interface FormType {
  // чтобы не было ошибки типизации
  errors: Record<string, React.ReactNode | undefined>; // Поддержка типов useForm
}
interface FormDropzoneProps extends Omit<DropzoneProps, 'onDrop' | 'onReject'> {
  form: FormType;
  onDropFile: (file: File) => void;
  onRejectFile: () => void;
}

export const Dropzone: FC<FormDropzoneProps> = ({
  form,
  onDropFile,
  onRejectFile,
  ...props
}) => {
  const { l } = useLanguage();
  const [uploadStatus, setUploadStatus] = useState<
    'idle' | 'accept' | 'reject' | 'success'
  >('idle');

  const handleDrop = (files: FileWithPath[]) => {
    const [file] = files; // Берем первый файл из массива
    onDropFile(file); // Вызываем обработчик с первым файлом
    setUploadStatus('success');
    console.log('Изображение загружено', file);
  };

  const handleReject = (fileRejections: FileRejection[]) => {
    onRejectFile();
    setUploadStatus('reject');
    if (fileRejections.length > 0) {
      form.errors.image = l.errorImage;
    }
    console.log('Изображение отклонено', fileRejections);
  };

  return (
    <>
      <MantineDropzone
        onDrop={handleDrop}
        onReject={handleReject}
        maxSize={200 * 1024}
        accept={IMAGE_MIME_TYPE}
        bg="white"
        style={{
          borderRadius: '20px',
          // граница если изображение некорректно
          border: form.errors.image
            ? '1.5px solid var(--mantine-color-red-6)'
            : '',
        }}
        {...props}
      >
        <Group
          justify="center"
          gap="xl"
          mih={220}
          style={{ pointerEvents: 'none' }}
        >
          <Flex
            gap={'30px'}
            ml={'20px'}
            direction={{ base: 'column', xs: 'row' }}
          >
            <div>
              {uploadStatus === 'success' && (
                <IconCheck
                  style={{
                    width: rem(100),
                    height: rem(100),
                    color: 'var(--mantine-color-green-6)',
                  }}
                  stroke={1.5}
                />
              )}
              {uploadStatus === 'reject' && (
                <IconX
                  style={{
                    width: rem(100),
                    height: rem(100),
                    color: 'var(--mantine-color-red-6)',
                  }}
                  stroke={1.5}
                />
              )}
              {uploadStatus === 'idle' && (
                <IconPhoto
                  style={{
                    width: rem(100),
                    height: rem(100),
                    color: 'var(--mantine-color-dimmed)',
                  }}
                  stroke={1.5}
                />
              )}
            </div>
            <div>
              <Heading3 lh={1.2}>{l.dropzoneHeading}</Heading3>
              <Text size="sm" c="dimmed" inline mt={15}>
                {l.dropzoneLimits}
              </Text>
            </div>
          </Flex>
        </Group>
      </MantineDropzone>
    </>
  );
};
