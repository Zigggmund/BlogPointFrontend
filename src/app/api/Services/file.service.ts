import { api } from '@api/instance.ts';
import { IMedia } from '@app-types';
import { AxiosResponse } from 'axios';

export class FileService {
  static async upload(
    file: File | null,
    type: string | null,
  ): Promise<AxiosResponse<{ data: IMedia } & { message: string }>> {
    if (!file) throw new Error('Файл не выбран');

    const formData = new FormData();
    formData.append('file', file); // сам файл
    if (type) {
      formData.append('type', type); // обычное текстовое поле
    }

    const response = await api.post('/uploadFile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response;
  }

  static async deleteFile(id: number) {
    return api.delete(`/deleteFile`, { data: { id } });
  }

  static async uploadUserLogo(
    file: File,
  ): Promise<AxiosResponse<{ data: IMedia } & { message: string }>> {
    return api.post('/uploadUserLogo', file);
  }

  static async uploadChannelLogo(
    file: File | null,
    channelId: number,
  ): Promise<AxiosResponse<{ data: IMedia } & { message: string }>> {
    if (!file) throw new Error('Файл не выбран');

    const formData = new FormData();
    formData.append('file', file); // сам файл

    const response = await api.post(
      `/uploadChannelLogo/${channelId}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    return response;
  }
}
