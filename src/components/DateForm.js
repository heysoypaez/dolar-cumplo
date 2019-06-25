import React, { Component } from 'react';
import "./styles/DateForm.css"
import MiniLoader from "./MiniLoader.js";

 class DateForm extends Component {

 	constructor(props) {
 		super(props)

 		this.state = {
 			dateType: null,
 			form: {

 			}
 		}
 	}

 	handleDateTypeInputChange = (event) => {

 		this.setState({
 			dateType: event.target.value.toLowerCase()
 		})
 	} 

 	handleDateFormChange = (event) => {
 		this.setState({
 			form: {
 			...this.state.form, //rewriting what was in the object
			[event.target.name] : event.target.value,
 			}
 		})
 	}

 	useListByDateType = () => {
		const day = "dia";
		const month = "mes";
		const year = "año";
		let $inputDates;


		const $yearsList = (
			<datalist id="yearsList">
	  		<option value="2001" />
				<option value="2002" />
				<option value="2003" />
				<option value="2004" />
				<option value="2005" />
				<option value="2006" />
				<option value="2007" />
				<option value="2008" />
				<option value="2009" />
				<option value="2010" />
				<option value="2011" />
				<option value="2012" />
				<option value="2013" />
				<option value="2014" />
				<option value="2015" />
				<option value="2016" />
				<option value="2017" />
				<option value="2018" />
				<option value="2019" />
			</datalist>
		);

		const $monthsList = (

			<datalist id="monthsList">                     
				<option value="01" />
				<option value="02" />
				<option value="03" />
				<option value="04" />
				<option value="05" />
				<option value="06" />
				<option value="07" />
				<option value="08" />
				<option value="09" />
				<option value="10" />
				<option value="11" />
				<option value="12" />
			</datalist>
		);

		const $daysList = (
			<datalist id="daysList">
				<option value="01" />
				<option value="02" />
				<option value="03" />
				<option value="04" />
				<option value="05" />
				<option value="06" />
				<option value="07" />
				<option value="08" />
				<option value="09" />
				<option value="10" />
				<option value="11" />
				<option value="12" />
				<option value="13" />
				<option value="14" />
				<option value="15" />
				<option value="16" />
				<option value="17" />
				<option value="18" />
				<option value="19" />
				<option value="20" />
				<option value="21" />
				<option value="22" />
				<option value="23" />
				<option value="24" />
				<option value="25" />
				<option value="26" />
				<option value="27" />
				<option value="28" />
				<option value="29" />
				<option value="30" />		
			</datalist>                  
		);

		switch(this.state.dateType) {

			case day:

			return $inputDates = (

			 	<section className="DateForm__input-dates">

					<section className="DateForm__input-dates__start">
							<input 
								name="dayStart" 
								onChange={this.handleDateFormChange} 
								type="text" 
								placeholder="dia" 
								list="daysList" 
							/>
							{$daysList}

							<input 
								name="monthStart" 
								onChange={this.handleDateFormChange} 
								type="text" 
								placeholder="mes" 
								list="monthsList" 
							/>
							{$monthsList}

							<input 
								name="yearStart" 
								onChange={this.handleDateFormChange} 
								type="text" 
								placeholder="año" 
								list="yearsList"
							/>
							{$yearsList}
					</section>

					<section className="DateForm__input-dates__final">
							<input 
								name="dayFinal" 
								onChange={this.handleDateFormChange} 
								type="text" 
								placeholder="dia" 
								list="daysList"
							/>
							{$daysList}

							<input 
								name="monthFinal" 
								onChange={this.handleDateFormChange} 
								type="text" 
								placeholder="mes" 
								list="monthsList" 
							/>
							{$monthsList}


							<input 
								name="yearFinal" 
								onChange={this.handleDateFormChange} 
								ype="text" 
								placeholder="año" 
								list="yearsList"
							/>
							{$yearsList}
					</section>

					<input 
						onSubmit={this.handleFormSubmit}
						type="submit" 
						value="Consultar" 
						className="DateForm__input-dates__submit"
					/>
				</section>
			)

			break

			case month:

			return $inputDates = (
			 	<section className="DateForm__input-dates">

					<section className="DateForm__input-dates__start">
							<input 
								name="monthStart" 
								onChange={this.handleDateFormChange} 
								type="text" 
								placeholder="mes" 
								list="monthsList" 
							/>
							{$monthsList}


							<input 
								name="yearStart" 
								onChange={this.handleDateFormChange} 
								type="number" 
								placeholder="año" 
								list="yearsList"
							/>
							{$yearsList}
					</section>

					<section className="DateForm__input-dates__final">
							<input 
								name="monthFinal"
								onChange={this.handleDateFormChange} 
								type="text" 
								placeholder="mes" 
								list="monthsList" 
							/>
								{$monthsList}

							<input 
								name="yearFinal"  
								onChange={this.handleDateFormChange} 
								type="number"
								placeholder="año" 
								list="yearsList"
							/>
								{$yearsList}
					</section>

					<input 
						onSubmit={this.handleFormSubmit}
						type="submit" 
						value="Consultar" 
						className="DateForm__input-dates__submit"
					/>
				</section>
			)
			break

			case year:

			return $inputDates = (

			  <section className="DateForm__input-dates">

					<section className="DateForm__input-dates__start">

							<input 
								name="yearStart"
								onChange={this.handleDateFormChange} 
								type="number" 
								placeholder="año inicial" 
								list="yearsList"
							/>
							{$yearsList}
					</section>

					<section className="DateForm__input-dates__final">

							<input 
								name="yearFinal"
								onChange={this.handleDateFormChange} 
								type="number" 
								placeholder="año final" 
								list="yearsList"
							/>
							{$yearsList}
					</section>

					<input 
						onSubmit={this.handleFormSubmit}
						type="submit" 
						value="Consultar" 
						className="DateForm__input-dates__submit"
					/>

				</section>
			)

			break

			default:
				return $inputDates = <MiniLoader /> 
		}
 	}

 	componentDidMount = () => {

 		//I use $ to know that it is an element from the DOM

 	}

	render() {

		const $inputDates = this.useListByDateType();

		return (
			<form className="DateForm" >
				<h3> Hello DateForm </h3>

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

				{$inputDates}


			 </form>
		);
	}
}

export default DateForm;
