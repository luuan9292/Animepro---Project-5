import React, { Component, Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';

import "./Utilities.css"

class Utilities extends Component {
    render() {
        return (
            <Fragment>
                <Row className="utilities">
                    <Col xs="6" sm="6" md="6" lg="6" xl="6">
                        <div className="util__box">
                            <div className="utilities__title">
                                <h3>Posts</h3>
                            </div>
                            <div className="post__content">
                                <h5>New Update</h5>
                                <select>
                                    <option value="12">12</option>
                                    <option value="16">16</option>
                                    <option value="20">20</option>
                                    <option value="24">24</option>
                                </select>
                            </div>
                            <div className="post__content">
                                <h5>Live Action</h5>
                                <select>
                                    <option value="8">8</option>
                                    <option value="12">12</option>
                                    <option value="16">16</option>
                                    <option value="20">20</option>
                                </select>
                            </div>
                            <div className="post__content">
                                <h5>Sidebar Charts</h5>
                                <select>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                </select>
                            </div>
                            <div className="post__content">
                                <h5>Sidebar Recommend</h5>
                                <select>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                </select>
                            </div>
                            <div className="post__content">
                                <h5>Search</h5>
                                <select>
                                    <option value="24">24</option>
                                    <option value="30">30</option>
                                    <option value="36">36</option>
                                    <option value="42">42</option>
                                </select>
                            </div>
                            <div className="post__content">
                                <h5>Charts</h5>
                                <select>
                                    <option value="20">20</option>
                                    <option value="25">25</option>
                                    <option value="30">30</option>
                                    <option value="35">35</option>
                                </select>
                            </div>
                        </div>
                    </Col>

                    <Col xs="6" sm="6" md="6" lg="6" xl="6">

                        <div className="util__box">

                            <div className="utilities__title">
                                <h3>Banner</h3>
                            </div>

                            <div className="post__content">
                                <h5>Banner 1</h5>
                                <input type='text' />
                            </div>

                            <div className="post__content">
                                <h5>Banner 2</h5>
                                <input type='text' />
                            </div>

                            <div className="post__content">
                                <h5>Banner 3</h5>
                                <input type='text' />
                            </div>

                            <div className="post__content">
                                <h5>Banner 4</h5>
                                <input type='text' />
                            </div>

                            <div className="post__content">
                                <h5>Banner 5</h5>
                                <input type='text' />
                            </div>

                            <div className="post__content">
                                <h5>Slide</h5>
                                <input type='text' />
                            </div>

                        </div>

                    </Col>

                    <Col xs="4" sm="4" md="4" lg="4" xl="4">
                        <div className="util__box">
                            <div className="utilities__title">
                                <h3>Announce 1</h3>
                            </div>
                            <div className="post__content">
                                <h5>Title</h5>
                                <input type='text' />
                            </div>
                            <div className="post__content">
                                <h5>Content</h5>
                                <input type='text' />
                            </div>
                            <div className="post__content">
                                <h5>Link</h5>
                                <input type='text' />
                            </div>
                        </div>
                    </Col>
                    <Col xs="4" sm="4" md="4" lg="4" xl="4">
                        <div className="util__box">
                            <div className="utilities__title">
                                <h3>Announce 2</h3>
                            </div>
                            <div className="post__content">
                                <h5>Title</h5>
                                <input type='text' />
                            </div>
                            <div className="post__content">
                                <h5>Content</h5>
                                <input type='text' />
                            </div>
                            <div className="post__content">
                                <h5>Link</h5>
                                <input type='text' />
                            </div>
                        </div>
                    </Col>
                    <Col xs="4" sm="4" md="4" lg="4" xl="4">
                        <div className="util__box">
                            <div className="utilities__title">
                                <h3>Advertises</h3>
                            </div>
                            <div className="post__content">
                                <h5>Link 1</h5>
                                <input type='text' />
                            </div>
                            <div className="post__content">
                                <h5>Link 2</h5>
                                <input type='text' />
                            </div>
                            <div className="post__content">
                                <h5>Link 3</h5>
                                <input type='text' />
                            </div>
                        </div>
                    </Col>

                    <Col xs="12" sm="12" md="12" lg="12" xl="12" className="px-0">
                        <div className="publish__btn px-0">
                            <button type="button" className="btn btn-primary">Reset</button>
                            <button className="btn btn-primary">Apply</button>
                        </div>

                    </Col>
                </Row>
            </Fragment>
        );
    }
};

export default Utilities;