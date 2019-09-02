import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'reactstrap';

const SearchItem = props => {

    let { item } = props;

    return (
        <Col xs="2" sm="2" md="2" lg="2" xl="2" className="anime__items pl-0 pt-2">
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

export default SearchItem;