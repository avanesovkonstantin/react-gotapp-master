import React from "react";

class GotService {
	constructor() {
		this._host = 'https://anapioficeandfire.com/api/';
	}

	async getResource(url) {

		const res = await fetch(`${this._host}/${url}`);

		if (!res.ok) {
			throw new Error(`Coud not fetch. Status ${res.status}`);
		}

		return await res.json();

	};

	getCharacters() {
		return this.getResource('characters/');
	}

	getCharacterById(id) {
		return this.getResource(`characters/${id}`);
	}

}	

export default GotService;