import { IChannel, IMedia, ITag } from '@app-types';

export interface IPost {
  id: number;
  channel: IChannel;
  previewImage: IMedia;
  title: string;
  content: string;
  postImages: IMedia[];
  tags: ITag[];
  postFiles: IMedia[];
  createdAt: string;
  likesCount: number;
  dislikesCount: number;
  viewsCount: number;
}
