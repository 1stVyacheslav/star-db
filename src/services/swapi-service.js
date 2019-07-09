export default class SwapiService {

	_apiBase 		= 'https://swapi.co/api';
	_imageBase 	=  'https://starwars-visualguide.com/assets/img';

	async getResource(base ,url) {
		const res = await fetch(`${base}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`)
		}

		return await res.json();
	}

	getAllPeople = async () => {
		const res = await this.getResource(this._apiBase, `/people/`);
		return res.results.map(this._transformPerson);
	}

	getPerson = async (id) => {
		const person = await this.getResource(this._apiBase, `/people/${id}`);
		return this._transformPerson(person);
	}

	getAllPlanets = async () => {
		const res = await this.getResource(this._apiBase, `/planets/`);
		return res.results.map(this._transformPlanet);
	}

	getPlanet = async (id) => {
		const planet = await this.getResource(this._apiBase, `/planets/${id}`);
		return this._transformPlanet(planet);
	}

	getAllStarships = async () => {
		const res = await this.getResource(this._apiBase, `/starships/`);
		return res.results.map(this._transformStarship);
	}

	getStarship = async (id) => {
		const starship = await this.getResource(this._apiBase, `/starships/${id}`);
		return this._transformStarship(starship);
	}

	getPersonImageURL = (id) => {
	
		const personImageURL = `${this._imageBase}/characters/${id}.jpg`;
		console.log(personImageURL);
		return personImageURL;
	}

	_extractId(item) {
		const idRegExp = /\/([0-9]*)\/$/;
		const id = item.url.match(idRegExp)[1];
		return id;
	}

	_transformPlanet = (planet) => {

		return {
			id: this._extractId(planet),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter
		}
	}

	_transformPerson = (person) => {
	
		return {
			id: this._extractId(person),
			name: person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			eyeColor: person.eye_color
		}
	}

	_transformStarship = (starship) => {
		return {
			id: this._extractId(starship),
			name: starship.name
		}
	}
}