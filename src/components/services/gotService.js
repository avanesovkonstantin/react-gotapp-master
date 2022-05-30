
class GotService {
	constructor() {
		this._host = `https://anapioficeandfire.com/api/`;
		this._basicUrl = '';
	}

	async getResource(url, page = 40, id = '') {

		this._basicUrl = `${this._host}${url}`;

		const res = await fetch(`${this._host}${url}${id}?page=${page}&pageSize=10`);

		if (!res.ok) {
			throw new Error(`Coud not fetch. Status ${res.status}`);
		}

		return await res.json();

	};

	getCharacters = async (page = 40) => {
		return this.getResource('characters/', page);
	}

	getBooks = async (page = 0) => {
		return this.getResource('books/', 0);
	}

	getCharacterById = async (id, page = 40) => {
		return this.getResource(`characters/`, page, id);
	}

	getBookById = async (id, page = 0) => {
		return this.getResource(`books/`, page, id);
	}

}

export default GotService;