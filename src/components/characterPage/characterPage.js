import React from "react";
import ErrorMessage from "../errors/errorMessage";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import RawBlock from "../rawBlock/rawBlock";
export default class CharacterPage extends React.Component {

	state = {
		error: false,
		selectedCharId: 130
	}

	componentDidCatch() {
		this.setState(() => {
			return {
				error: true
			}
		})
	}

	onCharSelected = (selectedCharId) => {
		this.setState({ selectedCharId })
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
				dataFunctionName={'getCharacters'}
				onItemSelected={this.onCharSelected}>
			</ItemList>
		)

		const charDetails = (
			<CharDetails
				selectedItemId={this.state.selectedCharId} />
		)

		return (
			<RawBlock left={itemList} right={charDetails}></RawBlock>
		)
	}
}