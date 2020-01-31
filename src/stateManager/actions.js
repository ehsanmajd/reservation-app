import { ACTIONS } from './reducer';
import * as server from '../server';

export const sort = sortType =>
	(dispatch, getState) => {
		const { departureDate, departureAirport } = getState();
		dispatch({
			type: ACTIONS.SortChanged,
			payload: sortType
		});
		server.getResults({ sortType, departureDate, departureAirport })
			.then(results =>
				dispatch({
					type: ACTIONS.Filter,
					payload: results
				})
			);
	}

export const search = (filter = {}) =>
	(dispatch, getState) => {
		const { departureDate, departureAirport } = filter;
		const { sortType } = getState();
		dispatch({
			type: ACTIONS.Loading,
			payload: true
		});
		server.getResults({ sortType, departureDate, departureAirport })
			.then(results =>
				dispatch({
					type: ACTIONS.Filter,
					payload: results
				})
			);
	}