import { FC } from 'react';
import { darkBackgroundColor } from '@constants';
import { PolymorphicComponentProps, TextProps } from '@mantine/core';
import { Text } from '@mantine/core';

export const Heading5: FC<PolymorphicComponentProps<'text', TextProps>> = ({
  children,
  ...props
}) => {
  const Heading5Props = {
    size: '17px',
    color: darkBackgroundColor,
    fw: '500',
    lh: '1.4',
  };

  return (
    <Text {...Heading5Props} {...props}>
      {children}
    </Text>
  );
};
