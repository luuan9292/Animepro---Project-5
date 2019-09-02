import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';

import "./Item.css"

const Item = props => {

    let { item, index } = props;

    return (
        <Link to={`anime/${item.id}`}>
            <div className="item">
                <Row className="chart__info">
                    <Col xs="1" sm="1" md="1" lg="1" xl="1" className="chart__num pr-0">
                        <span>{index + 1}</span>
                    </Col>
                    <Col xs="8" sm="8" md="8" lg="8" xl="8" className="chart__content pl-0">
                        <div className="chart__wrapper">
                            <div className="chart__thumb">
                                <img src={item.thumblink} alt="chartitem" />
                            </div>
                            <div className="chart__name">
                                <h3>{item.name}</h3>
                                <h6>{item.engname}</h6>
                            </div>
                        </div>
                    </Col>
                    <Col xs="3" sm="3" md="3" lg="3" xl="3" className="chart__view">
                        <span className="view"><i className="fas fa-eye"></i> {item.views.total} views</span>
                    </Col>
                </Row>
            </div>
        </Link>
    );
};

export default Item;