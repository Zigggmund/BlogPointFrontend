import { FC, useContext, useState } from 'react';
import { useLanguage } from '@hooks/useLanguage.ts';
import { Flex, Group, Modal, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useProfileDelete } from '@modules/profile/hooks/useProfileDelete.ts';
import { useRequestDeletionVerification } from '@modules/profile/hooks/useRequestDeletionVerification.ts';
import { BlueButton, GreyButton, Heading3, Heading4, RedButton } from '@ui';
import { useNavigate } from 'react-router-dom';
import { ProfileContext } from '../../../../app/context';

export const ConfirmDeleteProfile: FC = () => {
  const { l } = useLanguage();
  const [opened, { open, close }] = useDisclosure(false);
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const deleteProfileCode = useRequestDeletionVerification();
  const deleteProfile = useProfileDelete();
  const navigate = useNavigate();
  const profileContext = useContext(ProfileContext);

  const handleRequestCode = () => {
    deleteProfileCode.mutate(undefined, {
      onSuccess: data => {
        setMessage(data.data.message || l.codeSent);
        setErrorMessage('');
      },
      onError: (error: Error) => {
        setErrorMessage(error.message || l.errorCodeInternal);
      },
    });
  };

  const handleVerifyCode = () => {
    deleteProfile.mutate(code, {
      onSuccess: data => {
        setMessage(data.data.message || l.emailConfirmed);
        setErrorMessage('');
        profileContext?.setUser(null);
        navigate('/');
        close();
      },
      onError: (error: Error) => {
        setErrorMessage(error.message || l.errorIncorrectCode);
      },
    });
  };

  return (
    <>
      {/* Модалка подтверждения */}
      <Modal
        opened={opened}
        onClose={close}
        title={<Heading3>Удаление профиля</Heading3>}
      >
        <Flex direction="column" gap="10px">
          {message && <p style={{ color: 'green' }}>{message}</p>}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

          <TextInput
            placeholder="Введите код из email"
            label={<Heading4>Код подтверждения</Heading4>}
            value={code}
            onChange={e => setCode(e.currentTarget.value)}
          />

          <Group justify="flex-end">
            <GreyButton onClick={close}>Отменить</GreyButton>
            <BlueButton onClick={handleVerifyCode}>Подтвердить</BlueButton>
          </Group>
        </Flex>
      </Modal>

      <Flex direction={'column'} gap={'15px'} align={'start'}>
        <Heading4 mt={'-15px'} mb={'-5px'}>
          Удаление аккаунта
        </Heading4>
        <RedButton
          style={{ width: 'auto' }}
          onClick={() => {
            handleRequestCode();
            open();
          }}
        >
          Удалить аккаунт
        </RedButton>
      </Flex>
    </>
  );
};
