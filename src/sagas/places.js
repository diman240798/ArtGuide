import {put} from 'redux-saga/effects';
import * as LocalRepository from '../repo/LocalRepository';
import {setPlaces} from "../actions";

export function* fetchPlaces(action) {
    const attractionType = action.payload;
    const places = yield LocalRepository.getPlaces(attractionType);
    yield put(setPlaces(places));
}


