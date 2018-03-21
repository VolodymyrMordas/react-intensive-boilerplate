// Core
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { addLocaleData } from 'react-intl';

// Instrumnets
import rootReducer from '../reducers';

import uk from 'react-intl/locale-data/uk';
import ru from 'react-intl/locale-data/ru';

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

const middleware = [thunk];

if (dev) {
    middleware.push(logger);
}

// Init store
export default createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
