import { ChannelService } from '@api';
import { useMutation } from '@tanstack/react-query';

export function useSetSubscribe() {
  const controller = useMutation({
    mutationFn: (id: number) => ChannelService.subscribeChannel(id),
  });
  return controller;
}
