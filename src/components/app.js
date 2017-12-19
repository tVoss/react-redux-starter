import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Dummy from './dummy'

// The true entry point for your application
class App extends React.Component {

    render() {
        return (
            <div>
                <Dummy />
            </div>
        )
    }
}

// Get properties out of global state into component
const mapStateToProps = (state) => {
    return {

    }
}

// Get functions that can modify global state
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({

    }, dispatch);
}

// Bring it all together and export it
export default connect(mapStateToProps, mapDispatchToProps)(App);