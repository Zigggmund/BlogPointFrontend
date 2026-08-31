import { useNavigate } from 'react-router-dom';
import { ChannelService } from '@api';
import { useLanguage } from '@hooks/useLanguage.ts';
import { useMutation } from '@tanstack/react-query';

interface CreateChannelParams {
  name: string;
  description: string;
  categoryId: number;
}

export function useChannelCreate() {
  const navigate = useNavigate();
  const { l } = useLanguage();
  const controller = useMutation({
    mutationFn: async (newChannel: CreateChannelParams) => {
      return await ChannelService.createChannel(
        newChannel.name,
        newChannel.categoryId,
        newChannel.description,
      );
    },
    onSuccess: data => {
      navigate(`/channel/${data.data.data.id}`);
    },
    onError: error => {
      console.error('Ошибка при создании канала', error);
      alert(l.errorChannelCreation);
    },
  });
  return controller;
}
