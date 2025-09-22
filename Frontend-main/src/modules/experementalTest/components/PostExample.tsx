import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IPost } from '@app-types';
import { greyColor, skyBlueColor } from '@constants';
import {
  ActionIcon,
  Box,
  Card,
  Center,
  Flex,
  Grid,
  Image,
} from '@mantine/core';
import {
  IconEye,
  IconHeart,
  IconHeartFilled,
  IconThumbDown,
  IconThumbDownFilled,
} from '@tabler/icons-react';
import {
  BlueButton,
  ChannelIconImage,
  Heading1,
  Heading3,
  Heading4,
  Heading5,
  List,
  Tag,
} from '@ui';
import { renderImgContent } from '@utils/renderImgContent.ts';

interface IProps {
  post: IPost;
}

export const PostExample = (props: IProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const processedContent = renderImgContent(
    props.post?.content ?? '',
    props.post?.contentImages ?? [],
  );
  const getFileType = (filename: string): string => {
    const ext = filename.split('.').pop()?.toLowerCase();
    if (!ext) return 'unknown';

    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
    const videoExtensions = ['mp4', 'mov', 'avi', 'mkv', 'webm'];
    const audioExtensions = ['mp3', 'wav', 'ogg', 'flac'];

    if (imageExtensions.includes(ext)) return 'image';
    if (videoExtensions.includes(ext)) return 'video';
    if (audioExtensions.includes(ext)) return 'audio';

    return 'unknown';
  };

  const getFileTypeFromUrl = (url: string): string => {
    return getFileType(url);
  };
  const [userReaction, setUserReaction] = useState<'like' | 'dislike' | null>(
    null,
  );
  const handleReaction = (type: 'like' | 'dislike') => {
    if (userReaction === type) {
      // Нажал повторно — убираем реакцию
      setUserReaction(null);
    } else {
      // Смена реакции или новая реакция
      setUserReaction(type);
    }
  };

  return (
    <Card
      style={{
        position: 'relative',
        width: '1000px',
        borderRadius: '15px',
        height: 'auto',
        paddingBottom: '50px',
      }}
    >
      <Card.Section>
        <Flex gap="lg" justify="center" align="center" direction="row">
          <ChannelIconImage src={props.post?.channelIcon.url} />
          <Heading3
            fw="500"
            onClick={() => navigate(`/channel/:${props.post?.channelId}`)}
            style={{
              color: isHovered ? 'blue' : 'black',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {props.post?.channelName}
          </Heading3>
          <BlueButton mt={15} onClick={() => alert('Вы подписались')}>
            Подписаться
          </BlueButton>
        </Flex>
      </Card.Section>
      <Card.Section>
        <Flex gap={'md'} justify="center" align="center" direction="column">
          <Heading1 fw={'600'} ta="center" w={900}>
            {props.post?.title}
          </Heading1>
        </Flex>
      </Card.Section>
      <Card.Section>
        <Center>
          <Image w={900} src={props.post?.previewImage.url} />
        </Center>
      </Card.Section>
      <Card.Section>
        <Center>
          <div
            style={{ width: 900 }}
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />
        </Center>
      </Card.Section>
      <Center>
        <Box w={950} bg={greyColor} h={1} m={15} />
      </Center>
      <Card.Section pl="15" pr="15" mb="10">
        <Center>
          <Flex direction={'row'} gap="10px" justify={'flex-start'}>
            {props.post?.tags ? (
              <List items={props.post.tags} renderItem={Tag} />
            ) : (
              <Heading5>Тегов не обноружено</Heading5>
            )}
          </Flex>
        </Center>
      </Card.Section>
      <Card.Section>
        <Center>
          <Grid w={900}>
            <Grid.Col span={4}>
              <Heading4 fw={600}>
                Дата публикации {props.post?.dateOfCreation}
              </Heading4>
            </Grid.Col>
            <Grid.Col span={4} offset={4}>
              <Grid>
                <Grid.Col span={3}>
                  <Center inline>
                    <ActionIcon variant="transparent" size={50} color={'red'}>
                      {userReaction === 'like' ? (
                        <IconHeartFilled
                          size={35}
                          onClick={() => handleReaction('like')}
                        />
                      ) : (
                        <IconHeart
                          size={35}
                          onClick={() => handleReaction('like')}
                        />
                      )}
                    </ActionIcon>
                    <Heading5 c={'green'}>{props.post?.likes}</Heading5>
                  </Center>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Center inline>
                    <ActionIcon variant="transparent" size={50}>
                      {userReaction === 'dislike' ? (
                        <IconThumbDownFilled
                          size={35}
                          onClick={() => handleReaction('dislike')}
                        />
                      ) : (
                        <IconThumbDown
                          size={35}
                          onClick={() => handleReaction('dislike')}
                        />
                      )}
                    </ActionIcon>
                    <Heading5 c={'red'}>{props.post?.dislikes}</Heading5>
                  </Center>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Center inline>
                    <IconEye size={35} />
                    <Heading5 c={skyBlueColor}>{props.post?.views}</Heading5>
                  </Center>
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
        </Center>
      </Card.Section>
      <Center>
        <Box w={950} bg={greyColor} h={1} m={15} />
      </Center>
      <Card.Section>
        <Grid grow ml={55}>
          {props.post?.mediaFiles ? (
            props.post.mediaFiles.length > 0 &&
            props.post.mediaFiles.map((item, index) => (
              <Card withBorder key={index} w={'auto'} h={'auto'} m={5}>
                <Flex align="center" justify="space-between">
                  <div>
                    {getFileTypeFromUrl(item.url) === 'image' && (
                      <img src={item.url} alt="uploaded" width={400} />
                    )}
                    {getFileTypeFromUrl(item.url) === 'video' && (
                      <video src={item.url} controls width={400} />
                    )}
                    {getFileTypeFromUrl(item.url) === 'audio' && (
                      <audio src={item.url} controls />
                    )}
                  </div>
                </Flex>
              </Card>
            ))
          ) : (
            <Heading5>Файлы не прикрепили</Heading5>
          )}
        </Grid>
      </Card.Section>
    </Card>
  );
};
