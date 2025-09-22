import { useState } from 'react';
import { IChannel } from '@app-types';
import { skyBlueColor } from '@constants';
import { Carousel } from '@mantine/carousel';
import { Button, Container, Flex } from '@mantine/core';
import { popularChannelsExamples } from '@modules/channel/constants/popularChannelsExamples.ts';
import { ChannelIconImage, Heading4 } from '@ui';

export const ChannelsFeed = () => {
  // для обозначения выбранного канала
  const [selectedChannel, setSelectedChannel] = useState<IChannel | null>(null);

  const handleSelectChannel = (Channel: IChannel): void => {
    setSelectedChannel(prevChannel =>
      prevChannel?.id == Channel.id ? null : Channel,
    );
  };

  return (
    <Flex>
      <Carousel
        id="SubscribeFeed"
        // draggable={{ md: false, base: true }} // не работает
        w={{ base: '240px', xs: '320px' }} // выравнивание по центру
        ml="30px"
        type="container"
        loop
        align="start"
        styles={{
          control: {
            backgroundColor: skyBlueColor,
            color: 'white',
            transform: 'translateY(-50%)', // позиционирует стрелки по центру по вертикали
            zIndex: 10, // Выводит стрелки поверх слайдов
          },
          controls: {
            top: '50%',
            left: 'calc(-70px)', // сдвигает левую стрелку за пределы карусели
            right: 'calc(-70px)', // сдвигает правую стрелку за пределы карусели
          },
        }}
      >
        {popularChannelsExamples.map((channel: IChannel) => {
          // если тег выбран, меняет стили кнопок
          const isChannelSelected = selectedChannel?.id == channel.id;
          return (
            <Carousel.Slide key={channel.id}>
              <Button
                h={'50px'}
                w={{ base: '240px', xs: '320px' }}
                variant={'outline'}
                onClick={() => handleSelectChannel(channel)}
                style={{
                  border: isChannelSelected
                    ? `solid black 2px`
                    : `solid black 1px`,
                  backgroundColor: isChannelSelected
                    ? '#d6d6d6'
                    : 'transparent',
                  color: 'black',
                }}
                pl={'0'}
                pr={'10px'}
              >
                <Flex direction={'row'} align={'center'}>
                  <ChannelIconImage src={channel.imageLogo} />
                  <Container w={{ base: '180px', xs: '260px' }}>
                    <Heading4
                      style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}
                    >
                      {channel.name}
                    </Heading4>
                  </Container>
                </Flex>
              </Button>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </Flex>
  );
};
