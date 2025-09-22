import { useNavigate, useParams } from 'react-router-dom';
import { categories } from '@constants/categories.ts';
import { useLanguage } from '@hooks/useLanguage.ts';
import {
  Flex,
  Group,
  NativeSelect,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { EditChannelImage } from '@modules/channel/components/EditChannelImage/EditChannelImage.tsx';
import { useChannelEdit } from '@modules/channel/hooks/useChannelEdit.ts';
import { useGetChannelById } from '@modules/channel/hooks/useGetChannelById.ts';
import { BlueButton, FormBox, GreyButton, Heading1, Heading4 } from '@ui';



export const EditChannel = () => {
  const { l } = useLanguage();
  const navigate = useNavigate();
  const editChannel = useChannelEdit();
  const { id } = useParams();
  const channelId = Number(id);
  const channel = useGetChannelById(channelId);

  const form = useForm({
    initialValues: {
      name: channel.data?.data.data.name ?? '',
      description: channel.data?.data.data.description ?? '',
      categoryId: channel.data?.data.data.category.id ?? 1,
      channelId: channelId,
    },
    validate: {
      name: value =>
        value.length < 3 || value.length > 60 ? l.validationChannelName : null,
      description: value =>
        value && (value.length < 10 || value.length > 500)
          ? l.validationChannelDescription
          : null,
      categoryId: value =>
        value !== null && value !== undefined
          ? null
          : l.validationChannelCategory,
    },
  });

  return (
    <FormBox>
      <Heading1>{l.channelEditing}</Heading1>
      <Group justify="center" grow>
        <form
          onSubmit={form.onSubmit(values => {
            editChannel.mutate({
              channelId: channelId,
              name: values.name,
              categoryId: Number(values.categoryId),
              description: values.description,
            });
          })}
        >
          <EditChannelImage />
          <Flex direction="column" gap="md">
            <TextInput
              size="md"
              mt="sm"
              radius="lg"
              label={<Heading4 mb={5}>{l.channelName}</Heading4>}
              placeholder={l.enterChannelName}
              {...form.getInputProps('name')}
            />
            <Textarea
              size="md"
              mt="sm"
              radius="lg"
              label={<Heading4 mb={10}>{l.channelDescription}</Heading4>}
              placeholder={l.enterChannelDescription}
              {...form.getInputProps('description')}
            />
            <NativeSelect
              size="md"
              mt="sm"
              radius="lg"
              label={<Heading4 mb={5}>{l.channelCategory}</Heading4>}
              data={categories.map(category => ({
                value: category.id.toString(), // значение id как строка
                label: category.name, // отображаемое имя категории
              }))}
              key={form.key('categoryId')}
              {...form.getInputProps('categoryId')}
            />
            <Flex
              mih={50}
              gap={{ base: '0', xs: 'xs' }}
              justify="center"
              align="center"
              direction={{ base: 'column', xs: 'row' }}
            >
              <GreyButton onClick={() => navigate(`/channel/${channelId}`)} mt="sm" w={'fit-content'}>
                {l.btnCancel}
              </GreyButton>
              <BlueButton type="submit" mt="sm" w={'fit-content'}>
                {l.btnConfirm}
              </BlueButton>
            </Flex>
          </Flex>
        </form>
      </Group>
    </FormBox>
  );
};
