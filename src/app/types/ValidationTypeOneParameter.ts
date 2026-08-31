import { ReactNode } from 'react';

export type ValidationTypeOneParameter<T> = (value: T) => ReactNode;
