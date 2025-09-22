import { FC } from 'react';
import { IUser } from '@app-types';
import { useLanguage } from '@hooks/useLanguage.ts';
import { Flex, Group, Modal, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import {
  BlueButton,
  GreyButton,
  Heading2,
  Heading3,
  Heading4,
  Label,
} from '@ui';

import { useProfileEditInfo } from '../../hooks/useProfileEditInfo';

interface IEditProfileInfoProps {
  user?: IUser;
}

export const EditProfileInfo: FC<IEditProfileInfoProps> = props => {
  const { l } = useLanguage();
  const [opened, { open, close }] = useDisclosure(false);
  const profileEditInfo = useProfileEditInfo();
  const form = useForm({
    initialValues: {
      login: props?.user?.login ?? '',
      email: props?.user?.email ?? '',
    },

    validate: {
      login: value => (value.length < 5 ? l.validationLogin : null),
      email: value => (/^\S+@\S+$/.test(value) ? null : l.validationEmail),
    },
  });

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={<Heading3>{l.changingUserInformation}</Heading3>}
      >
        <form
          onSubmit={form.onSubmit(values => {
            profileEditInfo.mutate(values);
            console.log(values);
          })}
        >
          <Flex gap={'10px'} direction="column">
            <TextInput
              label={<Heading4>{l.login}</Heading4>}
              key={form.key('login')}
              {...form.getInputProps('login')}
            />
            <TextInput
              label={<Heading4>{l.email}</Heading4>}
              key={form.key('email')}
              {...form.getInputProps('email')}
            />
          </Flex>
          <Group mt="lg" justify="flex-end">
            <GreyButton
              w={{base: '120px', xs: 'auto'}}
              onClick={() => {
                form.reset();
                close();
              }}
            >
              {l.btnCancel}
            </GreyButton>
            <BlueButton type="submit">{l.btnSave}</BlueButton>
          </Group>
        </form>
      </Modal>

      <Flex direction={'column'} gap={'15px'} mb={'20px'}>
        <Heading2>{l.changingUserInformation}</Heading2>
        <Label title={l.login} text={props.user ? props.user?.login : ''} />
        <Label title={l.email} text={props.user ? props.user?.email : ''} />
        <Flex
          direction={{ base: 'column', c620: 'row', md: 'column', lg: 'row' }}
        >
          <BlueButton w="160px" onClick={open}>
            {l.btnChange}
          </BlueButton>
        </Flex>
      </Flex>
    </>
  );
};
