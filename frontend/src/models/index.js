// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SimpleExperienceCoin, SimpleStats, SimpleProperties, SimpleNFT, Post } = initSchema(schema);

export {
  SimpleExperienceCoin,
  SimpleStats,
  SimpleProperties,
  SimpleNFT,
  Post
};