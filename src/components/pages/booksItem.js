import React from "react";
import ItemDetails from "../itemDetails/itemDetails";
import Field from "../sectoring/field";
import { useParams } from "react-router-dom";

function BooksItem(){

	let params = useParams();
	
	return (
		<ItemDetails
			selectedItemId={params.id}
			getDataFunctionName={'getBookById'}>

			<Field field={'numberOfPages'}  label={'Pages'}> 	 </Field>
			<Field field={'publisher'} 	 	label={'Publisher'}> </Field>
			<Field field={'country'} 	 	label={'Country'}>   </Field>
			<Field field={'released'} 		label={'Released'}>  </Field>

		</ItemDetails>
	)
}

export default BooksItem;