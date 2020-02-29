import React, {useEffect} from 'react';
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Col, Container, Row, Spinner} from "reactstrap";
import ImageCard from "./ImageCard";
import {FETCH_PHOTOS} from "../../store/catalog/actionTypes";

const Catalog = props => {
    const {photos, loading, error} = useSelector(state => state.photos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: FETCH_PHOTOS})
    }, [dispatch])


    return (
        <div>
            <Container>

                {loading &&
                <Row className="text-center mt-5 pt-5">
                    <Col className="mt-5 pt-5">
                        <Spinner color="primary"/>
                    </Col>
                </Row>
                }

                {error && <h1>{error.toString()}</h1>}

                <Row>
                    {photos &&
                    photos.map((photo) => {
                        return (
                            <div className="col-12 col-md-6 col-lg-4 d-flex my-5 mb-2" key={photo._id}>
                                <ImageCard photo={photo}/>
                            </div>
                        );
                    })
                    }
                </Row>
            </Container>
        </div>
    );
};

export default withRouter(Catalog);