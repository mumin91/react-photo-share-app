import { all, call } from 'redux-saga/effects'
import photosActionWatcher from "./catalog/saga";



export default function* rootSaga() {
    yield all([
        call(photosActionWatcher)
    ])
}