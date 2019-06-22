import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./components/Header.js";
import CurrencyChart from "./components/CurrencyChart.js";
import CurrencyInsights from "./components/CurrencyInsights.js";
import DateForm from "./components/DateForm.js";


function App() {
  
  return (
    <div className="App">

      <Header />
      <CurrencyChart />
      <CurrencyInsights />
      <DateForm />

    </div>
  );
}

export default App;
