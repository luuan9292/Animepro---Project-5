import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Badge } from 'reactstrap';

import "./ItemInfo.css";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {favorite} from '../../../services/firebase';

class ItemInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAddFavorite : false
        }
    }

    /**----------------------------------------
    * Function: mapping muc related là các phần phim của 1 bộ phim
    * Component: ItemPage
    ----------------------------------------**/

    showRelated = (relatedItem, id) => {

        let result = null;

        if (relatedItem.length > 0) {
            result = relatedItem.map((item, index) => {
                let classBtn = "skewBtn";

                //  so sanh id voi id related neu trung thi them class active vao
                return <Link to={item.relatedId} key={index}><button className={item.relatedId === id ? classBtn += " active" : classBtn}>{item.part}</button></Link>
            })
        }

        return result;
    }

    handleAddFavorite = item => {

        // favorite.push(item);

        this.setState({
            isAddFavorite : !this.state.isAddFavorite
        })

    }

    render() {
        console.log(this.state.isAddFavorite)

        let { item, id } = this.props;

        if(item === undefined) {
            return 0;
        }

        const value = item.score !== undefined ? item.score : 0; // bien chua score cho thu vien round progress bar

        return (
            <Fragment>
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12" xl="12" className="breadcrumb">
                        <span><Link to="/"><i className="fas fa-home"></i> Home</Link> / <Link to="/search">Anime</Link> / {item.name}</span>
                    </Col>
                </Row>

                <Row className="detail__cover">
                    <Col xs="9" sm="9" md="9" lg="9" xl="9" className="anime__detail px-0">
                        <img src={item.bglink} alt="detail" />
                        <div className="detail">
                            <Row>
                                <Col xs="3" sm="3" md="3" lg="3" xl="3" className="anime__introduce pr-0">
                                    <div className="anime__thumb">
                                        <img src={item.thumblink} alt="detail" />
                                        <span className="ribbon">{`${item.newep} / ${item.episodes}`}</span>
                                        <div className="favorite" onClick={() => this.handleAddFavorite(item)}>
                                            {this.state.isAddFavorite ? <i className="fas fa-heart added"></i> : <i className="fas fa-heart-broken"></i>}
                                        </div>
                                        <div className="anime__overlay">
                                            <img src="/img/play-video.png" alt="play" />
                                        </div>
                                    </div>
                                </Col>
                                <Col xs="9" sm="9" md="9" lg="9" xl="9" className="anime__info">
                                    <h3>{item.name.length > 35 ? item.name.substr(0, 35) + "..." : item.name}</h3>
                                    <h5>{item.engname.length > 40 ? item.name.substr(0, 40) + "..." : item.name}</h5>
                                    <p>{item.desc}</p>

                                    <div className="anime__social">
                                        <div id="wrapper">
                                            <div id="share">
                                                <a href="#1" className="container twitter">
                                                    <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 200 200" className="circle">
                                                        <circle cx={100} cy={100} r={50} />
                                                    </svg>
                                                    <div className="social">
                                                        <i className="fab fa-twitter" />
                                                    </div>
                                                </a>
                                                <a href="#1" className="container facebook">
                                                    <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 200 200" className="circle">
                                                        <circle cx={100} cy={100} r={50} />
                                                    </svg>
                                                    <div className="social">
                                                        <i className="fab fa-facebook-f" />
                                                    </div>
                                                </a>
                                                <a href="#1" className="container pinterest">
                                                    <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 200 200" className="circle">
                                                        <circle cx={100} cy={100} r={50} />
                                                    </svg>
                                                    <div className="social">
                                                        <i className="fab fa-pinterest" />
                                                    </div>
                                                </a>
                                                <a href="#1" className="container linkedin">
                                                    <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 200 200" className="circle">
                                                        <circle cx={100} cy={100} r={50} />
                                                    </svg>
                                                    <div className="social">
                                                        <i className="fab fa-linkedin" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="rating__overlay">
                            <Row>
                                <Col xs="7" sm="7" md="7" lg="7" xl="7" className="">
                                    <div>

                                        {this.showRelated(item.related, id)}

                                    </div>
                                </Col>
                                <Col xs="5" sm="5" md="5" lg="5" xl="5" className="">
                                    <div className="rating__vote">
                                        <input type="radio" name="star" id="first__star" /><label htmlFor="first__star"></label>
                                        <input type="radio" name="star" id="second__star" /><label htmlFor="second__star"></label>
                                        <input type="radio" name="star" id="third__star" /><label htmlFor="third__star"></label>
                                        <input type="radio" name="star" id="fourth__star" /><label htmlFor="fourth__star"></label>
                                        <input type="radio" name="star" id="fifth__star" /><label htmlFor="fifth__star"></label>
                                    </div>
                                </Col>
                            </Row>
                        </div>


                    </Col>

                    <Col xs="3" sm="3" md="3" lg="3" xl="3" className="anime__vote pr-0">
                        <ul>
                            <li>Status: <Badge href="#" color="success">{`${item.newep} / ${item.episodes}`}</Badge></li>
                            <li>Genres: <span>{item.genres}</span></li>
                            <li>Type: <span>{item.type}</span></li>
                            <li>Studios: <span>{item.studio}</span></li>
                            <li>Season: <span>{`${item.season} ${item.year}`}</span></li>
                            <li>Views: <span>{item.views.total}</span></li>
                        </ul>

                        <CircularProgressbar
                            value={value}
                            maxValue={10}
                            text={`${value}`}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                textColor: "#E62B34",
                                pathColor: "#E62B34",
                                backgroundColor: "white"
                            })}
                        />
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default ItemInfo;