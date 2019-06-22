import React, { Component } from 'react';

 class DateForm extends Component {

 	constructor(props) {
 		super(props)

 		this.state = {

 		}
 	}

	render() {
		return (
			<form className="DateForm" >
			<h3> Hello DateForm </h3>
			<input type="text" />
			<input type="text" />
			<input type="text" />
			 </form>
		);
	}
}

export default DateForm;
