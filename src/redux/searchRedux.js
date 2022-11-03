const createActionName = (actionName) => `app/search/${actionName}`;
const SEARCH = createActionName('SEARCH');

export const searchCards = (payload) => ({ type: SEARCH, payload });

const searchReducer = (statePart = '', action) => {
	switch (action.type) {
		case SEARCH:
			return action.payload.search;
		default:
			return statePart;
	}
};

export default searchReducer;
