import * as types from '../constants/ActionType';
import { animeData, users } from '../services/firebase';

/**----------------------------------------
* Function:
        + Request fetch du lieu tu firebase
        + Dispatch them data phim vao redux
* Component: MenuContainer
----------------------------------------**/
export const actFetchAnimeRequest = () => {
    return dispatch => {
        return animeData.on('value', data => {
            let anime = [];
            data.forEach(item => {
                anime.push(item.val());
                dispatch(actFetchAnime(anime));
            })
        });
    }
}

export const actFetchAnime = anime => {
    return {
        type: types.FETCH_ANIME,
        anime
    }
}

/**----------------------------------------
* Function:
        + Request fetch du lieu tu firebase
        + Dispatch them info nguoi dung dang nhap vao redux
* Component: index.js
----------------------------------------**/
export const actSigninRequest = (uid, userInfo) => {
    return dispatch => {
        return users.child(uid).once("value")
            .then(data => {
                userInfo.isAdmin = data.val().isAdmin;
                userInfo.username = data.val().username;
                userInfo.fullname = data.val().fullname;

                dispatch(actSignin(userInfo))
            })
    }
}

export const actSignin = userInfo => {
    return {
        type: types.USER_SIGNIN,
        userInfo
    }
}

export const actSignout = () => {
    return {
        type: types.USER_SIGNOUT
    }
}

export const actFilterAnimeByType = animeType => {
    return {
        type: types.FILTER_ANIME_BY_TYPE,
        animeType
    }
}

export const actFilterLiveByType = liveType => {
    return {
        type: types.FILTER_LIVE_BY_TYPE,
        liveType
    }
}

export const actFilterMultiType = multiType => {
    return {
        type: types.FILTER_MULTI_TYPE,
        multiType
    }
}

export const actSearchByKeyword = keyword => {
    return {
        type: types.SEARCH__BY__KEYWORD,
        keyword
    }
}

export const actChangeNotify = (style, content, isShowNotify) => {
    return {
        type: types.CHANGE_NOTIFY,
        style,
        content,
        isShowNotify
    }
}