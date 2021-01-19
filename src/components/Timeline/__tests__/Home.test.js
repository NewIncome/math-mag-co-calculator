import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../Home';

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

it('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders exactly to custom HTML', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot(`
  <section class="section">
  <h2 class="title">Welcome to our page!</h2>
  <p></p>
  </section>
  `);
});
