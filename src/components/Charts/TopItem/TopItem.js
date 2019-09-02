import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';

import "./TopItem.css"

const TopItem = props => {

    let { item, index } = props;

    return (
        <Link to={`anime/${item.id}`}>
            <div className="top__item">
                <img src={item.bglink} alt="chartitem" />
                <div className="chart__content">
                    <Row className="chart__info">
                        <Col xs="2" sm="2" md="2" lg="2" xl="2" className="chart__thumb">
                            <img src={item.thumblink} alt="chartitem" />
                        </Col>
                        <Col xs="10" sm="10" md="10" lg="10" xl="10" className="chart__view">
                            <h3>{item.name}</h3>
                            <h6>{item.engname}</h6>
                            <span className="view"><i className="fas fa-eye"></i> {item.views.total}</span>
                        </Col>
                    </Row>
                </div>
                {showFlag(index)}
            </div>
        </Link>
    );
};

/**------------------------------------------
* Function: mapping show flag xếp hạng 1 2 3
* Component: SideBarChartItem
*------------------------------------------- **/
const showFlag = index => {
    let result = null;

    if (index === 0) {
        result = <span className="top__flag top1">1<i></i></span>
    } else if (index === 1) {
        result = <span className="top__flag top2">2<i></i></span>
    } else if (index === 2) {
        result = <span className="top__flag top3">3<i></i></span>
    }

    return result;
}

export default TopItem;