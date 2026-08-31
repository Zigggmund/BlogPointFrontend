import { UserService } from '@api';
import { useMutation } from '@tanstack/react-query';

export function useRequestPasswordReset() {
  const controller = useMutation({
    mutationFn: (email: string) => UserService.requestPasswordReset(email),
  });
  return controller;
}
