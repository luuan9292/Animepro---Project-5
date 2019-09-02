import React, { Fragment } from 'react';

import MenuContainer from "../containers/MenuContainer";
import ChartsContainer from "../containers/ChartsContainer";
import Footer from "../components/Footer/Footer";
import Notify from "../components/Notify/Notify";

function SearchPage(props) {

    let {history} = props;

    return (
        <Fragment>

            <MenuContainer history = {history} />

            <ChartsContainer />

            <Notify />

            <Footer />

        </Fragment>
    );
}

export default SearchPage;
