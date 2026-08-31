import { IPost } from '@app-types';

export const examplePost: IPost = {
  id: '1',
  channelId: '1',
  channelName: 'Путешествия и путешествия',
  channelIcon: {
    name: '',
    filename: 'image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
    url: 'https://cdn4.iconfinder.com/data/icons/business-conceptual-part1-1/513/business-1024.png',
  },
  previewImage: {
    name: '',
    filename: 'image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
    url: 'https://img.goodfon.com/original/3709x2483/e/3e/gory-vershiny-sneg-uschele.jpg',
  },
  title: 'Отправьтесь в путешествие уже сейчас!',
  content: `<h1>Сокрушительная скука</h1>
              <p>Крис Миллс</p>
              <h2>Глава 1: Тёмная ночь</h2>
              <p>Это была тёмная ночь. Где-то кричала сова. Дождь обрушился на ...</p>
              <h2>Глава 2: Вечное молчание</h2>
              <p>Наш главный герой ничего не мог, когда шёпот из тёмной фигуры ...</p>
              <h3>Призрак говорит</h3>
              <p>
                Прошло ещё несколько часов, когда внезапно призрак выпрямился и воскликнул:
                «Пожалуйста, помилуй мою душу!»
              </p>`,
  contentImages: [
    {
      name: 'img1',
      filename: 'image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
      url: 'http://localhost:9000/blogpoint-bucket/image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
    },
  ],
  tags: [
    { id: 44, category_id: 6, name: 'КомпьютерныеИгры', color: 'red' },
    { id: 51, category_id: 6, name: 'Киберспорт', color: 'red' },
    { id: 52, category_id: 6, name: 'Стриминг', color: 'red' },
    { id: 45, category_id: 6, name: 'СоревновательныеИгры', color: 'red' },
  ],
  mediaFiles: [
    {
      name: '',
      filename: 'image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
      url: 'http://localhost:9000/blogpoint-bucket/image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
    },
    {
      name: '',
      filename: 'image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
      url: 'http://localhost:9000/blogpoint-bucket/image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
    },
    {
      name: '',
      filename: 'image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
      url: 'http://localhost:9000/blogpoint-bucket/image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
    },
  ],
  dateOfCreation: '15:00',
  likes: 45,
  dislikes: 1,
  views: 1352,
};
