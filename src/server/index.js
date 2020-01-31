/* This module simulates a simple server and 
 * produces some fake data for running the app
*/
import moment from 'moment';
import * as CONSTANTS from '../constants';
import DATA from './results.json'
import DEPARTURE_AIRPORTS from './airports.json';

export function getResults({ sortType, departureDate, departureAirport }) {
	const results =
		DATA.filter(item => departureDate ? moment(item.date).isSame(departureDate, 'day') : true)
			.filter(item => departureAirport ? item.origin.toLowerCase().includes(departureAirport.toLowerCase()) : true);

	results.sort((a, b) => {
		if (sortType === CONSTANTS.ALPHABETICALLY) {
			const textA = a.name.toUpperCase();
			const textB = b.name.toUpperCase();
			return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
		}
		else if (sortType === CONSTANTS.PRICE) {
			return a.fee - b.fee;
		}
		else if (sortType === CONSTANTS.STAR_RATING) {
			return a.stars - b.stars;
		}
		throw new Error(`InvalidOperationException. Unable to sort by ${sortType}.`);
	});
	return fakeServerApiCall(results);
}

export function getAvailableDepartureAirports() {
	return fakeServerApiCall([...DEPARTURE_AIRPORTS]);
}

function fakeServerApiCall(returnValue) {
	return new Promise(resolve => {
		setTimeout(
			() => {
				resolve(returnValue);
			},
			1000
		);
	});
}