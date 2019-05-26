import {put} from 'redux-saga/effects';
import * as LocalRepository from '../repo/LocalRepository';
import {setTypes} from "../actions";

export function* fetchTypes(action) {
    const types = yield LocalRepository.getTypes();
    yield put(setTypes(types));
}


