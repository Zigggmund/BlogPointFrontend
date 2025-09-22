import {
  IconAbacus,
  IconChartBarPopular,
  IconHome,
  IconTrendingUp,
  IconUser,
  IconUserHeart,
  IconUsersGroup,
} from '@tabler/icons-react';

export const pages = [
  { labelKey: 'homePage', icon: IconHome, href: '../' },
  { labelKey: 'profile', icon: IconUser, href: '../Profile' },
  {
    labelKey: 'subscriptions',
    icon: IconUserHeart,
    href: '../subscribe-channels',
  },
  { labelKey: 'myChannels', icon: IconUsersGroup, href: '../user-channels' },
  {
    labelKey: 'recommendations',
    icon: IconChartBarPopular,
    href: '../recommendations',
  },
  {
    labelKey: 'popularChannels',
    icon: IconTrendingUp,
    href: '../popular-channels',
  },
  {
    name: 'Тестовая',
    icon: IconAbacus,
    href: '../Test',
    labelKey: 'forTest',
  },
  {
    name: 'Тестовая2',
    icon: IconAbacus,
    href: '../Test2',
    labelKey: 'forTest2',
  },
];
