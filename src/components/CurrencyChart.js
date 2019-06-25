import React, { Component } from 'react';
import "./styles/CurrencyChart.css";

 class CurrencyChart extends Component {

 	constructor(props) {
 		super(props)

 		this.state = {

 			chart: {
 				height: 800,
 				width: 1000
 			}

 		}
 	}

 	componentDidMount = () => {
 					
		const drawCurrencyChart = (  () =>  {

				const {height: maxHeight, width: maxWidth} = this.state.chart

				const canvas = document.getElementById('currencyChart');
				const ctx = canvas.getContext('2d');

				const xAxis = {
					limit: maxWidth
				}

				const yAxis = {
					limit: maxHeight
				}


				ctx.fillStyle = 'blue';
				ctx.fillRect(0, 10, 3, (maxHeight) );		


				ctx.fillStyle = 'blue';
				ctx.fillRect(0, (maxHeight  - 5 ) , (maxWidth) , 5); 	


				  ctx.beginPath();
			    ctx.moveTo(0, yAxis.limit );
			    ctx.lineTo(100, 75);
			    ctx.lineTo(300, 25);
			  	ctx.closePath();
			    ctx.stroke();


			}	)(); //Auto-executing function			




 	}

	render() {
		return (
			<section className="CurrencyChart">
	
			

			<canvas 
				className="CurrencyChart__canvas"
				id="currencyChart" 
				width={this.state.chart.width} 
				height={this.state.chart.height}
			>
				

			</canvas>

			</section>
		);
	}
}

export default CurrencyChart;
