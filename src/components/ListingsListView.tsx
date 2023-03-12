import React, { useState } from 'react';
import { Listing } from '../types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface Props {
  listings: Listing[];
  viewedListingIds: string[];
  onViewListing: (id: string) => void;
}

export default function Listings({
  listings,
  viewedListingIds,
  onViewListing,
}: Props) {
  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4}>
        {listings.map((l) => {
          return (
            <Col key={l.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{l.title}</Card.Title>
                  <Card.Text>
                    {l.description}
                  </Card.Text>
                  <Button variant="primary">View</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
