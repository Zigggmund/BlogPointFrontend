import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { skyBlueColor } from '@constants';
import { useLanguage } from '@hooks/useLanguage.ts';
import { Flex, Group, PasswordInput, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useProfileLogin } from '@modules/profile/hooks/useProfileLogin.ts';
import { useValidationMessages } from '@modules/profile/hooks/useValidationMessages.ts';
import { BlueButton, FormBox, Heading1, Heading4 } from '@ui';

import { CookieContext } from '../../../../app/context';

export const LoginForm = () => {
  const { validationLogin, validationPassword } = useValidationMessages();
  const { l } = useLanguage();
  const profileLogin = useProfileLogin();
  const { consent, forceShowBanner } = useContext(CookieContext)!;
  // const [showResetPassword, setShowResetPassword] = useState(false);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { login: '', password: '' },
    validate: {
      login: validationLogin,
      password: validationPassword,
    },
  });

  // useEffect(() => {
  //   if (profileLogin.error) {
  //     setShowResetPassword(true);
  //   }
  // }, [profileLogin.error]);

  return (
    <FormBox>
      <Heading1>{l.userAuthorization}</Heading1>
      <Group justify="center" grow>
        <form
          onSubmit={form.onSubmit(values => {
            if (consent !== 'accepted') {
              alert('Вы должны принять cookies, чтобы войти.');
              forceShowBanner();
              return;
            }
            profileLogin.mutate(values);
          })}
        >
          <TextInput
            size="md"
            mt="sm"
            radius="lg"
            label={<Heading4 mb="5px">{l.login}</Heading4>}
            key={form.key('login')}
            {...form.getInputProps('login')}
          />
          <PasswordInput
            size="md"
            mt="sm"
            radius="lg"
            label={<Heading4 mb="5px">{l.password}</Heading4>}
            key={form.key('password')}
            {...form.getInputProps('password')}
          />
          <BlueButton type="submit" mt="sm" bg={skyBlueColor}>
            {l.btnConfirm}
          </BlueButton>
          {/*{showResetPassword && (*/}
          {/*  <Flex mt="sm" direction="column">*/}
          {/*    <Heading4 c="red">Неудачная попытка входа</Heading4>*/}
          {/*    <Link to="" style={{ color: 'black' }} onClick={}>*/}
          {/*      <Heading4>*/}
          {/*        Если забыли пароль нажмите чтобы восстановить*/}
          {/*      </Heading4>*/}
          {/*    </Link>*/}
          {/*  </Flex>*/}
          {/*)}*/}
          <Flex display={{ base: 'block', c620: 'none' }}>
            <Text>{l.notRegisteredYet}</Text>
            <Link to={'/register'}>{l.createAccount}</Link>
          </Flex>
        </form>
      </Group>
    </FormBox>
  );
};
