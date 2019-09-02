import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'reactstrap';

const SideBar = props => {
    return (
        <Col xs="3" sm="3" md="3" lg="3" xl="3" className="sidebar pr-0">

            {props.children}

            <div className='sidebar_ads mt-3'>

                <iframe title="advertise" src="https://adi.admicro.vn/adt/banners/nam2015/4043/min_html5/thuongphamthuy/2019_07_19/300x600(4)/300x600/300x600.html?url=%2F%2Flg1.logging.admicro.vn%2Fadn%3Fdmn%3Dhttp%253A%252F%252Fwww.phimmoi.net%252F%26rid%3De1ba6d9b-7c42-4e81-87ed-3f6685479e50%26lsn%3D1564466381947%26ce%3D1%26lc%3D52%26cr%3D1558567354%26ui%3D3658567354245639026%26ii%3D141493641%26bi%3D0%26cmpg%3D40374%26items%3D151849%26zid%3D28404%26pr%3D15253921446%26cid%3D-1%26tp%3D11%26tpn%3D4%26adc_cpa%3D1%26cov%3D1%26re%3Dhttps%253A%252F%252Fbs.serving-sys.com%252FServing%252FadServer.bs%253Fcn%253Dtrd%2526pli%253D1074891150%2526adid%253D1078982976%2526ord%253D0.25903385175576643&amp;admid=adnzone_28404_0_151849" width="278" height="600" frameBorder="0" scrolling="no"></iframe>

            </div>

        </Col>
    );
}

export default SideBar;