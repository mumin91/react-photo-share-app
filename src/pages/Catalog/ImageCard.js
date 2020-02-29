import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, Row, Col, Badge, CardFooter, Button
} from 'reactstrap';
import {useDispatch} from "react-redux";
import {DELETE_PHOTO} from "../../store/catalog/actionTypes";
import {UPLOADED_PHOTOS_URL} from "../../constants";

const ImageCard = props => {
    const dispatch = useDispatch();
    return (
        <Card>
            <CardImg top
                     src={`${UPLOADED_PHOTOS_URL}${props.photo.url}`}
                     alt={`${props.photo.title}`}
            />
            <CardBody>
                <CardTitle className="text-center">
                    <h6>{`${props.photo.title}`}</h6>
                </CardTitle>
                <Row>
                    <Col md={6}>
                        <Badge color="dark">{`${props.photo.location}`}</Badge>
                    </Col>
                    <Col md={6} className="text-right">
                        <Badge className="text-right" color="dark">{`${props.photo.date}`}</Badge>
                    </Col>
                </Row>
            </CardBody>
            <CardFooter className="text-center">
                <Button
                    className="btn btn-block btn-danger"
                    onClick={() => dispatch({type: DELETE_PHOTO, id: props.photo._id})}
                >
                    Delete
                </Button></CardFooter>
        </Card>
    );
};

export default ImageCard;