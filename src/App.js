import logo from './mainlogo.png';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Autumn's Crab</p>
        
      </header>
      <Main />
    </div>
  );
}

export default App;
