import React from 'react';
import {withRouter} from "react-router-dom";
import NavBar from "../../components/NavBar";

const UploadImage = () => {
    return (
        <div>
            <NavBar/>
            <h1>Upload</h1>
        </div>
    );
};

export default withRouter(UploadImage);