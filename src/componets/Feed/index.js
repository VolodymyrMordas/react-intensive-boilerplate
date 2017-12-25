import React, { Component } from 'react';

import Styles from './styles.scss';
import Composer from '../Composer';
import Post from '../Post';
import Counter from '../Counter';
import Postment from '../Postmen';
import avatar from '../../theme/assets/volodymyr-mordas.jpg';

const options = {
    avatar,
    firstName: 'Volodymyr',
    lastName:  'Mordas'
};

export default class Feed extends Component {

    constructor () {
        super();
        this.createPost = this.createPost.bind(this);
        this.removePost = this.removePost.bind(this);
    }

    state = {
        posts: []
    };


    createPost (post) {
        this.setState(({ posts }) => ({ posts: [post, ...posts]}));
    }

    removePost (id) {
        this.setState(({ posts }) => ({ posts: posts.filter((post) => post.id !== id) }));
    }

    render () {

        const { posts } = this.state;

        const postList = posts.map((post) => <Post key = { post.id } { ...Object.assign(post, options) } removePost = { this.removePost } />);

        return (
            <section className = { Styles.feed }>
                <Composer createPost = { this.createPost } />
                <Counter count = { posts.length } />
                <div>
                    {postList}
                </div>
                <Postment />
            </section>
        );
    }
}
