import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { Button, Form, FormGroup, Input } from 'reactstrap';

import "./HomeSearch.css";

class HomeSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    /**----------------------------------------
    * Function: Gan keyword cho state
    * Component: HomeSearch
    ----------------------------------------**/
    handleSearch = e => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })

    }

    /**----------------------------------------
    * Function: 
    *       + submit kich hoat dispatch
    *       + redirect sang trang search
    * Component: MenuContainer
    ----------------------------------------**/
    handleSubmit = e => {
        e.preventDefault();

        this.props.searchByKeyWord(this.state.search)

        this.props.history.push("/search");
    }

    /**----------------------------------------
    * Function: Kich hoat dispatch moi lan nhap ki tu
    * Component: MenuContainer
    ----------------------------------------**/
    componentWillUpdate(nextProps, nextState) {
        if (nextState !== this.state) {
            this.props.searchByKeyWord(nextState.search);
        }
    }

    render() {
        return (
            <Form inline className="form__input" onSubmit={this.handleSubmit}>
                <Input type="select">
                    <option>All</option>
                    <option disabled >Anime</option>
                    <option disabled >Live</option>
                </Input>
                <FormGroup>
                    <Input type="text" name="search" onChange={this.handleSearch} value={this.state.search} placeholder="Search By Name" autoComplete="off" />
                    <div className={this.props.children.length > 0 ? "search__result" : "search__result.hiddenForm"}>
                        <div className="search__form">

                            {this.props.children}

                            <div className="view__more">
                                <Link to="/search" className="view__btn">View More</Link>
                            </div>
                        </div>
                    </div>
                </FormGroup>
                <Button><i className="fas fa-search"></i></Button>
            </Form>
        );
    }
}


export default HomeSearch;