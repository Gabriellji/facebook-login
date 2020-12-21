import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import PrivateRoute from './component/PrivateRoute';
import Nav from './component/Nav';
import Home from './home/Home';
import EditAccount from './home/EditAccount';
import Login from './login/Login';

const App = () => {
    const pathname = useLocation().pathname || '';

    return (
        <div>
            <Nav />
            <div className="container pt-4">
                <Switch>
                    <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                    <PrivateRoute exact path="/" component={Home} />
                    <PrivateRoute path="/edit/:id" component={EditAccount} />
                    <Route path="/login" component={Login} />
                    <Redirect from="*" to="/" />
                </Switch>
            </div>
        </div>
    );
}

export default App;
