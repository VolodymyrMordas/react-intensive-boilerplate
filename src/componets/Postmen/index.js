import React, { Component } from 'react';

import Styles from './styles.scss';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Postment extends Component {

    static propTypes = {
        profile: PropTypes.object.isRequired
    };

    render () {
        const { profile } = this.props;

        return (
            <section className = { Styles.postmen }>
                <img src = { profile.avatar } />
                <span>Welcome online, {profile.firstName}!</span>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile
});

export default connect(mapStateToProps)(Postment);
