import { ChannelService } from '@api';
import { useMutation } from '@tanstack/react-query';

export function useClearSubscribe() {
  const controller = useMutation({
    mutationFn: (id: number) => ChannelService.unSubscribeChannel(id),
  });
  return controller;
}
