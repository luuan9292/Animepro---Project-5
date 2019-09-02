import React, { Component } from 'react';

import "./SignIn.css";
import * as types from '../../../constants/Notify';

import {firebaseApp} from '../../../services/firebase';

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            agree: true
        }
    }

    handelChange = e => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        let { email, password } = this.state;

        firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .then( data => {
            this.props.changeNotify(types.NOTI_TYPE_SUCCESS, types.NOTI_SIGNIN_SUCCESSFULL_MESSAGE, true);
        })
        .catch( error => {
            this.props.changeNotify(types.NOTI_SIGNIN_FAIL_MESSAGE, types.NOTI_SIGNIN_FAIL_MESSAGE, true);
        });

        this.setState({
            email: '',
            password: '',
        })

        e.preventDefault();
    }

    render() {
        return (
            <div className="signin">
                <i className="fas fa-id-card"></i>
                <div className="signin__wrapper">
                    <div className="signin__form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="avatar">
                                <img src="/img/chibi-girl2.png" alt="avatar" />
                            </div>
                            <div>
                                <label>Email</label>
                                <input name='email' onChange={this.handelChange} value={this.state.email} type='email' autoComplete="off" placeholder='Type your username' required />
                            </div>
                            <div>
                                <label>Password</label>
                                <input name='password' onChange={this.handelChange} value={this.state.password} type='password' placeholder='Type your password' required />
                            </div>
                            <div className="text-right">
                                <a href="#1">Forgot password?</a>
                            </div>
                            <div>
                                <button className="btn__signin">Sign In</button>
                            </div>
                            <label className="remember">Remember Me
                                <input type="checkbox" defaultChecked="checked" disabled />
                                <span className="checkmark" />
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;