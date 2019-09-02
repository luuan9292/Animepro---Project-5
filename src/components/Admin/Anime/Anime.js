import React, { Component, Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'reactstrap';

import "./Anime.css";

import Create from './Create/Create';
import Edit from './Edit/Edit';
import Delete from './Delete/Delete';

class Anime extends Component {

    constructor(props) {
        super(props);
        this.state = {
            btn1: true,
            btn2: false,
            btn3: false,
        }
    }

    handleShowContent = (param) => {

        this.setState(state => {
            return {
                btn1: false,
                btn2: false,
                btn3: false,
                [param] : true
            }
        })

    }

    render() {
        return (
            <Fragment>
                <Row className="select__tool">
                    <div name="btn1" onClick={() => this.handleShowContent("btn1")} className={`tool__box ${this.state.btn1 && 'active'}`}>
                        <div className="tool__content">
                            <span><i className="fas fa-plus-square"></i></span>Create
                                </div>
                    </div>
                    <div name="btn2" onClick={() => this.handleShowContent("btn2")} className={`tool__box ${this.state.btn2 && 'active'}`}>
                        <div className="tool__content">
                            <span><i className="far fa-edit"></i></span>Edit
                                </div>
                    </div>
                    <div name="btn3" onClick={() => this.handleShowContent("btn3")} className={`tool__box ${this.state.btn3 && 'active'}`}>
                        <div className="tool__content">
                            <span><i className="fas fa-minus-square"></i></span>Delete
                                </div>
                    </div>
                    

                </Row>

                <Row className="tool__content">

                    {this.state.btn1 === true ? <Create/> : this.state.btn2 === true ? <Edit/> : <Delete/>}

                </Row>
            </Fragment>
        );
    }
};

export default Anime;