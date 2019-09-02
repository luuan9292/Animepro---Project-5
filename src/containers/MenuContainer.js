import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Menu from "../components/Menu/Menu";
import SignIn from '../components/Menu/SignIn/SignIn';
import SignUp from '../components/Menu/SignUp/SignUp';
import SignOut from '../components/Menu/SignOut/SignOut';
import HomeSearch from '../components/Menu/HomeSearch/HomeSearch';
import HomeSearchItem from '../components/Menu/HomeSearch/HomeSearchItem/HomeSearchItem';

import { actFetchAnimeRequest, actSearchByKeyword, actChangeNotify } from '../actions';

class MenuContainer extends Component {
    /**----------------------------------------
     * Function: Goi method dispatch request du lieu
     * Component: HomePage
     ----------------------------------------**/
    componentDidMount() {
        this.props.fecthAnimeRequest();
    }

    render() {

        //hitory lay component page
        let { history, searchByKeyWord, anime, filter, user } = this.props;

        return (
            <Menu>

                <HomeSearch history={history} searchByKeyWord={searchByKeyWord}>

                    {this.showSearchItem(anime, filter.searchKey)}

                </HomeSearch>

                {this.showUser(user, history)}

            </Menu>
        );
    }

    /**----------------------------------------
    * Function: Mapping va filter SearchItem
    * Component: MenuContainer
    ----------------------------------------**/
    showSearchItem = (anime, searchKey) => {
        let result = [];
        if (anime.length > 0) {

            if (searchKey.length > 0 && searchKey.length !== "") {  //Filter search keyword
                anime = anime.filter(item => item.name.toLowerCase().indexOf(searchKey.toLowerCase().trim()) !== -1);

                for (let index = 0; index < 5; index++) {

                    if (anime[index] === undefined) {    // neu co ket qua undefined lap tuc return
                        return result;
                    }

                    result.push(<HomeSearchItem item={anime[index]} key={index} />)
                }
            }
        }

        return result;
    }

    showUser = (user,history) => {
        if (user.isLogin) {

            return <SignOut changeNotify={this.props.changeNotify} user={user.userInfo} history={history}></SignOut>

        } else {
            return (
                <Fragment>
                    <SignUp changeNotify={this.props.changeNotify}></SignUp>

                    <SignIn changeNotify={this.props.changeNotify}></SignIn>
                </Fragment>
            );
        }
    }
};

const mapStateToProps = state => {
    return {
        anime: state.anime,
        filter: state.filter,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fecthAnimeRequest: () => {
            dispatch(actFetchAnimeRequest());
        },
        searchByKeyWord: keyword => {
            dispatch(actSearchByKeyword(keyword)); // dispatch search keyword
        },
        changeNotify: (style, content, isShowNotify) => {
            dispatch(actChangeNotify(style, content, isShowNotify));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);