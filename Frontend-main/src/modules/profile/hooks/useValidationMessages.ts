import { ValidationType } from '@app-types';
import { ValidationTypeOneParameter } from '@app-types/ValidationTypeOneParameter.ts';
import { useLanguage } from '@hooks/useLanguage.ts';
import { IAuthData } from '@modules/profile/types/IAuthData.ts';
import { IRegistrationData } from '@modules/profile/types/IRegistrationData.ts';

export const useValidationMessages = () => {
  const { l } = useLanguage();

  const validationLogin: ValidationTypeOneParameter<
    IAuthData['login']
  > = value => (value.length < 6 ? l.validationLogin : null);

  const validationEmail: ValidationTypeOneParameter<
    IAuthData['email']
  > = value => (/^\S+@\S+$/.test(value) ? null : l.validationEmail);

  const validationPassword: ValidationTypeOneParameter<
    IAuthData['password']
  > = value => (value.length < 8 ? l.validationPassword : null);

  const validationRepeatPassword: ValidationType<
    IAuthData['password'],
    Pick<IRegistrationData, 'password'>
  > = (value, values) =>
    value !== values.password ? l.validationConfirmPassword : null;

  return {
    validationLogin,
    validationEmail,
    validationPassword,
    validationRepeatPassword,
  };
};
