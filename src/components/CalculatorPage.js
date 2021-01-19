/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const CalculatorPage = props => (
  <section className="section1">
    <p>Let&apos;s do some math!</p>
    <div id="calcContainer">
      <div id="cBody">
        <div className="calcTop">
          <Display result={
            (props.total === null && props.next === null) ? '0' : props.next === null ? props.total : props.next
            }
          />
        </div>
        <div className="calcBtm">
          <ButtonPanel onClick={props.handleClick} />
        </div>
      </div>
    </div>
  </section>
);

export default CalculatorPage;
