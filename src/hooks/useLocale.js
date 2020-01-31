import React from 'react';
import en from '../locale/en';

const LocaleContext = React.createContext();

function useLocale() {
	const store = React.useContext(LocaleContext);
	if (!store) {
		throw new Error('Cannot use `useStore` outside of a StoreProvider')
	}
	return store;
}

function Provider(props) {
	const loacale = React.useMemo(() => en, []);
	return <LocaleContext.Provider value={loacale} {...props} />
}

export { Provider, useLocale }