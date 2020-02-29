import * as actionTypes from "./actionTypes";
const initialState = {
    photos: [],
    loading: false,
    error: null
};

const photos = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_PHOTOS:
            state = {
                ...state,
                loading: true,
                error:''
            };
            break;


        case actionTypes.FETCH_PHOTOS_SUCCESSFUL:
            console.log(action)
            state = {
                ...state,
                photos: action.payload,
                loading: false
            };
            break;


        case actionTypes.FETCH_PHOTOS_FAILED:
            state = {
                ...state,
                loading: false,
                error: action.error
            };
            break;

        case actionTypes.DELETE_PHOTO:
            console.log(action)
            state = {
                ...state,
                loading: true,
                error:''
            };
            break;


        // case actionTypes.DELETE_PHOTO_SUCCESSFUL:
        //     state = {
        //         ...state,
        //         loading: false,
        //         message: 'Photo deleted successfully'
        //     };
        //     break;


        case actionTypes.DELETE_PHOTO_FAILED:
            state = {
                ...state,
                loading: false,
                error: action.error
            };
            break;

        default:
            state = {...state};
            break;
    }

    return state;
};

export default photos;




