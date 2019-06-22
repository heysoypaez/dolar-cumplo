import React, { Component } from 'react';
import "./styles/CurrencyChart.css";

 class CurrencyChart extends Component {

 	constructor(props) {
 		super(props)

 		this.state = {

 		}
 	}

	render() {
		return (
			<section className="CurrencyChart">
	
				<h2>Hello CurrencyChart</h2> 

			<canvas className="CurrencyChart__canvas">
				
			</canvas>

			</section>
		);
	}
}

export default CurrencyChart;
