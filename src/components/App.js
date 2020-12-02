import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

function App() {
  return (
    <>
      <Display result={0} />
      <ButtonPanel />
    </>
  );
}

export default App;
