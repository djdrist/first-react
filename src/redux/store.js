import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strCointains } from '../utils/strContains';

//selectors

export const getFilteredCards = ({ cards, search }, columnId) => cards.filter((card) => card.columnId === columnId && strCointains(card.title, search));
export const getAllColumns = (state) => state.columns;

// actions

export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });
export const addCard = (payload) => ({ type: 'ADD_CARD', payload });
export const searchCards = (payload) => ({ type: 'SEARCH', payload });

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_COLUMN':
			return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] };
		case 'ADD_CARD':
			return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }] };
		case 'SEARCH':
			return { ...state, search: action.payload.search };
		default:
			return state;
	}
};

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
