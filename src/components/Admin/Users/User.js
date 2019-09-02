import React, { Component, Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Table } from 'reactstrap';

import "./Users.css";

import { users, firebaseApp } from '../../../services/firebase';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    handleDeleteUser = () => {

    }

    componentDidMount = () => {
        users.on("value", data => {
            let items = [];
            data.forEach(item => {
                items.push(item.val());
            })
            this.setState({
                users: items
            })
        })
    }

    showUser = (users) => {
        let result = null;
        let lastLogin = ''

        if (firebaseApp.auth().currentUser.metadata !== null) {
            let loginDate = new Date(firebaseApp.auth().currentUser.metadata.lastSignInTime);
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
            lastLogin = `${loginDate.getHours()}:${loginDate.getMinutes()}, ${loginDate.getDate()} ${months[loginDate.getHours()]} ${loginDate.getFullYear()}`
        }

        if (users.length > 0) {
            result = users.map((user, index) => {
                return (
                    <tr key={index}>
                        <td style={{ width: '20%' }}>
                            <img src="/img/chibi-girl3.jpg" alt='avata' />
                            <div className="user__name">
                                <h5>{user.username}</h5>
                                <h6>Member</h6>
                            </div>
                        </td>
                        <td style={{ width: '20%' }}>{user.fullname}</td>
                        <td style={{ width: '20%' }}>{user.email}</td>
                        <td style={{ width: '20%' }}>{user.uid}</td>
                        <td style={{ width: '20%' }}>{lastLogin}
                            <button className="delete__btn"><i className="fas fa-user-slash"></i> Delete</button>
                        </td>
                    </tr>
                )
            })
        }

        return result;
    }

    render() {
        let { users } = this.state;
        return (
            <Fragment>
                <Row className="users__manager">
                    <Col xs="12" sm="12" md="12" lg="12" xl="12">
                        <div className="users__title">
                            <button className="add__user"><i className="fas fa-plus"></i> ADD NEW USERS</button>
                            <input type="text" placeholder="Search User" />
                        </div>
                    </Col>
                </Row>

                <Table striped className="table__users">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Fullname</th>
                            <th>Email</th>
                            <th>ID</th>
                            <th>Last Login</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.showUser(users)}

                    </tbody>
                </Table>
            </Fragment>
        );
    }
};

export default Users;