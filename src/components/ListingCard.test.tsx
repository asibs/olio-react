import React from 'react';
import { within } from '@testing-library/dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { Listing } from '../types';
import ListingCard from './ListingCard';
import listingFactory from '../factories/listing';

test('renders the correct title', () => {
  const title = 'The Best Test Item';
  const testListing = listingFactory.build({
    title: title,
  });

  render(<ListingCard listing={testListing} onViewListing={jest.fn()} />);

  expect(screen.getByRole('heading')).toBeInTheDocument();
  expect(within(screen.getByRole('heading')).getByText(title)).toBeInTheDocument();
});

test('renders the correct user name', () => {
  const userName = 'Andrew';
  const testListing = listingFactory.build({
    user: {
      first_name: userName,
    },
  });

  render(<ListingCard listing={testListing} onViewListing={jest.fn()} />);

  expect(screen.getByText(userName)).toBeInTheDocument();
});

test('clicking the view button expands the card and shows the description', async () => {
  const description = 'A really great test item description';
  const testListing = listingFactory.build({
    description: description,
  });

  render(<ListingCard listing={testListing} onViewListing={jest.fn()} />);

  expect(screen.queryByText(description)).not.toBeInTheDocument();

  await act( async () => {
   userEvent.click(screen.getByText('View'));
  });

  expect(screen.getByText(description)).toBeInTheDocument();
});

test('clicking the hide button calls the onView callback', async () => {
  const onViewCallback = jest.fn();
  const testListing = listingFactory.build();

  render(<ListingCard listing={testListing} onViewListing={onViewCallback} />);

  // Click the 'View' button to expand the card and show the 'Close' button
  await act( async () => {
   userEvent.click(screen.getByText('View'));
  });

  expect(screen.getByText('Close')).toBeInTheDocument(); // Validate the 'Close' button is visible

  // Click the 'Close' button
  await act( async () => {
   userEvent.click(screen.getByText('Close'));
  });

  expect(onViewCallback).toHaveBeenCalledTimes(1);
});
