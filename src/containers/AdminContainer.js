import React, { Component } from 'react';
import { connect } from "react-redux";

import Admin from '../components/Admin/Admin';

import { actFetchAnimeRequest, actSearchByKeyword, actChangeNotify } from '../actions/index';

class AdminContainer extends Component {

    /**----------------------------------------
     * Function: Goi method dispatch request du lieu
     * Component: HomePage
     ----------------------------------------**/
     componentDidMount() {
        this.props.fecthAnimeRequest();
    }

    render() {

    let {anime} = this.props;

    // console.log(anime)

        return (

            <Admin>

            </Admin>

        );
    }
};

const mapStateToProps = state => {
    return {
        anime: state.anime,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fecthAnimeRequest: () => {
            dispatch(actFetchAnimeRequest());
        },
        searchByKeyWord: keyword => {
            dispatch(actSearchByKeyword(keyword)); // dispatch search keyword
        },
        changeNotify: (style, content, isShowNotify) => {
            dispatch(actChangeNotify(style, content, isShowNotify));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);
