import React, { Component } from 'react';

import Styles from './styles.scss';
import moment from 'moment';
import Like from '../../componets/Like';

import PropTypes from 'prop-types';

export default class Post extends Component {

    static propTypes = {
        avatar:    PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName:  PropTypes.string.isRequired
    };

    render () {
        const { avatar, firstName, lastName } = this.props;


        return (
            <section className = { Styles.post } >
                <span className = { Styles.cross } />
                <img src = { avatar } />
                <a>{firstName} {lastName}</a>
                <time>{moment().format('MMMM D h:mm:ss a')}</time>
                <p>What a good day!!</p>
                <Like />
            </section>);
    }
}
