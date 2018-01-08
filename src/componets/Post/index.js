import React, { Component } from 'react';

import Styles from './styles.scss';
import moment from 'moment';
import Like from '../../componets/Like';

import PropTypes from 'prop-types';

export default class Post extends Component {

    static propTypes = {
        avatar:     PropTypes.string.isRequired,
        comment:    PropTypes.string.isRequired,
        created:    PropTypes.number.isRequired,
        firstName:  PropTypes.string.isRequired,
        id:         PropTypes.string.isRequired,
        lastName:   PropTypes.string.isRequired,
        likePost:   PropTypes.func,
        likes:      PropTypes.array,
        removePost: PropTypes.func
    };

    handleRemovePost = () => {
        const { id, removePost } = this.props;

        removePost(id);
    };

    handleLikePost = () => {
        const { id, likePost } = this.props;

        likePost(id);
    };

    render () {
        const { avatar, firstName, lastName, comment, created, likes } = this.props;

        return (
            <section className = { Styles.post }>
                <span className = { Styles.cross } onClick = { this.handleRemovePost } />
                <img src = { avatar } />
                <a>{firstName} {lastName}</a>
                <time>{moment(created).format('MMMM D h:mm:ss a')}</time>
                <p>{comment}</p>
                <Like likePost = { this.handleLikePost } likes = { likes } />
            </section>);
    }
}
