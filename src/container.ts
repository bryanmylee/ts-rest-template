import 'reflect-metadata';
import { Container } from 'typedi';
import { useContainer as rcUse } from 'routing-controllers';

export const configContainer = () => {
  rcUse(Container);
};

