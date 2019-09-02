import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'reactstrap';

class NewUpdateLive extends Component {

    constructor(props) {
        super(props);
        this.state = {
            btn1 : true,
            btn2 : false,
            btn3 : false,
            btn4 : false,
            btn5 : false
        }
    }

    /**----------------------------------------
     * Function: 
     *          + Change va reset state de kich hoat active class
     *          + Kich hoat dispatch
     * Component: HomePage
     ----------------------------------------**/
    handleFilterActive = (liveType, e) => {
        let target = e.target;
        let name = target.name;

        this.setState(state => {
            return {
                btn1: false,
                btn2: false,
                btn3: false,
                btn4: false,
                btn5: false,
                [name]: true
            }
        })

        this.props.filterLiveByType(liveType)
    }

    render() {
        return (
            <Fragment>
                <Row className="heading__title">
                    <h5> Live Action <i className="fas fa-star"></i></h5>
                    <div className="heading__border" />
                    <button name="btn1" onClick={(event) => this.handleFilterActive('', event)} className={`skewBtn ${this.state.btn1 && 'active'}`}>All</button>
                    <button name="btn2" onClick={(event) => this.handleFilterActive('Action', event)} className={`skewBtn ${this.state.btn2 && 'active'}`}>Action</button>
                    <button name="btn3" onClick={(event) => this.handleFilterActive('Romance', event)} className={`skewBtn ${this.state.btn3 && 'active'}`}>Romance</button>
                    <button name="btn4" onClick={(event) => this.handleFilterActive('Comedy', event)} className={`skewBtn ${this.state.btn4 && 'active'}`}>Comedy</button>
                    <button name="btn5" onClick={(event) => this.handleFilterActive('School', event)} className={`skewBtn ${this.state.btn5 && 'active'}`}>School</button>
                </Row>
                <Row className="anime">

                    {this.props.children}

                    <div className="view__more">
                        <Link to="/search" className="view__btn">View More</Link>
                    </div>
                </Row>
            </Fragment>
        );
    }
}

export default NewUpdateLive;