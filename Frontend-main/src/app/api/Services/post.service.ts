import { api } from '@api/instance.ts';
import { IMedia, IPost } from '@app-types';
import { AxiosResponse } from 'axios';

export class PostService {
  static async createPost(
    channelId: number,
    content: string,
    title: string,
    previewImageId: number,
    postImages: number[],
    postFiles: number[],
    tags: number[],
  ): Promise<AxiosResponse<{ data: IPost } & { massage: string }>> {
    return api.post('/createPost', {
      channelId,
      content,
      title,
      previewImageId,
      postImages,
      postFiles,
      tags,
    });
  }

  static async editPost(
    postId: number,
    previewImage: IMedia,
    title: string,
    content: string,
    postImages: number[],
    tags: number[],
    postFiles: number[],
  ): Promise<AxiosResponse<{ data: IPost } & { message: string }>> {
    return api.patch('/editPost', {
      postId,
      previewImage,
      title,
      content,
      postImages,
      tags,
      postFiles,
    });
  }

  static async deletePost(
    id: number,
  ): Promise<AxiosResponse<{ message: string }>> {
    return api.delete(`/deletePost/${id}`);
  }

  static async getPosts(
    channelId: number,
    page: number,
  ): Promise<AxiosResponse<{ data: IPost[] } & { message: string }>> {
    return api.get(`/getPosts/${channelId}?page=${page}`);
  }

  static async getPostById(
    postId: number,
  ): Promise<AxiosResponse<{ data: IPost } & { message: string }>> {
    return api.get(`/getPost/${postId}`);
  }

  static async getRecommendedPosts(
    page: number,
  ): Promise<AxiosResponse<{ data: IPost[] } & { messege: string }>> {
    return api.get(`/getRecommendedPosts`, { data: page });
  }

  static async setReaction(
    postId: number,
    reaction: string,
  ): Promise<AxiosResponse<{ message: string }>> {
    return api.post(`/setReaction/`, { postId, reaction });
  }
}
