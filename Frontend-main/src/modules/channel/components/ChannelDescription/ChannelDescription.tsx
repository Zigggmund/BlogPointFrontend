import { FC } from 'react';
import { Flex, Modal } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { GreyButton, Heading1, Heading2, Heading4, Line } from '@ui';
import { useLanguage } from '@hooks/useLanguage.ts';

interface IChannelMyChannelDescriptionButtonsProps {
  channelName: string;
  description: string;
  subscriberNumber: number;
}

export const ChannelDescription: FC<
  IChannelMyChannelDescriptionButtonsProps
> = props => {
  const { l } = useLanguage();
  const [opened, { open, close }] = useDisclosure(false);
  // для fullscreen
  const isMobile = useMediaQuery('(max-width: 450px)');

  return (
    <>
      <Modal
        size="100%"
        fullScreen={isMobile}
        opened={opened}
        onClose={close}
        title={<Heading1>{l.channelInfo}</Heading1>}
        // для отступа снизу при прокрутке*
      >
        <Flex
          style={{ overflowX: 'hidden' }}
          justify="center"
          gap="md"
          direction="column"
        >
          <Heading4 fs="italic">
            {l.subsCount}: {props.subscriberNumber}
          </Heading4>
          <Line h="2px" />
          <Heading2>{props.channelName}</Heading2>
          <Line h="8px" />
          <Heading4>{props.description}</Heading4>
        </Flex>
      </Modal>

      <GreyButton display={'inline'} onClick={open}>
        {l.btnDetails}
      </GreyButton>
    </>
  );
};
