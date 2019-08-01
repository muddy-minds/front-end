import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { PersistGate } from 'redux-persist/integration/react';

import './index.sass';
import App from './App';

import rootReducer from './redux/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk, logger];

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Router>
    </Provider>,
    document.getElementById('root')
);
