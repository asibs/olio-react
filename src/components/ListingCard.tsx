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
  onViewListing: () => void;
}

export default function Listings({
  listing,
  onViewListing,
}: Props) {
  const [viewing, setViewing] = useState(false);

  const onClickView = () => {
    setViewing(true);
  };

  const imgSrc = (listing.photos.length > 0) ? listing.photos[0].files.medium : 'holder.js/100px180';

  return (
    <Card>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>
          <h5>{listing.title}</h5>
        </Card.Title>

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

          {!viewing && (
            <Row>
              <Button variant="primary" onClick={onClickView}>View</Button>
            </Row>
          )}

          {viewing && (
            <>
              <Row>{listing.description}</Row>
              <Row>{listing.collection_notes}</Row>
              <Row>
                <Col>
                  <Button variant="primary" onClick={() => alert("You'll be able to request items soon!")}>Request this item</Button>
                </Col>
                <Col>
                  <Button variant="primary" onClick={onViewListing}>Close</Button>
                </Col>
              </Row>
            </>
          )}
        </Container>
      </Card.Body>
    </Card>
  );
}
