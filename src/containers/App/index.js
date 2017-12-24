// Core
import React, { Component } from 'react';

// Instruments
import avatar from '../../theme/assets/volodymyr-mordas.jpg';
import Feed from '../../componets/Feed';

const options = {
    avatar,
    firstName: 'Volodymyr',
    lastName:  'Mordas'
};

export default class App extends Component {

    timer = setInterval(() => this.forceUpdate(), 1000);

    render () {
        return (
            <Feed { ...options } />
        );
    }
}
