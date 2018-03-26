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

import postsActions from '../../actions/posts';

class Post extends Component {

    static propTypes = {
        avatar:    PropTypes.string.isRequired,
        comment:   PropTypes.string.isRequired,
        created:   PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        id:        PropTypes.string.isRequired,
        lastName:  PropTypes.string.isRequired,
        likes:     PropTypes.array.isRequired,
        profile:   PropTypes.object.isRequired
    };

    /**
     *
     * @return {void}
     */
    _deletePost = () => {
        const { id } = this.props;

        this.props.actions.deletePost(id);
    };

    /**
     *
     * @private
     * @return {void}
     */
    _likePost = () => {
        const { id } = this.props;

        this.props.actions.likePost(id);
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

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...postsActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
