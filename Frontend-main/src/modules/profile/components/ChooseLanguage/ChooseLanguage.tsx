import { FC, useEffect } from 'react';
import { IUser } from '@app-types';
import { languages } from '@constants';
import { useLanguage } from '@hooks/useLanguage.ts';
import { Flex, Group, Modal, NativeSelect } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { BlueButton, GreyButton, Heading3, Heading4, Label } from '@ui';

interface IEditProfileInfoProps {
  user?: IUser;
}

export const ChooseLanguage: FC<IEditProfileInfoProps> = props => {
  const { language, setLanguage, l } = useLanguage();
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      language: props?.user?.language ?? 'ru',
    },
  });
  // для корректного default language в модалке
  useEffect(() => {
    if (props.user?.language) {
      form.setFieldValue('language', props.user.language);
    }
  }, [props.user?.language]);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={<Heading3>{l.changingUserLanguage}</Heading3>}
      >
        <form
          onSubmit={form.onSubmit(values => {
            setLanguage(values.language);
            close();
          })}
        >
          <NativeSelect
            size="md"
            mt="sm"
            mb="sm"
            radius="lg"
            label={<Heading4 mb={5}>{l.selectLanguage}</Heading4>}
            data={Object.entries(languages).map(([value, label]) => ({
              value, // 'en', 'ru', ...
              label, // 'English', 'Russian', ...
            }))}
            key={form.key('language')}
            {...form.getInputProps('language')}
          />
          <Group mt="lg" justify="flex-end">
            <GreyButton
              onClick={() => {
                form.reset();
                close();
              }}
            >
              {l.btnCancel}
            </GreyButton>
            <BlueButton type="submit">{l.btnSave}</BlueButton>
          </Group>
        </form>
      </Modal>

      <Flex direction={'column'} gap={'15px'} mb={'20px'}>
        <Label
          title={l.language}
          text={props.user?.language ? languages[props.user.language] : ''}
        />
        <BlueButton w={{ base: '160px' }} onClick={open}>
          {l.btnChange}
        </BlueButton>
      </Flex>
    </>
  );
};
