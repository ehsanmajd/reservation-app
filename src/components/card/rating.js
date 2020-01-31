import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './rating.module.scss'

export default function Rating({ count }) {
	const items = Array.from(Array(count), (_, i) => i);
	return (
		<ul className={classes.stars}>
			{items.map((_, index) => <li key={index}><FontAwesomeIcon icon='star'/></li>)}
		</ul>
	);
}