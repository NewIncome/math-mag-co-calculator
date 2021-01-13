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

    this.setState(state => ({
      total: data.total,
      next: data.next,
      operation: data.operation,
    }));
  }

  render() {
    const { total, next } = this.state;

    return (
      <div id="cBody">
        <div className="calcTop">
          <Display result={
            (total === null && next === null) ? '0' : next === null ? total : next
            }
          />
        </div>
        <div className="calcBtm">
          <ButtonPanel onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
