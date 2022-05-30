import React from "react";
import ErrorMessage from "../errors/errorMessage";
import ItemList from "../itemList";
import ItemDetails from "../itemDetails/itemDetails";
import RawBlock from "../sectoring/rawBlock";
import Field from "../sectoring/field";
export default class BooksPage extends React.Component {

	state = {
		error: false,
		selectedBookId: 1
	}

	componentDidCatch() {
		this.setState(() => {
			return {
				error: true
			}
		})
	}

	onBookSelected = (selectedBookId) => {
		this.setState({ selectedBookId })
	}

	render() {

		const { error } = this.state.error;

		if (error) {
			return (
				<ErrorMessage></ErrorMessage>
			)
		}

		const itemList = (
			<ItemList
				dataFunctionName={'getBooks'}
				onItemSelected={this.onBookSelected}>
			</ItemList>
		)

		const charDetails = (
			<ItemDetails
				selectedItemId={this.state.selectedBookId}
				getDataFunctionName={'getBookById'}>

				<Field field={'numberOfPages'}  label={'Pages'}> 	 </Field>
				<Field field={'publisher'} 	 	label={'Publisher'}> </Field>
				<Field field={'country'} 	 	label={'Country'}>   </Field>
				<Field field={'released'} 		label={'Released'}>  </Field>

			</ItemDetails>
		)

		return (
			<RawBlock left={itemList} right={charDetails}></RawBlock>
		)
	}
}