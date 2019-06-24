import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
// import reduxPromise from 'redux-promise';
import async from 'middlewares/asyncMiddleWare';
import stateValidator from './middlewares/stateValidatorMiddleWare';

export default ({children, initialState = {}}) => {
    // const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));
    const store = createStore(reducers, initialState, applyMiddleware(async,
        stateValidator));

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}