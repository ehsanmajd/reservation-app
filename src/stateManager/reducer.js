import * as CONSTANTS from '../constants';
export const initialState = {
	sortType: CONSTANTS.PRICE,
	results: [],
	loading: false,
	departureDate: null,
	departureAirport: null,
};

export const ACTIONS = {
	SortChanged: 'SORT_CHANGED',
	Filter: 'FILTER',
	Loading: 'LOADING'
}

const ACTION_HANDLERS = {
	[ACTIONS.SortChanged]: (state, action) => changeSort(state, action.payload),
	[ACTIONS.Filter]: (state, action) => filter(state, action.payload),
	[ACTIONS.Loading]: (state, action) => handleLoading(state, action.payload)
}

export function reducer(state, action) {
	return (ACTION_HANDLERS[action.type] || (state => state))(state, action);
}

function changeSort(state, payload) {
	return { ...state, sortType: payload, loading: true };
}

function filter(state, payload) {
	return { ...state, results: payload, loading: false };
}

function handleLoading(state, payload) {
	return { ...state, loading: payload };
}
