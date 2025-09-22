import { UserService } from '@api';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useProfileLogout = () => {
  const navigate = useNavigate();
  const controller = useMutation({
    mutationFn: () => UserService.logoutUser(),
    onSuccess: () => navigate('/'),
  });
  return controller;
};
