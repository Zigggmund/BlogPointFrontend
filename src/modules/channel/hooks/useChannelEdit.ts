import { useNavigate } from 'react-router-dom';
import { ChannelService } from '@api';
import { useMutation } from '@tanstack/react-query';
import { useLanguage } from '@hooks/useLanguage.ts';

interface ChannelEditParams {
  channelId: number;
  name: string;
  categoryId: number;
  description: string;
}

export function useChannelEdit() {
  const { l } = useLanguage();
  const navigate = useNavigate();
  const controller = useMutation({
    mutationFn: async (modifiedChannel: ChannelEditParams) => {
      return await ChannelService.editChannel(
        modifiedChannel.channelId,
        modifiedChannel.categoryId,
        modifiedChannel.description,
        modifiedChannel.name,
      );
    },
    onSuccess: data => {
      navigate(`/channel/${data.data.data.id}`);
    },
    onError: error => {
      console.error('Ошибка при изменении:', error);
      alert(l.errorEditingChannel);
    },
  });
  return controller;
}
