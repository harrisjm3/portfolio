import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actionCreators from './actions/ActionCreators';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.props.gd.message}</h1>
          <a href="https://github.com/harrisjm3/portfolio" className="App-title">
              https://github.com/harrisjm3/portfolio
          </a>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

App.propTypes = {
  gd: PropTypes.shape({ message: PropTypes.string }).isRequired,
};

function mapStateToProps(state) {
  return {
    gd: state.general,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
