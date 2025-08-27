// Assim que comenta!
import logo from './logo.svg';
import './App.css';
//Hooks mais importantes: UseState e UseEffect
import {useEffect, useState} from 'react';


function App() {
  const [data, setData] = useState('Meu valor inicial');

  useEffect(() => {
    setData('Meu novo valor');
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estado Inicial
          Minha variável de estado vale: {data}
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
