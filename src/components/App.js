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
    console.log('before Data');
    console.log(data);
    data = Calculate(data, buttonName);
    console.log('after Data');
    console.log(data);
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
        <Display result={
          (total === null && next === null) ? '0' : next === null ? total : next
          }
        />
        <ButtonPanel onClick={this.handleClick} />
      </>
    );
  }
}

export default App;
