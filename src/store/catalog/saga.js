import {call, put, takeLatest} from 'redux-saga/effects';
import * as actionTypes from "./actionTypes";
import {FETCH_PHOTOS} from "./actionTypes";



export function* fetchPhotosSaga() {
    console.log('Hellos')
    try {
        const response = yield call(fetchPhotoService);
        yield put({type: actionTypes.FETCH_PHOTOS_SUCCESSFUL, payload: response});
    } catch (error) {
        yield put({type: actionTypes.FETCH_PHOTOS_FAILED, error})
    }
}


export const fetchPhotoService = () => {
    const url = 'http://localhost:4000/photos';

    const parameters = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };


    return fetch(url, parameters)
        .then(response => {
            console.log(response);
            if (response.ok) {
                return response.json();
            } else {
                let error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }).catch(error => {
            throw new Error("Something is wrong. Data cannot be loaded from the server.");
        });


};


export function* deletePhotoSaga(action, dispatch) {

    try {
        const response = yield call(deletePhotoService, action.id);
        console.log(response)
        if (response.ok){
            yield put({ type: FETCH_PHOTOS })
        }
    } catch (error) {
        yield put({type: actionTypes.DELETE_PHOTO_FAILED, error})
    }
}


export const deletePhotoService = (photo_id) => {
    const url = `http://localhost:4000/photo/${photo_id}`;

    const parameters = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    };


    return fetch(url, parameters)
        .then(response => {
            console.log(response);
            if (response.ok) {
                return response;
            } else {
                let error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }).catch(error => {
            throw new Error("Something is wrong. Data cannot be loaded from the server.");
        });


};

export default function* photosActionWatcher() {
    yield takeLatest(actionTypes.FETCH_PHOTOS, fetchPhotosSaga);
    yield takeLatest(actionTypes.DELETE_PHOTO, deletePhotoSaga);
}
