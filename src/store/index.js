// Core
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { addLocaleData } from 'react-intl';
import createSagaMiddleware from 'redux-saga';

// Instrumnets
import rootReducer from '../reducers';


import uk from 'react-intl/locale-data/uk';
import ru from 'react-intl/locale-data/ru';
import { saga } from '../core/sagas';

addLocaleData([...uk, ...ru]);

// This is a middleware
const logger = createLogger({
    duration:  true,
    collapsed: true,
    diff:      true,
    colors:    {
        title:     () => '#139BFE',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#ff0005'
    }
});

// Environment check
const dev = process.env.NODE_ENV === 'development'; // eslint-disable-line
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = dev && devtools ? devtools : compose;

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];

if (dev) {
    middleware.push(logger);
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleware.run(saga);

// Init store
export default store;
