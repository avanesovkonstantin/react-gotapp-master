
class GotService {
	constructor() {
		this._host = 'https://anapioficeandfire.com/api/';
	}

	async getResource(url, page=40) {

		const res = await fetch(`${this._host}/${url}?page=${page}&pageSize=10`);

		if (!res.ok) {
			throw new Error(`Coud not fetch. Status ${res.status}`);
		}

		return await res.json();

	};

	getCharacters(page=40) {
		return this.getResource('characters/', page);
	}

	getCharacterById(id, page=40) {
		console.log(page)
		return this.getResource(`characters/${id}`, page);
	}

}	

export default GotService;