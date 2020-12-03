import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

class App extends React.Component {
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
    const { total, next, operation } = data;

    this.setState(prev => ({
      ...prev, total, next, operation,
    }));
  }

  render() {
    const { operation, next } = this.state;

    return (
      <>
        <Display result={this.total || this.next} />
        <ButtonPanel onClick={this.handleClick} />
      </>
    );
  }
}

export default App;
