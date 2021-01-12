import React, { useState, useEffect } from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

const App = () => {
  const [calcVars, setCalcVars] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    let data = calcVars;
    data = Calculate(data, buttonName);

    setCalcVars({
      ...calcVars,
      total: data.total,
      next: data.next,
      operation: data.operation,
    });
  };

  // const { total, next } = calcVars;

  return (
    <>
      <Display result={
        (calcVars.total === null && calcVars.next === null) ? '0' : calcVars.next === null ? calcVars.total : calcVars.next
        }
      />
      <ButtonPanel onClick={handleClick} />
    </>
  );
};

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       total: null,
//       next: null,
//       operation: null,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(buttonName) {
//     let data = this.state;
//     data = Calculate(data, buttonName);
//     const { total, next, operation } = data;

//     this.setState(state => ({
//       total: data.total,
//       next: data.next,
//       operation: data.operation,
//     }));
//   }

//   render() {
//     const { total, next, operation } = this.state;

//     return (
//       <>
//         <Display result={
//           (total === null && next === null) ? '0' : next === null ? total : next
//           }
//         />
//         <ButtonPanel onClick={this.handleClick} />
//       </>
//     );
//   }
// }

export default App;
