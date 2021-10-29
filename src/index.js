import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
// set up redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

// REDUCERS
//reducer to hold/modify contents of feedback
const feedback = (state = template, action) => {
    
}




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
