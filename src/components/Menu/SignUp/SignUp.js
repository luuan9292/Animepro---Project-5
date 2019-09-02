import React, { Component } from 'react';

import { Row, Button } from 'reactstrap';

import "./SignUp.css";

import * as types from '../../../constants/Notify';

import { users, firebaseApp, newusers} from '../../../services/firebase';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: false,
            fullname: '',
            email: '',
            username: '',
            password: '',
            repeatpassword: '',
            agree: false
        }
    }

    /**----------------------------------------
    * Function: An hien form signup
    * Component: MenuContainer
    ----------------------------------------**/
    handleSignUp = e => {
        this.setState({
            status: !this.state.status
        })
    }

    handelChange = e => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        })
    }

    /**----------------------------------------
    * Function: 
    *       + Goi phuong thuc dang ky cua Firebase
    *       + Dung UID tra ve tao phan user info ben users database 
    *       + Dispatch thong bao khi thanh cong hoac bi loi
    * Component: MenuContainer
    ----------------------------------------**/
    handleSubmit = e => {
        let { fullname, email, username, password } = this.state;

        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then(data => {
                users.child(data.user.uid).set({
                    isAdmin: false,
                    fullname,
                    username,
                    email,
                    uid: data.user.uid
                });

                newusers.child(data.user.uid).set({
                    isAdmin: false,
                    fullname,
                    username,
                    email,                  
                    uid: data.user.uid
                })

                this.props.changeNotify(types.NOTI_TYPE_INFO, types.NOTI_SIGNUP_SUCCESSFULL_MESSAGE, true)
            })
            .catch(err => {
                this.props.changeNotify(types.NOTI_TYPE_ERROR, err.message, true)
            });

        this.setState({
            fullname: '',
            email: '',
            username: '',
            password: '',
            repeatpassword: '',
            agree: false
        })
        e.preventDefault();
    }

    render() {
        return (
            <div className="signup">
                <Button onClick={this.handleSignUp} className={this.state.status === true ? "btn__signup click" : "btn__signup"}>SIGN UP</Button>

                <Row className="signup__wrapper px-0" onMouseLeave={this.handleSignUp}>

                    <div className={this.state.status === true ? "signup__form show" : "signup__form"}>
                        <form onSubmit={this.handleSubmit}>
                            <h1>Sign Up</h1>
                            <div>
                                <label>Full Name</label>
                                <input name='fullname' onChange={this.handelChange} value={this.state.fullname} type="text" placeholder="Name..." autoComplete="off" required />
                            </div>
                            <div>
                                <label>Email</label>
                                <input name='email' onChange={this.handelChange} value={this.state.email} type="email" placeholder="Email adress..." autoComplete="off" required />
                            </div>
                            <div>
                                <label>Username</label>
                                <input name='username' onChange={this.handelChange} value={this.state.username} type="text" placeholder="Username..." autoComplete="off" required />
                            </div>
                            <div>
                                <label>Password</label>
                                <input name='password' onChange={this.handelChange} value={this.state.password} type="password" placeholder="**********" required />
                            </div>
                            <div>
                                <label>Repeat Password</label>
                                <input name='repeatpassword' onChange={this.handelChange} value={this.state.repeatpassword} type="password" placeholder="**********" required />
                            </div>
                            <label className="remember"> I agree to the Terms of User
                                    <input name='agree' onChange={this.handelChange} value={this.state.agree} type="checkbox" />
                                <span className="checkmark">
                                </span></label>
                            <div>
                                <button className="signup__btn">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </Row>
            </div>
        );
    }
}

export default SignUp;