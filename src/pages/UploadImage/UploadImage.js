import React, {useState} from "react";
import {withRouter} from "react-router-dom";
import {Button, Col, Container, Form, FormGroup, FormText, Input, Label, Row, UncontrolledAlert} from "reactstrap";
import axios from "axios";
import Select from "react-select";
import {GET_POST_PHOTOS_URL} from "../../constants";


const options = [
    {value: 'Dhaka', label: 'Dhaka'},
    {value: 'Chattogram', label: 'Chattogram'},
    {value: 'Rajshahi', label: 'Rajshahi'},
    {value: 'Khulna', label: 'Khulna'},
];


const UploadImage = () => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('')
    const [photo, setPhoto] = useState(null)
    const [showAlert, setShowAlert] = useState(false)




    const handleSubmit = async event => {
        event.preventDefault();

        let formData = new FormData();
        formData.append('title', title);
        formData.append('date', date);
        formData.append('location', location.value);
        formData.append('photo', photo, photo.name.toString());

        const config = {
            headers: {
                "content-type": "multipart/form-data",
            }
        };


        await axios.post(GET_POST_PHOTOS_URL, formData, config)
            .then((response) => {
                console.log(response)
                if (response.status === 200) {
                    setPhoto(null)
                    setLocation('')
                    setDate('')
                    setTitle('')
                    setShowAlert(true)
                }
            })
            .catch((error) => {
                console.log(error.response)

            })
    };


    return (
        <Container className="mt-5">
            {showAlert && <UncontrolledAlert color="info">
                Photo added to catalog successfully!
            </UncontrolledAlert>}
            <Form method="post" onSubmit={handleSubmit}>
                <Row form>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="title">Photo Title</Label>
                            <Input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Write your photo title"
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value)
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
                                value={date}
                                onChange={(e) => {
                                    setDate(e.target.value)
                                }}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="location">Location</Label>
                            <Select
                                name="location"
                                value={location}
                                onChange={(location) => setLocation(location)}
                                options={options}
                                required
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
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
                                onChange={event => setPhoto(event.target.files[0])}
                            />
                            <FormText color="muted">
                                Upload only image files
                            </FormText>
                        </FormGroup>
                    </Col>
                </Row>
                <div className="text-center">
                    <Button
                        className="btn btn-block btn-primary"
                        disabled={!(title !== "" &&
                            date !== "" &&
                            location !== "" &&
                            photo !== null)}
                    >
                        Upload
                    </Button>
                </div>

            </Form>
        </Container>
    );
};

export default withRouter(UploadImage);