import photos from './catalog/reducer';
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    photos
});

export default rootReducer;