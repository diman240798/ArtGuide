import {put} from 'redux-saga/effects';
import * as LocalRepository from '../repo/LocalRepository';
import {setPlacesByType} from "../actions";

export function* fetchPlaces(action) {
    const attractionType = action.payload;
    const places = yield LocalRepository.getPlaces(attractionType);
    yield put(setPlacesByType(places));
}


