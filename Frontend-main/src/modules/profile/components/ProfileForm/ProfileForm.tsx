import { FC, ReactNode } from 'react';
import { IUser } from '@app-types';
import { Flex } from '@mantine/core';
import { FormBox, Heading1 } from '@ui';
import { useLanguage } from '@hooks/useLanguage.ts';

interface IProfileFormProps {
  user?: IUser;
  children?: ReactNode;
}

export const ProfileForm: FC<IProfileFormProps> = props => {
  const { l } = useLanguage();

  return (
    <FormBox>
      <Heading1 fz={{ base: '30px', xss: '48px' }} mb="20px">
        {l.userProfile} {props.user?.login}
      </Heading1>
      <Flex w="auto" ml={20} mr={20} direction="column">
        {props.children}
      </Flex>
    </FormBox>
  );
};
