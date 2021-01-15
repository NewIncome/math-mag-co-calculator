import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Home from './../../Home';

test('renders Welcome to our page!', () => {
  render(<Home />);
  const titleElement = screen.getByText(/Welcome to our page!/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders a paragraph', () => {
  render(<Home />);
  const pElem = screen.getByText(/Lorem/i);
  expect(pElem).toBeVisible();
});