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

  handleClick(btnName) {
    this.setState({ next: btnName });
  }

  render() {
    const { next } = this.state;

    return (
      <>
        <Display result={next} />
        <ButtonPanel handleChange={this.handleClick} />
      </>
    );
  }
}

export default App;
