import React, { Component} from 'react';
import "./styles/CurrencyInsights.css";
import MiniLoader from "./MiniLoader.js";

 class CurrencyInsights extends Component {

 	constructor(props) {
 		super(props)

 		this.state = {

      dolarData: this.props.dolarData,

      calculations: {
        maxValue: undefined,
        minValue: undefined,
        average: undefined,
      },

      loading: false,
      error: null
 		}
 	}


  //Calculations

    calculateMaxDolarValue = (values) => {

      const maxValue = Math.max(...values);

      this.setState({
        calculations: {
          ...this.state.calculations,
          maxValue: maxValue
        }
      })

      return maxValue;
    }

    calculateMinDolarValue = (values) => {

      const minValue = Math.min(...values);

      this.setState({
        calculations: {
          ...this.state.calculations,
          minValue: minValue
        }
      })

      return minValue;
    }

    calculateAverageDolarValue = (values) => {

      const total = values.reduce( (acumulator, currentValue) => {
        return acumulator + currentValue;
      })



      const averageValue = (total/(values.length) ).toFixed(2);


      this.setState({
        calculations: {
          ...this.state.calculations,
          average: averageValue
        }
      })

      return averageValue;
    }

    componentDidMount = async() => {

      const {values} = this.props.dolarData;

      if(values) {

        await this.calculateAverageDolarValue(values);   
        await this.calculateMaxDolarValue(values);
        await this.calculateMinDolarValue(values);
           
      }  
    }

  	render() {

      if(this.state.loading) {

        return(
          <section className="CurrencyInsights">
           <MiniLoader />
          </section>
        )
      }
	
			return (
				<aside className="CurrencyInsights">
					<h3> Insights </h3> 

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

    componentWillUnmout = () => {

    }
}

export default CurrencyInsights;
