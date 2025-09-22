import { IPost } from '@app-types';

export const recommendationsExamples: IPost[] = [
  {
    id: 1,
    channelId: 1,
    channelName: 'Путешествия и путешествия и снова путешествия',
    channelIcon: 'https://cdn-icons-png.flaticon.com/512/10004/10004457.png',
    mediaType: ['image'],
    mediaURL: [
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
    ],
    title:
      'Отправьтесь в путешествие уже сейчас!',
    content:
      '<p>Отправьтесь с нами в незабываемые путешествия по разным уголкам мира! Мы покажем экзотические страны, уникальные места и невероятные истории из наших поездок.</p>',
    time: '15:00',
    likes: 45,
    dislikes: 1,
    views: 1352,
    tagList: [
      { id: 66, category_id: 9, name: 'Путешествия', color: '#ff911c' },
      { id: 69, category_id: 9, name: 'Туризм', color: '#ff911c' },
      { id: 68, category_id: 9, name: 'Путеводители', color: '#ff911c' },
      { id: 70, category_id: 9, name: 'ГорныеПоходы', color: '#ff911c' },
    ],
  },
  {
    id: 2,
    channelId: 2,
    channelName: 'CyberSport',
    channelIcon:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Kja5evgeXjMTd5psri8ooaL5wadbH1mixG8eULJsOvt-m5wnBgRav5kAmcnwKokixsQ&usqp=CAU',
    mediaType: ['video'],
    mediaURL: ['https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
    title: 'Вышла новая игра',
    content: 'Скачать бесплатно без смс и регистрации можно в канале',
    time: '00:07',
    likes: 89039,
    dislikes: 5014,
    views: 11890000,
    tagList: [
      { id: 44, category_id: 6, name: 'КомпьютерныеИгры', color: 'red' },
      { id: 51, category_id: 6, name: 'Киберспорт', color: 'red' },
      { id: 52, category_id: 6, name: 'Стриминг', color: 'red' },
      { id: 45, category_id: 6, name: 'СоревновательныеИгры', color: 'red' },
    ],
  },
  {
    id: 3,
    channelId: 3,
    channelName: 'Мир моды',
    channelIcon:
      'https://e7.pngegg.com/pngimages/403/1021/png-clipart-fashion-computer-icons-90s-style-hand-fashion-thumbnail.png',
    mediaType: ['asdasdasdasdads'],
    mediaURL: ['https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
    title: 'Узнайте, как чувствовать себя уверенно и стильно каждый день!',
    content:
      'Узнайте, как чувствовать себя уверенно и стильно каждый день! Узнайте, как чувствовать себя уверенно и стильно каждый день! Узнайте, как чувствовать себя уверенно и стильно каждый день! Узнайте, как чувствовать себя уверенно и стильно каждый день! Узнайте, как чувствовать себя уверенно и стильно каждый день!',
    time: '16:30',
    likes: 77,
    dislikes: 0,
    views: 597,
    tagList: [
      { id: 99, category_id: 13, name: 'Стиль', color: '#ad2828' },
      { id: 101, category_id: 13, name: 'ЖенскаяМода', color: '#ad2828' },
      { id: 102, category_id: 13, name: 'Тренды', color: '#ad2828' },
      { id: 103, category_id: 13, name: 'Аксессуары', color: '#ad2828' },
    ],
  },
  {
    id: 4,
    channelId: 4,
    channelName:
      'Научное сообщество Научное сообщество Научное сообщество Научное сообщество',
    channelIcon: 'https://cdn-icons-png.flaticon.com/512/5741/5741484.png',
    mediaType: ['image'],
    mediaURL: ['https://'],
    title: 'Ничего интересного',
    content: '---',
    time: '22:40',
    likes: 1687,
    dislikes: 1986,
    views: 98459,
    tagList: [
      {
        id: 7,
        category_id: 2,
        name: 'АкадемическоеОбразование',
        color: '#2196F3',
      },
      {
        id: 9,
        category_id: 2,
        name: 'ОбразовательныеРесурсы',
        color: '#2196F3',
      },
      { id: 10, category_id: 2, name: 'Обучение', color: '#2196F3' },
      { id: 11, category_id: 2, name: 'Самообразование', color: '#2196F3' },
    ],
  },
  {
    id: 5,
    channelId: 3,
    channelName: 'Мир моды',
    channelIcon:
      'https://e7.pngegg.com/pngimages/403/1021/png-clipart-fashion-computer-icons-90s-style-hand-fashion-thumbnail.png',
    mediaType: ['asdasdasdasdads'],
    mediaURL: ['https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
    title: 'Узнайте, как чувствовать себя уверенно и стильно каждый день!',
    content: 'Узнайте, как чувствовать себя уверенно и стильно каждый день!',
    time: '03:04',
    likes: 39279,
    dislikes: 4578,
    views: 1300000,
    tagList: [
      { id: 99, category_id: 13, name: 'Стиль', color: '#ad2828' },
      { id: 100, category_id: 13, name: 'МужскойСтиль', color: '#ad2828' },
      { id: 101, category_id: 13, name: 'ЖенскаяМода', color: '#ad2828' },
      { id: 103, category_id: 13, name: 'Аксессуары', color: '#ad2828' },
    ],
  },
];
