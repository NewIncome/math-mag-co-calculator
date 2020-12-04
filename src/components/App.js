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
      next: '0',
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    let data = this.state;
    data = Calculate(data, buttonName);
    const { total, next, operation } = data;

    this.setState(state => ({
      total: data.total,
      next: data.next,
      operation: data.operation,
    }));
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <>
        <Display result={next || total} />
        <ButtonPanel onClick={this.handleClick} />
      </>
    );
  }
}

export default App;
