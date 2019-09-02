import {combineReducers} from 'redux';

import anime from "./anime";
import filter from "./filter";
import notify from "./notify";
import user from "./user";

const reducer = combineReducers({
    anime,
    filter,
    notify,
    user
});

export default reducer;