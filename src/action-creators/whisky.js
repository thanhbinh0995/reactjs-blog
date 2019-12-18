import { WHISKY_TYPES } from '../types';

export const fetchWhiskies = () => ({
    type: WHISKY_TYPES.FETCH_WHISKIES,
});

export const fetchWhiskiesSuccess = whiskies => ({
    type: WHISKY_TYPES.FETCH_WHISKIES_SUCCESS,
    payload: whiskies,
});

export const fetchWhiskiesFailure = message => ({
    type: WHISKY_TYPES.FETCH_WHISKIES_FAILURE,
    payload: message,
});
