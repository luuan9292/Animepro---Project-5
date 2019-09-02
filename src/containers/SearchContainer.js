import React, { Component } from 'react';
import { connect } from 'react-redux'

import Search from "../components/Search/Search";
import SearchItems from '../components/Search/SearchItems/SearchItems';
import Filter from '../components/Search/Filter/Filter';
import SearchItem from '../components/Search/SearchItems/SearchItem/SearchItem';

import { actFilterMultiType } from '../actions';

class SearchContainer extends Component {
    render() {

        let {anime, filter} = this.props;

        return (

            <Search>
                <Filter filterByMultiType={this.props.filterByMultiType}>

                </Filter>

                <SearchItems>

                    {this.showSearchItem(anime, filter.multiType, filter.searchKey)}

                </SearchItems>

            </Search>
        );
    }

    /**----------------------------------------
     * Function: mapping va filter SearchItem
     * Page: SearchPage
     ----------------------------------------**/
    showSearchItem = (anime, filter, searchKey) => {
        let result = null;
        let newAnime = [...anime];

        if (newAnime.length > 0) {

            if (filter !== undefined) {
                if(searchKey.length > 0) {//Filter search keyword
                    newAnime = newAnime.filter(item => item.name.toLowerCase().indexOf(searchKey.toLowerCase().trim()) !== -1);
                }
                if(filter.genres.length > 0) {//Filter theo genres
                    newAnime = newAnime.filter(item => item.genres.indexOf(filter.genres) !== -1);
                }
                if(filter.season.length > 0) {//Filter theo season
                    newAnime = newAnime.filter(item => item.season.indexOf(filter.season) !== -1);
                }
                if(filter.year.length > 0) {//Filter theo year
                    newAnime = newAnime.filter(item => item.year.indexOf(filter.year) !== -1);
                }
                if(filter.sort.length > 0) {//Filter theo sort
                    newAnime.sort((a, b) => {
                        if (a.views > b.views) {
                            return -1;
                        }
                        if (a.views < b.views) {
                            return 1;
                        }
                        return 0;
                    });
                }
            }

            result = newAnime.map((item, index) => {
                return <SearchItem item={item} key={index}/>
            })
        }

        return result;
    }
};

const mapStateToProps = state => {
    return {
        anime: state.anime,
        filter: state.filter
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        filterByMultiType: multiType => {
            dispatch(actFilterMultiType(multiType)); //dispatch filter
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);