import React from 'react';

import HomePage from './pages/HomePage';
import SearchPage from "./pages/SearchPage";
import ChartsPage from './pages/ChartsPage';
import SchedulePage from './pages/SchedulePage';
import FavoritePage from './pages/FavoritePage';
import ItemPage from "./pages/ItemPage";
import NotfoundPage from "./pages/NotfoundPage";
import AdminPage from "./pages/AdminPage";

const routes = [
    {
        path: '/',
        exact: true,
        main: ({history}) => <HomePage history={history}/>
    },
    {
        path: '/search',
        exact: false,
        main: ({history}) => <SearchPage history={history}/>
    },
    {
        path: '/charts',
        exact: false,
        main: ({history}) => <ChartsPage history={history}/>
    },
    {
        path: '/schedule',
        exact: false,
        main: ({history}) => <SchedulePage history={history}/>
    },
    {
        path: '/favorite',
        exact: false,
        main: ({history}) => <FavoritePage history={history}/>
    },
    {
        path: '/anime/:item',
        exact: false,
        main: ({match, history}) => <ItemPage match={match} history={history}/>
    },
    {
        path: '/admin',
        exact: false,
        main: () => <AdminPage />
    },
    {
        path: '',
        exact: true,
        main: () => <NotfoundPage />
    }
];

export default routes;