import React from 'react';
import Card from '../card';
import Spinner from '../general/spinner';
import NothingFound from './nothing-found';

export default function Main({ loading, results }) {
	if (loading) {
		return <Spinner />
	}
	else {
		if(results.length === 0) {
			return <NothingFound />
		}
		return (
			results.map(({ id, children, ...item }, index) => <Card key={id} kids={children} {...item} defaultExpand={index === 0} />)
		);
	}
}