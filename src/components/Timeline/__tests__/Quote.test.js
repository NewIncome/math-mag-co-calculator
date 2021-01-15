import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DayQuote from '../../DayQuote';

test('renders a title', () => {
  render(<DayQuote />);
  const titleElement = screen.getByText(/Quote of the Day/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders a quote', () => {
  render(<DayQuote />);
  const pElem = screen.getByText(/Mathematics/i);
  expect(pElem).toBeVisible();
});
