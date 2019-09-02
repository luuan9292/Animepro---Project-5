import React, { Fragment } from 'react';

import MenuContainer from "../containers/MenuContainer";
import AnimeItemContainer from "../containers/AnimeItemContainer";
import Footer from "../components/Footer/Footer";
import Notify from "../components/Notify/Notify";

function ItemPage(props) {

    let {match, history} = props;

    return (
        <Fragment>

            <MenuContainer history = {history}/>

            <AnimeItemContainer match={match}/>

            <Notify />

            <Footer />
            
        </Fragment>
    );
}

export default ItemPage;
