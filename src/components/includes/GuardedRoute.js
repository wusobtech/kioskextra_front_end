import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { WebRoutes } from '../../app/AppRoutes';
import AppConstants from '../../app/helpers/AppContants';
import { methodsHelper } from '../../app/helpers/HelperIndex';

const UNAUTHENTICATED_REDIRECT = WebRoutes.loginPage;
const AUTHENTICATED_REDIRECT = WebRoutes.homePage;

export const ACTIVE_PAGES = {
    "HOME" : "HOME",
    "ACCOUNT" : "ACCOUNT",
    "INVEST" : "INVEST",
    "SETTINGS" : "SETTINGS",
}

export const LOGOUT_REDIRECT = () => {
    return window.location = UNAUTHENTICATED_REDIRECT
};

export const LOGIN_REDIRECT = () => {
    return window.location = AUTHENTICATED_REDIRECT
};

const GuardedRoute = ({ component: Component, middlewares = [], isAuthenticated, sessionTimeout, accountStatus, ...rest }) => {
    
    isAuthenticated = methodsHelper.default(isAuthenticated, false);
    if (middlewares.includes(UNAUTH_MIDDLEWARE)) {
        if (isAuthenticated) {
            return <Route {...rest} render={() => (
                <Redirect to={AUTHENTICATED_REDIRECT} />
            )} />
        }
    }

    if (middlewares.includes(AUTH_MIDDLEWARE)) {
        if (!isAuthenticated) {
            return <Route {...rest} render={() => (
                <Redirect to={UNAUTHENTICATED_REDIRECT} />
            )} />
        }
        else {
            if (middlewares.includes(SESSION_TIMEOUT_MIDDLEWARE)) {
                if(sessionTimeout < 1){
                    return <Route {...rest} render={() => (
                        <Redirect to={WebRoutes.sessionTimeoutPage} />
                    )} />
                }
            }
            if (middlewares.includes(PROFILE_COMPLETE_MIDDLEWARE)) {
                let setupComplete = accountStatus === AppConstants.SETUP_COMPLETE;

                if (!setupComplete) {
                    return <Route {...rest} render={() => (
                        <Redirect to={WebRoutes.accountSetupPage} />
                    )} />
                }
            }
        }
    }
    return <Route {...rest} render={(props) => (
        <Component {...props} />
    )} />
}


export default GuardedRoute;


export const AUTH_MIDDLEWARE = "AUTH_MIDDLEWARE";
export const UNAUTH_MIDDLEWARE = "UNAUTH_MIDDLEWARE";
export const PROFILE_COMPLETE_MIDDLEWARE = "PROFILE_COMPLETE_MIDDLEWARE";
export const SESSION_TIMEOUT_MIDDLEWARE = "SESSION_TIMEOUT_MIDDLEWARE";


