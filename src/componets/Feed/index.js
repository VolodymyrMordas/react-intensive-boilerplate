import React, { Component } from 'react';

import Styles from './styles.scss';
import Composer from '../Composer';
import Post from '../Post';
import Counter from '../Counter';
import Postment from '../Postmen';
import { Transition, TransitionGroup } from 'react-transition-group';
import { fromTo, Power2, TweenLite, Back } from 'gsap';
import { string } from 'prop-types';

export default class Feed extends Component {

    static contextTypes = {
        api:   string.isRequired,
        token: string.isRequired
    };

    state = {
        posts: [],
        show:  true
    };

    componentWillMount () {
        const posts = JSON.parse(localStorage.getItem('posts') || '[]');

        this.setState({ posts });
    }

    componentDidMount () {
        this.fetchPosts();

        this.interval = setInterval(() => {
            this.fetchPosts();
        }, 5000);
    }

    // componentWillUpdate (_, { posts }) {
    //     console.log('component will update');
    //     this.savePostToLocaStorege(posts);
    // }

    componentWillUnmout () {
        this.clearInterval(this.interval);
    }

    fetchPosts = () => {
        try {
            const { api } = this.context;

            fetch(api, {
                method: 'GET'
            }).then((response) => {
                if (response.status !== 200) {
                    throw new Error(`error:${response.message}`);
                }

                return response.json();
            }).then(({ data : posts }) => {
                this.setState(() => ({
                    posts
                }));
            });
        } catch (error) {
            console.log(error);
        }
    };

    createPost = (post) => {
        try {
            const { api, token } = this.context;

            const { comment } = post;

            fetch(api, {
                method:  'POST',
                headers: {
                    'Content-Type':  'application/json',
                    'Authorization': token
                },
                body: JSON.stringify({ comment })
            }).then((response) => {
                if (response.status !== 200) {
                    throw new Error(`error:${response.message}`);
                }

                return response.json();
            }).then((p) => {
                const { data } = p;

                this.setState(({ posts }) => ({ posts: [data, ...posts]}));
            });
        } catch (error) {
            console.log(error);
        }
    };

    removePost = (id) => {

        const { api, token } = this.context;

        fetch(`${api}/${id}`, {
            method:  'DELETE',
            headers: {
                'Content-Type':  'application/json',
                'Authorization': token
            }
        }).then((response) => {
            if (response.status !== 204) {
                throw new Error(`error:`);
            }
            this.fetchPosts();
        }).catch((error) => {
            console.log(error);
        });
    };

    // savePostToLocaStorege = (posts) => {
    //     localStorage.setItem('posts', JSON.stringify(posts));
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

    likePost = (id) => {
        const { api, token } = this.context;

        fetch(`${api}/${id}`, {
            method:  'PUT',
            headers: {
                'Content-Type':  'application/json',
                'Authorization': token
            }
        }).then((response) => {
            if (response.status !== 200) {
                throw new Error(`error:`);
            }

            return response.json();
        }).then((post) => {
            console.log(post);
            // const { data } = post;

            // this.setState(({ posts }) => {
            //     posts.filter((item) => item.id === data.id).likes = data.likes;
            //
            //     return { posts };
            // });

            // this.setState(({ posts }) => {
            //     console.log(posts);
            //
            //     return { posts: [data, ...posts]};
            // });

            this.fetchPosts();

        }).catch((error) => {
            console.log(error);
        });
    };

    render () {

        const { posts } = this.state;

        const postList = posts.map((post) => (
            <Transition
                appear
                key = { post.id }
                timeout = { 314 }
                onEnter = { this.handlePostAppear }
                onExit = { this.handlePostDisappear }>
                <Post key = { post.id } { ...post } likePost = { this.likePost } removePost = { this.removePost } />
            </Transition>)
        );

        return (
            <section className = { Styles.feed }>
                <Composer createPost = { this.createPost } />
                <Counter count = { posts.length } />
                <div>
                    <TransitionGroup>
                        {postList}
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
