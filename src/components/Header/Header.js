import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

import './Header.css';
import Slider from "react-slick";

function Header() {

    // API dieu khien Slider

    let settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    let upcomingSettings = {
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        draggable: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    let recomendSetting = {
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <Container fluid={true} className="px-0">
            <Row className="header__top">
                <Col xs="12" sm="12" md="12" lg="12" xl="12" className="px-0">
                    <Slider {...settings}>
                        <div className="top__anime">
                            <img src="/img/banner1.jpg" alt="banner1" />
                            <div className="top__anime__wrapper">
                            </div>
                        </div>
                        <div className="top__anime">
                            <img src="/img/banner2.jpg" alt="banner1" />
                            <div className="top__anime__wrapper">
                            </div>
                        </div>
                        <div className="top__anime">
                            <img src="/img/banner3.jpg" alt="banner1" />
                            <div className="top__anime__wrapper">
                            </div>
                        </div>
                        <div className="top__anime">
                            <img src="/img/banner4.jpg" alt="banner1" />
                            <div className="top__anime__wrapper">
                            </div>
                        </div>
                        <div className="top__anime">
                            <img src="/img/banner5.jpg" alt="banner1" />
                            <div className="top__anime__wrapper">
                            </div>
                        </div>
                        <div className="top__anime">
                            <img src="/img/banner6.jpg" alt="banner1" />
                            <div className="top__anime__wrapper">
                            </div>
                        </div>
                    </Slider>
                </Col>
            </Row>
            <Row className="header__bot pt-2">
                <Col xs="12" sm="12" md="12" lg="5" xl="3" className="upcoming__tittle pr-2">
                    <Slider {...upcomingSettings}>
                        <div className="upcoming__anime">
                            <img src="/img/upcoming-anime.jpg" alt="upcoming" />
                        </div>
                        <div className="upcoming__anime">
                            <img src="/img/upcoming-anime2.jpg" alt="upcoming" />
                        </div>
                        <div className="upcoming__anime">
                            <img src="/img/upcoming-anime3.jpg" alt="upcoming" />
                        </div>
                        <div className="upcoming__anime">
                            <img src="/img/upcoming-anime4.jpg" alt="upcoming" />
                        </div>
                    </Slider>
                    <div className="upcoming__wrapper">
                    </div>
                </Col>
                <Col xs="12" sm="12" md="12" lg="7" xl="9" className="upcoming__anime px-0">
                    <Slider {...recomendSetting}>
                        <div className="upcoming__item">
                            <div className="item__image">
                                <img src="/img/banner-bot1.jpg" alt="banner1" />
                                <span className="ribbon">Ep 01</span>
                                <div className="item__info">
                                    <img src="/img/play-video.png" alt="play" />
                                </div>
                            </div>
                            <div className="item__name">
                                <h3>Enen no Shouboutai <span className="score">9.2</span></h3>
                            </div>
                        </div>
                        <div>
                            <div className="upcoming__item">
                                <div className="item__image">
                                    <img src="/img/banner-bot2.jpg" alt="banner1" />
                                    <span className="ribbon">Ep 03</span>
                                    <div className="item__info">
                                        <img src="/img/play-video.png" alt="play" />
                                    </div>
                                </div>
                                <div className="item__name">
                                    <h3>Boku No Hero Academi <span className="score">9.3</span></h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="upcoming__item">
                                <div className="item__image">
                                    <img src="/img/banner-bot3.jpg" alt="banner1" />
                                    <span className="ribbon">Ep 05</span>
                                    <div className="item__info">
                                        <img src="/img/play-video.png" alt="play" />
                                    </div>
                                </div>
                                <div className="item__name">
                                    <h3>One Punch Man <span className="score">9.5</span></h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="upcoming__item">
                                <div className="item__image">
                                    <img src="/img/banner-bot4.jpg" alt="banner1" />
                                    <span className="ribbon">Ep 07</span>
                                    <div className="item__info">
                                        <img src="/img/play-video.png" alt="play" />
                                    </div>
                                </div>
                                <div className="item__name">
                                    <h3>Non Non Biyori <span className="score">9.6</span></h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="upcoming__item">
                                <div className="item__image">
                                    <img src="/img/banner-bot5.jpg" alt="banner1" />
                                    <span className="ribbon">Ep 11</span>
                                    <div className="item__info">
                                        <img src="/img/play-video.png" alt="play" />
                                    </div>
                                </div>
                                <div className="item__name">
                                    <h3>Overlord <span className="score">9.9</span></h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="upcoming__item">
                                <div className="item__image">
                                    <img src="/img/banner-bot6.jpg" alt="banner1" />
                                    <span className="ribbon">Ep 06</span>
                                    <div className="item__info">
                                        <img src="/img/play-video.png" alt="play" />
                                    </div>
                                </div>
                                <div className="item__name">
                                    <h3>Date Alive <span className="score">9.8</span></h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="upcoming__item">
                                <div className="item__image">
                                    <img src="/img/banner-bot7.jpg" alt="banner1" />
                                    <span className="ribbon">Ep 08</span>
                                    <div className="item__info">
                                        <img src="/img/play-video.png" alt="play" />
                                    </div>
                                </div>
                                <div className="item__name">
                                    <h3>Arifureta Shokugyou <span className="score">9.2</span></h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="upcoming__item">
                                <div className="item__image">
                                    <img src="/img/banner-bot8.jpg" alt="banner1" />
                                    <span className="ribbon">Ep 05</span>
                                    <div className="item__info">
                                        <img src="/img/play-video.png" alt="play" />
                                    </div>
                                </div>
                                <div className="item__name">
                                    <h3>Kimetsu No Yaiba <span className="score">9.7</span></h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="upcoming__item">
                                <div className="item__image">
                                    <img src="/img/banner-bot9.jpg" alt="banner1" />
                                    <span className="ribbon">Ep 10</span>
                                    <div className="item__info">
                                        <img src="/img/play-video.png" alt="play" />
                                    </div>
                                </div>
                                <div className="item__name">
                                    <h3>Tensei Shirata Slime <span className="score">9.8</span></h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="upcoming__item">
                                <div className="item__image">
                                    <img src="/img/banner-bot10.jpg" alt="banner1" />
                                    <span className="ribbon">Ep 21</span>
                                    <div className="item__info">
                                        <img src="/img/play-video.png" alt="play" />
                                    </div>
                                </div>
                                <div className="item__name">
                                    <h3>Gotoubun No Hanayome <span className="score">9.4</span></h3>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;
