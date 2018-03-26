//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.scss';
import Composer from '../Composer';
import Post from '../Post';
import Counter from '../Counter';
import Postment from '../Postmen';
import { Transition, TransitionGroup } from 'react-transition-group';
import { fromTo, Power2, TweenLite, Back } from 'gsap';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

// Instruments
import postsActions from '../../actions/posts/index';

class Feed extends Component {

    static propTypes = {
        posts:   PropTypes.array.isRequired,
        profile: PropTypes.object.isRequired
    };

    componentDidMount () {
        this.interval = setInterval(this._fetchPosts(), 5000);
    }

    componentWillUnmount () {
        clearInterval(this.interval);
    }

    _fetchPosts = () => {
        this.props.actions.fetchPosts();
    };

    _handlePostAppear = (post) => {
        fromTo(post, 0.628,
            {
                opacity: 0.01
                // rotationX: 0,
                // rotationY: 0
            },
            {
                opacity: 1,
                // rotationX: 360,
                // rotationY: 360,
                ease:    Power2.easeIn
            });
    };

    _handlePostDisappear = (post) => {
        fromTo(post, 0.628,
            {
                opacity:   1,
                rotationX: 0,
                rotationY: 0 },
            {
                opacity:   0.01,
                rotationX: 360,
                rotationY: 360,
                rotationZ: 360,
                ease:      Power2.easeOur
            });
    };

    _handlePostmanAppear = (postment) => {
        TweenLite.to(postment, 2.5, {
            ease:       Back.easeOut.config(1.7),
            x:          -300,
            onComplete: () => {
                this._handlePostmanDisappear(postment);
            }
        });
    };

    _handlePostmanDisappear = (postment) => {
        TweenLite.to(postment, 2.5,
            {
                delay: 2,
                ease:  Back.easeOut.config(1.7),
                x:     260
            });
    };

    render () {
        const { posts : postData, profile } = this.props;

        const posts = postData.map((post) => (
            <Transition
                appear
                key = { post.id }
                timeout = { 314 }
                onEnter = { this._handlePostAppear }
                onExit = { this._handlePostDisappear }>
                <Post
                    { ...post }
                    removePost = { this.removePost }
                />
            </Transition>)
        );

        return (
            <section className = { Styles.feed }>
                <Composer { ...profile } />
                <Counter count = { posts.length } />
                <div>
                    <TransitionGroup>
                        {posts}
                    </TransitionGroup>
                </div>
                <Transition
                    appear
                    in
                    unmountOnExit
                    timeout = { 314 }
                    onEnter = { this._handlePostmanAppear }
                    onExit = { this._handlePostmanDisappear } >
                    <Postment />
                </Transition>
            </section>
        );
    }
}

const mapStateToProps = ({ posts: { data, isFetching, error }, profile }) => ({
    profile,
    posts: data,
    isFetching,
    error
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...postsActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
