import { IResolvers } from 'graphql-tools';
import mutation from './mutation';
import query from './query';
import type from './type';

export const LIST: string[] = [];
const resolvers: IResolvers = {
  ...query,
  ...type,
  ...mutation,
};

export default resolvers;
