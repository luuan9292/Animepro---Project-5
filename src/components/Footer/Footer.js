import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <Container fluid={true} className="px-0 footer">
                <Row className="wave__footer mx-0">

                </Row>
                <Row className="footer__cover">
                    <Col xs="12" sm="12" md="12" lg="12" xl="12" className="footer__info">
                        <div className="footer__list">
                            <Row>
                                <Col xs="12" sm="4" md="4" lg="4" xl="4" className="footer__left">
                                    <ul>
                                        <h4 className="title">Policies</h4>
                                        <li><i className="fas fa-ad"></i> Advertising</li>
                                        <li><i className="fab fa-fantasy-flight-games"></i> FAQ</li>
                                        <li><i className="fas fa-user-shield"></i> Privacy</li>
                                        <li><i className="fas fa-pen-fancy"></i> Term</li>
                                    </ul>
                                    <img src="/img/gov-logo.png" alt="footer" />
                                </Col>
                                <Col xs="4" sm="4" md="4" lg="4" xl="4" className="footer__middle">
                                    <h4 className="title">Partners</h4>
                                    <Row>
                                        <Col xs="12" sm="12" md="12" lg="12" xl="12" className="footer__logo mb-2">
                                            <div className="logo"><img src="/img/bhd-logo.png" alt="footer" /></div>
                                            <div className="logo"><img src="/img/galaxycine-logo.png" alt="footer" /></div>
                                            <div className="logo"><img src="/img/cinestar-logo.png" alt="footer" /></div>
                                            <div className="logo"><img src="/img/lotte-logo.png" alt="footer" /></div>
                                            <div className="logo"><img src="/img/megags-logo.png" alt="footer" /></div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="12" sm="12" md="12" lg="12" xl="12" className="footer__logo mb-2">
                                            <div className="logo"><img src="/img/bt-logo.jpg" alt="footer" /></div>
                                            <div className="logo"><img src="/img/dongdacinema-logo.png" alt="footer" /></div>
                                            <div className="logo"><img src="/img/touch-logo.png" alt="footer" /></div>
                                            <div className="logo"><img src="/img/starlightlogo.png" alt="footer" /></div>
                                            <div className="logo"><img src="/img/momo-logo.png" alt="footer" /></div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="12" sm="12" md="12" lg="12" xl="12" className="footer__logo mb-5">
                                            <div className="logo"><img src="/img/zalopay_icon.png" alt="footer" /></div>
                                            <div className="logo"><img src="/img/payoo-logo.jpg" alt="footer" /></div>
                                            <div className="logo"><img src="/img/VCB-logo.png" alt="footer" /></div>
                                            <div className="logo"><img src="/img/agribanklogo.png" alt="footer" /></div>
                                            <div className="logo"><img src="/img/viettinbank-logo.png" alt="footer" /></div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs="12" sm="4" md="4" lg="4" xl="4" className="footer__right">
                                    <h4 className="title">App Available On</h4>
                                    <p>Download App and Get Free Movie Ticket !</p>
                                    <span className="pr-2"><img src="/img/googleplay-logo.jpg" alt="footer" /></span>
                                    <span><img src="/img/appstore-logo.jpg" alt="footer" /></span>
                                    <p className="mt-3">$50 Payback on App Download</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12" sm="12" md="12" lg="12" xl="12" className="footer__social">
                                    <ul>
                                        <li><i className="fab fa-facebook"></i></li>
                                        <li><i className="fab fa-github"></i></li>
                                        <li><i className="fab fa-youtube"></i></li>
                                        <li><i className="fab fa-twitter"></i></li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>

                    </Col>
                    <div className="copyright">
                        <p>Copyright ® 2019 -2020 <span>AnimePro</span>. All Rights Reserved - Design by <span>Ryan Luu</span>.</p>
                        <p>Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated third parties.</p>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default Footer;