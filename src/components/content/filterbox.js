import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { DatePicker } from '@material-ui/pickers';

import { useLocale } from '../../hooks/useLocale';
import * as server from '../../server';
import { search } from '../../stateManager/actions';

import classes from './filterbox.module.scss';

export default function FilterBox({ dispatch }) {
	const locale = useLocale();
	const [departureAirports, setDepartureAirports] = useState([]);
	const [date, setDate] = useState(null);
	const [airport, setAirport] = useState(null);

	useEffect(
		() => {
			server.getAvailableDepartureAirports()
				.then(response => setDepartureAirports(response));
		},
		[]
	);

	function handleDeapartureDateChange(value) {
		setDate(value);
		dispatch(
			search({
				departureDate: value
			})
		);
	}

	function handleDepartureAirportChange(e, value) {
		setAirport(value);
		dispatch(
			search({
				departureAirport: !!value ? value.name : null
			})
		);
	}

	return (
		<div className={classes.container}>
			<ul className={classes.box}>
				<li className={`${classes.listItem} ${classes.title}`}>{locale.filterYourResult}</li>
				<li className={`${classes.listItem} ${classes.filterItem}`}>
					<DatePicker
						label={locale.departureDate}
						onChange={handleDeapartureDateChange}
						value={date}
						clearable
						autoOk
						style={{ width: '100%' }}
					/>
				</li>
				<li className={`${classes.listItem} ${classes.filterItem}`}>
					<Autocomplete
						value={airport}
						onChange={handleDepartureAirportChange}
						options={departureAirports}
						getOptionLabel={option => option.name}
						style={{ width: '100%' }}
						renderInput={params => (
							<TextField {...params} label={locale.departureAirport} fullWidth />
						)}
					/>
				</li>
			</ul>
		</div>
	);
}