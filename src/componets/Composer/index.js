import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Styles from './styles.scss';

//Instruments
import { createPost } from '../../actions/posts';

class Composer extends Component {


    static propTypes = {
        avatar:     PropTypes.string.isRequired,
        createPost: PropTypes.func.isRequired,
        firstName:  PropTypes.string.isRequired
    };

    constructor (props) {
        super(props);
        this.state = {
            comment: ''
        };
    }

    /**
     * handle on submit action
     *
     * @param {Object} event event
     * @return {void}
     */
    _submit = (event) => {
        event.preventDefault();

        const { createPost: createPostAction } = this.props;
        const { comment } = this.state;

        createPostAction(comment);
    };

    /**
     * handle on textarea changed
     *
     * @param {Object} event event
     * @return {void}
     */
    _onTextareaChange = (event) => {
        this.setState({
            comment: event.target.value
        });
    };

    /**
     * handle ctrl+enter keys pressed
     *
     * @param {Object} event event
     * @return {void}
     */
    _onCtrlEnterPress = (event) => {
        if (event.ctrlKey && event.key === 'Enter') {
            this.publishPost();
        }
    };

    render () {
        const { firstName, avatar } = this.props;

        return (
            <section className = { Styles.composer }>
                <img src = { avatar } />
                <form onSubmit = { this._submit }>
                    <textarea
                        placeholder = { `Whats on your mind, ${firstName}!` }
                        value = { this.state.comment }
                        onChange = { this._onTextareaChange }
                        onKeyPress = { this._onCtrlEnterPress }
                    />
                    <input type = 'submit' value = 'Post' />
                </form>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile
});

const mapDispatchToProps = {
    createPost
};

export default connect(mapStateToProps, mapDispatchToProps)(Composer);
