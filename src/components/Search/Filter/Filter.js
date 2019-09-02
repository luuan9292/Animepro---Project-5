import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';

import "./Filter.css"

class Filter extends Component {

    handleSelect = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;

        this.props.filterByMultiType({[name]: value});

    }

    render() {
        return (
            <Row className="filter">
                <Col xs="3" sm="3" md="3" lg="3" xl="3" className="pr-0 pl-4">
                    <div className="filter__select genres">
                        <select name="genres" onChange={this.handleSelect}>
                            <option defaultValue value="">Genres</option>
                            <option value="Action">Action</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Comedy">Comedy</option>
                            <option value="School">School</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Harem">Harem</option>
                            <option value="Romance">Romance</option>
                        </select>
                    </div>
                </Col>
                <Col xs="3" sm="3" md="3" lg="3" xl="3" className="pr-0 pl-4">
                    <div className="filter__select season">
                        <select name="season"  onChange={this.handleSelect}>
                            <option defaultValue value="">Season</option>
                            <option value="Spring">Spring</option>
                            <option value="Summer">Summer</option>
                            <option value="Fall">Fall</option>
                            <option value="Winter">Winter</option>
                        </select>
                    </div>
                </Col>
                <Col xs="3" sm="3" md="3" lg="3" xl="3" className="pr-0 pl-4">
                    <div className="filter__select year"  onChange={this.handleSelect}>
                        <select name="year">
                            <option defaultValue value="">Year</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                        </select>
                    </div>
                </Col>
                <Col xs="3" sm="3" md="3" lg="3" xl="3" className="pr-0 pl-4">
                    <div className="filter__select sort"  onChange={this.handleSelect}>
                        <select name="sort">
                            <option defaultValue value="">Sort</option>
                            <option value="Views">Views</option>
                        </select>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default Filter;