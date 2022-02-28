/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./helpers";
import PropTypes from 'prop-types'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/signin"
                    }}
                />
            )
        }
    />
);
PrivateRoute.propTypes = {
    component: PropTypes.any
}

export default PrivateRoute;