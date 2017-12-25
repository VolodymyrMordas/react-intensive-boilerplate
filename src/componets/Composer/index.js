import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Styles from './styles.scss';
import { getUniqueID } from '../../helpers';

export default class Composer extends Component {

    static contextTypes = {
        avatar:    PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName:  PropTypes.string.isRequired
    };

    static propTypes = {
        createPost: PropTypes.func.isRequired
    };

    state = {
        comment: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.publishPost();
    };

    publishPost = () => {
        const { comment } = this.state;

        if (comment === '') {
            return;
        }

        this.props.createPost({
            comment,
            id:      getUniqueID(),
            created: moment().unix()
        });

        this.setState({
            comment: ''
        });
    };

    handleOnTextareaChange = (event) => {
        this.setState({
            comment: event.target.value
        });
    };

    onCtrlEnterPress = (event) => {
        if (event.ctrlKey && event.key === 'Enter') {
            this.publishPost();
        }
    };

    render () {
        const { firstName, avatar } = this.context;

        return (
            <section className = { Styles.composer }>
                <img src = { avatar } />
                <form onSubmit = { this.handleSubmit }>
                    <textarea placeholder = { `Whats on your mind, ${firstName}!` } value = { this.state.comment } onChange = { this.handleOnTextareaChange } onKeyPress = { this.onCtrlEnterPress } />
                    <input type = 'submit' value = 'Post' />
                </form>
            </section>
        );
    }
}
