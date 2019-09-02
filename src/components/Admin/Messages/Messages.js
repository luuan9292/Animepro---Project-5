import React, { Component, Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Badge } from 'reactstrap';

import "./Messages.css"

class Messages extends Component {
    render() {
        return (
            <Fragment>
                <Row className="messages">
                    <Col xs="12" sm="12" md="12" lg="12" xl="12">
                        <div className="messages__titles">
                            <h3>Messages</h3>
                            <div className="filter__page">
                                <div className="messages__pagi"><i className="fas fa-less-than"></i> 1-50 pages <i className="fas fa-greater-than"></i></div>
                                <button className='filter__btn'>All</button>
                                <button className='filter__btn'>Unread</button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="messages__overview">
                    <Col xs="4" sm="4" md="4" lg="4" xl="4">
                        <div className="overview">
                            <div className="overview__image">
                                <span><i className="fas fa-comment-dots"></i></span>
                            </div>

                            <div className="overview__info">
                                <h6>Overall Messages</h6>
                                <div className="quantity">
                                    <h3>2389 <span>This month</span></h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="4" sm="4" md="4" lg="4" xl="4" className='px-0'>
                        <div className="overview between">
                            <div className="overview__image">
                                <span><i className="fas fa-paper-plane"></i></span>
                            </div>
                            <div className="overview__info">
                                <h6>Unread Messages</h6>
                                <div className="quantity">
                                    <h3>1494 <span>This month</span></h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="4" sm="4" md="4" lg="4" xl="4">
                        <div className="overview">
                            <div className="overview__image">
                                <span><i className="fas fa-reply-all"></i></span>
                            </div>
                            <div className="overview__info">
                                <h6>Received Messages</h6>
                                <div className="quantity">
                                    <h3>895 <span>This month</span></h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="messages__content">
                    <div className='message__item'>
                        <Col xs="3" sm="3" md="3" lg="3" xl="3" className='messages__left'>
                            <input type="checkbox" />
                            <div className='message__avatar'>
                                <img src='/img/chibi-girl2.png' alt='avatar' />
                            </div>
                            <h5>Hoang An</h5>
                        </Col>
                        <Col xs="9" sm="9" md="9" lg="9" xl="9" className='messages__right'>
                            <Badge>Member</Badge>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure est cupiditate sint reprehenderit.</p>
                        </Col>
                    </div>

                    <div className='message__item'>
                        <Col xs="3" sm="3" md="3" lg="3" xl="3" className='messages__left'>
                            <input type="checkbox" />
                            <div className='message__avatar'>
                                <img src='/img/chibi-girl2.png' alt='avatar' />
                            </div>
                            <h5>Hoang An</h5>
                        </Col>
                        <Col xs="9" sm="9" md="9" lg="9" xl="9" className='messages__right'>
                            <Badge>Member</Badge>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure est cupiditate sint reprehenderit.</p>
                        </Col>
                    </div>

                    <div className='message__item'>
                        <Col xs="3" sm="3" md="3" lg="3" xl="3" className='messages__left'>
                            <input type="checkbox" />
                            <div className='message__avatar'>
                                <img src='/img/chibi-girl2.png' alt='avatar' />
                            </div>
                            <h5>Hoang An</h5>
                        </Col>
                        <Col xs="9" sm="9" md="9" lg="9" xl="9" className='messages__right'>
                            <Badge>Member</Badge>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure est cupiditate sint reprehenderit.</p>
                        </Col>
                    </div>
                </Row>

            </Fragment>
        );
    }
};

export default Messages;