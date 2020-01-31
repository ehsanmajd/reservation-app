import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useLocale } from '../../hooks/useLocale';
import * as CONSTANTS from '../../constants';
import { sort } from '../../stateManager/actions';

import classes from './sortbox.module.scss';


const types = [
	{
		name: CONSTANTS.ALPHABETICALLY,
		icon: 'sort-alpha-up-alt'
	},
	{
		name: CONSTANTS.PRICE,
		icon: 'pound-sign'
	},
	{
		name: CONSTANTS.STAR_RATING,
		icon: 'star'
	}
];

export default function SortBox({ selectedSortType, dispatch }) {
	const locale = useLocale();

	return (
		<div className={classes.container}>
			<ul className={classes.box}>
				{
					types
						.map(
							({ name, icon }) =>
								<li
									className={`${classes.listItem} ${selectedSortType === name ? classes.selected : ''}`}
									key={name}
									onClick={() => selectedSortType !== name && dispatch(sort(name))}
								>
									<div>
										{name === CONSTANTS.ALPHABETICALLY ? locale.sort : locale.sortBy} <strong>{locale[name]}</strong>
									</div>
									<div className={classes.iconHolder}>
										<FontAwesomeIcon
											icon={icon}
											className={classes.icon}
										/>
									</div>
								</li>
						)
				}
			</ul>
		</div>
	);
}