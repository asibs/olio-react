import { Factory } from 'fishery';
import { Listing } from '../types';
import locationFactory from './location';
import photoFactory from './photo';
import reactionsFactory from './reactions';
import userFactory from './user';

const listingFactory = Factory.define<Listing>(({ sequence }) => ({
  id: sequence,
  title: 'My Item',
  description: 'A great item!',
  section: 'product',
  location: locationFactory.build(),
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  status: 'active',
  expiry: new Date().toISOString(),
  collection_notes: 'anytime',
  reactions: reactionsFactory.build(),
  photos: photoFactory.buildList(2),
  user: userFactory.build(),
}));

export default listingFactory;
