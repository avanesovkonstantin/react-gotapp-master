import React from "react"
import {
	Col,
	Row
} from 'reactstrap';

class RawBlock extends React.Component {

	render() {
		return (

			<>
				<Row>
					<Col md='6' >
						{this.props.left}
					</Col>
					<Col md='6' >
						{this.props.right}
					</Col>
				</Row>
			</>
		)
	}
}

export default RawBlock