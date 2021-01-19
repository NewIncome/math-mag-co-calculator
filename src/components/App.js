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
    );
  }
}

export default App;
