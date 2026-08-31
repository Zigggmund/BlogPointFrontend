import { api } from '@api/instance.ts';
import { IMedia, IUser } from '@app-types';
import { translations } from '@constants';
import { AxiosResponse } from 'axios';

export class UserService {
  static async loginUser(
    login: string,
    password: string,
  ): Promise<AxiosResponse<{ message: string }>> {
    return api.post('/login', { login, password });
  }

  static async registerUser(
    email: string,
    login: string,
    password: string,
    language: string,
  ): Promise<AxiosResponse<{ message: string }>> {
    return api.post('/register', { login, email, password, language });
  }

  static async deleteUser(data: {
    code: string;
  }): Promise<AxiosResponse<{ message: string }>> {
    return api.delete('/deleteUser', { data });
  }

  static async infoUser(): Promise<
    AxiosResponse<{ data: IUser } & { message: string }>
  > {
    return api.get('/user');
  }

  static async editProfileInfo(
    email: string,
    login: string,
  ): Promise<AxiosResponse<{ data: IUser } & { message: string }>> {
    return api.patch('/editProfile', {
      login,
      email,
    });
  }

  static async changeLanguage(
    language: string,
  ): Promise<AxiosResponse<{ message: string }>> {
    if (!(language in translations)) {
      throw new Error('Invalid language');
    }
    return api.patch('/languageUpdate', { language });
  }

  static async editProfileImg(
    img: IMedia | null,
  ): Promise<AxiosResponse<{ user: IUser }>> {
    return api.post('/editProfile', { img });
  }

  static async editProfilePassword(
    oldPassword: string,
    newPassword: string,
  ): Promise<AxiosResponse<{ message: string }>> {
    return api.post('/changePassword', { oldPassword, newPassword });
  }

  static async requestEmailVerification(): Promise<
    AxiosResponse<{ message: string }>
  > {
    return api.post('/requestEmailVerification');
  }

  static async verifyEmail(data: { code: string }) {
    return api.post('/verifyEmail', data);
  }

  static async requestPasswordReset(
    email: string,
  ): Promise<AxiosResponse<{ message: string }>> {
    return api.post('/requestPasswordReset', { email });
  }

  static async resetPassword(
    code: string,
    password: string,
  ): Promise<AxiosResponse<{ message: string }>> {
    return api.post('/resetPassword', { code, password });
  }

  static async requestDeletionVerification(): Promise<
    AxiosResponse<{ message: string }>
  > {
    return api.post('/requestDeletionVerification');
  }

  static async logoutUser(): Promise<AxiosResponse<{ message: string }>> {
    return api.post('/logout');
  }
}
