import React, { Component } from 'react';
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'reactstrap';

import "./Charts.css"

class Charts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            classList: "preloader" //class an hien preloader
        }
    }

    //set thoi gian cho preloader
    //set thoi gian cho preloader
    componentWillMount() {
        this.setTime = setTimeout(() => {
            this.setState({
                classList: "preloader__finish"
            })
        }, 3000)

    }

     componentWillUnmount() {
        clearTimeout(this.setTime)
    }

    render() {
        return (
            <Container className="anime__charts">

                <div className={this.state.classList}>
                    <img src="/img/preloader.gif" alt="preloader" />
                </div>

                <Row>
                    <Col xs="12" sm="12" md="12" lg="12" xl="12" className="breadcrumb">
                        <span><Link to="/"><i className="fas fa-home"></i> Home</Link> / <Link to="/search">Charts</Link></span>
                    </Col>
                </Row>

                <Row className="charts__btn">
                    <Col xs="4" sm="4" md="4" lg="4" xl="4">
                        <Button>Daily Chart</Button>
                    </Col>
                    <Col xs="4" sm="4" md="4" lg="4" xl="4">
                        <Button>Season Chart</Button>
                    </Col>
                    <Col xs="4" sm="4" md="4" lg="4" xl="4">
                        <Button>Total Chart</Button>
                    </Col>
                </Row>
                <Row className="charts__items">
                    <Col xs="12" sm="12" md="12" lg="12" xl="12" className="chart__item">

                        {this.props.children}

                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Charts;