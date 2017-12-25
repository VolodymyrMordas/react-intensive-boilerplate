import React, { Component } from 'react';

import Styles from './styles.scss';
import Composer from '../Composer';
import Post from '../Post';
import Counter from '../Counter';
import Postment from '../Postmen';

export default class Feed extends Component {

    render () {
        return (
            <section className = { Styles.feed }>
                <Composer />
                <Counter />
                <div>
                    <Post />
                    <Post />
                </div>
                <Postment />
            </section>
        );
    }
}
