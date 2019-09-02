import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav} from 'reactstrap';

import "./Menu.css";

import {NavLink} from 'react-router-dom';

import MegaMenu from './MegaMenu/MegaMenu';

const Menu = props => {
    return (
        <Container fluid={true} className="px-0">
            <Row>
                <Col xs="12" sm="12" md="12" lg="12" xl="12" className="menu__navbar">
                    <Navbar color="light" light expand="md" className="justify-content-between">
                        <Nav navbar>
                            <li>
                                <NavLink to="/" exact activeClassName="active"><i className="fas fa-home"></i> Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/search" exact activeClassName="active"><i className="fas fa-film"></i> Genres</NavLink>
                                
                                <MegaMenu />

                            </li>
                            <li>
                                <NavLink to="/charts" exact activeClassName="active"><i className="far fa-star"></i> Charts</NavLink>
                            </li>
                            <li>
                                <NavLink to="/schedule" exact activeClassName="active"><i className="far fa-clock"></i> Schedule</NavLink>
                            </li>
                            <li>
                                <NavLink to=" " exact activeClassName="active"><i className="far fa-address-book"></i> Contact</NavLink>
                            </li>
                        </Nav>
                        <div className="search">
                            
                            {props.children}

                        </div>
                        <div className="logo">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="46.996px" height="40px" viewBox="0 0 46.996 40" enableBackground="new 0 0 46.996 40" xmlSpace="preserve">
                                <g>
                                    <g>
                                    <path d="M39.919,19.833C39.919,8.88,30.984,0,19.959,0C8.937,0,0,8.88,0,19.833
                                            c0,10.954,8.937,19.834,19.959,19.834C30.984,39.666,39.919,30.787,39.919,19.833z M35.675,14.425
                                            c0.379,0,0.686,0.307,0.686,0.683s-0.305,0.683-0.686,0.683c-0.38,0-0.688-0.307-0.688-0.683S35.295,14.425,35.675,14.425z
                                            M34.482,20.461c0,0.491-0.025,0.976-0.071,1.452l-11.214-4.512l6.396-7.733C32.592,12.311,34.482,16.167,34.482,20.461z
                                            M19.083,2.277c0.379,0,0.687,0.305,0.687,0.682c0,0.378-0.306,0.684-0.687,0.684c-0.378,0-0.686-0.306-0.686-0.684
                                            C18.396,2.584,18.704,2.277,19.083,2.277z M19.959,6.031c1.916,0,3.743,0.372,5.416,1.042l-6.335,7.662l-6.252-6.82
                                            C14.906,6.718,17.351,6.031,19.959,6.031z M3.128,16.473c-0.378,0-0.687-0.306-0.687-0.684c0-0.377,0.307-0.682,0.687-0.682
                                            c0.38,0,0.686,0.305,0.686,0.682C3.814,16.167,3.508,16.473,3.128,16.473z M5.535,22.119c-0.063-0.545-0.098-1.098-0.098-1.658
                                            c0-3.612,1.339-6.911,3.547-9.444l6.502,7.095L5.535,22.119z M10.462,35.354c-0.379,0-0.687-0.306-0.687-0.683
                                            s0.307-0.682,0.687-0.682c0.379,0,0.687,0.305,0.687,0.682S10.842,35.354,10.462,35.354z M6.925,26.828l10.4-4.186l0.239,12.052
                                            C12.88,33.921,8.956,30.922,6.925,26.828z M19.513,22.326c-1.529,0-2.771-1.232-2.771-2.752c0-1.521,1.241-2.753,2.771-2.753
                                            c1.53,0,2.771,1.232,2.771,2.753C22.284,21.096,21.043,22.326,19.513,22.326z M29.939,33.99c-0.378,0-0.686-0.308-0.686-0.683
                                            c0-0.377,0.307-0.683,0.686-0.683s0.688,0.306,0.688,0.683C30.626,33.683,30.319,33.99,29.939,33.99z M22.482,34.672
                                            l-0.246-12.388l10.846,4.365C31.098,30.799,27.177,33.854,22.482,34.672z M35.314,34.585c-1.837,1.531-6.061,4.306-6.061,4.306
                                            C37.652,36.448,45.953,40,45.953,40l1.043-8.658C41.41,30.454,38.125,32.244,35.314,34.585z" />
                                    </g>
                                </g>
                            </svg>
                            <h3>Anime Pro</h3>
                        </div>
                    </Navbar>
                    <div className="hamburger__nav">
                        <ul>
                            <li href="#1"><i className="fas fa-list-ul"></i> All</li>
                            <li href="#1"><i className="fas fa-film"></i> Genre</li>
                            <li href="#1"><i className="far fa-star"></i> Popular</li>
                            <li href="#1"><i className="far fa-newspaper"></i> News</li>
                            <li href="#1"><i className="far fa-address-book"></i> Contact</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Menu;