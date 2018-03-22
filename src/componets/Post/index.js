//Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';

import Styles from './styles.scss';
import moment from 'moment';

//components
import Like from '../Like';

//instruments
import { likePost, deletePost } from '../../actions/posts';

class Post extends Component {

    static propTypes = {
        avatar:     PropTypes.string.isRequired,
        comment:    PropTypes.string.isRequired,
        created:    PropTypes.number.isRequired,
        deletePost: PropTypes.func.isRequired,
        firstName:  PropTypes.string.isRequired,
        id:         PropTypes.string.isRequired,
        lastName:   PropTypes.string.isRequired,
        likePost:   PropTypes.func.isRequired,
        likes:      PropTypes.array.isRequired,
        profile:    PropTypes.object.isRequired
    };

    /**
     *
     * @return {void}
     */
    _deletePost = () => {
        const { id, deletePost: deletePostAction } = this.props;

        deletePostAction(id);
    };

    /**
     *
     * @private
     * @return {void}
     */
    _likePost = () => {
        const { likePost: likePostAction, id } = this.props;

        likePostAction(id);
    };

    render () {
        const { avatar, firstName, lastName, comment, created, likes } = this.props;

        return (
            <section className = { Styles.post }>
                <span className = { Styles.cross } onClick = { this._deletePost } />
                <img src = { avatar } />
                <a>{firstName} {lastName}</a>
                <time>{moment.unix(created).format('MMMM D h:mm:ss a')}</time>
                <p>{comment}</p>
                <Like likePost = { this._likePost } likes = { likes } />
            </section>);
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile
});

const mapDispatchToProps =
    (dispatch) => bindActionCreators(
        { likePost, deletePost }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Post);
