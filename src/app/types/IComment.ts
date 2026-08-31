export interface IComment {
  id: number;
  content: string;
  createdAt: string;
  isDeleted: boolean;
  parentId: number;
  postId: number;
  userId: number;
}
