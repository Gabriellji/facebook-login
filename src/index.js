import React from 'react';
import { Router } from 'react-router-dom';
import { render } from 'react-dom';

// global stylesheet
import './index.css';

import initFacebookSdk from './_helpers/init-facebook-sdk';
import jwtInterceptor from './_helpers/jwt.interceptor';
import errorInterceptor from './_helpers/error.interceptor';
import { history } from './_helpers/history';
import App from './App';

// setup fake backend
import fakeBackend from './_helpers/fake-backend';
fakeBackend();

// enable interceptors for http requests
jwtInterceptor();
errorInterceptor();

// wait for facebook sdk before startup
initFacebookSdk().then(startApp);

function startApp() { 
    render(
        <Router history={history}>
            <App />
        </Router>,
        document.getElementById('root')
    );
}