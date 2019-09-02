import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'reactstrap';

import "./MainContent.css";

const MainContent = props => {
    return (
        <Container className="px-0">
            <Row className="main__content">

                {props.children}

            </Row>
        </Container>
    );
}

export default MainContent;