import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IPost } from '@app-types';
import EmptyPng from '@assets/images/EmptyPng.png';
import { skyBlueColor } from '@constants';
import { useLanguage } from '@hooks/useLanguage.ts';
import { Card, Flex, Image, Text } from '@mantine/core';
import { IconEye, IconThumbDown, IconThumbUp } from '@tabler/icons-react';
import {
  BlueButton,
  ChannelIconImage,
  Heading2,
  Heading4,
  Heading5,
  List,
  Tag,
} from '@ui';
import { addSpacesToNumber } from '@utils';

export const PostItem = (props: IPost) => {
  const { l } = useLanguage();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const extractTextFromHTML = (html: string): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  return (
    <Card
      withBorder
      shadow="sm"
      radius="md"
      bd="1px solid black"
      id={'RecommendationPost' + props.id}
      w={{ base: '345px', xs: '400px', sm: '450px' }}
      style={{
        position: 'relative',
        height: 'auto',
        flexShrink: 0,
      }}
    >
      <Card.Section mb="10">
        <Flex
          gap={{ base: 'sm', sm: 'lg' }}
          justify="flex-start"
          align="center"
          direction="row"
          mt="15"
          ml={{ base: '10px', sm: '20' }}
          mr={{ base: '5px', xs: '0px', sm: '15px' }}
        >
          <ChannelIconImage src={props?.channel?.logo?.url || EmptyPng} />
          <Flex justify={'space-between'} w="80%">
            <Heading4
              fw="500"
              truncate="end"
              onClick={() => navigate(`/channel/${props.channel.id}`)}
              style={{
                color: isHovered ? 'blue' : 'black',
                transition: 'color 0.3s ease',
                maxWidth: 'calc(100% - 50px)',
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {props.channel.name.length > 25
                ? props.channel.name.substring(0, 25) + '...'
                : props.channel.name}
            </Heading4>
            <Heading5 fz={{ base: '14px', xs: '17px' }}>
              {props?.createdAt
                ? new Date(props.createdAt).toLocaleString()
                : 'Дата не указана'}
            </Heading5>
          </Flex>
        </Flex>
      </Card.Section>
      <Card.Section>
        <Image src={props.previewImage.url} />
      </Card.Section>
      <Heading2 fw={'600'} lineClamp={2} ta="center">
        {props.title}
      </Heading2>
      <Card.Section pl="15" pr="15" mb="10">
        <Text lineClamp={3}>{extractTextFromHTML(props.content)}</Text>
      </Card.Section>
      <Card.Section pl="15" pr="15" mb="10">
        <Flex direction={'row'} gap="7px" wrap={'wrap'}>
          <List items={props.tags} renderItem={Tag} />
        </Flex>
      </Card.Section>
      {/*лайки дизлайки просмотры*/}
      <Card.Section pl="15" pr="15" mb="10">
        <Flex justify="space-between" align="center" wrap="wrap" gap="md">
          {/* Лайки и дизлайки */}
          <Flex align="center" gap="md">
            <Flex align="center" gap="xs">
              <IconThumbUp size={28} />
              <Heading5 fz={{ base: '14px', xs: '17px' }} c="green">
                {addSpacesToNumber(Number(props.likesCount))}
              </Heading5>
            </Flex>

            <Flex align="center" gap="xs">
              <IconThumbDown size={28} />
              <Heading5 fz={{ base: '14px', xs: '17px' }} c="red">
                {addSpacesToNumber(Number(props.dislikesCount))}
              </Heading5>
            </Flex>
          </Flex>

          {/* Просмотры справа */}
          <Flex align="center" gap="xs">
            <IconEye size={28} />
            <Heading5 fz={{ base: '14px', xs: '17px' }} c={skyBlueColor}>
              {addSpacesToNumber(Number(props.viewsCount))}
            </Heading5>
          </Flex>
        </Flex>
      </Card.Section>
      {/*читать*/}
      <Flex justify={'center'}>
        <BlueButton
          mb="0px"
          onClick={() =>
            navigate(`/channel/${props.channel.id + ''}/post/${props.id + ''}`)
          }
        >
          {l.btnRead}
        </BlueButton>
      </Flex>
    </Card>
  );
};
