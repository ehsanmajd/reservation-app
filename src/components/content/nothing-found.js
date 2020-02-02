import React from 'react';
import classes from './nothing-found.module.scss';
import { useLocale } from '../../hooks/useLocale';

export default function NothingFound() {
	const locale = useLocale();
	return (
		<div className={classes.container} data-testid='not-found'>
			<label>{locale.nothingFound}</label>
		</div>
	);
}