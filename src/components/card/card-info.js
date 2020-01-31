import React from 'react';
import moment from 'moment';

import Rating from './rating';
import BookButton from './book-button';

import classes from './card-info.module.scss';
import { useLocale } from '../../hooks/useLocale';

export default function CardInfo(
	{
		name,
		location,
		stars,
		adults,
		kids,
		infants,
		date,
		duration,
		origin,
		fee
	}
) {
	const locale = useLocale();
	return (
		<div className={classes.infoContainer}>
			<h1 className={classes.title}>{name}</h1>
			<p className={`${classes.row} ${classes.location}`}>{location}</p>
			<Rating count={stars} />
			<p className={classes.row}>
				{!!adults && <span>
					<strong>{adults}</strong>
					{` ${adults === 1 ? locale.adult : locale.adults}`}
				</span>
				}
				{!!kids && <span>
					{`${adults ? ', ' : null}`}
					<strong>{kids}</strong>
					{` ${kids === 1 ? locale.child : locale.children}`}
				</span>
				}
				{!!infants && <span>
					{`${adults || kids ? ' & ' : null}`}
					<strong>{infants}</strong>
					{` ${infants === 1 ? locale.infant : locale.infants}`}
				</span>
				}
			</p>
			<p className={classes.row}>
				<strong>
					{moment(date).format('Do MMMM YYYY')}
				</strong>
				{` ${locale.for}`}
				<strong>
					{` ${duration} `}
					{duration === 1 ? locale.day : locale.days}
				</strong>
			</p>
			<p className={classes.row}>
				{locale.departuringFrom}
				<strong className={classes.origin}>
					{` ${origin}`}
				</strong>
			</p>
			<div className={classes.book}>
				<BookButton fee={fee} />
			</div>
		</div>
	);
}