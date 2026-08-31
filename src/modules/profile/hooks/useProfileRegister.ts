import { useNavigate } from 'react-router-dom';
import { UserService } from '@api';
import { useMutation } from '@tanstack/react-query';

export const useProfileRegister = () => {
  const navigate = useNavigate();
  const controller = useMutation({
    mutationKey: ['user'],
    mutationFn: ({
      login,
      email,
      password,
      language,
    }: {
      email: string;
      login: string;
      password: string;
      language: string;
    }) => UserService.registerUser(email, login, password, language),
    onSuccess: () => {
      navigate('/login');
    },
    onError: error => {
      console.log(error);
      navigate('/register');
    },
  });

  return controller;
};
