import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import News from './News';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {
            this.props.data
          }
          <News />
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.num
  }
}

export default connect(mapStateToProps)(App);
