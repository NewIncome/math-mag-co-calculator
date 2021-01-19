import React, { Component } from 'react';
import '../App.css';
import Calculate from '../logic/calculate';
import CalculatorPage from './CalculatorPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    let data = this.state;
    data = Calculate(data, buttonName);

    this.setState(state => ({
      total: data.total,
      next: data.next,
      operation: data.operation,
    }));
  }

  render() {
    const { total, next } = this.state;

    return (
      <CalculatorPage
        total={total}
        next={next}
        handleClick={this.handleClick}
      />
      // <section className="section1">
      //   <p>Let&apos;s do some math!</p>
      //   <div id="calcContainer">
      //     <div id="cBody">
      //       <div className="calcTop">
      //         <Display result={
      //           (total === null && next === null) ? '0' : next === null ? total : next
      //           }
      //         />
      //       </div>
      //       <div className="calcBtm">
      //         <ButtonPanel onClick={this.handleClick} />
      //       </div>
      //     </div>
      //   </div>
      // </section>
    );
  }
}

export default App;
