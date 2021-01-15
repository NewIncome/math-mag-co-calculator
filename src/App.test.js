import { render, screen } from '@testing-library/react';
import Home from './components/Home';

test('renders Welcome to our page!', () => {
  render(<Home />);
  const titleElement = screen.getByText(/Welcome to our page!/i);
  expect(titleElement).toBeInTheDocument();
});
