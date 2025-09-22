import { FC } from 'react';
import { ICategory } from '@app-types';
import { Button } from '@mantine/core';

export const Category: FC<ICategory> = props => {
  return (
    <Button
      id={`${props.id}`}
      variant="outline"
      mb="5px"
      w="fit-content"
      pl="5px"
      pr="5px"
      bd={`solid ${props.color} 2px`}
      style={{ color: props.color, borderRadius: '20px' }}
    >
      {props.name}
    </Button>
  );
};
