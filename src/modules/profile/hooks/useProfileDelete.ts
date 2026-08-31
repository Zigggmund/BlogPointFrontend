import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserService } from '@api';
import { useMutation } from '@tanstack/react-query';

import { ProfileContext } from '../../../app/context';

export const useProfileDelete = () => {
  const profile = useContext(ProfileContext);
  const navigate = useNavigate();
  const controller = useMutation({
    mutationKey: ['user'],
    mutationFn: (code: string) => UserService.deleteUser(code),
    onSuccess: () => {
      localStorage.clear();
      profile?.setUser(null);
      navigate('/');
    },
    onError: error => {
      alert(error.message);
      console.error(error);
    },
  });

  return controller;
};
