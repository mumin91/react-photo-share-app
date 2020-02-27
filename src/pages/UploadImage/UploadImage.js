import React, {useState} from "react";
import {withRouter} from "react-router-dom";
import NavBar from "../../components/NavBar";
import ImageUploadForm from "./ImageUploadForm";
import {Container} from "reactstrap";
import axios from "axios";

const UploadImage = () => {
    const [title, setTitle] = useState(null)
    const [date, setDate] = useState(null)
    const [location, setLocation] = useState(null)
    const [photo, setPhoto] = useState(null)

    const handleSubmit = async event => {
        event.preventDefault();

        let formData = new FormData();
        formData.append('title', title);
        formData.append('date', date);
        formData.append('location', location);
        formData.append('photo', photo, photo.name.toString());

        const config = {
            headers: {
                "content-type": "multipart/form-data",
            }
        };


        await axios.post('#', formData, config)
            .then((response) => {
                console.log(response)
                if (response.statusCode === 201) {
                }
            })
            .catch((error) => {
                console.log(error.response)

            })
    };


    return (
        <div>
            <NavBar/>
            <h1>Upload</h1>
            <Container>
                <ImageUploadForm
                    title={title}
                    setTitle={setTitle}
                    date={date}
                    setDate={setDate}
                    location={location}
                    setLocation={setLocation}
                    photo={photo}
                    setPhoto={setPhoto}
                    handleSubmit={handleSubmit}/>
            </Container>
        </div>
    );
};

export default withRouter(UploadImage);