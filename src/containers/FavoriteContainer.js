import React, { Component } from 'react';
import { connect } from 'react-redux';

import Favorite from '../components/Favorite/Favorite';

class FavoriteContainer extends Component {

    render() {

        let {user} = this.props;

        return (
            <Favorite user={user}>

            </Favorite>

        );
    }

}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps,null)(FavoriteContainer);