import React from 'react';
import SortBox from '../content/sortbox';
import FilterBox from '../content/filterbox';

export default function Sidebar({ sortType, dispatch }) {
	return (
		<>
			<SortBox selectedSortType={sortType} dispatch={dispatch} />
			<br />
			<FilterBox dispatch={dispatch} />
		</>
	);
}