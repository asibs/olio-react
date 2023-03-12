import { Factory } from 'fishery';
import { Location } from '../types';

const locationFactory = Factory.define<Location>(() => ({
  latitude: 51.503368,
  longitude: -0.127721,
  distance: 5.5,
}));

export default locationFactory;
