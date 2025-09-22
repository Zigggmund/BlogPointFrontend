import { UserService } from '@api';
import { useMutation } from '@tanstack/react-query';

export const useVerifyEmail = () => {
  const controller = useMutation({
    mutationFn: (code: string) => UserService.verifyEmail({ code }),
  });
  return controller;
};
