import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  (async function() {
  
    try {

      const PREFIX_API = "https://api.sbif.cl/api-sbifv3/recursos_api/"

      const API_KEY = "9c84db4d447c80c74961a72245371245cb7ac15f"

      const data = await fetch(`${PREFIX_API}dolar?apikey=${API_KEY}&formato=json`)
      const response = await data.json()


      console.log(response.Dolares[0])
    }
    catch(error) {
      console.log("API error:",error)
    }

    })();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
