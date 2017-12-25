import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.scss';

export default class Composer extends Component {

    static contextTypes = {
        avatar:    PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired
    };

    render () {
        const { firstName, avatar } = this.context;

        return (
            <section className = { Styles.composer }>
                <img src = { avatar } />
                <form>
                    <textarea placeholder = { `Whats on your mind, ${firstName}!` } />
                    <input type = 'Submit' value = 'Post' />
                </form>
            </section>
        );
    }
}
