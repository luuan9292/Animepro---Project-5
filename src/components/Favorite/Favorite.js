import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

import "./Favorite.css";

class Favorite extends Component {

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

        let {user} = this.props;

        if(user.isLogin === false) {
            return <Redirect to="/" />
        }
        return (
            <Container className="favorite px-0">

                <div className={this.state.classList}>
                    <img src="/img/preloader.gif" alt="preloader" />
                </div>

                <Row>
                    <Col xs="12" sm="12" md="12" lg="12" xl="12" className="breadcrumb">
                        <span><Link to="/"><i className="fas fa-home"></i> Home</Link> / <Link to="/search">Favorite</Link></span>
                    </Col>
                </Row>
                <Row>
                    <div className="favorite__title">Favorite Anime</div>

                    <Row className="main__content mt-0">
                        <Col xs="12" sm="12" md="12" lg="12" xl="12" className="content pr-0">
                            <Row className="anime">
                                <Col xs="2" sm="2" md="2" lg="2" xl="2" className="anime__items pt-2">

                                    {/* <Link to={`anime/${scheduleItem.id}`}> */}
                                    <div className="anime__item">
                                        <div className="anime__image">
                                            <img src='/img/thumb10.jpg' alt="anime" />
                                            <span className="ribbon">03/12</span>
                                            <div className="delete__btn">
                                                <i className="fas fa-times-circle"></i>
                                            </div>
                                            <div className="score">
                                                <div>9.2</div>
                                            </div>
                                        </div>
                                        <div className="anime__info">
                                            <div className="anime__name">qweqweqweasd</div>
                                        </div>
                                    </div>
                                    {/* </Link> */}

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Row>

            </Container>
        );
    }
}

export default Favorite;