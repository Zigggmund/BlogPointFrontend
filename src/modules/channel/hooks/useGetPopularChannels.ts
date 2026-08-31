import { ChannelService } from '@api';
import { useQuery } from '@tanstack/react-query';

export function useGetPopularChannels() {
  const controller = useQuery({
    queryKey: ['popular-channels'],
    queryFn: () => ChannelService.getPopularChannels(),
  });
  return controller.data?.data.data ?? [];
}
