import React, { Component} from 'react';
import "./styles/CurrencyInsights.css";

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
					<aside className="CurrencyInsights">
						<p> Hello CurrencyInsights </p> 
						<h1>${this.state.dolarToday}</h1>

            <section className="CurrencyInsights__articles">

            <article className="CurrencyInsight">
              <h2>$600</h2>
              <small>Valor de hoy</small>
            </article>

            <article className="CurrencyInsight">
              <h2>$600</h2>
              <small>Valor Máximo</small>
            </article>

            <article className="CurrencyInsight">
              <h2>$600</h2>
              <small>Valor Promedio</small>
            </article>

            <article className="CurrencyInsight">
              <h2>$600</h2>
              <small>Valor Mínimo</small>
            </article>

            </section>


					</aside>
				);
		}

		return (
		  <section className="CurrencyInsights">
		 	<p>loading...</p>
		 	</section>
		 )
	}
}

export default CurrencyInsights;
