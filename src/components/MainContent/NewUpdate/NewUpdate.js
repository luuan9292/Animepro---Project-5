import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'reactstrap';

import "./NewUpdate.css";

const NewUpdate = props => {
    return (
        <Col xs="12" sm="12" md="12" lg="12" xl="9" className="content px-0">

            {props.children}

        </Col>
    );
}

export default NewUpdate;