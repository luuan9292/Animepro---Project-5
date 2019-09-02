import * as types from '../constants/ActionType';

let defaultState = {
    animeType: '',
    liveType: '',
    multiType: {
        genres: '',
        season: '',
        year: '',
        sort: ''
    },
    searchKey: ''
}

const filter = (state = defaultState, action) => {
    
    let { animeType, liveType, multiType, keyword } = action;

    switch (action.type) {
        case types.FILTER_ANIME_BY_TYPE:
            state.animeType = animeType;
            return { ...state };
        case types.FILTER_LIVE_BY_TYPE:
            state.liveType = liveType;
            return { ...state };
        case types.FILTER_MULTI_TYPE:
            state.multiType = {...state.multiType, ...multiType};
            return { ...state };
        case types.SEARCH__BY__KEYWORD:
            state.searchKey = keyword;
            return {...state};
        default: return { ...state };
    }
};

export default filter;