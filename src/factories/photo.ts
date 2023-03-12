import { Factory } from 'fishery';
import { Photo } from '../types';

const photoFactory = Factory.define<Photo>(({ sequence }) => ({
  uid: sequence.toString(),
  files: {
    original: 'https://placekitten.com/300/300',
    large: 'https://placekitten.com/300/300',
    medium: 'https://placekitten.com/200/200',
    small: 'https://placekitten.com/100/100',
  },
}));

export default photoFactory;
