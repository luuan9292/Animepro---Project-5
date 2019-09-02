import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./SideBarChartItem.css";

import Spinner from "../../../../Spinner/Spinner";




class SideBarChartItem extends Component {

    scrollParam = 1050; // bien vi tri scroll

    constructor(props) {
        super(props);
        this.state = {
            scrollPosition: window.pageYOffset > this.scrollParam ? this.scrollParam : 0
        }
    }

    /**----------------------------------------
     * Function: Xu li hieu ung loader cho item
     * Component: HomePage
     ----------------------------------------**/
    handleScroll = () => {
        if (window.pageYOffset > this.scrollParam) {
            this.setState({
                scrollPosition: this.scrollParam
            })
        }
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    componentDidMount() {   // kich hoat su kien scroll
        window.addEventListener('scroll', this.handleScroll)
    }

    /**----------------------------------------
 * Function: Hien thi khi chua load du lieu xong
 * Component: HomePage
 ----------------------------------------**/
    handleLoading = () => {
        return (
            <div className="anime__image">
                <Spinner />
            </div>
        )
    }
    render() {

        let { item, index } = this.props;

        if (this.props.loading) {
            return this.handleLoading();
        }

        return (
            <Link to={`anime/${item.id}`}>
                <div className="anime__image">

                    {this.state.scrollPosition > this.scrollParam - 50 ? <img src={item.thumblink} alt="anime" /> : <Spinner />}

                    <span className="ribbon">{`${item.newep} / ${item.episodes}`}</span>

                    {this.showFlag(index)}

                    <div className="anime__overlay">
                        <img src="/img/play-video.png" alt="play" />
                    </div>
                    <h3 className="top__name">{item.name.length > 30 ? item.name.substr(0, 15) + "..." : item.name}</h3>
                </div>
            </Link>
        );
    }


    /**------------------------------------------
     * Function: mapping show flag xếp hạng 1 2 3
     * Component: SideBarChartItem
     *------------------------------------------- **/
    showFlag = index => {
        let result = null;

        if (index === 0) {
            result = <span className="top__flag top1">1<i></i></span>
        } else if (index === 1) {
            result = <span className="top__flag top2">2<i></i></span>
        } else if (index === 2) {
            result = <span className="top__flag top3">3<i></i></span>
        }

        return result;
    }
}


export default SideBarChartItem;