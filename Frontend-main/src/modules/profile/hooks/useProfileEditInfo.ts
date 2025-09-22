import { UserService } from '@api';
import { useMutation } from '@tanstack/react-query';

interface ProfileEditInfo {
  email: string;
  login: string;
}

export const useProfileEditInfo = () => {
  const controller = useMutation({
    mutationKey: ['user'],
    mutationFn: ({ email, login }: ProfileEditInfo) =>
      UserService.editProfileInfo(email, login),
  });

  return controller;
};
