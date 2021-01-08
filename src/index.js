import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';
import 'font-awesome/css/font-awesome.min.css';

import reportWebVitals from './reportWebVitals';

import {
    Router,
    Route,
} from 'react-router-dom';

import App from './App';
import { history } from './config/network';


const router = (
    <Router history={history}>
        <Route component={App} />
    </Router>
)
ReactDOM.render(
    <React.StrictMode>
        {router}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
