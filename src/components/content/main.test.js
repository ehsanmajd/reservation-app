import React from 'react';
import { render as appRender } from '@testing-library/react';
import { Provider } from '../../hooks/useLocale';
import Main from './main';
import en from '../../locale/en';
import setupIcons from '../../setup-icons';

function render(ui, { locale = en, ...options } = {}) {
	function Wrapper(props) {
		return <Provider value={locale} {...props} />
	}
	return appRender(ui, { wrapper: Wrapper, ...options })
}

beforeEach(() => {
	setupIcons();  
});

test('renders spinner correctly', () => {
	const { getByTestId  } = render(<Main loading={true} />, { locale: en });
	const element = getByTestId ('spinner');
	expect(element).toBeInTheDocument();
});

test('renders "not found" correctly', () => {
	const { getByTestId  } = render(<Main results={[]} loading={false} />, { locale: en });
	const element = getByTestId ('not-found');
	expect(element).toBeInTheDocument();
});

test('renders spinner while "results" prop has value correctly', () => {
	const { getByTestId  } = render(<Main results={[{name: 'Test'}]} loading={true} />, { locale: en });
	const element = getByTestId ('spinner');
	expect(element).toBeInTheDocument();
});

test('renders items correctly', () => {
	const { getByTestId  } = render(<Main results={[{
		"id": 1,
		"name": "iberostar grand salome",
		"location": "costa adeje, tenerife",
		"stars": 5,
		"adults": 2,
		"children": 2,
		"infants": 1,
		"date": "2019-07-02T19:30:00.000Z",
		"duration": 7,
		"origin": "east midlans",
		"fee": 1136.5,
		"overview": "Lorem",
		"image": "hotel-image-1.png"
	}]} loading={false} />, { locale: en });
	const element = getByTestId ('card-item');
	expect(element).toBeInTheDocument();
});
