import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';

class Day extends Component {
    render() {
        return (
            <Col xs="12" sm="12" md="12" lg="12" xl="12" className="schedule__info content">
                <div className="schedule__title">{this.props.day}</div>

                <Row className="anime">

                        {this.props.children}

                </Row>
            </Col>
        );
    }
}

export default Day;