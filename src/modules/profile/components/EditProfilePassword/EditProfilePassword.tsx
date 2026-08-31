import { FC } from 'react';
import { IUser } from '@app-types';
import { Flex, Group, Modal, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { BlueButton, GreyButton, Heading3, Heading4, Label } from '@ui';

import { useProfileEditPsw } from '@modules/profile/hooks/useProfileEditPsw.ts';
import { useLanguage } from '@hooks/useLanguage.ts';

interface IEditProfilePasswordProps {
  user?: IUser;
}

export const EditProfilePassword: FC<IEditProfilePasswordProps> = () => {
  const { l } = useLanguage();
  const [opened, { open, close }] = useDisclosure(false);
  const changePassword = useProfileEditPsw();
  const form = useForm({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      repeatPassword: '',
    },

    validate: {
      oldPassword: (value: string) =>
        value.length < 8 ? l.validationPassword : null,
      newPassword: (value: string) =>
        value.length < 8 ? l.validationPassword : null,
      repeatPassword: (value, values) =>
        value !== values.newPassword ? l.validationConfirmPassword : null,
    },
  });
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={<Heading3>{l.changingUserPassword}</Heading3>}
      >
        <form
          onSubmit={form.onSubmit(values => {
            changePassword.mutate(values);
          })}
        >
          <Flex gap={'10px'} direction="column">
            <TextInput
              label={<Heading4>{l.oldPassword}</Heading4>}
              key={form.key('oldPassword')}
              {...form.getInputProps('oldPassword')}
            />
            <TextInput
              label={<Heading4>{l.newPassword}</Heading4>}
              key={form.key('newPassword')}
              {...form.getInputProps('newPassword')}
            />

            <TextInput
              label={<Heading4>{l.confirmPassword}</Heading4>}
              key={form.key('repeatPassword')}
              {...form.getInputProps('repeatPassword')}
            />
          </Flex>
          <Group mt="lg" justify="flex-end">
            <GreyButton
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

      <Flex direction={'column'} gap={'15px'} align={'start'}>
        <Label title={l.password} text="***********" />
        <BlueButton onClick={open}>{l.btnChange}</BlueButton>
      </Flex>
    </>
  );
};
