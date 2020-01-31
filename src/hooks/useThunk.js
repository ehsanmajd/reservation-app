import { useCallback, useState, useRef } from 'react';

export function useThunk(reducer, initialArg, init = (x) => x) {
	const [globalState, setGlobalState] = useState(init(initialArg));

	const state = useRef(globalState);
	const getState = useCallback(() => state.current, [state]);
	const setState = useCallback((newState) => {
		state.current = newState;
		setGlobalState(newState);
	}, [state, setGlobalState]);

	const reduce = useCallback((action) => {
		return reducer(getState(), action);
	}, [reducer, getState]);

	const dispatch = useCallback((action) => {
		return typeof action === 'function'
			? action(dispatch, getState)
			: setState(reduce(action));
	}, [getState, setState, reduce]);

	return [globalState, dispatch];
}

export default useThunk;