import { put, takeLatest, all } from 'redux-saga/effects';
import {SET_TYPES_LIST} from "../actions/action_types";
import * as LocalRepository from '../repo/LocalRepository';

export function* fetchTypes() {
    const types = yield LocalRepository.getTypes();
    yield put({type: SET_TYPES_LIST, payload: types});
}


