import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    Row,
    Col,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Badge
} from 'reactstrap';

import "./Admin.css";

import Views from './Views/Views';
import Anime from './Anime/Anime';
import Users from './Users/User';
import Messages from './Messages/Messages'
import Utilities from './Utilities/Utilities';

import {newusers} from '../../services/firebase';

class Admin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            views: false,
            anime: true,
            users: false,
            utilities: false,
            comments: false,
            messages: false,
            newUsers : ''
        }
    }

    handleChangeMenu = (param) => {

        this.setState(state => {
            return {
                views: false,
                anime: false,
                users: false,
                utilities: false,
                messages: false,
                [param] : true
            }
        })

    }

    showMenu = () => {
        let {views, anime, users, utilities, messages} = this.state;

        if(views) {
            return <Views/>
        } else if(anime) {
            return <Anime />
        } else if(users) {
            return <Users />
        } else if(utilities) {
            return <Utilities/>
        } else if(messages) {
            return <Messages />
        }
    }

    handleClearNewUsers = () => {
        newusers.set([]);
    }

    componentDidMount = () => {
        newusers.on("value", data => {
            let items = [];
            data.forEach(item => {
                items.push(item.val());
            })
            this.setState({
                newUsers : items.length > 0 ? items.length : ''
            })
        })
    }

    render() {

        return (
            <Container fluid={true} className="admin__panel px-0">
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12" xl="12">
                        <div className="admin__header">
                            <Navbar color="dark" light expand="md">
                                <NavbarBrand><i className="fas fa-cogs"></i> Admin Panel</NavbarBrand>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink><i className="fas fa-power-off"></i> SignOut</NavLink>
                                    </NavItem>
                                </Nav>
                            </Navbar>
                        </div>
                    </Col>
                </Row>

                <Row className="admin__content px-0">
                    <Col xs="2" sm="2" md="2" lg="2" xl="2" className="px-0">
                        <div className="admin__manager">

                            <div className="title"><i className="fas fa-tools"></i> Management</div>
                            <ul className="px-0">
                                <li onClick={() => this.handleChangeMenu("views")} className={this.state.views ? 'active' : ''}><i className="fas fa-chart-line"></i> Dashboard</li>
                                <li onClick={() => this.handleChangeMenu("anime")} className={this.state.anime ? 'active' : ''}><i className="fas fa-compact-disc"></i> Anime</li>
                                <li onClick={(event) => {this.handleChangeMenu("users"); ; this.handleClearNewUsers();}} className={this.state.users ? 'active' : ''}><i className="fas fa-user-tag"></i> Users <Badge href="#" color="danger">{this.state.newUsers}</Badge></li>
                                <li onClick={() => this.handleChangeMenu("messages")} className={this.state.messages ? 'active' : ''}><i className="fab fa-mailchimp"></i> Messages <Badge href="#" color="danger">15</Badge></li>
                                <li onClick={() => this.handleChangeMenu("utilities")} className={this.state.utilities ? 'active' : ''}><i className="fas fa-toolbox"></i> Utilities</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs="10" sm="10" md="10" lg="10" xl="10" className="admin__dashboard pl-4">
                        <div className="title"><i className="fas fa-user-shield"></i> My Dashboard</div>

                        {this.showMenu()}

                    </Col>
                </Row>

            </Container>
        );
    }
}
export default Admin;