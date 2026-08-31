import { darkBackgroundColor } from '@constants';
import { Card, Flex } from '@mantine/core';
import { BlueButton, Heading2, Heading3, Heading4, PostMedia } from '@ui';

interface RecommendationPostProps {
  id: number;
  title: string;
  text: string;
  channelName: string;
  mediaType?: string | undefined; // тип указан неточно, изменить
  mediaURL?: string | undefined;
}

function ShortcutRecommendationPost(props: RecommendationPostProps): JSX.Element {
  return (
    <Card
      radius="md"
      p="15px 0px" // для растяжения изображения на всю длину карточки
      bd="1px solid black"
      id={'ShortcutRecommendationPost' + props.id}
      style={{
        height: '550px',
        width: '380px',
        flexShrink: 0,
      }}
    >
      <Flex // содержание|кнопка
        direction="column"
        justify="space-between"
        h="100%"
        style={{ alignItems: 'center' }}
      >
        <Flex
          gap="10px"
          w="100%"
          direction="column"
          style={{ alignItems: 'center' }}
        >
          <Heading2 lineClamp={2} ta="center" p="0px 20px">
            {props.title}
          </Heading2>

          <Card.Section
            style={{ background: darkBackgroundColor, width: '100%' }}
          >
            {/*проверка на пустые поля*/}
            {props.mediaType && props.mediaURL ? (
              <PostMedia
                h="200px" // тут все работает
                // уникальный ключ для каждого медиа
                id={`RecommendationPost${props.id}Media`}
                // если на этом шаге, значит массивы уже не пустые
                mediaType={props.mediaType!}
                mediaURL={props.mediaURL!}
              />
            ) : (
              <hr style={{ backgroundColor: 'white', height: '140px' }} />
            )}
          </Card.Section>

          <Heading3
            lineClamp={1}
            ta="center"
            p="0 20px"
            fw="bold"
            td="underline"
          >
            {props.channelName}
          </Heading3>

          <Heading4 lineClamp={3} ta="center" p="0 20px">
            {props.title}
          </Heading4>
        </Flex>

        <BlueButton>Читать</BlueButton>
      </Flex>
    </Card>
  );
}

export default ShortcutRecommendationPost;
