import './App.css';
import Countdown from './components/Countdown';
import  DigitalClock from './components/DigitalClock';
import Stopwatch from './components/Stopwatch';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='clock'><DigitalClock></DigitalClock></div>
      <Countdown></Countdown>
      <Stopwatch></Stopwatch>
      </header>
    </div>
  );
}

export default App;
