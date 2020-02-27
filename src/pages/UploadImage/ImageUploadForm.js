import React from 'react';
import {Col, Row, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import SelectLocation from "./SelectLocation";


let ImageUploadForm = (props) => {
    return (
        <Form method="post" onSubmit={props.handleSubmit}>
            <Row form>
                <Col md={4}>
                    <FormGroup>
                        <Label for="title">Photo Title</Label>
                        <Input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Write your photo title"
                            value={props.title}
                            onChange={(e) => {
                                props.setTitle(e.target.value)
                            }}
                            required
                        />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="date">Date</Label>
                        <Input
                            type="date"
                            name="date"
                            id="date"
                            placeholder="Select date"
                            value={props.date}
                            onChange={(e) => {
                                props.setDate(e.target.value)
                            }}
                            required
                        />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="location">Location</Label>
                        <SelectLocation
                            setLocation={props.setLocation}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <FormGroup>
                    <Label for="photo">
                        Photo
                    </Label>
                    <Input
                        type="file"
                        name="photo"
                        id="photo"
                        accept="image/*"
                        required
                        onChange={event => props.setPhoto(event.target.files[0])}
                    />
                    <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
                    </FormText>
                </FormGroup>
            </Row>
            <Button
                className={'btn btn-primary'}
                disabled={!(props.title !== "" &&
                    props.date !== "" &&
                    props.location !== "" &&
                    props.photo !== null)}
            >
                Upload
        </Button>

        </Form>
    );
}


export default ImageUploadForm;