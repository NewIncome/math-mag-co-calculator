import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import CalculatorPage from '../../CalculatorPage';

it('renders correctly', () => {
  const tree = renderer.create(<CalculatorPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
