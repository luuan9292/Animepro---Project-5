import React, { Component } from 'react';

import { Row, Col } from 'reactstrap';

import "./MegaMenu.css"

class MegaMenu extends Component {
    render() {
        return (
            <div className="mega__wrapper">
                <div className="mega__menu">
                    <Row className="mx-0 pt-4">
                        <Col xs="9" sm="9" md="9" lg="9" xl="9" className="sub__menu px-0">
                            <Row>
                                <Col xs="3" sm="3" md="3" lg="3" xl="3" className="sub__item">
                                    <ul>
                                        <li><i className="far fa-play-circle"></i> Action</li>
                                        <li><i className="far fa-play-circle"></i> Adventure</li>
                                        <li><i className="far fa-play-circle"></i> Cars</li>
                                        <li><i className="far fa-play-circle"></i> Comedy</li>
                                        <li><i className="far fa-play-circle"></i> Dementia</li>
                                        <li><i className="far fa-play-circle"></i> Demons</li>
                                        <li><i className="far fa-play-circle"></i> Drama</li>
                                        <li><i className="far fa-play-circle"></i> Dub</li>
                                        <li><i className="far fa-play-circle"></i> Ecchi</li>
                                        <li><i className="far fa-play-circle"></i> Fantasy</li>
                                        <li><i className="far fa-play-circle"></i> Game</li>
                                    </ul>
                                </Col>
                                <Col xs="3" sm="3" md="3" lg="3" xl="3" className="sub__item">
                                    <ul>
                                        <li><i className="far fa-play-circle"></i> Harem</li>
                                        <li><i className="far fa-play-circle"></i> Historical</li>
                                        <li><i className="far fa-play-circle"></i> Horror</li>
                                        <li><i className="far fa-play-circle"></i> Josei</li>
                                        <li><i className="far fa-play-circle"></i> Kids</li>
                                        <li><i className="far fa-play-circle"></i> Magic</li>
                                        <li><i className="far fa-play-circle"></i> Martial Arts</li>
                                        <li><i className="far fa-play-circle"></i> Mecha</li>
                                        <li><i className="far fa-play-circle"></i> Military</li>
                                        <li><i className="far fa-play-circle"></i> Music</li>
                                        <li><i className="far fa-play-circle"></i> Mystery</li>

                                    </ul>
                                </Col>
                                <Col xs="3" sm="3" md="3" lg="3" xl="3" className="sub__item">
                                    <ul>
                                        <li><i className="far fa-play-circle"></i> Parody</li>
                                        <li><i className="far fa-play-circle"></i> Police</li>
                                        <li><i className="far fa-play-circle"></i> Psycholog</li>
                                        <li><i className="far fa-play-circle"></i> Romance</li>
                                        <li><i className="far fa-play-circle"></i> Samurai</li>
                                        <li><i className="far fa-play-circle"></i> Martial Arts</li>
                                        <li><i className="far fa-play-circle"></i> School</li>
                                        <li><i className="far fa-play-circle"></i> Sci-Fi</li>
                                        <li><i className="far fa-play-circle"></i> Seinen</li>
                                        <li><i className="far fa-play-circle"></i> Shoujo</li>
                                        <li><i className="far fa-play-circle"></i> Shoujo Ai</li>
                                    </ul>
                                </Col>
                                <Col xs="3" sm="3" md="3" lg="3" xl="3" className="sub__item">
                                    <ul>
                                        <li><i className="far fa-play-circle"></i> Shounen</li>
                                        <li><i className="far fa-play-circle"></i> Shounen Ai </li>
                                        <li><i className="far fa-play-circle"></i> Slice Of Life</li>
                                        <li><i className="far fa-play-circle"></i> Samurai</li>
                                        <li><i className="far fa-play-circle"></i> Space</li>
                                        <li><i className="far fa-play-circle"></i> Sports</li>
                                        <li><i className="far fa-play-circle"></i> Supernatual</li>
                                        <li><i className="far fa-play-circle"></i> S Power</li>
                                        <li><i className="far fa-play-circle"></i> Thriller</li>
                                        <li><i className="far fa-play-circle"></i> Vampire</li>
                                        <li><i className="far fa-play-circle"></i> Yuri</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs="3" sm="3" md="3" lg="3" xl="3" className="sub__image px-0">
                            <img src="/img/chibi-girl.png" alt="chibi_girl" />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default MegaMenu;