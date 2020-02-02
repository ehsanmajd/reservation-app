import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocale } from '../../hooks/useLocale';
import classes from './read-more.module.scss';


export default function ReadMore({ expand, onToggle }) {
	const locale = useLocale();
	return (
		<button className={classes.link} onClick={onToggle}>
			<div className={classes.linkText}>
				<span className={classes.capitalize}>
					<strong>{locale.read}</strong>
				</span>
				<strong>{` ${expand ? locale.less : locale.more} ${locale.aboutHotel}`}</strong>
			</div>
			<div className={`${classes.handle} ${expand ? classes.expand : ''}`}>
				<FontAwesomeIcon icon='angle-right' size={'2x'} />
			</div>
		</button>
	);
}