import React from 'react';
import ListingCard from './ListingCard';
import { Listing } from '../types';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix leaflet marker icons as described here:
// https://stackoverflow.com/questions/49441600/react-leaflet-marker-files-not-found
const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

interface Props {
  listings: Listing[];
  onViewListing: (id: number) => void;
}

export default function Listings({
  listings,
  onViewListing,
}: Props) {
  const latitude = listings[0]?.location?.latitude || 51.505;
  const longitude = listings[0]?.location?.longitude || -0.09;

  return (
    <MapContainer
    zoom={9}
      center={[latitude, longitude]}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "85vh" }}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <>
      {listings.map((l) => {
        return (
          <Marker key={l.id} position={[l.location.latitude, l.location.longitude]}>
            <Popup>
              <ListingCard
                listing={l}
                onViewListing={() => onViewListing(l.id)}
              />
            </Popup>
          </Marker>
        );
      })}
      </>
    </MapContainer>
  );
}
