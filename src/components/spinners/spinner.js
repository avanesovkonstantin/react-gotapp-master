import React from "react";
import './spinner.css';

const Spinner = () => {

	return (
		<div className="random-block rounded">
			<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
		</div>)

}

export default Spinner