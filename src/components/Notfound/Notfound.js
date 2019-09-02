import React from 'react';
import { Link } from 'react-router-dom';

import "./Notfound.css";

const NotFound = props => {
    return (
        <div>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>Oops!</h1>
                    </div>
                    <div className="subscribe">
                        <form className="form">
                            <input type="email" className="form__field" placeholder="Your E-Mail Address" />
                            <button type="button" className="btn btn--primary btn--inside uppercase">Send</button>
                        </form>
                    </div>
                    <Link to="/">Go To Homepage</Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;