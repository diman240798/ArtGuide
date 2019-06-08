import {FETCH_PLACES_LIST_BY_TYPE, FETCH_TYPES_LIST, SET_PLACES_LIST_BY_TYPE, SET_TYPES_LIST, SET_PLACE_BY_ID, FETCH_PLACE_BY_ID} from "./action_types";

export const fetchTypes = () => ({
    type: FETCH_TYPES_LIST
});

export const setTypes = (types) => ({
    type: SET_TYPES_LIST,
    payload: types
});

export const fetchPlacesByType = (attractionType) => ({
    type: FETCH_PLACES_LIST_BY_TYPE,
    payload: attractionType
});

export const setPlacesByType = (types) => ({
    type: SET_PLACES_LIST_BY_TYPE,
    payload: types
});


export const fetchPlaceById = (id) => ({
    type: FETCH_PLACE_BY_ID,
    payload: id
});

export const setPlaceById = (places) => ({
    type: SET_PLACE_BY_ID,
    payload: places
});

