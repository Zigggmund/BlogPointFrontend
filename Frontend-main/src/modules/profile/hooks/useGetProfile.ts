import { UserService } from '@api';
import { useQuery } from '@tanstack/react-query';

export const useGetProfile = () => {
  const controller = useQuery({
    queryKey: ['user'],
    queryFn: () => UserService.infoUser(),
  });
  return controller;
};
