import React, { Component } from 'react';

import Styles from './styles.scss';
import PropTypes from 'prop-types';

export default class Like extends Component {

    contextTypes = {
        likePost: PropTypes.func
    };

    render () {
        const { likePost } = this.context;


        return (
            <section className = { Styles.like } >
                <span className = { Styles.likeButton } onClick = { likePost() }>Like</span>
                <div>
                    <span>0</span>
                </div>
            </section>);

    }
}
