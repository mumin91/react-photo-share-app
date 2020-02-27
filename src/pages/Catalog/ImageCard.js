import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, Row, Col, Badge, CardFooter, Button
} from 'reactstrap';

const ImageCard = (props) => {
    return (
        <div className="d-flex my-3">
            <Card>
                <CardImg top
                         width="100%"
                         src="https://vignette.wikia.nocookie.net/pirates/images/e/ea/DMTNT_Jack_Sparrow_cropped.png/revision/latest/scale-to-width-down/340?cb=20170507052033"
                         alt="Card image cap"
                         style={{
                             height: "15vw",
                             objectFit: "cover"
                         }}
                />
                <CardBody>
                    <CardTitle className="text-center">
                        <h6>Title</h6>
                    </CardTitle>
                    <Row>
                        <Col md={6}>
                            <Badge color="dark">Dhaka</Badge>
                        </Col>
                        <Col md={6} className="text-right">
                            <Badge className="text-right" color="dark">2020-02-02</Badge>
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter className="text-center"><Button
                    className="btn btn-block btn-danger">Delete</Button></CardFooter>
            </Card>
        </div>
    );
};

export default ImageCard;