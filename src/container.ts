import 'reflect-metadata';
import { useContainer as rcUse } from 'routing-controllers';
import { Container } from 'typedi';

export const configContainer = (): void => {
  rcUse(Container);
};
