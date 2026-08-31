import { UserService } from '@api';
import { useMutation } from '@tanstack/react-query';

export const useProfileChangeLanguage = () => {
  return useMutation({
    mutationKey: ['user'],
    mutationFn: (language: string) => UserService.changeLanguage(language),
  });
};
