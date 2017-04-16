import React, { Component } from 'react';
import {
  compose,
  withState,
} from 'recompose';
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
    const {
      tooltipContent,
      setTooltipContent,
    } = this.props;
    const that = this;
    return (
      <div className="App">
        <div className="App-header" onClick={() => {setTooltipContent('Aloha')}}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <NormalHeader />
        <HeaderWithTootip />
        <Tooltip
          title={tooltipContent}
          position="bottom"
          inertia
          followCursor
        >
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </Tooltip>

        <input
          type="text"
          value={tooltipContent}
          onChange={(e) => {setTooltipContent(e.target.value)}}
        />

        <Tooltip
          id="my-template-id"
          arrow
          trigger="click"
          hideOnClick={false}
          content={(
            <div>
              <input
                type="text"
                value={tooltipContent}
                onChange={(e) => {console.log(e.target.value);}}
              />
            </div>
          )}
        >
          <p className="App-intro">
            Click to show
          </p>
          <p className="App-intro">
            {tooltipContent}
          </p>
        </Tooltip>
      </div>
    );
  }
}

const enhance = compose(
  withState('tooltipContent', 'setTooltipContent', 'tooltipContent'),
);

export default enhance(App);
