import { put, takeLatest, all } from 'redux-saga/effects';
import * as actionTypes from "../actions/action_types";
import * as types from "./types";

function* actionWatcher() {
    yield takeLatest(actionTypes.FETCH_TYPES_LIST, types.fetchTypes)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}