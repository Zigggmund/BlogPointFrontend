import { languages } from '@constants';
import { Group, NativeSelect, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useProfileRegister } from '@modules/profile/hooks/useProfileRegister.ts';
import { useValidationMessages } from '@modules/profile/hooks/useValidationMessages.ts';
import { IRegistrationData } from '@modules/profile/types/IRegistrationData.ts';
import { BlueButton, FormBox, Heading1, Heading4 } from '@ui';
import { useLanguage } from '@hooks/useLanguage.ts';

export const RegisterForm = () => {
  const { validationLogin, validationPassword, validationRepeatPassword, validationEmail } = useValidationMessages();
  const { l } = useLanguage();

  const profileRegister = useProfileRegister();
  const fields = [
    { label: l.login, key: 'login' },
    { label: l.email, key: 'email' },
    { label: l.enterPassword, key: 'password' },
    { label: l.confirmPassword, key: 'repeatPassword' },
  ];

  const form = useForm<IRegistrationData>({
    mode: 'uncontrolled',
    initialValues: {
      login: '',
      email: '',
      password: '',
      repeatPassword: '',
      language: Object.keys(languages)[0],
    },
    validate: {
      login: validationLogin,
      email: validationEmail,
      password: validationPassword,
      repeatPassword: validationRepeatPassword,
    },
  });

  return (
    <FormBox>
      <Heading1>{l.userRegistration}</Heading1>
      <Group justify="center" grow>
        <form
          onSubmit={form.onSubmit(values => {
            profileRegister.mutate(values);
          })}
        >
          {fields.map(field => (
            <TextInput
              size="md"
              mt="sm"
              radius="lg"
              label={<Heading4 mb="5px">{field.label}</Heading4>}
              key={form.key(field.key)}
              {...form.getInputProps(field.key)}
            />
          ))}
          <NativeSelect
            size="md"
            mt="sm"
            mb="sm"
            radius="lg"
            label={<Heading4 mb={5}>{l.selectLanguage}</Heading4>}
            data={Object.entries(languages).map(([value, label]) => ({
              value, // 'en', 'ru', ...
              label, // 'English', 'Russian', ...
            }))}
            key={form.key('language')}
            {...form.getInputProps('language')}
          />
          <BlueButton type="submit" mt="sm">
            {l.btnConfirm}
          </BlueButton>
        </form>
      </Group>
    </FormBox>
  );
};
