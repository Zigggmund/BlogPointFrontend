import { FileService } from '@api/Services/file.service.ts';
import { useMutation } from '@tanstack/react-query';

interface UploadFileProps {
  file: File | null;
  type: string | null;
}

export function useUploadFile() {
  const controller = useMutation({
    mutationFn: async ({ file, type }: UploadFileProps) => {
      return await FileService.upload(file, type);
    },
    onSuccess: data => {
      return data.data.data;
    },
    onError: error => {
      console.error(error);
    },
  });
  return controller;
}
