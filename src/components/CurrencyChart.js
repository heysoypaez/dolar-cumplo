import React, { Component } from 'react';
import "./styles/CurrencyChart.css";
import Chart from "chart.js"

import {AppContext} from "../AppContext.js"

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

				const xAxis = {
					limit: maxWidth
				}

				const yAxis = {
					limit: maxHeight
				}

const ctx = document.getElementById('currencyChart').getContext('2d');
const currencyChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Período seleccionado',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

			}	)(); //Auto-executing function			




 	}

	render() {
		return (
			<section className="CurrencyChart">

				<AppContext.Consumer>
					{(context) => {
						return <h1>{context.state.developer}</h1>
					}}
				</AppContext.Consumer>	
			

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
