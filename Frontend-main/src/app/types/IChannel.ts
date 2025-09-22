import { ICategory } from '@app-types/ICategory.ts';
import { IMedia } from '@app-types/IMedia.ts';

export interface IChannel {
  id: number;
  name: string;
  category: ICategory;
  description: string;
  ownerId: number;
  subsCount: number;
  logo: IMedia;
}
