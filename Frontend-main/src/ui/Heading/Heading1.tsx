import { FC } from 'react';
import { PolymorphicComponentProps, TextProps } from '@mantine/core';
import { Text } from '@mantine/core';

export const Heading1: FC<PolymorphicComponentProps<'text', TextProps>> = ({
  children,
  ...props
}) => {
  const Heading1Props = {
    size: '48px',
    fw: 600,
    pt: '10px',
    pb: '10px',
  };

  return (
    <Text {...Heading1Props} {...props}>
      {children}
    </Text>
  );
};
