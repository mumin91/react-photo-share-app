import { GET_IMAGES, IMAGES_LOADING, IMAGES_FAILED} from './actionTypes';

export const getImages = (images) => {
    return {
        type: GET_IMAGES,
        payload: images
    }
};



