import React, {useEffect, useCallback} from 'react';
import {withRouter} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {Container, Row, Spinner} from "reactstrap";
import ImageCard from "./ImageCard";
import {FETCH_PHOTOS} from "../../store/catalog/actionTypes";

const Catalog = props => {
    const {photos, loading, error} = useSelector(state => state.photos);
    console.log(photos)

    const dispatch = useDispatch();
    const fetchPhotosCallback = useCallback(
        () =>
            dispatch({
                type: FETCH_PHOTOS,
            }),
        [dispatch],
    )

    useEffect(() => {
        const fetchPhotos = () => fetchPhotosCallback();
        fetchPhotos();
    }, [fetchPhotosCallback])
    return (
        <div>
            <Container>
                {loading && <Spinner color="primary" className="text-center" />}
                {error && <h1>{error.toString()}</h1>}

                <Row>

                    {photos && photos.map((photo) => {

                        return (
                            <div className="col-12 col-md-6 col-lg-4 d-flex my-5 mb-2" key={photo._id}>
                                <ImageCard photo={photo} />
                            </div>
                        );

                    })}
                </Row>
            </Container>
        </div>
    );
};

export default withRouter(Catalog);