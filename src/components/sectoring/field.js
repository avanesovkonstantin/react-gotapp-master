import React from "react";
import "../itemDetails/itemDetails.css";
export default class Field extends React.Component {

	render() {
		const { item, field, label } = this.props;
		return (

			<li className="list-group-item d-flex justify-content-between">
				<span className="term">{label}</span>
				<span>{item[field]}</span>
			</li>

		)
	}

} 