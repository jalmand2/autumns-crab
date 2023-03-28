import logo from './mainlogo.png';
import foodBack from './images/food4.jpeg';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundImage: 'url(' + foodBack, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 class="text-format">Autumn's Crab</h1>
        <p class="text-format">Brevard County's home of delicious, affordable seafood!</p>
        
      </header>
      <Main />
    </div>
  );
}

export default App;
