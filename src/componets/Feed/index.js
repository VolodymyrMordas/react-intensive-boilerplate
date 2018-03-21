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
import {
    // createPost, deletePost,
    fetchPosts } from '../../actions/posts';

class Feed extends Component {

    static propTypes = {
        posts:      PropTypes.array.isRequired,
        profile:    PropTypes.object.isRequired,
        fetchPosts: PropTypes.func
    };

    componentDidMount () {
        const { fetchPosts: fetchPostAction } = this.props;

        fetchPostAction();
        this.interval = setInterval(fetchPostAction, 5000);
    }

    componentWillUnmount () {
        clearInterval(this.interval);
    }


    //
    // // _createPost = () => this.props.actions.createPost();
    //
    // removePost = (id) => {
    //
    //     const { api, token } = this.context;
    //
    //     fetch(`${api}/${id}`, {
    //         method:  'DELETE',
    //         headers: {
    //             'Content-Type':  'application/json',
    //             'Authorization': token
    //         }
    //     }).then((response) => {
    //         if (response.status !== 204) {
    //             throw new Error(`error:`);
    //         }
    //         this.fetchPosts();
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // };

    handlePostAppear = (post) => {
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

    handlePostDisappear = (post) => {
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

    handlePostmanAppear = (postment) => {
        TweenLite.to(postment, 2.5, {
            ease:       Back.easeOut.config(1.7),
            x:          -300,
            onComplete: () => {
                this.handlePostmanDisappear(postment);
            }
        });
    };

    handlePostmanDisappear = (postment) => {
        TweenLite.to(postment, 2.5,
            {
                delay: 2,
                ease:  Back.easeOut.config(1.7),
                x:     260
            });
    };

    render () {
        const { posts : postData, profile } = this.props;

        const posts = postData.map((props) => (
            <Transition
                appear
                key = { props.id }
                timeout = { 314 }
                onEnter = { this.handlePostAppear }
                onExit = { this.handlePostDisappear }>
                <Post
                    { ...props }
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
                    onEnter = { this.handlePostmanAppear }
                    onExit = { this.handlePostmanDisappear } >
                    <Postment />
                </Transition>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile,
    posts:   state.posts
});

const mapDispatchToProps =
    (dispatch) =>
        bindActionCreators({
            fetchPosts
        }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
