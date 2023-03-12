import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { Listing } from '../types';
import Listings from './Listings';
import listingFactory from '../factories/listing';

test('renders all listings when none have been viewed', () => {
  const titles = ['Listing #1', 'Listing #2'];
  const listing1 = listingFactory.build({ title: titles[0] });
  const listing2 = listingFactory.build({ title: titles[1] });

  render(<Listings listings={[listing1, listing2]} />);

  expect(screen.getByText(titles[0])).toBeInTheDocument();
  expect(screen.getByText(titles[1])).toBeInTheDocument();
});

test('hides viewed listings', async () => {
  const titles = ['Listing #1', 'Listing #2'];
  const listing1 = listingFactory.build({ title: titles[0] });
  const listing2 = listingFactory.build({ title: titles[1] });

  render(<Listings listings={[listing1, listing2]} />);

  // Click the 'View' button on the first listing to show the 'Close' button
  await act( async () => {
   userEvent.click(screen.getAllByText('View')[0]);
  });

  expect(screen.getByText('Close')).toBeInTheDocument(); // Validate the 'Close' button is visible

  // Click the 'Close' button
  await act( async () => {
   userEvent.click(screen.getByText('Close'));
  });

  expect(screen.queryByText(titles[0])).not.toBeInTheDocument(); // listing1 hidden
  expect(screen.getByText(titles[1])).toBeInTheDocument(); // listing2 still visible
});
