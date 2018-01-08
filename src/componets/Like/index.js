import React, { Component } from 'react';
import Styles from './styles.scss';
import PropTypes from 'prop-types';

export default class Like extends Component {

    static propTypes = {
        likePost: PropTypes.func,
        likes:    PropTypes.array
    };

    static contextTypes = {
        firstName: PropTypes.string,
        lastName:  PropTypes.string
    };

    /**
     * render like panel
     *
     * @param {array} likes - array of post's likes
     * @returns {*} - rendered likes panel
     */
    renderLikePanel = (likes) => {
        if (likes.length === 0) {
            return;
        }

        if (likes.length === 1) {
            return this.renderLike(likes[0]);
        }

        return likes.reduce((prev, item) => this.renderLike(item));
    };

    /**
     * render like consumer
     *
     * @param {Object} like - direct like
     * @returns {*} render - separate like
     */
    renderLike = (like) => (<a>{like.firstName} {like.lastName}</a>);

    render () {
        const { likes, likePost } = this.props;
        const { firstName: fn, lastName: ln } = this.context;

        const iLike = likes.some(({ firstName, lastName }) => firstName === fn && lastName === ln);


        return (
            <section className = { Styles.like } >
                <span className = { iLike ? Styles.likedButton : Styles.likeButton } onClick = { likePost }>Like</span>
                {likes.length > 0 ? <div><span>{likes.length} {this.renderLikePanel(likes)}</span></div> : ''}
            </section>);

    }
}
