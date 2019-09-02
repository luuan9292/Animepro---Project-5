import React, { Fragment } from 'react';

import MenuContainer from "../containers/MenuContainer";
import SearchContainer from "../containers/SearchContainer";
import Footer from "../components/Footer/Footer";
import Notify from "../components/Notify/Notify";

function SearchPage(props) {

    let {history} = props;

    return (
        <Fragment>

            <MenuContainer history = {history} />

            <SearchContainer />
            
            <Notify />

            <Footer />

        </Fragment>
    );
}

export default SearchPage;
