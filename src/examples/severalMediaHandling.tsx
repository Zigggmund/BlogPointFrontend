import { skyBlueColor } from '@constants';
import { Button, Card, Text } from '@mantine/core';
import PostMedia from '@ui/Media/PostMedia.tsx';

interface RecommendationPostProps {
  id: number;
  title: string;
  text: string;
  channelName: string;
  mediaType?: string[] | undefined; // тип указан неточно, изменить
  mediaURL?: string[] | undefined;
}

function RecommendationPost(props: RecommendationPostProps): JSX.Element {
  const textProps = {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  };

  return (
    <Card
      radius="md"
      h="400px"
      w="350px"
      bd="1px solid black"
      id={'RecommendationPost' + props.id}
      style={{ alignItems: 'center' }}
    >
      <Text
        className="RecommendationPostText"
        // textOverflow='ellipsis'
        // overflow='hidden'
        style={{ textProps }} // посмотреть
      >
        {props.title}
      </Text>

      <Card.Section>
        {/*проверка на пустой массив*/}
        {props.mediaType &&
        props.mediaURL &&
        props.mediaType.length > 0 &&
        props.mediaURL.length > 0
          ? props.mediaType.map((_, i: number) => (
              <PostMedia
                // уникальный ключ для каждого медиа
                id={`RecommendationPost${props.id}-${i}`}
                // если на этом шаге, значит массивы уже не пустые
                mediaType={props.mediaType![i]}
                mediaURL={props.mediaURL![i]!}
              />
            ))
          : null}
      </Card.Section>

      <Text
        className="RecommendationPostChannelName"
        style={{
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          fontWeight: 'bold',
          whiteSpace: 'nowrap', // чтобы не было переноса строки
        }}
      >
        {props.channelName}
      </Text>

      <Text className="RecommendationPostText">{props.title}</Text>

      <Button
        bg={skyBlueColor}
        w="fit-content"
        h={'fit-content'}
        p="15px 40px 15px"
        radius="md"
        style={{ fontSize: '20px' }}
      >
        Читать
      </Button>
    </Card>
  );
}

export default RecommendationPost;
