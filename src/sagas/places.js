import {put} from 'redux-saga/effects';
import * as LocalRepository from '../repo/LocalRepository';
import {setPlaces} from "../actions";

export function* fetchPlaces() {
    const places = yield LocalRepository.getPlaces();
    yield put(setPlaces(places));
}


