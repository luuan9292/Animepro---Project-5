import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'reactstrap';

import "./NewItem.css";

import Spinner from "../../../../Spinner/Spinner";

class NewItem extends Component {

    scrollParam = 1050; // bien vi tri scroll

    constructor(props) {
        super(props);
        this.state = {
            scrollPosition: window.pageYOffset > this.scrollParam ? this.scrollParam : 0
        }
    }

    /**----------------------------------------
     * Function: Xu li hieu ung loader cho item
     * Component: HomePage
     ----------------------------------------**/
    handleScroll = () => {
        if (window.pageYOffset > this.scrollParam) {
            this.setState({
                scrollPosition: this.scrollParam
            })
        }
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    componentDidMount() {   // kich hoat su kien scroll
        window.addEventListener('scroll', this.handleScroll)
    }

    /**----------------------------------------
     * Function: Hien thi khi chua load du lieu xong
     * Component: HomePage
     ----------------------------------------**/
    handleLoading = () => {
        return (
            <Col xs="6" sm="4" md="3" lg="3" xl="3" className="anime__items pl-0 pt-2">
                <div className="anime__item">
                    <div className="anime__image">

                        <Spinner />

                        <div className="score">
                            <div>0.0</div>
                        </div>
                    </div>
                    <div className="anime__info">
                        <div className="anime__name">loading...</div>
                    </div>
                </div>
            </Col>
        )
    }

    render() {
        let { item } = this.props;

        if (this.props.loading) {
            return this.handleLoading();
        }

        return (
            <Col xs="6" sm="4" md="3" lg="3" xl="3" className="anime__items pl-0 pt-2">
                <Link to={`anime/${item.id}`}>
                    <div className="anime__item">
                        <div className="anime__image">

                            {this.state.scrollPosition > this.scrollParam - 50 ? <img src={item.thumblink} alt="anime" /> : <Spinner />}

                            <span className="ribbon">{`${item.newep} / ${item.episodes}`}</span>
                            <div className="anime__overlay">
                                <img src="/img/play-video.png" alt="play" />
                            </div>
                            <div className="score">
                                <div>{item.score}</div>
                            </div>
                        </div>
                        <div className="anime__info">
                            <div className="anime__name">{item.name.length > 20 ? item.name.substr(0, 20) + "..." : item.name}</div>
                        </div>
                    </div>
                </Link>
            </Col>
        );
    }
}
export default NewItem;