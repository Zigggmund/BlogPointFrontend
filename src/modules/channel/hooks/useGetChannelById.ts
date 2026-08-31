import { ChannelService } from '@api';
import { useQuery } from '@tanstack/react-query';

export function useGetChannelById(id: number) {
  const controller = useQuery({
    queryKey: ['channel'],
    queryFn: () => ChannelService.getChannel(id),
  });
  return controller;
}
