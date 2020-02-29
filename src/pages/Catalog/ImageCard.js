import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, Row, Col, Badge, CardFooter, Button
} from 'reactstrap';

const ImageCard = (props) => {
    return (
        <Card>
            <CardImg top
                     src={`http://localhost:4000/images/${props.photo.url}`}
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
            <CardFooter className="text-center"><Button
                className="btn btn-block btn-danger">Delete</Button></CardFooter>
        </Card>
    );
};

export default ImageCard;