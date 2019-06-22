import React, { Component, Fragment } from 'react';

 class CurrencyInsights extends Component {

 	constructor(props) {
 		super(props)

 		this.state = {
 			dolarToday: undefined
 		}
 	}

 	fetchData =  async() => {
      
        try {
    
          const PREFIX_API = "https://api.sbif.cl/api-sbifv3/recursos_api/"
          const API_KEY = "9c84db4d447c80c74961a72245371245cb7ac15f"
          let YEAR = 2015
   

          const data =  await fetch(`${PREFIX_API}dolar/${YEAR}?apikey=${API_KEY}&formato=json`)
          const response = await data.json()

          this.setState({
          	dolarToday:	response.Dolares[0].Valor
          })

          return console.log(this.state.dolarToday)
        }
        catch(error) {
          console.log("API error:",error)
        }  
  }

  componentDidMount = () => {
  	this.fetchData();
  }

	render() {

		if(this.state.dolarToday){
		
				return (
					<Fragment>
						Hello CurrencyInsights 
						<h1>${this.state.dolarToday}</h1>
					</Fragment>
				);
		}

		return (
		 	<p>loading...</p>
		 )

	}
}

export default CurrencyInsights;
