import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

class AnimeItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            classList: "preloader" //class an hien preloader
        }
    }

    componentWillMount() {

        setTimeout(() => {
            this.setState({
                classList: "preloader__finish"
            })
        }, 3000)

        window.scrollTo(0, 0);

    }

    render() {

        return (

            <Container>

                <div className={this.state.classList}>
                    <img src="/img/preloader.gif" alt="preloader" />
                </div>

                {this.props.children}

            </Container>
        );
    }
}

export default AnimeItem;