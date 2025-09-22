import { PostService } from '@api';
import { useQuery } from '@tanstack/react-query';

export function useGetPostById(postId: number) {
  const controller = useQuery({
    queryKey: ['post', postId],
    queryFn: () => PostService.getPostById(postId),
  });
  return controller.data?.data.data ?? null;
}
