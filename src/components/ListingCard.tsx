import React, { useState } from 'react';
import { Listing } from '../types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Eye, GeoAlt, StarFill } from 'react-bootstrap-icons';

interface Props {
  listing: Listing;
}

export default function Listings({
  listing,
}: Props) {
  const imgSrc = (listing.photos.length > 0) ? listing.photos[0].files.medium : 'holder.js/100px180';

  console.log(listing);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{listing.title}</Card.Title>
        <Card.Text>
          <Container>
            <Row>
              <Col>{listing.user.first_name}</Col>
              <Col>
                <StarFill color="gold" />
                {listing.user.rating.rating}
              </Col>
            </Row>
            <Row>
              <Col><GeoAlt /> {listing.location.distance}mi</Col>
              <Col><Eye /> {listing.reactions.views}</Col>
            </Row>
          </Container>
        </Card.Text>
        <Button variant="primary">View</Button>
      </Card.Body>
    </Card>
  );
}
