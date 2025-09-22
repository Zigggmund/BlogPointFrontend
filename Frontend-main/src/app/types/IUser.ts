import { IMedia } from '@app-types/IMedia.ts';

export interface IUser {
  id: number;
  email: string;
  login: string;
  isVerified: boolean;
  language: string;
  userLogo: IMedia;
}
