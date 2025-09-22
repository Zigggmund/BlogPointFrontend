import { useLanguage } from '@hooks/useLanguage.ts';
import { Container, Flex, Text } from '@mantine/core';
import { TagsFeed } from '@modules/channel/components/TagsFeed/TagsFeed.tsx';
import { PostItem } from '@modules/posts';
import { useGetRecommendedPosts } from '@modules/posts/hooks/useGetRecommendedPosts.ts';
import { CommonFrame, List } from '@ui';

export const Recommendations = () => {
  const { l } = useLanguage();
  const recommendedPosts = useGetRecommendedPosts(1);

  return (
    <>
      <CommonFrame>
        <Container id="RecommendationsContainer" mb="40px">
          <TagsFeed />
          <Text
            ta={'center'}
            fz={{ base: '40px', xs: '48px' }}
            fw="600"
            pt="10px"
            pb="10px"
            mb={'40px'}
            mt={'10px'}
          >
            {l.recommendations}
          </Text>
          {/* Heading1 слишком широк на мобилках*/}
          {/*<Heading1 ta="center" mb="40px" mt={'10px'}>{l.recommendations}</Heading1>*/}
          <Flex
            id="RecommendationsFeed"
            mt="20px"
            p="0"
            gap="30px"
            direction="column"
            w="100%"
          >
            <List items={recommendedPosts} renderItem={PostItem} />
          </Flex>
        </Container>
      </CommonFrame>
    </>
  );
};
