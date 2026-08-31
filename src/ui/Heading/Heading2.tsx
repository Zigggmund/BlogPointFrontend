import { FC } from 'react';
import { PolymorphicComponentProps, TextProps } from '@mantine/core';
import { Text } from '@mantine/core';

export const Heading2: FC<PolymorphicComponentProps<'text', TextProps>> = ({
  children,
  ...props
}) => {
  const Heading2Props = {
    size: '26px',
    pb: '10px',
    lh: '1.5',
  };

  return (
    <Text {...Heading2Props} {...props}>
      {children}
    </Text>
  );
};
