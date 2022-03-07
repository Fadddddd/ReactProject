import logo from './logo.svg';
import './App.css';
import Plop from './components/plop';
import Headerperso from './components/headerperso';
import Panier from './components/panier';

function App() {
  return (
    <div className="App">
      <Plop />
      <Headerperso />
      <Panier/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <code>ça marche?</code>
        </p> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
