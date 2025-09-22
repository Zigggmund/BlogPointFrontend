import { PostService } from '@api';
import { useQuery } from '@tanstack/react-query';

export function useGetRecommendedPosts(page: number) {
  const controller = useQuery({
    queryKey: ['recommended_posts'],
    queryFn: () => PostService.getRecommendedPosts(page),
  });
  return controller.data?.data.data ?? [];
}
