import * as types from '../constants/ActionType';

let defaultState = [];

const anime = (state = defaultState, action) => {
    switch (action.type) {
        case types.FETCH_ANIME:
            state = action.anime
            return [...state];
        default: return [...state];
    }
};

export default anime;