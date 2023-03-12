import { Factory } from 'fishery';
import { Reactions } from '../types';

const reactionsFactory = Factory.define<Reactions>(() => ({
  likes: 0,
  views: 0,
}));

export default reactionsFactory;
