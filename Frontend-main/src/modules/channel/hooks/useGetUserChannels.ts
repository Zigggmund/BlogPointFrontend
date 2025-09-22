import { ChannelService } from '@api';
import { useQuery } from '@tanstack/react-query';

export function useGetUserChannels() {
  const controller = useQuery({
    queryKey: ['userChannels'],
    queryFn: () => ChannelService.getUserChannels(),
  });
  return controller.data?.data.data ?? [];
}
