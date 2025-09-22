import { FC } from 'react';
import { PolymorphicComponentProps, TextProps } from '@mantine/core';
import { Text } from '@mantine/core';

export const Heading4: FC<PolymorphicComponentProps<'text', TextProps>> = ({
  children,
  ...props
}) => {
  const Heading4Props = {
    size: '18px',
    pb: '5px',
    lh: '1.6',
  };

  return (
    <Text {...Heading4Props} {...props}>
      {children}
    </Text>
  );
};
