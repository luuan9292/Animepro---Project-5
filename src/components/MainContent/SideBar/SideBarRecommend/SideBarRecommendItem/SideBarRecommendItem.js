import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'reactstrap';

import "./SideBarRecommendItem.css";

import Spinner from "../../../../Spinner/Spinner";

/**----------------------------------------
 * Function: Hien thi khi chua load du lieu xong
 * Component: HomePage
 ----------------------------------------**/
 const handleLoading = () => {
    return (
        <div className="recommend__item">
            <Spinner />
        </div>
    )
}

const SideBarRecommendItem = props => {

    let { item } = props;

    if (props.loading) {
        return handleLoading();
    }

    return (
        <Link to={`anime/${item.id}`}>
            <div className="recommend__item">
                <Col xs="4" sm="4" md="4" lg="4" xl="4" className="px-0">
                    <div className="recommend__image">
                        <img src={item.thumblink} alt="anime" />
                        <div className="anime__overlay">
                            <img src="/img/play-video.png" alt="play" />
                        </div>
                    </div>
                </Col>
                <Col xs="8" sm="8" md="8" lg="8" xl="8" className="col__info pr-0">
                    <div className="recommend__info">
                        <h6>{item.name.length > 20 ? item.name.substr(0, 15) + "..." : item.name}</h6>
                        <div className="sub__info">
                            <div><i className="fas fa-star"></i> {item.score} </div>
                            <div><i className="far fa-clock"></i> {item.episodes} </div>
                            <div><i className="far fa-calendar-alt"></i> {item.year}</div>
                        </div>
                        <span className="view"><i className="far fa-eye"></i> {item.views.total}</span>
                    </div>
                </Col>
            </div>
        </Link>
    );
}

export default SideBarRecommendItem;