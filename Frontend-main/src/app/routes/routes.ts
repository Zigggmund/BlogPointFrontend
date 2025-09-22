import { ChannelItemPage } from '@modules/channel';
import { EditChannel } from '@modules/channel/components/EditChannel/EditChannel.tsx';
import { CreatePostForm, PostItemPage } from '@modules/posts';
import {
  CreateChannel,
  EditPost,
  ForTest,
  ForTest2,
  Login,
  MainPage,
  PopularChannels,
  Profile,
  Recommendations,
  Register,
  SubscribeChannels,
  UserChannels,
} from '@pages';

export const privateRoutes = [
  { path: '/profile', component: Profile, exact: true },
  { path: '/user-channels', component: UserChannels, exact: true },
  { path: '/recommendations', component: Recommendations, exact: true },
  { path: '/create-channel', component: CreateChannel, exact: true },
  { path: '/channel/:id/create-post', component: CreatePostForm, exact: true },
  { path: '/subscribe-channels', component: SubscribeChannels, exact: true },
  { path: '/channel/:id/edit', component: EditChannel, exact: true },
  {
    path: '/channel/:channelId/post/:postId/editPost',
    component: EditPost,
    exact: true,
  },
];

export const publicRoutes = [
  { path: '/channel/:id', component: ChannelItemPage, exact: true },
  {
    path: '/channel/:channelId/post/:postId',
    component: PostItemPage,
    exact: true,
  },
  { path: '/login', component: Login, exact: true },
  { path: '/register', component: Register, exact: true },
  { path: '/', component: MainPage, exact: true },
  { path: '/test', component: ForTest, exact: true },
  { path: '/test2', component: ForTest2, exact: true },
  { path: '/popular-channels', component: PopularChannels, exact: true },
];
