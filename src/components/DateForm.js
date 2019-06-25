import React, { Component } from 'react';
import "./styles/DateForm.css"
import InputByDatesTypes from "./InputByDatesTypes.js"

 class DateForm extends Component {

 	constructor(props) {
 		super(props)

 		this.state = {
 			dateType: null,
 			form: {
				dayFinal: "",
				dayStart: "",
				monthFinal: "",
				monthStart: "",
				yearFinal: "",
				yearStart: ""
 			}
 		}
 	}

 	handleDateTypeInputChange = (event) => {

 		this.setState({
 			dateType: event.target.value.toLowerCase()
 		})
 	} 

 	handleFormSubmit = (event) => {

 		event.preventDefault();
 		console.log(this.state)
 	}

 	handleDateFormChange = (event) => {
 		this.setState({
 			form: {
 			...this.state.form, //rewriting what was in the object
			[event.target.name] : event.target.value,
 			}
 		})
 	}

	render() {

		return (
			<form className="DateForm" onSubmit={this.handleFormSubmit} >
				<h3> Coloca el período de fechas que quieres consultar </h3>

				<input 
					name="dateType" 
					list="dateTypes" 
					placeholder="Selecciona por... " 
					onChange={this.handleDateTypeInputChange}
					value={this.state.dateType}
				/>

				<datalist id="dateTypes">
		  		<option value="Dia" />
		 			<option value="Mes" />
		 			<option value="Año" />
				</datalist>

				<InputByDatesTypes 
					dateType={this.state.dateType}
					form={this.state.form}
					onInputChange={this.handleDateFormChange}
				/>


			 </form>
		);
	}
}

export default DateForm;
