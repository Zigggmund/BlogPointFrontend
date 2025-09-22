import { PostService } from '@api';
import { IMedia } from '@app-types';
import { useMutation } from '@tanstack/react-query';

interface EditPostParams {
  postId: number;
  previewImage: IMedia;
  title: string;
  content: string;
  postImages: number[];
  tags: number[];
  postFiles: number[];
}

export function usePostEdit() {
  const controller = useMutation({
    mutationFn: async (modifiedPost: EditPostParams) => {
      return await PostService.editPost(
        modifiedPost.postId,
        modifiedPost.previewImage,
        modifiedPost.title,
        modifiedPost.content,
        modifiedPost.tags,
        modifiedPost.postImages,
        modifiedPost.postFiles,
      );
    },
    onError: error => {
      console.error('Ошибка при создании поста:', error);
      alert('Не удалось создать пост');
    },
  });
  return controller;
}
