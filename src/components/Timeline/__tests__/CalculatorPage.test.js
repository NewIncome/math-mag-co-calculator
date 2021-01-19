import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import CalculatorPage from '../../CalculatorPage';

it('calculator page renders correctly', () => {
  const tree = renderer.create(<CalculatorPage />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('calculator page renders exactly all HTML elements', () => {
  const tree = renderer
    .create(<CalculatorPage />)
    .toJSON();
  expect(tree).toMatchSnapshot(`
  <section class="section1">
    <p>Let's do some math!</p>
    <div id="calcContainer">
      <div id="cBody">
        <div class="calcTop">
          <div class="display"></div>
        </div>
        <div class="calcBtm">
          <div class="group1 group"></div>
          <div class="group2 group"></div>
          <div class="group3 group"></div>
          <div class="group4 group"></div>
          <div class="group5 group"></div>
        </div>
      </div>
    </div>
  </section>
  `);
});
