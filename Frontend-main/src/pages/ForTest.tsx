import { useState } from 'react';
import { useUploadFile } from '@hooks/useUploadFile';
import { Button, FileInput } from '@mantine/core';

export const ForTest = () => {
  const [testFile, setTestFile] = useState<File | null>(null);
  const fileLoader = useUploadFile();
  return (
    <>
      <h2>Страница для тестов</h2>
      <FileInput onChange={setTestFile} value={testFile} />
      <Button
        onClick={() => {
          console.log(testFile);
          fileLoader.mutate({ file: testFile, type: null });
        }}
      >
        Отправить
      </Button>
    </>
  );
};
