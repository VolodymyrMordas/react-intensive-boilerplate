// Core
import React, { Component } from 'react';

// Instruments
import Feed from '../../componets/Feed';
import Catcher from '../../componets/Catcher';
import { connect } from 'react-redux';

class App extends Component {
    render () {
        return (
            <Catcher>
                <Feed />
            </Catcher>
        );
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);
