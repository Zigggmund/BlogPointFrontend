import { Container, Flex, Text } from '@mantine/core';
import { ChannelItem } from '@modules/channel/components/ChannelItem/ChannelItem.tsx';
import { RecommendationsFeed } from '@modules/channel/components/RecommendationsFeed/RecommendationsFeed.tsx';
import { useGetPopularChannels } from '@modules/channel/hooks/useGetPopularChannels.ts';
import { CommonFrame, Heading1, List, LogoMainPage } from '@ui';
import { useLanguage } from '@hooks/useLanguage.ts';

export const MainPage = () => {
  const { l } = useLanguage();
  const popularChannels = useGetPopularChannels();


  return (
    <>
      <CommonFrame>
        <LogoMainPage />
        <Container id="recommendationPostsContainer">
          <Heading1 ta="center" mb="40px">
            {l.recommendations}
          </Heading1>
          <RecommendationsFeed />
        </Container>
        <Container id="popularChannelsContainer" mb="40px">
          <Text
            ta={'center'}
            fz={{ base: '40px', xs: '48px' }}
            fw="600"
            pt="10px"
            pb="10px"
            mb={'40px'}
          >
            {l.popularChannels}
          </Text>
          <Flex
            id="PopularChannelFeed"
            mt="20px"
            p="0"
            gap="30px"
            direction="column"
            w="100%"
            align="center"
          >
            <List items={popularChannels} renderItem={ChannelItem} />
          </Flex>
        </Container>
      </CommonFrame>
    </>
  );
};
