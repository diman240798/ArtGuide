import {FETCH_PLACES_LIST, FETCH_TYPES_LIST, SET_PLACES_LIST, SET_TYPES_LIST} from "./action_types";

export const fetchTypes = () => ({
    type: FETCH_TYPES_LIST
});

export const setTypes = (types) => ({
    type: SET_TYPES_LIST,
    payload: types
});

export const fetchPlaces = () => ({
    type: FETCH_PLACES_LIST
});

export const setPlaces = (types) => ({
    type: SET_PLACES_LIST,
    payload: types
});

