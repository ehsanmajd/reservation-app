import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import Root from './components/root';
import setupIcons from './setup-icons';

setupIcons();

export default function App() {
	return (
		<MuiPickersUtilsProvider utils={MomentUtils}>
      <Root />
    </MuiPickersUtilsProvider>
	);
}
