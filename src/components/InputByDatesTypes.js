
import React, {Fragment} from "react";
import MiniLoader from "./MiniLoader.js";

const InputByDatesTypes = (props) => {
		const day = "dia";
		const month = "mes";
		const year = "año";

		// eslint-disable-next-line
		let $inputDates;


		const $list = {
			years: (
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
			),
			months: (
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
			),
			days: (
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
			),
		}

		const $input = {

			start: {

				day: (
				  <Fragment>
						<input 
							name="dayStart"
							value={props.form.dayStart}  
							onChange={props.onInputChange} 
							type="text" 
							placeholder="dia" 
							list="daysList" 
						/>
						{$list.days}
					</Fragment>	
				),

				month: (
				  <Fragment>      
						<input 
							name="monthStart"
							value={props.form.monthStart}  
							onChange={props.onInputChange} 
							type="text" 
							placeholder="mes" 
							list="monthsList" 
						/>
						{$list.months}
					</Fragment>
				),

				year: (
				  <Fragment>
			  		<input 
							name="yearStart"
							value={props.form.yearStart}  
							onChange={props.onInputChange} 
							type="text" 
							placeholder="año" 
							list="yearsList"
						/>
						{$list.years}
					</Fragment>
				)
			},


			final: {

				day: (
				  <Fragment>
						<input 
							name="dayFinal"
							value={props.form.dayFinal}  
							onChange={props.onInputChange} 
							type="text" 
							placeholder="dia" 
							list="daysList" 
						/>
						{$list.days}
					</Fragment>
				),

				month: (
				  <Fragment>
						<input 
							name="monthFinal"
							value={props.form.monthFinal}  
							onChange={props.onInputChange} 
							type="text" 
							placeholder="mes" 
							list="monthsList" 
						/>
						{$list.months}
					</Fragment>
				),

				year: (
				  <Fragment>
			  		<input 
							name="yearFinal"
							value={props.form.yearFinal}  
							onChange={props.onInputChange} 
							type="text" 
							placeholder="año" 
							list="yearsList"
						/>
						{$list.years}
					</Fragment>
				)
			}
		}


		switch(props.dateType) {

			case day:

				return $inputDates = (

				 	<section className="DateForm__input-dates">

						<section className="DateForm__input-dates__start">
									{$input.start.day}
									{$input.start.month}
									{$input.start.year}
						</section>

						<section className="DateForm__input-dates__final">
									{$input.final.day}
									{$input.final.month}
									{$input.final.year}
						</section>

						<input 
							type="submit" 
							value="Consultar" 
							className="DateForm__input-dates__submit"
						/>
					</section>
				) 
				// eslint-disable-next-line
				break

			case month:

				return $inputDates = (
				 	<section className="DateForm__input-dates">

						<section className="DateForm__input-dates__start">
								
									{$input.start.month}
									{$input.start.year}
											
						</section>

						<section className="DateForm__input-dates__final">
								
									{$input.final.month}
									{$input.final.year}
												
						</section>

						<input 
							type="submit" 
							value="Consultar" 
							className="DateForm__input-dates__submit"
						/>
					</section>
				)
				// eslint-disable-next-line
				break

			case year:

				return $inputDates = (

				  <section className="DateForm__input-dates">

						<section className="DateForm__input-dates__start">
							{ $input.start.year }
						</section>

						<section className="DateForm__input-dates__final">
							{ $input.final.year }
						</section>

						<input 
							type="submit" 
							value="Consultar" 
							className="DateForm__input-dates__submit"
						/>

					</section>
				) 
				// eslint-disable-next-line
				break

			default:
				return $inputDates = <MiniLoader /> 
		}
 	}

export default InputByDatesTypes;


