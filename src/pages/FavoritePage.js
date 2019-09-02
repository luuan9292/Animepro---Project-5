import React, { Fragment } from 'react';

import MenuContainer from "../containers/MenuContainer";
import FavoriteContainer from "../containers/FavoriteContainer";
import Footer from "../components/Footer/Footer";
import Notify from "../components/Notify/Notify";

function FavoritePage(props) {

    let {history} = props;

    return (
        <Fragment>

            <MenuContainer history = {history} />

            <FavoriteContainer />

            <Notify />

            <Footer />

        </Fragment>
    );
}

export default FavoritePage;
