import React from "react";
import ErrorMessage from "../errors/errorMessage";
import ItemList from "../itemList";
import ItemDetails from "../itemDetails/itemDetails";
import RawBlock from "../sectoring/rawBlock";
import Field from "../sectoring/field";
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
			<ItemDetails
				selectedItemId={this.state.selectedCharId}
				getDataFunctionName={'getCharacterById'}>

				<Field field={'gender'}  label={'Gender'}> </Field>
				<Field field={'born'} 	 label={'Born'}>   </Field>
				<Field field={'died'} 	 label={'Died'}>   </Field>
				<Field field={'culture'} label={'Culture'}></Field>

			</ItemDetails>
		)

		return (
			<RawBlock left={itemList} right={charDetails}></RawBlock>
		)
	}
}