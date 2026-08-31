import { ReactNode } from 'react';
import { ValidationType } from '@app-types';

export const validationOneParameterWrapper = <T>(
  callback: () => ReactNode,
): ReturnType<ValidationType<T>> => {
  return callback();
};
