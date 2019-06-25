import React, { Component, Fragment } from 'react';

const AppContext = React.createContext();

class Provider extends Component {

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

     setDateQuery: this.setDateQuery

 		}
 	}

	dolarValues = () => {

		return this.state.dolarData.betweenDates.Dolares.map( (elem) => {
	   
	  let {Valor} = elem;

	  //I am converting each comma in a dot because JS does not recognize the comma like a float number
	  Valor = Valor.replace("," , "." )



	  return parseFloat(Valor)

		 })
	}

	dolarDates = () => {

		return this.state.dolarData.betweenDates.Fecha.map( (elem) => {
	   
	  let {Fecha: date} = elem;

	  return date

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
	        year: 2018          
	      },
	      final: {
	        day: 30,
	        month: "06",
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
	        	dolarData:	{

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

	setDateQuery = (type, start, final) => {

		this.setState({
			dateQuery: {
		   	type: type,
	     	start: start,
	     	final: final			
			}
		})
		//date
	}


	render() {
		return (
			<AppContext.Provider value={ {state: this.state} }>
			 {this.props.children}
			</AppContext.Provider>
		);
	}
}

export { Provider as default,  AppContext};

/*
Example of how to use it in the consurmer

						<AppContext.Consumer>
					{
						(context) => {


						return <h1>{context.state.developer}</h1>
					}}
				</AppContext.Consumer>	

*/
