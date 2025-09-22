import { UserService } from '@api';
import { useMutation } from '@tanstack/react-query';

interface ProfileEditPsw {
  oldPassword: string;
  newPassword: string;
}

export const useProfileEditPsw = () => {
  const controller = useMutation({
    mutationKey: ['user'],
    mutationFn: ({ oldPassword, newPassword }: ProfileEditPsw) =>
      UserService.editProfilePassword(oldPassword, newPassword),
  });

  return controller;
};
