// Core
import React, { Component } from 'react';

// Instruments
import avatar from '../../theme/assets/volodymyr-mordas.jpg';
import Feed from '../../componets/Feed';
import { string } from 'prop-types';

const GROUP_ID = 'sn8x1osnm1';
const TOKEN = 'hpat31rqpx';

const options = {
    api:       `https://lab.lectrum.io/react/api/${GROUP_ID}`,
    avatar,
    firstName: 'Volodymyr',
    lastName:  'Mordas',
    token:     TOKEN
};

export default class App extends Component {

    static childContextTypes = {
        api:       string.isRequired,
        avatar:    string.isRequired,
        firstName: string.isRequired,
        lastName:  string.isRequired,
        token:     string.isRequired
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
