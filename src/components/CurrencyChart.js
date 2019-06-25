import React, { Component } from 'react';
import "./styles/CurrencyChart.css";
import Chart from "chart.js"

class CurrencyChart extends Component {

    state = {

    	chart: {
    		height: 800,
    		width: 1000
    	}
    }
 	
 	componentDidMount = () => {
 					
        // eslint-disable-next-line
		const drawCurrencyChart = (  () =>  {

            const ctx = document.getElementById('currencyChart').getContext('2d');

            // eslint-disable-next-line
            const currencyChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: this.props.dolarData.dates,
                    datasets: [{
                        label: 'Período seleccionado',
                        data:  this.props.dolarData.values,
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

		})(); //Auto-executing function			
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
