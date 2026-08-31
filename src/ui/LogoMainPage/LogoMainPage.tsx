import { mainBackgroundColor } from '@constants';
import { Container, Flex, Image, Text } from '@mantine/core';

export const LogoMainPage = () => {
  return (
    <Container
      id="LogoContainer"
      bg={mainBackgroundColor}
      h="160px"
      m="15px auto"
      bd="2px solid black"
      display="flex"
      w="100%"
      style={{
        borderRadius: '20px',
        maxWidth: '650px',
      }}
    >
      <Flex align="center" justify="center" w="100%">
        {/*<Image display={'none'} h="80%" src={'icons/logo.png'} />*/}
        <Image
          h={{ base: 'auto', xs: '80%' }}
          w={{ base: '120px', xs: 'auto' }}
          src={'icons/logo.png'}
        />
        {/*<span style={{ fontSize: '65px'}}>BlogPoint</span>*/}
        <Text fz={{ base: '50px', c500: '65px' }}>BlogPoint</Text>
      </Flex>
    </Container>
  );
};
