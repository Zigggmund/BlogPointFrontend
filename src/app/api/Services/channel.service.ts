import { api } from '@api/instance.ts';
import { IChannel } from '@app-types';
import { AxiosResponse } from 'axios';

export class ChannelService {
  static async createChannel(
    name: string,
    categoryId: number,
    description: string,
  ): Promise<AxiosResponse<{ data: IChannel } & { message: string }>> {
    return api.post('/createChannel', {
      name,
      categoryId,
      description,
    });
  }

  static async getChannel(
    id: number,
  ): Promise<AxiosResponse<{ data: IChannel } & { message: string }>> {
    return api.get(`/getChannel/${id}`);
  }

  static async getUserChannels(): Promise<
    AxiosResponse<{ data: IChannel[] } & { message: string }>
  > {
    return api.get('/getUserChannels');
  }

  static async getSubscription(): Promise<
    AxiosResponse<{ data: IChannel[] } & { message: string }>
  > {
    return api.get('/getUserSubscriptions');
  }

  static async getPopularChannels(): Promise<
    AxiosResponse<{ data: IChannel[] } & { message: string }>
  > {
    return api.get('/getPopularChannels');
  }

  static async subscribeChannel(
    id: number,
  ): Promise<AxiosResponse<{ message: string }>> {
    return api.post(`/subscribeChannel/${id}`);
  }

  static async unSubscribeChannel(
    id: number,
  ): Promise<AxiosResponse<{ message: string }>> {
    return api.delete(`/unsubscribeChannel/${id}`);
  }

  static async editChannel(
    channelId: number,
    categoryId: number,
    name: string,
    description: string,
  ): Promise<AxiosResponse<{ data: IChannel } & { message: string }>> {
    return api.patch('/editChannel', {
      channelId,
      name,
      categoryId,
      description,
    });
  }

  static async deleteChannel(
    id: number,
  ): Promise<AxiosResponse<{ message: string }>> {
    return api.delete(`/deleteChannel/${id}`);
  }
}
