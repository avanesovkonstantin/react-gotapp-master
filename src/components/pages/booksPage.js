import React from "react";
import ErrorMessage from "../errors/errorMessage";
import ItemList from "../itemList";
import {withRouter} from "react-router-dom";
import './pages.css'
export default class BooksPage extends React.Component {

	state = {
		error: false,
	}

	componentDidCatch() {
		this.setState(() => {
			return {
				error: true
			}
		})
	}

	render() {

		const { error } = this.state.error;

		if (error) {
			return (
				<ErrorMessage></ErrorMessage>
			)
		}

		return (
			<ItemList
				dataFunctionName={'getBooks'}>
			</ItemList>
		)
	}
}