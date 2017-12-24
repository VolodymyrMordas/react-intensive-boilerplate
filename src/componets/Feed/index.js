import React, { Component } from 'react';

import Styles from './styles.scss';
import Composer from '../Composer';
import Post from '../Post';
import Counter from '../Counter';
import Postment from '../Postmen';
import PropTypes from 'prop-types';

export default class Feed extends Component {
    static propTypes = {
        avatar:    PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName:  PropTypes.string.isRequired
    };

    render () {
        return (
            <section className = { Styles.feed }>
                <Composer { ...this.props } />
                <Counter />
                <div>
                    <Post { ...this.props } />
                    <Post { ...this.props } />
                </div>
                <Postment { ...this.props } />
            </section>
        );
    }
}
