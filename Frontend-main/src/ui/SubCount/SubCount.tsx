import { Flex, FlexProps, Text } from '@mantine/core';
import { IconAccessible } from '@tabler/icons-react';
import { addSpacesToNumber } from '@utils';

interface SubCountProps extends FlexProps {
  isJustifiedEnd?: boolean;
  subNumber?: number | undefined;
}

export const SubCount = ({
  isJustifiedEnd = false,
  subNumber,
  ...rest
}: SubCountProps) => {
  return (
    <Flex // ИконкаПодписчик|Число
      gap="10px"
      align="center"
      justify={isJustifiedEnd ? 'flex-end' : 'start'}
      {...rest}
    >
      <IconAccessible size="2.2rem" stroke={2.5} color="#3ec96f" />
      <Text size="1.2rem" style={{ whiteSpace: 'nowrap' }}>
        <i>{addSpacesToNumber(subNumber ?? 0)}</i>
      </Text>
    </Flex>
  );
};
