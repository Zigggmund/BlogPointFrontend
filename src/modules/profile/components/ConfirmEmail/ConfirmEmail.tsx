import { FC, useState } from 'react';
import { useLanguage } from '@hooks/useLanguage.ts';
import { Flex, Group, Modal, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEmailVerification } from '@modules/profile/hooks/useEmailVerification.ts';
import { useVerifyEmail } from '@modules/profile/hooks/useVerifyEmail.ts';
import { BlueButton, GreyButton, Heading3, Heading4 } from '@ui';

export const ConfirmEmail: FC = () => {
  const { l } = useLanguage();
  const [opened, { open, close }] = useDisclosure(false);
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);

  const confirmEmail = useEmailVerification();
  const verifyEmail = useVerifyEmail();

  const handleRequestCode = () => {
    confirmEmail.mutate(undefined, {
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
    verifyEmail.mutate(code, {
      onSuccess: data => {
        setMessage(data.data.message || l.emailConfirmed);
        setEmailVerified(true);
        setErrorMessage('');
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
        title={<Heading3>{l.emailVerification}</Heading3>}
      >
        <Flex direction="column" gap="10px">
          {message && <p style={{ color: 'green' }}>{message}</p>}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

          <TextInput
            placeholder={l.enterTheCodeFromTheEmail}
            label={<Heading4>{l.confirmationCode}</Heading4>}
            value={code}
            onChange={e => setCode(e.currentTarget.value)}
          />

          <Group justify="flex-end">
            <GreyButton onClick={close}>{l.btnCancel}</GreyButton>
            <BlueButton onClick={handleVerifyCode}>{l.btnConfirm}</BlueButton>
          </Group>
        </Flex>
      </Modal>

      {!emailVerified && (
        <Flex direction={'column'} gap={'15px'} align={'start'}>
          <Heading4 mt={'-15px'} mb={'-5px'}>
            {l.emailVerification}
          </Heading4>
          <BlueButton
            style={{ width: 'auto' }}
            onClick={() => {
              handleRequestCode();
              open();
            }}
            disabled={emailVerified}
          >
            {l.btnVerifyEmail}
          </BlueButton>
        </Flex>
      )}
    </>
  );
};
