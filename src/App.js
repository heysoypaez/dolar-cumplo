import React from 'react';
import './App.css';

import Header from "./components/Header.js";
import CurrencyChart from "./components/CurrencyChart.js";
import CurrencyInsights from "./components/CurrencyInsights.js";
import DateForm from "./components/DateForm.js";
import Provider from "./AppContext.js"


function App() {
  
  return (
    <Provider>
    <div className="App">

      <Header />
      <CurrencyChart />
      <CurrencyInsights />
      <DateForm />

    </div>
    </Provider>
  );
}

export default App;
