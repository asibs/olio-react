import { Factory } from 'fishery';
import { User } from '../types';

const userFactory = Factory.define<User>(({ sequence }) => ({
  id: sequence,
  first_name: 'Andrew',
  current_avatar: {
    original: 'https://placekitten.com/300/300',
    large: 'https://placekitten.com/300/300',
    small: 'https://placekitten.com/100/100',
  },
  rating: {
    rating: 10,
  },
}));

export default userFactory;
