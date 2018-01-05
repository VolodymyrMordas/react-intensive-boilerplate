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
        removePost: PropTypes.func
    };

    handleRemovePost = () => {
        const { id, removePost } = this.props;

        removePost(id);
    };

    render () {
        const { avatar, firstName, lastName, comment, created } = this.props;

        return (
            <section className = { Styles.post }>
                <span className = { Styles.cross } onClick = { this.handleRemovePost } />
                <img src = { avatar } />
                <a>{firstName} {lastName}</a>
                <time>{moment(created).format('MMMM D h:mm:ss a')}</time>
                <p>{comment}</p>
                <Like />
            </section>);
    }
}
