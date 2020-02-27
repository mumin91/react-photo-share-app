import React from 'react';
import {withRouter} from "react-router-dom";
import NavBar from "../../components/NavBar";
import {Container, Row} from "reactstrap";
import ImageCard from "./ImageCard";

const Catalog = () => {
    return (
        <div>
            <NavBar/>
            <Container>
                <Row className="row-grid justify-content-between">
                    <ImageCard/>
                    <ImageCard/>
                    <ImageCard/>
                    <ImageCard/>
                    <ImageCard/>
                    <ImageCard/>
                    <ImageCard/>
                </Row>
            </Container>
        </div>
    );
};

export default withRouter(Catalog);