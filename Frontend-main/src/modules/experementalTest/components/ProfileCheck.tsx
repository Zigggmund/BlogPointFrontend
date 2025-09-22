import { UserService } from '@api';
import { Text } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';

const useProfile = () => {
  const controller = useQuery({
    queryKey: ['user'],
    queryFn: () => {
      UserService.infoUser();
    },
  });
  return controller;
};

export const ProfileCheck = () => {
  const profile = useProfile();

  return (
    <>
      <Text>{profile.data ?? 'нету'}</Text>
    </>
  );
};
