import React from "react"
import {
	Col
} from 'reactstrap';

class RawBlock extends React.Component {

	render() {
		return (

			<>
				<Col md='6' >
					{this.props.left}
				</Col>
				<Col md='6' >
					{this.props.right}
				</Col>
			</>

		)
	}
}

export default RawBlock