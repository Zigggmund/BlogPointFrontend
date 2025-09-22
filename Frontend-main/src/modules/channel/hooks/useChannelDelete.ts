import { useNavigate } from 'react-router-dom';
import { ChannelService } from '@api';
import { useMutation } from '@tanstack/react-query';

export function useChannelDelete() {
  const navigate = useNavigate();
  const controller = useMutation({
    mutationFn: async (id: number) => {
      return await ChannelService.deleteChannel(id);
    },
    onSuccess: () => {
      setTimeout(() => navigate('/user-channels'), 100);
;
    },
  });
  return controller;
}
