import * as types from '../constants/ActionType';

let defaultState = {
    isLogin: false,
    userInfo: { email: '', uid: '', username: '', fullname: '' }
};

const user = (state = defaultState, action) => {
    switch (action.type) {
        case types.USER_SIGNIN:

            state.isLogin = true;
            state.userInfo = action.userInfo;

            return { ...state };
        case types.USER_SIGNOUT:

            state.isLogin = false;
            state.userInfo = { email: '', uid: '', username: '', fullname: '' };
            
            return { ...state };
        default: return { ...state }
    }
}

export default user;