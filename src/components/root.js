import React, { useEffect } from 'react';
import Layout from './layout';
import Sidebar from './layout/sidebar';
import Main from './content';
import en from '../locale/en'
import useThunk from '../hooks/useThunk';
import { reducer, initialState } from '../stateManager/reducer';
import { search } from '../stateManager/actions';
import { Provider } from '../hooks/useLocale';

function Root() {
	const [{ loading, results, sortType }, dispatch] = useThunk(reducer, initialState)

	useEffect(
		() => {
			dispatch(search())
		},
		[dispatch]
	);

	return (
		<Provider value={en}>
			<Layout
				side={<Sidebar sortType={sortType} dispatch={dispatch} />}
				main={<Main loading={loading} results={results} />}
			/>
		</Provider>
	);
}

export default Root;
