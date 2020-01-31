import React from 'react';
import { render as appRender } from '@testing-library/react';
import { Provider } from '../../hooks/useLocale';
import en from '../../locale/en';
import CardInfo from './card-info';
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

/*******************************************************/

test('renders child correctly', () => {
	const { getByText, queryAllByText } = render(<CardInfo kids={1} />, { locale: en });
	const element = getByText(/child/i);
	expect(element).toBeInTheDocument();

	const notExist = queryAllByText(/children/i);
	expect(notExist).toHaveLength(0);
});

test('renders children correctly', () => {
	const { getByText } = render(<CardInfo kids={2} />, { locale: en });
	const element = getByText(/children/i);
	expect(element).toBeInTheDocument();
});

test('never renders child/children', () => {
	const { queryAllByText } = render(<CardInfo kids={0} />, { locale: en });
	const notExist = queryAllByText(/children/i);
	expect(notExist).toHaveLength(0);
});

/*******************************************************/

test('renders infant correctly', () => {
	const { getByText, queryAllByText } = render(<CardInfo infants={1} />, { locale: en });
	const element = getByText(/infant/i);
	expect(element).toBeInTheDocument();

	const notExist = queryAllByText(/infants/i);
	expect(notExist).toHaveLength(0);
});

test('renders infants correctly', () => {
	const { getByText } = render(<CardInfo infants={2} />, { locale: en });
	const element = getByText(/infants/i);
	expect(element).toBeInTheDocument();
});

test('never renders infant/infants', () => {
	const { queryAllByText } = render(<CardInfo infants={0} kids={0} />, { locale: en });
	const notExist = queryAllByText(/infant/i);
	expect(notExist).toHaveLength(0);
});

/*******************************************************/

test('renders adult correctly', () => {
	const { getByText, queryAllByText } = render(<CardInfo adults={1} />, { locale: en });
	const element = getByText(/adult/i);
	expect(element).toBeInTheDocument();

	const notExist = queryAllByText(/adults/i);
	expect(notExist).toHaveLength(0);
});

test('renders adults correctly', () => {
	const { getByText } = render(<CardInfo adults={2} />, { locale: en });
	const element = getByText(/adults/i);
	expect(element).toBeInTheDocument();
});

test('never renders adult/adults', () => {
	const { queryAllByText } = render(<CardInfo adults={0} />, { locale: en });
	const notExist = queryAllByText(/adult/i);
	expect(notExist).toHaveLength(0);
});