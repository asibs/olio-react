import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Listing } from '../types';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

export default function App() {
  // TODO: This may be better suited as config or an ENV VAR, etc for more flexibility
  const LISTINGS_URI = 'https://s3-eu-west-1.amazonaws.com/olio-staging-images/developer/test-articles-v4.json';

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [listings, setListings] = useState<Listing[]>([]);

  const fetchItems = () => {
    axios.get(LISTINGS_URI)
      .then((response) => {
        setListings(response.data);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <Container>
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      {error && (
        <Alert variant="danger">
          Sorry, something went wrong - please try again later.
        </Alert>
      )}

      {!loading && !error && (
        <p>Got {listings.length} listings!</p>
      )}
    </Container>
  );
}
