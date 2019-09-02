import React, { Component } from 'react';
import { connect } from 'react-redux';

import Schedule from '../components/Schedule/Schedule';
import Day from '../components/Schedule/Day/Day';
import ScheduleItem from '../components/Schedule/Day/ScheduleItem/ScheduleItem';

class ScheduleContainer extends Component {

    render() {
        let { anime } = this.props;

        return (

            <Schedule>

                {this.showDay(anime, "Monday")}

                {this.showDay(anime, "Tuesday")}

                {this.showDay(anime, "Wednesday")}

                {this.showDay(anime, "Thursday")}

                {this.showDay(anime, "Friday")}

                {this.showDay(anime, "Saturday")}

                {this.showDay(anime, "Sunday")}

            </Schedule>
        );
    }

    showDay = (anime, day) => {
        return (
            <Day day={day}>

                    {this.showScheduleItem(anime, day)}

            </Day>
        );
    }

    showScheduleItem = (anime, day) => {
        let result = null;

        if (anime.length > 0) {
            result = anime.filter((item) => {
                return item.thisseason === true && item.release.releaseday === day
            }).map((scheduleItem, index) => {
                return <ScheduleItem scheduleItem={scheduleItem} key={index}/>
            })
        }

        return result;
    }
}

const mapStateToProps = state => {
    return {
        anime: state.anime,
    }
}

export default connect(mapStateToProps, null)(ScheduleContainer);