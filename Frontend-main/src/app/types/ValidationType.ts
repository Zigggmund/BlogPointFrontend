import { ReactNode } from 'react';

export type ValidationType<T, P = undefined> = (
  value: T,
  values: P,
) => ReactNode;
