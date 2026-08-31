import { skyBlueColor } from '@constants';
import { Carousel } from '@mantine/carousel';
import { PostItem } from '@modules/posts';
import { useGetRecommendedPosts } from '@modules/posts/hooks/useGetRecommendedPosts.ts';

export const RecommendationsFeed = () => {
  const recommendedPosts = useGetRecommendedPosts(1);
  return (
    <Carousel
      id="recommendationFeed"
      align="center"
      // draggable={{ md: false, base: true }} // не работает
      slideSize={{ md: '33%', base: '100%' }}
      w={{ lg: '1400px', base: '450px' }} // выравнивание по центру
      slideGap={{ base: 0, sm: 'md' }}
      ml={{ xl: '-130px', lg: '0px', md: '60px', base: '0px' }}
      withIndicators
      loop
      controlSize="50"
      styles={{
        control: {
          backgroundColor: skyBlueColor,
          color: 'white',
          transform: 'translateY(-50%)', // позиционирует стрелки по центру по вертикали
          zIndex: 10, // Выводит стрелки поверх слайдов
        },
        controls: {
          top: '50%',
          left: 'calc(-90px)', // сдвигает левую стрелку за пределы карусели
          right: 'calc(-90px)', // сдвигает правую стрелку за пределы карусели
        },
        indicator: {
          backgroundColor: skyBlueColor,
          width: '30px',
          height: '10px',
          transition: 'width 250ms ease',
        },
        indicators: {
          position: 'relative', // Делает индикаторы отдельным блоком
          top: '20px', // Добавляет отступ сверху
        },
      }}
    >
      {recommendedPosts.map(el => (
        <Carousel.Slide key={el.id}>
          <PostItem
            id={el.id}
            channel={el.channel}
            previewImage={el.previewImage}
            title={el.title}
            content={el.content}
            postImages={el.postImages}
            tags={el.tags}
            postFiles={el.postFiles}
            createdAt={el.createdAt}
            likesCount={el.likesCount}
            dislikesCount={el.dislikesCount}
            viewsCount={el.viewsCount}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
