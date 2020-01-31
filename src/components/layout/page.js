import React from 'react';
import classes from './page.module.scss';

export default function Page({ side, main }) {
	return (
		<div className={classes.container}>
			<main className={classes.layout}>
				<aside className={classes.sidebar}>
					{side}
				</aside>
				<section className={classes.main}>
					{main}
				</section>
			</main>
		</div>
	);
}