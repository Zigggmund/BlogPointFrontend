import { UserService } from '@api';
import { useMutation } from '@tanstack/react-query';

export function useRequestDeletionVerification() {
  const controller = useMutation({
    mutationFn: () => UserService.requestDeletionVerification(),
  });
  return controller;
}
