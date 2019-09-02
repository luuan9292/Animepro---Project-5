import React, { Component } from 'react';
import { connect } from "react-redux";

import Charts from "../components/Charts/Charts";
import TopItem from '../components/Charts/TopItem/TopItem';
import Item from '../components/Charts/Item/Item';

class ChartsContainer extends Component {

    render() {

        let { anime } = this.props;

        return (

            <Charts>

                {this.showChartsItem(anime)}

            </Charts>

        );
    }

    /**----------------------------------------
     * Function: mapping va filter AnimeItem
     * Component: ItemPage
     ----------------------------------------**/

    showChartsItem = anime => {
        let result = [];

        if (anime.length > 0) {

            let newArr = [...anime].sort((a, b) => {
                if (a.views.total > b.views.total) {
                    return -1;
                }
                if (a.views.total < b.views.total) {
                    return 1;
                }
                return 0;
            });

            for (let index = 0; index < 20; index++) {

                if (anime[index] === undefined) {    // neu co ket qua undefined lap tuc return
                    return result;
                }
                
                if(index >=0 && index <= 2) {
                    result.push(<TopItem key={index} item={newArr[index]} index={index} />);
                } else {
                    result.push(<Item item={newArr[index]} index={index} key={index}/>);
                }
            }
        }

        return result;
    }

};

const mapStateToProps = state => {
    return {
        anime: state.anime
    }
}

export default connect(mapStateToProps, null)(ChartsContainer);