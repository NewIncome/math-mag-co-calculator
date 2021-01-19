import React from 'react';
import renderer from 'react-test-renderer';
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

it('renders correctly', () => {
  const tree = renderer.create(<DayQuote />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <section
      className="section"
    >
      <h2
        className="title"
      >
        Quote of the Day
      </h2>
      <blockquote>
        Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. –William Paul Thurston
      </blockquote>
    </section>
  `);
});
