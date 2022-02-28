/* eslint-disable prettier/prettier */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Categorys from 'src/components/categorys/front-end/Categorys';
import DeatilsPost from 'src/components/posts/client/DeatilsPost';
import Home from 'src/layout/Home';
import DefaultLayout from 'src/layout/DefaultLayout';
import PrivateRoute from './PrivateRoute';
import Login from 'src/views/pages/login/Login';


function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <PrivateRoute exact path="/dashboard" component={DefaultLayout} />
                <Route exact path="/:slug" component={DeatilsPost} />
                <Route exact path="/category/:name" component={Categorys} />

                <Route exact path="/signin" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router