import { UserService } from '@api';
import { useMutation } from '@tanstack/react-query';
import { IMedia } from '@app-types';

export const useProfileEditImg = () => {
  const controller = useMutation({
    mutationKey: ['user'],
    mutationFn: (img: IMedia) => UserService.editProfileImg(img),
  });

  return controller;
};
