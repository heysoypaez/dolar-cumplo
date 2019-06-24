import React, { Component} from 'react';
import "./styles/CurrencyInsights.css";

 class CurrencyInsights extends Component {

 	constructor(props) {
 		super(props)

 		this.state = {

      dolarData: {
        today: undefined,
        betweenDates: undefined, 
        values: undefined, // expect Array


      },

      calculations: {
        maxValue: undefined,
        minValue: undefined,
        average: undefined,
      },

      loading: false,
      error: null

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

  //Calculations

    calculateMaxDolarValue = () => {

      // Useful Doc - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
      const {values} = this.state.dolarData;
      const maxValue = Math.max(...values);

      this.setState({
        calculations: {
          ...this.state.calculations,
          maxValue: maxValue
        }
      })

      return maxValue;
    }

    calculateMinDolarValue = () => {

      // Useful Doc - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
      const {values} = this.state.dolarData;
      const minValue = Math.min(...values);

      this.setState({
        calculations: {
          ...this.state.calculations,
          minValue: minValue
        }
      })

      return minValue;
    }


    calculateAverageDolarValue = () => {

      // Useful Doc - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
      const {values} = this.state.dolarData;

      const total = values.reduce( (acumulator, currentValue) => {
        return acumulator + currentValue;
      })

      const averageValue = total/(values.length)



      this.setState({
        calculations: {
          ...this.state.calculations,
          average: averageValue
        }
      })

      return averageValue;
    }

  // Fetchs

    fetchDolarBetweenDates = async() => {

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
          }
        })

        return this.state.dolarData.betweenDates
      }

      catch(error) {
        console.error(error)
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
            	dolarData:	{

                ...this.state.dolarData,

                today: response.Dolares[0].Valor
              }
            })

            return this.state.dolarData.today
          }

          catch(error) {
            console.error(error)
          }  
    }

  componentDidMount = async() => {

  	await this.fetchData();
    await this.fetchDolarBetweenDates();

    this.setState({

      dolarData: {
        ...this.state.dolarData,
        values: this.dolarValues() 
      }
    })


    this.calculateMaxDolarValue();
    this.calculateMinDolarValue();
    this.calculateAverageDolarValue();

    console.log(this.state)
  }

	render() {

		if(this.state.dolarData && this.state.calculations) {
		
				return (
					<aside className="CurrencyInsights">
						<p> Hello CurrencyInsights </p> 

            <section className="CurrencyInsights__articles">

            <article className="CurrencyInsight">
              <h2>${this.state.dolarData.today}</h2>
              <small>Valor de hoy</small>
            </article>

            <article className="CurrencyInsight">
              <h2>${this.state.calculations.maxValue}</h2>
              <small>Valor Máximo</small>
            </article>

            <article className="CurrencyInsight">
              <h2>${this.state.calculations.average}</h2>
              <small>Valor Promedio</small>
            </article>

            <article className="CurrencyInsight">
              <h2>${this.state.calculations.minValue}</h2>
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
