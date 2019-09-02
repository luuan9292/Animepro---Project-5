import React, { Component } from "react";
import { connect } from "react-redux";

import MainContent from "../components/MainContent/MainContent";
import NewUpdate from "../components/MainContent/NewUpdate/NewUpdate";
import SideBar from "../components/MainContent/SideBar/SideBar";
import NewUpdateAnime from '../components/MainContent/NewUpdate/NewUpdateAnime/NewUpdateAnime';
import NewUpdateLive from '../components/MainContent/NewUpdate/NewUpdateLive/NewUpdateLive';
import NewItem from '../components/MainContent/NewUpdate/NewUpdateAnime/NewItem/NewItem';
import LiveItem from '../components/MainContent/NewUpdate/NewUpdateLive/LiveItem/LiveItem';
import SideBarChart from '../components/MainContent/SideBar/SideBarChart/SideBarChart';
import SideBarRecommend from '../components/MainContent/SideBar/SideBarRecommend/SideBarRecommend';
import SideBarChartItem from '../components/MainContent/SideBar/SideBarChart/SideBarChartItem/SideBarChartItem';
import SideBarRecommendItem from '../components/MainContent/SideBar/SideBarRecommend/SideBarRecommendItem/SideBarRecommendItem';

import { actFilterAnimeByType, actFilterLiveByType } from "../actions";

class MainContentContainer extends Component {

    render() {

        let { anime, filter } = this.props;

        return (
            <MainContent>
                <NewUpdate>

                    <NewUpdateAnime filterAnimeByType={this.props.filterAnimeByType}>

                        {this.showNewItem(anime, filter.animeType)}

                    </NewUpdateAnime>

                    <NewUpdateLive filterLiveByType={this.props.filterLiveByType}>

                        {this.showLiveItem(anime, filter.liveType)}

                    </NewUpdateLive>

                </NewUpdate>

                <SideBar>

                    <SideBarChart>

                        {this.showSideBarChartItem(anime)}

                    </SideBarChart>

                    <SideBarRecommend>

                        {this.showSideBarRecommendItem(anime)}

                    </SideBarRecommend>

                </SideBar>

            </MainContent>
        )
    }

    /**----------------------------------------
     * Function: mapping va filter NewItem
     * Component: HomePage
     ----------------------------------------**/
    showNewItem(anime, filter) {
        let result = [];

        if (anime.length > 0) {

            // Nhan gia tri va filter anime item neu co thi filter con khong thi bo qua
            if (filter !== undefined && filter.length > 0) {
                anime = anime.filter(item => item.genres.indexOf(filter) !== -1);
            }

            //Filter type anime
            anime = anime.filter(item => item.type === "TV series");
            // lap va gioi han anime item duoc hien thi o hamepage
            for (let index = anime.length - 1; index >= anime.length - 16; index--) {

                if (anime[index] === undefined) {    // neu co ket qua undefined lap tuc return
                    return result;
                }

                result.push(<NewItem item={anime[index]} key={index} />);
            }
        } else {    // Chua tai xong du lieu thi load phan nay
            for (let index = 0; index < 16; index++) {
                result.push(<NewItem loading={"loading"} key={index} />);
            }
        }
        return result;
    }

    /**----------------------------------------
     * Function: mapping va filter LiveItem
     * Component: HomePage
     ----------------------------------------**/
    showLiveItem(anime, filter) {
        let result = [];

        if (anime.length > 0) {

            // Nhan gia tri va filter live item neu co thi filter con khong thi bo qua
            if (filter !== undefined && filter.length > 0) {
                anime = anime.filter(item => item.genres.indexOf(filter) !== -1);
            }

            //Filter type live
            anime = anime.filter(item => item.type === "Live");

            // lap va gioi han live item duoc hien thi o hamepage
            for (let index = anime.length - 1; index >= anime.length - 8; index--) {

                if (anime[index] === undefined) {    // neu co ket qua undefined lap tuc return
                    return result;
                }

                result.push(<LiveItem item={anime[index]} key={index} />);
            }
        } else {    // Chua tai xong du lieu thi load phan nay
            for (let index = 0; index < 8; index++) {
                result.push(<LiveItem loading={"loading"} key={index} />);
            }
        }
        return result;
    }

    /**----------------------------------------
     * Function: mapping SideBarChartItem
     * Component: HomePage
     ----------------------------------------**/
    showSideBarChartItem(anime) {
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
            for (let index = 0; index <= 5; index++) {

                if (anime[index] === undefined) {    // neu co ket qua undefined lap tuc return
                    return result;
                }

                result.push(<SideBarChartItem item={newArr[index]} key={index} index={index} />);
            }
        } else {    // Chua tai xong du lieu thi load phan nay
            for (let index = 0; index < 6; index++) {
                result.push(<SideBarChartItem loading={"loading"} key={index} />);
            }
        }
        return result;
    }

    /**----------------------------------------
     * Function: 
     *          + mapping SideBarRecommendItem
     *          + Random post moi lan refresh
     * Component: HomePage
     ----------------------------------------**/
    showSideBarRecommendItem(anime) {
        let result = [];
        if (anime.length > 0) {
            //Ham random cho ra mot so ngau nhien phai lon hon 5 vi moi lan lay ra 5 item
            let rand = Math.floor(Math.random() * (anime.length - 5)) + 5;

            // lap ra 5 item tu so ngau nhien
            for (let index = rand; index > rand - 5; index--) {

                if (anime[index] === undefined) {    // neu co ket qua undefined lap tuc return
                    return result;
                }

                result.push(<SideBarRecommendItem item={anime[index]} key={index} />);
            }
        } else {    // Chua tai xong du lieu thi load phan nay
            for (let index = 0; index < 5; index++) {
                result.push(<SideBarRecommendItem loading={"loading"} key={index} />);
            }
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        anime: state.anime,
        filter: state.filter
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        filterAnimeByType: animeType => {
            dispatch(actFilterAnimeByType(animeType)); // dispatch filter new anime item
        },
        filterLiveByType: liveType => {
            dispatch(actFilterLiveByType(liveType)); // dispatch filter live item
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContentContainer);