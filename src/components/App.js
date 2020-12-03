import '../App.css';
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // total: null,
      next: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ next: event.target.name });
  }

  render() {
    const { next } = this.state;

    return (
      <>
        <Display result={next} />
        <ButtonPanel onClick={this.handleClick} />
      </>
    );
  }
}

export default App;
