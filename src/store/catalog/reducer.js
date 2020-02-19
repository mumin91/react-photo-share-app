import { GET_IMAGES, IMAGES_LOADING, IMAGES_FAILED } from './actionTypes';

const initialState = {}

const images = (state = initialState, action) => {
    switch (action.type) {
        case GET_IMAGES:
            state = {
                ...state,
                ...action.payload
            }
            break;
        case IMAGES_LOADING:
            state = {
                ...state,
                isLoading: true
            };
            break;
        case IMAGES_FAILED:
            state = {
                ...state,
                isError: true,
                isLoading: false
            };
            break;

        default:
            state = { ...state };
            break;
    }
    return state;
}

export default images;