import { PostService } from '@api';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@hooks/useLanguage.ts';

export function usePostDelete(channelId: number) {
  const { l } = useLanguage();
  const navigate = useNavigate();
  const controller = useMutation({
    mutationFn: async (postId: number) => {
      return await PostService.deletePost(postId);
    },
    onSuccess: () => {
      navigate(`/channel/${channelId}`);
      console.log('Успешное удаление поста');
    },
    onError: error => {
      console.error('Ошибка при удалении поста:', error);
      alert(l.errorDeletingPost);
    },
  });
  return controller;
}
