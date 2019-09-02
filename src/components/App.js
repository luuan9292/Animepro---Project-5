import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import routes from '../routes';

const App = () => {
    return (
            <Router>

                {showRoutes(routes)}

            </Router>
    );
}

/**Function: mapping routes**/
const showRoutes = routes => {
    let result = null;

    if(routes.length > 0) {
        result = routes.map((route, index) => {
            return <Route path={route.path} exact={route.exact} component={route.main} key={index} />
        });
    }

    return <Switch>{result}</Switch>;
}

export default App;
