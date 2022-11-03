import shortid from 'shortid';
import { strCointains } from '../utils/strContains';

const createActionName = (actionName) => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const DELETE_CARD = createActionName('DELETE_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');

export const getFilteredCards = ({ cards, search }, columnId) => cards.filter((card) => card.columnId === columnId && strCointains(card.title, search));
export const getFavoriteCards = ({ cards }) => cards.filter((card) => card.isFavorite === true);

export const addCard = (payload) => ({ type: ADD_CARD, payload });
export const deleteCard = (payload) => ({ type: DELETE_CARD, payload });
export const addFavorite = (payload) => ({ type: TOGGLE_CARD_FAVORITE, payload });

const cardsReducer = (statePart = [], action) => {
	switch (action.type) {
		case ADD_CARD:
			return [...statePart, { ...action.payload, id: shortid() }];
		case DELETE_CARD:
			return statePart.filter((card) => card.id !== action.payload);
		case TOGGLE_CARD_FAVORITE:
			return statePart.map((card) => (card.id === action.payload ? { ...card, isFavorite: !card.isFavorite } : card));
		default:
			return statePart;
	}
};

export default cardsReducer;
