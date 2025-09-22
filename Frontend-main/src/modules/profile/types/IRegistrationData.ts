import { IAuthData } from '@modules/profile/types/IAuthData.ts';

export interface IRegistrationData extends IAuthData {
  repeatPassword: string;
}
