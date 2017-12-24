import React, { Component } from 'react';

import Styles from './styles.scss';

export default class Like extends Component {
    render () {
        return (
            <section className = { Styles.like } >
                <span className = { Styles.likeButton }>Like</span>
                <div>
                    <span>0</span>
                </div>
            </section>);

    }
}
