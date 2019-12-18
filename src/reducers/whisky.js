import { WHISKY_TYPES } from '../types';

const initialState = {
    whiskies: [],
    inProgress: false,
    error: null,
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case WHISKY_TYPES.FETCH_WHISKIES:
            return {
                ...state,
                // whenever we want to fetch the whiskies, set isLoading to true to show a spinner
                inProgress: true,
                error: null,
            };
        case WHISKY_TYPES.FETCH_WHISKIES_SUCCESS:
            return {
                whiskies: [...action.payload],
                // whenever the fetching finishes, we stop showing the spinner and then show the data
                inProgress: false,
                error: null,
            };
        case WHISKY_TYPES.FETCH_WHISKIES_FAILURE:
            return {
                whiskies: [],
                inProgress: false,
                // same as FETCH_WHISKIES_SUCCESS, but instead of data we will show an error message
                error: action.payload,
            };
        default:
            return state;
    }
}
