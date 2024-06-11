import logo from './logo.svg';
import './App.css';
import Fretboard from './components/Fretboard';
import ScaleDecider from './components/ScaleDecider';

function App() {
  return (
    <div className="App">
      <ScaleDecider />
      <Fretboard />
    </div>
  );
}

export default App;
