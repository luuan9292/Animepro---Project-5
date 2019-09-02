import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'reactstrap';

import "./Annouce.css";

function Annouce() {
    return (
        <Container className="px-0">
            <Row className="notify">
                <div>
                    <div id="success-box">
                        <div className="dot" />
                        <div className="dot two" />
                        <div className="face">
                            <div className="eye" />
                            <div className="eye right" />
                            <div className="mouth happy" />
                        </div>
                        <div className="shadow scale" />
                        <div className="message">
                            <h1 className="alert">Give Away!</h1>
                            <p>Yay, We have some small gifts. We want to give you</p>
                        </div>
                        <button className="button-box"><h1 className="green">Continue Now!!!</h1></button>
                    </div>
                    <div id="error-box">
                        <div className="dot" />
                        <div className="dot two" />
                        <div className="face2">
                            <div className="eye" />
                            <div className="eye right" />
                            <div className="mouth sad" />
                        </div>
                        <div className="shadow move" />
                        <div className="message">
                            <h1 className="alert">Error!</h1>
                            <p>Oh no, The cable AAG was broken, something went wrong and slowly.</p>
                        </div>
                        <button className="button-box"><h1 className="red">We Are Sorry!!!</h1></button>
                    </div>
                </div>
            </Row>
            <div className='sidebar_ads mt-3 text-center'>

                <iframe title='avertise' src="https://adi.admicro.vn/adt/banners/nam2015/4043/min_html5/anhnguyendoanle/2019_07_29/980x90_T7_70/980x90_T7_70/980x90_T7_70.html?url=%2F%2Flg1.logging.admicro.vn%2Fadn%3Fdmn%3Dhttp%253A%252F%252Fwww.phimmoi.net%252F%26rid%3D4e20b4e3-6ce9-434a-b838-f19c1c11c041%26lsn%3D1564466381135%26ce%3D1%26lc%3D52%26cr%3D1558567354%26ui%3D3658567354245639026%26ii%3D616779316%26bi%3D0%26cmpg%3D40584%26items%3D152904%26zid%3D32220%26pr%3D15343542322%26cid%3D-1%26tp%3D11%26tpn%3D4%26adc_cpa%3D1%26cov%3D1%26re%3Dhttps%253A%252F%252Flongthanhphatresidence.com.vn%252F%253Futm_source%253Dadmicro_adx%2526utm_campaign%253Dadx%2526utm_content%253Dwww.phimmoi.net&amp;admid=adnzone_32220_0_152904" width="980" height="90" frameBorder="0" scrolling="no"></iframe>

            </div>
        </Container>
    );
}

export default Annouce;