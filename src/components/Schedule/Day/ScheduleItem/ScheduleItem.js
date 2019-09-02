import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'reactstrap';

class ScheduleItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            day: '...',
            hours: '...',
            minutes: '...',
            seconds: '...',

            releaseHours: this.props.scheduleItem.release.releasehours,
            releaseMinutes: this.props.scheduleItem.release.releaseminute,
            releaseDay: this.props.scheduleItem.release.releasedayconvertnumber,
        }
    }

    countdownTimer = () => {

        let currentDay = new Date().getDay();

        let currentHours = new Date().getHours();

        let currentMinutes = new Date().getMinutes();

        let currentSeconds = new Date().getSeconds();

        let releaseDay = +this.state.releaseDay;

        let releaseHours = +this.state.releaseHours;

        let releaseMinutes = +this.state.releaseMinutes;

        let releaseSeconds = 0;

        let remainTime = releaseDay > currentDay ? releaseDay - currentDay : (releaseDay - currentDay) + 7;

        let remainHours = Math.abs((currentHours - releaseHours) + ((currentMinutes - releaseMinutes) / 60) + ((currentSeconds - releaseSeconds) / 60 / 60))

        let remainMili = (remainTime * 24 * 60 * 60 * 1000) + (remainHours * 60 * 60 * 1000);

        let s = Math.floor(remainMili / 1000);
        let m = Math.floor(s / 60);
        let h = Math.floor(m / 60);
        let d = Math.floor(h / 24);

        d %= 31;
        h %= 24;
        m %= 60;
        s %= 60;

        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        this.setState({
            day: d,
            hours: h,
            minutes: m,
            seconds: s
        })
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    componentDidMount() {
        this.interval = setInterval(() => this.countdownTimer(), 1000);
    }

    render() {

        let { scheduleItem } = this.props;

        return (
            <Col xs="2" sm="2" md="2" lg="2" xl="2" className="anime__items pt-2">
                <Link to={`anime/${scheduleItem.id}`}>
                    <div className="anime__item">
                        <div className="anime__image">
                            <img src={scheduleItem.thumblink} alt="anime" />
                            <span className="ribbon">{`Ep ${+scheduleItem.newep + 1}`}</span>
                            <div className="anime__overlay">
                                <img src="/img/play-video.png" alt="play" />
                            </div>
                            <div className="time__countdown">
                                <span><i className="fas fa-clock"></i></span>
                                <p>{scheduleItem.time}</p>
                                <p>{this.state.day}d : {this.state.hours} :{this.state.minutes} : {this.state.seconds}</p>
                            </div>
                        </div>
                        <div className="anime__info">
                            <div className="anime__name">{scheduleItem.name.length > 15 ? scheduleItem.name.substr(0, 15) + "..." : scheduleItem.name}</div>
                        </div>
                    </div>
                </Link>
            </Col>
        );
    }
}

export default ScheduleItem;