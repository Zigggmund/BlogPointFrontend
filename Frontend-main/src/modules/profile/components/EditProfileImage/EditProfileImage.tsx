import { useState } from 'react';
import Empty from '@assets/images/EmptyPng.png';
import { useLanguage } from '@hooks/useLanguage.ts';
import { FileInput, Flex, Group, Image, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useUploadUserLogo } from '@modules/profile/hooks/useUploadUserLogo.ts';
import { BlueButton, GreyButton, Heading2, Heading3, Heading4 } from '@ui';

export const EditProfileImage = () => {
  const { l } = useLanguage();

  const [fileImg, setFileImg] = useState<File | null>(null);
  const [opened, { open, close }] = useDisclosure(false);
  const editProfileImg = useUploadUserLogo();

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={<Heading3>{l.userImage}</Heading3>}
      >
        <Heading4>{l.yourImage}</Heading4>
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
                editProfileImg.mutate(fileImg);
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

      <Heading2>{l.userImage}</Heading2>
      <Flex
        mih={50}
        mb={'20px'}
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
