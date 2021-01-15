import '@testing-library/jest-dom'
import React from 'react';
import renderer from 'react-test-renderer';
import App from './../../App';

test('renders a call to action text', () => {
  const page = renderer
    .create(<App />)
    .toJSON();
  expect(page).toMatchSnapshot();
});
