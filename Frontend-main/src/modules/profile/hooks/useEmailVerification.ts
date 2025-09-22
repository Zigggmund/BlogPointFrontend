import { UserService } from '@api';
import { useMutation } from '@tanstack/react-query';

export const useEmailVerification = () => {
  const controller = useMutation({
    mutationFn: () => UserService.requestEmailVerification(),
  });
  return controller;
};
