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
    let { newTotal, newNext, newOperation } = Calculate(...this.state);
    this.setState({
      total: newTotal,
      next: newNext,
      operation: newOperation,
    });
  }

  render() {
    return (
      <>
        <Display result={this.total || this.next} />
        <ButtonPanel OnClick={this.handleClick} />
      </>
    );
  }
}

export default App;
