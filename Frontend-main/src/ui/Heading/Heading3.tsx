import { FC } from 'react';
import { PolymorphicComponentProps, TextProps } from '@mantine/core';
import { Text } from '@mantine/core';

export const Heading3: FC<PolymorphicComponentProps<'text', TextProps>> = ({
  children,
  ...props
}) => {
  const Heading3Props = {
    size: '24px',
    pb: '5px',
    lh: '1.6',
  };

  return (
    <Text {...Heading3Props} {...props}>
      {children}
    </Text>
  );
};
