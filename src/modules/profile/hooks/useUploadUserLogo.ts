import { FileService } from '@api/Services/file.service.ts';
import { useMutation } from '@tanstack/react-query';

export function useUploadUserLogo() {
  const controller = useMutation({
    mutationFn: (file: File) => FileService.uploadUserLogo(file),
  });
  return controller;
}
