import { useState } from 'react';
import Empty from '@assets/images/EmptyPng.png';
import { useLanguage } from '@hooks/useLanguage.ts';
import { FileInput, Flex, Group, Image, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { BlueButton, GreyButton, Heading3, Heading4 } from '@ui';
import {
  useUploadChannelLogo
} from '@modules/channel/hooks/useUploadChannelLogo.ts';
import { useParams } from 'react-router-dom';

export const EditChannelImage = () => {
  const { l } = useLanguage();
  const { id } = useParams();
  const channelId = Number(id);
  const editChannelLogo = useUploadChannelLogo();

  const [fileImg, setFileImg] = useState<File | null>(null);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={<Heading3>{l.userImage}</Heading3>}
      >
        <Heading4 mt={'20px'} mb={'10px'}>
          {l.channelImage}
        </Heading4>
        <FileInput
          accept="image/png,image/jpeg,image/jpg"
          value={fileImg}
          onChange={setFileImg}
        />
        <Group mt="lg" justify="flex-end">
          <GreyButton onClick={close}>{l.btnCancel}</GreyButton>
          <BlueButton
            onClick={() => {
              if (fileImg) {
                editChannelLogo.mutate({ fileImg, channelId });
              } else {
                console.log('Error editing Image');
              }
              close();
            }}
          >
            {l.btnSave}
          </BlueButton>
        </Group>
      </Modal>

      <Heading4 mt={'20px'} mb={'10px'}>
        {l.channelImage}
      </Heading4>
      <Flex
        mih={50}
        gap="md"
        justify="flex-start"
        align={{ md: 'end', sm: 'start', base: 'start' }}
        direction={{ md: 'row', sm: 'column', base: 'column' }}
      >
        <Image w={{ base: 250, xss: 300 }} h={300} radius="md" src={Empty} />
        <BlueButton
          onClick={() => {
            open();
          }}
        >
          {l.btnChange}
        </BlueButton>
      </Flex>
    </>
  );
};
