import { apiConfig } from '../configs/api.config';

class Api {
	constructor(options) {
		this._baseURI = options.baseUrl;
		this._token = options.authorization
	}

	getAplicationData() {
		return Promise.all([this.getUserInfo(), this.getCards()]);
	}

//Cards
	getCards() {
		return fetch(`${this._baseURI}/cards`, {
			headers: {
				authorization: this._token
			}
		})
		.then( res => res.ok ? res.json() : Promise.reject(res.status) );
	}

	addCard({name, link}) {
		return fetch(`${this._baseURI}/cards`, {
			method: "POST",
			headers: {
				authorization: this._token,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				link
			})
		})
		.then( res => res.ok ? res.json() : Promise.reject(res.status) );
	}

	deleteCard(cardId) {
		return fetch(`${this._baseURI}/cards/${cardId}`, {
			method: "DELETE",
			headers: {
				authorization: this._token
			}
		})
		.then( res => res.ok ? res.json() : Promise.reject(res.status) );
	}

	// TODO
	// changeLikeCardStatus(cardId, isLiked) {
	// 	return fetch(`${this._baseURI}/cards/likes/${cardId}`, {
	// 		method: isLiked ? "PUT" : "DELETE",
	// 		headers: {
	// 			authorization: this._token,
	// 			'Content-Type': 'application/json'
	// 		},
	// 	})
	// 	.then( res => res.ok ? res.json() : Promise.reject(res.status) );
	// }

	addlikeCard(cardId) {
		return fetch(`${this._baseURI}/cards/likes/${cardId}`, {
			method: "PUT",
			headers: {
				authorization: this._token,
				'Content-Type': 'application/json'
			},
		})
		.then( res => res.ok ? res.json() : Promise.reject(res.status) );
	}

	removelikeCard(cardId) {
		return fetch(`${this._baseURI}/cards/likes/${cardId}`, {
			method: "DELETE",
			headers: {
				authorization: this._token
			}
		})
		.then( res => res.ok ? res.json() : Promise.reject(res.status) );
	}

// User
	getUserInfo() {
		return fetch(`${this._baseURI}/users/me`, {
			headers: {
				authorization: this._token
			}
		})
		.then( res => res.ok ? res.json() : Promise.reject(res.status) );
	}

	setUserInfo({name, about}) {
		return fetch(`${this._baseURI}/users/me`, {
			method: "PATCH",
			headers: {
				authorization: this._token,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				about
			})
		})
		.then( res => res.ok ? res.json() : Promise.reject(res.status) );
	}

	updateUserAvatar(avatar) {
		return fetch(`${this._baseURI}/users/me/avatar`, {
			method: "PATCH",
			headers: {
				authorization: this._token,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				avatar
			})
		})
		.then( res => res.ok ? res.json() : Promise.reject(res.status) );
	}
}

export default new Api(apiConfig);
