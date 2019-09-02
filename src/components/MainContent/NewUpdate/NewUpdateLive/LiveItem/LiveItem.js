import React from 'react';
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'reactstrap';

import Spinner from "../../../../Spinner/Spinner";


    /**----------------------------------------
     * Function: Hien thi khi chua load du lieu xong
     * Component: HomePage
     ----------------------------------------**/
const handleLoading = () => {
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

const LiveItem = props => {
    let { item } = props;

    if (props.loading) {
        return handleLoading();
    }

    return (
        <Col xs="6" sm="4" md="3" lg="3" xl="3" className="anime__items pl-0 pt-2">
            <Link to={`anime/${item.id}`}>
                <div className="anime__item">
                    <div className="anime__image">
                        <img src={item.thumblink} alt="anime" />
                        <span className="ribbon">{`${item.newep} / ${item.episodes}`}</span>
                        <div className="anime__overlay">
                            <img src="/img/play-video.png" alt="play" />
                        </div>
                        <div className="score">
                            <div>{item.score}</div>
                        </div>
                    </div>
                    <div className="anime__info">
                        <div className="anime__name">{item.name.length > 15 ? item.name.substr(0, 15) + "..." : item.name}</div>
                    </div>
                </div>
            </Link>
        </Col>
    );
}

export default LiveItem;