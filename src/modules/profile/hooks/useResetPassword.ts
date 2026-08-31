import { UserService } from '@api';
import { useMutation } from '@tanstack/react-query';

interface ResetPasswordProps {
  code: string;
  password: string;
}

export function useResetPassword() {
  const controller = useMutation({
    mutationFn: ({ code, password }: ResetPasswordProps) =>
      UserService.resetPassword(code, password),
  });
  return controller;
}
