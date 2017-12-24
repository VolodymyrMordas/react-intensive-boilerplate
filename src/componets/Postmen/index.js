import React, { Component } from 'react';

import Styles from './styles.scss';
import PropTypes from 'prop-types';

export default class Postment extends Component {
    static propTypes = {
        avatar:    PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName:  PropTypes.string.isRequired
    };

    render () {
        const { avatar, firstName } = this.props;

        return (
            <section className = { Styles.postmen }>
                <img src = { avatar } />
                <span>Welcome online, {firstName}!</span>
            </section>
        );
    }
}
