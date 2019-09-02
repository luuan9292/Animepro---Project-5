import React, { Component } from 'react';
import { connect } from 'react-redux';

import AnimeItem from '../components/AnimeItem/AnimeItem';
import ItemInfo from '../components/AnimeItem/ItemInfo/ItemInfo'
import ItemLink from '../components/AnimeItem/ItemLink/ItemLink'

class AnimeItemContainer extends Component {
    render() {

        let { match, anime } = this.props;

        let id = match.params.item;

        return (
            <AnimeItem>

                {this.showItemInfo(anime, id)}

                {this.showItemLink(anime, id)}

            </AnimeItem>

        );
    }

    /**----------------------------------------
     * Function: Find element co id tuong ung de render ItemInfo
     * Component: ItemPage
     ----------------------------------------**/
    showItemInfo= (anime, id) => {
        let result = null;
        let thisItem = null;


        if (anime.length > 0) {
            thisItem = anime.find(item => {
                return item.id === id;
            })
        } else {
            return
        }

        result = <ItemInfo item={thisItem} id={id}/>

        return result;
    }

    /**----------------------------------------
     * Function: Find element co id tuong ung de render ItemLink
     * Component: ItemPage
     ----------------------------------------**/
     showItemLink= (anime, id) => {
        let result = null;
        let thisItem = null;


        if (anime.length > 0) {
            thisItem = anime.find(item => {
                return item.id === id;
            })
        } else {
            return
        }

        result = <ItemLink item={thisItem} id={id}/>

        return result;
    }
}

const mapStateToProps = state => {
    return {
        anime: state.anime
    }
}

export default connect(mapStateToProps, null)(AnimeItemContainer);
