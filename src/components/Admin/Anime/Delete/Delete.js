import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';

import "./Delete.css"

class Delete extends Component {
    render() {
        return (
            <Row className="edit__search">
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <input type="text" placeholder="Search Post" />
                </Col>
            </Row>


        );
    }
};

export default Delete;