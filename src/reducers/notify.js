import * as types from '../constants/ActionType';

let defaultState = {
    isShowNotify: false,
    style: '',
    content:''
};

const notify = (state=defaultState, action) => {
    let {style, content, isShowNotify} = action;

    switch(action.type) {
        case types.CHANGE_NOTIFY:
            state.style = style;
            state.content = content;
            state.isShowNotify = isShowNotify;
            return {...state};
        default: return {...state}
    }
}

export default notify;