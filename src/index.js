import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/root';
import thunk from 'redux-thunk';

import { firebaseApp } from './services/firebase';
import { actSignout, actSigninRequest } from './actions/index';

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

/**----------------------------------------
* Function: Kiem tra trang thai cua user, lang nghe theo thoi gian thuc
* Component: HomePage
----------------------------------------**/
firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        let userInfo = {
            isAdmin: false,
            email: user.email,
            uid: user.uid,
            username: '',
            fullname: ''
        }

        store.dispatch(actSigninRequest(user.uid, userInfo));

    } else {
        
        store.dispatch(actSignout());

    }
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
