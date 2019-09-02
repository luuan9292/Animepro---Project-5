import React, { Component } from 'react';

import "./SignOut.css";
import * as types from '../../../constants/Notify';

import { firebaseApp } from '../../../services/firebase';

class SignOut extends Component {

    /**----------------------------------------
    * Function: Sign Out method
    * Component: MenuContainer
    ----------------------------------------**/
    handelSignout = () => {
        firebaseApp.auth().signOut();
        this.props.changeNotify(types.NOTI_TYPE_INFO, types.NOTI_SIGNOUT_SUCCESSFULL_MESSAGE, true);
    }

    handleChangeFavoritePage = history => {
        history.push("/favorite");
    }

    render() {

        let {user, history} = this.props;

        return (
            <div className="signout">
                <div className='welcome'>
                    <h6>Hello <span>Friend</span> <i className="fas fa-chevron-down"></i></h6>
                    <i className="fas fa-users-cog profile__icon"></i>
                </div>
                <div className="signout__wrapper">
                    <div className="signout__form">
                        <div className="form__info">
                            <div className="avatar">
                                <img src="/img/chibi-girl3.jpg" alt="avatar" />
                            </div>
                            <div className="box">
                                <i className="fas fa-box" onClick={() => this.handleChangeFavoritePage(history)}></i>
                            </div>
                            <div className="form__name">
                                <h5>{user.username}</h5>
                                <h6>{user.fullname}</h6>
                            </div>
                            <div className="form__profile">
                                <div className="profile">
                                    <div className="icon">
                                        <i className="fas fa-user-circle"></i>
                                    </div>
                                    <div className="info">
                                        <h5>Type</h5>
                                        <h6>Member</h6>
                                    </div>
                                </div>
                                <div className="profile">
                                    <div className="icon">
                                        <i className="fas fa-fingerprint"></i>
                                    </div>
                                    <div className="info">
                                        <h5>#ID</h5>
                                        <h6>{user.uid}</h6>
                                    </div>
                                </div>
                                <div className="profile">
                                    <div className="icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="info">
                                        <h5>Email</h5>
                                        <h6>{user.email}</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className="btn__signout" onClick={this.handelSignout}>Sign Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignOut;