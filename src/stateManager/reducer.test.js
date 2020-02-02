import { reducer, initialState } from './reducer';

test('change the sort to alphabetically', () => {
	const newState = reducer(initialState, {
		type: 'SORT_CHANGED',
		payload: 'alphabetically'
	});
	expect(newState).not.toBeNull();
	expect(newState.sortType).toBe('alphabetically');
	expect(newState.loading).toBe(true);
});

test('change the sort to by price', () => {
	const newState = reducer(initialState, {
		type: 'SORT_CHANGED',
		payload: 'price'
	});
	expect(newState).not.toBeNull();
	expect(newState.sortType).toBe('price');
	expect(newState.loading).toBe(true);
});

test('change the sort to by rating star', () => {
	const newState = reducer(initialState, {
		type: 'SORT_CHANGED',
		payload: 'ratingStar'
	});
	expect(newState).not.toBeNull();
	expect(newState.sortType).toBe('ratingStar');
	expect(newState.loading).toBe(true);
});

test('filter the results', () => {
	const newState = reducer(initialState, {
		type: 'FILTER',
		payload: []
	});
	expect(newState).not.toBeNull();
	expect(newState.results).toStrictEqual([]);

	const anotherState = reducer(newState, {
		type: 'FILTER',
		payload: ['Hello', 'World']
	});
	expect(anotherState).not.toBeNull();
	expect(anotherState.results).toStrictEqual(['Hello', 'World']);

	expect(anotherState.loading).toBe(false);
});

test('set app to loading state', () => {
	const newState = reducer(initialState, {
		type: 'LOADING',
		payload: true
	});
	expect(newState).not.toBeNull();
	expect(newState.loading).toBe(true);

	const anotherState = reducer(newState, {
		type: 'LOADING',
		payload: true
	});
	expect(anotherState.loading).toBe(true);

	const finalState = reducer(anotherState, {
		type: 'LOADING',
		payload: false
	});
	expect(finalState.loading).toBe(false);
});