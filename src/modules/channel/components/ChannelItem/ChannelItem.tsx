import { useNavigate } from 'react-router-dom';
import { IChannel } from '@app-types';
import { useLanguage } from '@hooks/useLanguage.ts';
import { Card, Container, Flex, Image } from '@mantine/core';
import { BlueButton, Heading2, Heading4, SubCount } from '@ui';
import { Category } from '@ui';

export const ChannelItem = (props: IChannel) => {
  const { l } = useLanguage();
  const navigate = useNavigate();

  return (
    <Card
      radius="md"
      h={{ md: '290px', sm: 'fit-content', base: 'fit-content' }}
      w={{ md: '400px', sm: 'fit-content', base: 'fit-content' }}
      m="15px 0px"
      bd="1px solid black"
      id={'PopularChannelItem' + props.id}
      style={{
        display: 'flex',
        alignItems: 'start',
      }}
    >
      <Flex // картинка|текстовый блок
        direction={{ md: 'row', sm: 'column', base: 'column' }}
        gap={{ md: '40px', sm: '10px', base: '10px' }}
        justify="space-between"
        // align={{ sm: 'center', base: 'center' }}
        h="100%"
      >
        <Container w={{ base: '100%', sm: '100%', md: '280px' }}>
          <SubCount
            isJustifiedEnd={true}
            display={{ base: 'flex', xs: 'none' }}
            subNumber={props.subsCount}
            mb={'20px'}
          />
          <Image
            // minWidth: '140px',  не работает
            h={{ md: '100%', sm: '280px', base: '280px' }}
            w={{ md: 'auto', sm: '100%', base: '100%' }}
            ml="auto"
            mr="auto"
            style={{
              maxWidth: '280px',
              border: '1px solid black',
            }}
            src={
              props.imageLogo
                ? props.imageLogo.url
                : '../../../public/assets/images/icons/default_post.jpg'
            }
          />
        </Container>
        <Flex // Верхний блок|нижний блок
          direction="column"
          justify="space-between"
          style={{
            overflow: 'hidden',
            maxWidth: '430px',
          }}
        >
          <Flex // Заглавие|описание
            direction="column"
            align={{ md: 'start', sm: 'center', base: 'center' }}
          >
            <Heading2 lineClamp={1} fw="bold" td="underline">
              {props.name}
            </Heading2>
            {props.category !== null && (
              <Category
                name={props.category.name}
                color={props.category.color}
                id={props.id}
              />
            )}
            <Heading4 lineClamp={3} mt={'5px'}>
              {props.description}
            </Heading4>
          </Flex>
          <Flex // Подписчики|кнопка
            justify={{ base: 'center', xs: 'space-between' }}
          >
            <SubCount
              display={{ base: 'none', xs: 'flex' }}
              subNumber={props.subsCount}
            />
            <BlueButton
              mt={'15px'}
              onClick={() => navigate(`/channel/${props.id + ''}`)}
            >
              {l.btnGo}
            </BlueButton>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};
