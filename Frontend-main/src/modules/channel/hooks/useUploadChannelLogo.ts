import { FileService } from '@api/Services/file.service.ts';
import { useMutation } from '@tanstack/react-query';

interface UploadChannelLogoProps {
  fileImg: File | null;
  channelId: number;
}

export function useUploadChannelLogo() {
  const controller = useMutation({
    mutationFn: async ({ fileImg, channelId }: UploadChannelLogoProps) => {
      return await FileService.uploadChannelLogo(fileImg, channelId);
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
