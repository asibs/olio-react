import React, { useState } from 'react';
import { Listing } from '../types';
import ListingCard from './ListingCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface Props {
  listings: Listing[];
  onViewListing: (id: number) => void;
}

export default function Listings({
  listings,
  onViewListing,
}: Props) {
  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4}>
        {listings.map((l) => {
          return (
            <Col key={l.id}>
              <ListingCard
                listing={l}
                onViewListing={() => onViewListing(l.id)}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
