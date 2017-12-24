import React, { Component } from 'react';

import Styles from './styles.scss';

export default class Counter extends Component {
    render () {
        return (
            <section className = { Styles.counter }>Posts count: 2</section>);
    }
}
