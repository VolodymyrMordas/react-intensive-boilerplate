import React, { Component } from 'react';

import Styles from './styles.scss';
import PropTypes from 'prop-types';


export default class Counter extends Component {

    static propTypes = {
        count: PropTypes.number.isRequired
    };

    static defaultProps = {
        count: 0
    };

    render () {
        const { count } = this.props;


        return (
            <section className = { Styles.counter }>Posts count: {count}</section>);
    }
}
