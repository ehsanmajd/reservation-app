import React, { useState } from 'react';
import CardImage from './card-image';
import Info from './card-info';
import ReadMore from './read-more';
import classes from './card-layout.module.scss';

export default function CardLayout(
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
		fee,
		overview,
		image,
		defaultExpand = false
	}
) {
	const [expand, setExpand] = useState(defaultExpand);

	function handleToggleExpand() {
		setExpand(!expand)
	}

	return (
		<div className={classes.resultContainer} data-testid='card-item'>
			<div className={classes.mainFrame}>
				<section className={classes.imageContainer}>
					<CardImage
						name={name}
						expand={expand}
						url={`/${image}`}
						onToggle={handleToggleExpand}
					/>
				</section>
				<section className={classes.info}>
					<Info
						name={name}
						location={location}
						stars={stars}
						adults={adults}
						kids={kids}
						infants={infants}
						duration={duration}
						date={date}
						origin={origin}
						fee={fee}
					/>
				</section>
			</div>
			<div className={classes.more}>
				<ReadMore
					onToggle={handleToggleExpand}
					expand={expand}
				/>
			</div>
			<summary className={`${classes.detail} ${expand ? classes.expand : ''}`}>
				<h2>Overview</h2>
				<p>{overview}</p>
			</summary>
		</div>
	)
}