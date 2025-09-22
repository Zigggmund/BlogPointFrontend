import { useNavigate } from 'react-router-dom';
import { Flex } from '@mantine/core';
import { ChannelItem } from '@modules/channel/components/ChannelItem/ChannelItem.tsx';
import { useGetUserChannels } from '@modules/channel/hooks/useGetUserChannels.ts';
import { BlueButton, CommonFrame, Heading1, List } from '@ui';
import { useLanguage } from '@hooks/useLanguage.ts';

export const UserChannels = () => {
  const { l } = useLanguage();
  const channelManager = useGetUserChannels();
  const navigate = useNavigate();
  return (
    <CommonFrame>
      <Heading1 ta="center">{l.myChannels}</Heading1>
      <Flex id="ChannelsFeed" m="20px 0px" gap="30px" direction="column">
        <Flex gap={'30px'} direction="column">
          <List items={channelManager} renderItem={ChannelItem} />
        </Flex>
      </Flex>
      <BlueButton onClick={() => navigate('/create-channel')}>
        {l.btnCreateChannel}
      </BlueButton>
    </CommonFrame>
  );
};
