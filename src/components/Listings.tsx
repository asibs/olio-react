import React, { useState } from 'react';
import { Listing } from '../types';
import ListingsListView from './ListingsListView';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

interface Props {
  listings: Listing[];
}

export default function Listings({ listings }: Props) {
  const [mapView, setMapView] = useState(false); // Default to list view
  const [viewedListingIds, setViewedListingIds] = useState<number[]>([]);

  const addViewedListingId = (id: number) => {
    setViewedListingIds(previousViewedListingIds => [...previousViewedListingIds, id]);
  }

  return (
    <Tabs
      id="listings-tabs"
      defaultActiveKey="list-view"
      className="mb-3"
    >
      <Tab eventKey="list-view" title="List View">
        <ListingsListView
          listings={listings.filter((l) => !viewedListingIds.includes(l.id))}
          onViewListing={addViewedListingId}
        />
      </Tab>
      <Tab eventKey="map-view" title="Map View">
        <p>Coming soon...!</p>
      </Tab>
    </Tabs>
  );
}
