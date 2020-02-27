import React from 'react';
import {withRouter} from "react-router-dom";
import NavBar from "../../components/NavBar";

const Catalog = () => {
    return (
        <div>
            <NavBar/>
            <h1>Catalog</h1>
        </div>
    );
};

export default withRouter(Catalog);