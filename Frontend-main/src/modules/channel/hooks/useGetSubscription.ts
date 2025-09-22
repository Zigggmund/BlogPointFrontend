import { ChannelService } from '@api';
import { useQuery } from '@tanstack/react-query';

export function useGetSubscription() {
  const controller = useQuery({
    queryKey: ['subscribe-channels'],
    queryFn: () => ChannelService.getSubscription(),
  });
  return controller.data?.data.data ?? [];
}
