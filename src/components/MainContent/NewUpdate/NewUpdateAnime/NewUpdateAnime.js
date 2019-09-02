import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'reactstrap';

class NewUpdateAnime extends Component {

    constructor(props) {
        super(props);
        this.state = {
            btn1: true,
            btn2: false,
            btn3: false,
            btn4: false,
            btn5: false
        }
    }

    /**----------------------------------------
     * Function: 
     *          + Change va reset state de kich hoat active class
     *          + Kich hoat dispatch
     * Component: HomePage
     ----------------------------------------**/
    handleFilterActive = (animeType, e) => {
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

        this.props.filterAnimeByType(animeType)
    }

    render() {
        return (
            <Fragment>
                <Row className="heading__title">
                    <h5> New Update <i className="fas fa-star"></i></h5>
                    <div className="heading__border" />
                    <button name="btn1" onClick={(event) => this.handleFilterActive('', event)} className={`skewBtn ${this.state.btn1 && 'active'}`}>All</button>
                    <button name="btn2" onClick={(event) => this.handleFilterActive('Action', event)} className={`skewBtn ${this.state.btn2 && 'active'}`}>Action</button>
                    <button name="btn3" onClick={(event) => this.handleFilterActive('Fantasy', event)} className={`skewBtn ${this.state.btn3 && 'active'}`}>Fantasy</button>
                    <button name="btn4" onClick={(event) => this.handleFilterActive('School', event)} className={`skewBtn ${this.state.btn4 && 'active'}`}>School</button>
                    <button name="btn5" onClick={(event) => this.handleFilterActive('Harem', event)} className={`skewBtn ${this.state.btn5 && 'active'}`}>Harem</button>
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

export default NewUpdateAnime;