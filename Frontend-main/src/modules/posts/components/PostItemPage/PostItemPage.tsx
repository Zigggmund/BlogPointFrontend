import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmptyPng from '@assets/images/EmptyPng.png';
import { greyColor, skyBlueColor } from '@constants';
import { useLanguage } from '@hooks/useLanguage.ts';
import { Box, Card, Flex, Grid, Image } from '@mantine/core';
import { useGetPostById } from '@modules/posts/hooks/useGetPostById.ts';
import { IconEye, IconThumbDown, IconThumbUp } from '@tabler/icons-react';
import {
  BlueButton,
  ChannelIconImage,
  GreyButton,
  Heading1,
  Heading2,
  Heading4,
  Heading5,
} from '@ui';
import { addSpacesToNumber } from '@utils';
import { renderImgContent } from '@utils/renderImgContent.ts';

export const PostItemPage: FC = () => {
  const { l } = useLanguage();
  const { postId } = useParams();
  const post = useGetPostById(Number(postId));
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const processedContent = renderImgContent(
    post?.content ?? '',
    post?.postImages ?? [],
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

  return (
    <Card
      w={'100%'}
      pos={'relative'}
      pb={'50px'}
      pl={{ base: '25px', sm: '30px', lg: '40px' }}
      pr={{ base: '25px', sm: '30px', lg: '40px' }}
      style={{
        maxWidth: '1000px',
        borderRadius: '15px',
      }}
    >
      <Card.Section>
        <Flex
          justify="flex-start"
          align="center"
          gap={{ base: 'sm', sm: 'lg' }}
          mt="15"
        >
          <ChannelIconImage src={post?.channel?.logo?.url || EmptyPng} />
          <Heading2
            fz={{ base: '17px', sm: '22px', md: '26px' }}
            pr={{ sm: '190px' }} // для кнопки подписаться
            fw="500"
            truncate="end"
            onClick={() => navigate(`/channel/:${post?.channel.id}`)}
            style={{
              color: isHovered ? 'blue' : 'black',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {post?.channel.name && post?.channel.name.length > 25
              ? post.channel.name.substring(0, 25) + '...'
              : post?.channel.name}
          </Heading2>
          <BlueButton
            pos={'absolute'}
            right={{ base: '0px', lg: '5px' }}
            mt="10px"
            display={{ base: 'none', sm: 'block' }}
            onClick={() => alert(l.youSubscribedNow)}
          >
            {l.btnSubscribe}
          </BlueButton>
        </Flex>
      </Card.Section>
      <Card.Section>
        <Heading1 ta="center" m={'10px auto'}>
          {post?.title}
        </Heading1>
      </Card.Section>
      <Card.Section>
        <Image
          w="100%"
          height={'auto'}
          style={{ objectFit: 'contain' }}
          src={post?.previewImage.url}
        />
      </Card.Section>
      <Box w={'100%'} bg={greyColor} h={1} m={'15px -10px'} />
      <Card.Section>
        <div dangerouslySetInnerHTML={{ __html: processedContent }} />
      </Card.Section>
      <Box w={'100%'} bg={greyColor} h={1} m={'15px -10px'} />
      <Card.Section mt="10px" mb="20px">
        <Flex direction={'row'} gap="7px" wrap={'wrap'}>
          {/*<List items={post.tags} renderItem={Tag} />*/}
        </Flex>
      </Card.Section>
      <Card.Section>
        <Flex
          justify={'space-between'}
          m="auto 10px"
          gap={'10px'}
          direction={{ base: 'column', sm: 'row', md: 'column', lg: 'row' }}
        >
          <Heading4 fw={600}>
            {l.dateOfPublication} {post?.createdAt.slice(0, 10)}
          </Heading4>
          <Flex align="start" gap="md">
            <Flex align="center" gap="xs" style={{ whiteSpace: 'nowrap' }}>
              <IconThumbUp size={35} />
              <Heading5 c="green" fz={{ base: '14px', xs: '17px' }}>
                {addSpacesToNumber(Number(post?.likesCount))}
              </Heading5>
            </Flex>

            <Flex align="center" gap="xs" style={{ whiteSpace: 'nowrap' }}>
              <IconThumbDown size={35} />
              <Heading5 c="red" fz={{ base: '14px', xs: '17px' }}>
                {addSpacesToNumber(Number(post?.dislikesCount))}
              </Heading5>
            </Flex>

            <Flex align="center" gap="xs" style={{ whiteSpace: 'nowrap' }}>
              <IconEye size={35} />
              <Heading5 c={skyBlueColor} fz={{ base: '14px', xs: '17px' }}>
                {addSpacesToNumber(Number(post?.viewsCount))}
              </Heading5>
            </Flex>
          </Flex>
        </Flex>
      </Card.Section>
      <Box w={'100%'} bg={greyColor} h={1} m={'15px -10px'} />
      <Card.Section>
        <Grid grow>
          {post?.postFiles ? (
            post.postFiles.length > 0 &&
            post?.postFiles.map((item, index) => (
              <Card withBorder key={index} m={10}>
                <Flex align="center" justify="space-between">
                  <div>
                    {getFileTypeFromUrl(item.url) === 'image' && (
                      <img
                        src={item.url}
                        alt="uploaded"
                        width={'100%'}
                        style={{ maxWidth: '400px' }}
                      />
                    )}
                    {getFileTypeFromUrl(item.url) === 'video' && (
                      <video
                        src={item.url}
                        controls
                        width={'100%'}
                        style={{ maxWidth: '400px' }}
                      />
                    )}
                    {getFileTypeFromUrl(item.url) === 'audio' && (
                      <audio src={item.url} controls />
                    )}
                  </div>
                </Flex>
              </Card>
            ))
          ) : (
            <Heading5>{l.noFiles}</Heading5>
          )}
        </Grid>
      </Card.Section>
      <Card.Section>
        <GreyButton onClick={() => navigate('/')}>
          Редактировать пост
        </GreyButton>
      </Card.Section>
    </Card>
  );
};
