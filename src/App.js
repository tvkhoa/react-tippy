import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Tooltip,
  withTooltip,
} from './Tooltip';

const NormalHeader = () => (
  <h2>Welcome to React - normal </h2>
);

const Header = () => (
  <h2>Welcome to React with tooltip</h2>
);

const HeaderWithTootip = withTooltip(Header, {
  title: 'Welcome to React with tooltip',
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <NormalHeader />
        <HeaderWithTootip />
        <Tooltip
          title="Welcome to React"
          position="bottom"
          trigger="click"
        >
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </Tooltip>

        <Tooltip
          id="my-template-id"
          inertia
          followCursor
          arrow
          content={(
            <div>
              <strong>
                Troi oi
              </strong>
            </div>
          )}
        >
          <p className="App-intro">
            2
          </p>
          <p className="App-intro">
            3
          </p>
        </Tooltip>
      </div>
    );
  }
}

export default App;
