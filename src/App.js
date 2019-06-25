import React , {Component} from 'react';
import './App.css';

import Header from "./components/Header.js";
import CurrencyChart from "./components/CurrencyChart.js";
import CurrencyInsights from "./components/CurrencyInsights.js";
import DateForm from "./components/DateForm.js";

import Loader from "./components/Loader.js"


class App extends Component {


  constructor(props) {
    super(props)

    this.state = {

      dolarData: {
        today: undefined, // expect Object
        betweenDates: undefined, // expect Object
        values: undefined, // expect Array
        dates: undefined, // expect Array
     },

     dateQuery: {

      type: undefined,
      start: {},
      final: {}
     },

     loading: false,
     error: null
    }
  }

  dolarValues = () => {

    this.setState({
      loading: true
    })

    const {Dolares: dollars} = this.state.dolarData.betweenDates

    const values = dollars.map( (elem) => {
     
      let {Valor} = elem;

      //I am converting each comma in a dot because JS does not recognize the comma like a float number
      Valor = Valor.replace("," , "." )

      return parseFloat(Valor)
    })

    return this.setState({
      loading: false,
      dolarData: {
        ...this.state.dolarData,
        values: values
      }
    }) 
  }

  dolarDates = () => {

    this.setState({
      loading: true
    })

    const {Dolares: dollars} = this.state.dolarData.betweenDates

    const dates = dollars.map( (elem) => {

    let {Fecha: date} = elem;

    return date

     })

    return this.setState({
      loading: false,
      dolarData: {
        ...this.state.dolarData,
        dates: dates
      }
    })
  }

  fetchDolarBetweenDates = async() => {

    this.setState({
      loading: true,
      error: null
    })


    try {


      const PREFIX_API = "https://api.sbif.cl/api-sbifv3/recursos_api/";
      const API_KEY = "9c84db4d447c80c74961a72245371245cb7ac15f";
      
      const date = {

        start: {
          day: 15,
          month: "06",
          year: 2010          
        },
        final: {
          day: 30,
          month: "07",
          year: 2018  
        }
      }

      const startingDate = `${date.start.year}/${date.start.month}/dias_i/${date.start.day}`;
      const finalDate = `${date.final.year}/${date.final.month}/dias_f/${date.final.day}`;

      //Final version
      const data = await fetch(`${PREFIX_API}dolar/periodo/${startingDate}/${finalDate}?apikey=${API_KEY}&formato=json`);
      const response = await data.json()

      this.setState({
        dolarData: {
          ...this.state.dolarData,
          betweenDates: response
        },
        loading: false,
        error: null
      })

      return this.state.dolarData.betweenDates
    }

    catch(error) {
     this.setState({
        loading: false,
        error: error

      })
      console.error(error)
    }
  }

  fetchData =  async() => {

      this.setState({
        loading: true,
        error: null

      })

      
        try {
    
          const PREFIX_API = "https://api.sbif.cl/api-sbifv3/recursos_api/"
          const API_KEY = "9c84db4d447c80c74961a72245371245cb7ac15f"
          let YEAR = 2015
   

          const data =  await fetch(`${PREFIX_API}dolar/${YEAR}?apikey=${API_KEY}&formato=json`)
          const response = await data.json()

          this.setState({
            dolarData:  {

              ...this.state.dolarData,

              today: response.Dolares[0].Valor
            },
            loading: false,
            error: null
          })

          return this.state.dolarData.today
        }

        catch(error) {

          this.setState({
            loading: false,
            error: error
          })

          console.error(error)
        }  
  }

  componentDidMount = async() => {


    try {
    await this.fetchData();
    await this.fetchDolarBetweenDates();
    await this.dolarValues();
    await this.dolarDates();
    console.log(this.state);
    }
    catch(error) {

      this.setState({
        loading: false,
        error: error
       })

     console.error(error)
    } 
  }


                                    
render() {

  if(this.state.loading) {

    return(
     <main className="App"> 
      <p>Estamos haciendo las consultas aburridas por ti</p>
      <Loader />
     </main>
     )
  }

  if(this.state.error) {

    return(
     <main className="App"> 


      <code>{this.state.error.message}</code>

      <section>
        <p>Erroooor </p>
        <Loader />
      </section>

     </main>
    )
  }

  return (
    <main className="App">

      <Header />
      <CurrencyChart dolarData={this.state.dolarData} />
      <CurrencyInsights dolarData={this.state.dolarData} />
      <DateForm />

    </main>
  )}
}

export default App;
