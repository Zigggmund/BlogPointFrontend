import { IChannel } from '@app-types';

export const channelsExamples: IChannel[] = [
  {
    id: 1,
    ownerId: 1,
    name: 'Путешествия и путешествия и снова путешествия',
    category: { id: 9, name: 'Туризм и путешествия', color: '#ff911c' },
    description: 'Туры в Киргизию и Таджикистан!',
    subsCount: 11917021,
    imageLogo: '/src/app/assets/images/post/post_image_tall.jpg',
  },
  {
    id: 2,
    ownerId: 1,
    name: 'Технологии и гаджеты',
    category: { id: 15, name: 'IT и инновации', color: '#12A193' },
    description:
      'Последние новинки мира технологий, обзоры гаджетов, советы по использованию и сравнительные тесты – всё это вы найдете на нашем канале.',
    subsCount: 61879,
    imageLogo: '/src/app/assets/images/post/post_image_wide.jpg',
  },
];
