import React, { Component } from 'react';
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

import "./Search.css";

class AnimeList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            classList: "preloader" //class an hien preloader
        }
    }

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

    //Scroll ve dau trang moi lan truy cap
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Container className="search px-0">

                <div className={this.state.classList}>
                    <img src="/img/preloader.gif" alt="preloader"/>
                </div>

                <Row>
                    <Col xs="12" sm="12" md="12" lg="12" xl="12" className="breadcrumb">
                        <span><Link to="/"><i className="fas fa-home"></i> Home</Link> / <Link to="/search">Search</Link></span>
                    </Col>
                </Row>
                <Row>
                    <div className="search__title">Filter Anime</div>
                </Row>

                {this.props.children}

            </Container>
        );
    }
}

export default AnimeList;