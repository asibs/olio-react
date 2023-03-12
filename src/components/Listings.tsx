import React, { useState } from 'react';
import { Listing } from '../types';
import ListingsListView from './ListingsListView';
import ListingsMapView from './ListingsMapView';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

interface Props {
  listings: Listing[];
  renderMap?: boolean;
}

export default function Listings({ listings, renderMap = false }: Props) {
  const [viewedListingIds, setViewedListingIds] = useState<number[]>([]);

  const visibleListings = listings.filter((l) => !viewedListingIds.includes(l.id));

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
          listings={visibleListings}
          onViewListing={addViewedListingId}
        />
      </Tab>
      <Tab eventKey="map-view" title="Map View">
        {!renderMap && <p>Coming Soon!</p>}
        {renderMap && (
          <ListingsMapView
            listings={visibleListings}
            onViewListing={addViewedListingId}
          />
        )}
      </Tab>
    </Tabs>
  );
}
