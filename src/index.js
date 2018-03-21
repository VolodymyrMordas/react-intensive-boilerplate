// Core
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
// Instruments
import './theme/reset.css';

// Instruments
import store from './store';

//Components
import App from './containers/App';

render(
    <Provider store = { store } >
        <App />
    </Provider>,
    document.getElementById('root'),
);
