import React from 'react';
import { useLocale } from '../../hooks/useLocale';

import classes from './book-button.module.scss';


export default function BookNow({ fee = -1 }) {
	const locale = useLocale();
	return (
		<button className={classes.button}>
			<div className={classes.bookNow}>
				{locale.bookNow}
			</div>
			<div className={classes.fee}>
				<span>&#163;</span>{/*Pound sign*/}
				{fee.toFixed(2)}
			</div>
		</button>
	)
}