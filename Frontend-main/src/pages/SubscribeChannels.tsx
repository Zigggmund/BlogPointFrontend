import { useLanguage } from '@hooks/useLanguage.ts';
import { Container, Flex, Text } from '@mantine/core';
import { ChannelItem } from '@modules/channel/components/ChannelItem/ChannelItem.tsx';
import { ChannelsFeed } from '@modules/channel/components/ChannelsFeed/ChannelsFeed.tsx';
import { useGetSubscription } from '@modules/channel/hooks/useGetSubscription.ts';
import { CommonFrame, List } from '@ui';

export const SubscribeChannels = () => {
  const { l } = useLanguage();
  const subscribeChannels = useGetSubscription();

  return (
    <CommonFrame>
      <Container id="MySubscribeChannelsContainer" mb="40px">
        <ChannelsFeed />
        {/* Heading1 слишком широк на мобилках*/}
        {/*<Heading1 ta="center" mb="40px" mt={'10px'}>{l.subscriptions}</Heading1>*/}
        <Text
          ta={'center'}
          fz={{ base: '40px', xs: '48px' }}
          fw="600"
          pt="10px"
          pb="10px"
          mb="40px"
          mt={'10px'}
        >
          {l.subscriptions}
        </Text>
        <Flex
          id="RecommendationsFeed"
          mt="20px"
          p="0"
          gap="30px"
          direction="column"
          w="100%"
        >
          <List items={subscribeChannels} renderItem={ChannelItem} />
        </Flex>
      </Container>
    </CommonFrame>
  );
};
