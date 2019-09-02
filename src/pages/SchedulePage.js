import React, { Fragment } from 'react';

import MenuContainer from "../containers/MenuContainer";
import ScheduleContainer from '../containers/ScheduleContainer';
import Footer from "../components/Footer/Footer";
import Notify from "../components/Notify/Notify";

const SchedulePage = props => {

    let { history } = props;

    return (
        <Fragment>

            <MenuContainer history={history} />

            <ScheduleContainer />

            <Notify />

            <Footer />
            
        </Fragment>

    );
}

export default SchedulePage;