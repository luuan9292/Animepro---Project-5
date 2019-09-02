import React, { Component } from 'react';

class SideBarChart extends Component {

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
    }

    render() {

        return (
            <div className="charts">
                <div className="sidebar__title">
                    <div className="title__wrapper">
                        <h5>Anime Charts</h5>
                    </div>
                    <div className="title__icon">
                        <i className="fas fa-award"></i>
                    </div>
                    <button name="btn1" onClick={(event) => this.handleFilterActive('', event)} className={`skewBtn ${this.state.btn1 && 'active'}`}>Day</button>
                    <button name="btn2" onClick={(event) => this.handleFilterActive('Action', event)} className={`skewBtn ${this.state.btn2 && 'active'}`}>Week</button>
                    <button name="btn3" onClick={(event) => this.handleFilterActive('Romance', event)} className={`skewBtn ${this.state.btn3 && 'active'}`}>Season</button>
                    <button name="btn4" onClick={(event) => this.handleFilterActive('Comedy', event)} className={`skewBtn ${this.state.btn4 && 'active'}`}>Total</button>
                </div>
                <div className="top__items">
                    <div className="top">

                        {this.props.children}

                    </div>
                </div>
            </div>
        );
    }
}

export default SideBarChart;