import React from 'react';
import ReadMore from './read-more';
import classes from './card-image.module.scss';

export default function CardImage({ expand, url, onToggle, name }) {
	return (
		<div className={classes.image}>
			<img src={url} alt={name} />
			<div className={classes.footer}>
				<ReadMore expand={expand} onToggle={onToggle} />
			</div>
		</div>
	);
}