import React, { Fragment } from 'react';

import Header from "../components/Header/Header";
import MenuContainer from "../containers/MenuContainer";
import Annouce from "../components/Annouce/Annouce";
import MainContentContainer from "../containers/MainContentContainer";
import Footer from "../components/Footer/Footer";
import Notify from "../components/Notify/Notify";

function HomePage(props) {
    
    let {history} = props;

    return (
        <Fragment>

            <Header />

            <MenuContainer history = {history} />

            <Annouce />

            <MainContentContainer />

            <Notify />

            <Footer />
            
        </Fragment>
    );
}

export default HomePage;
