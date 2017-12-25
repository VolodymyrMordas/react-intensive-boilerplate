// Core
import React, { Component } from 'react';

// Instruments
import avatar from '../../theme/assets/volodymyr-mordas.jpg';
import Feed from '../../componets/Feed';
import { string } from 'prop-types';

const options = {
    avatar,
    firstName: 'Volodymyr',
    lastName:  'Mordas'
};

export default class App extends Component {

    static childContextTypes = {
        avatar:    string.isRequired,
        firstName: string.isRequired,
        lastName:  string.isRequired
    };

    getChildContext () {
        return options;
    }

    timer = setInterval(() => this.forceUpdate(), 1000);

    render () {
        return (
            <Feed />
        );
    }
}
