import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import App from '../../App';

it('renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchInlineSnapshot();
});
