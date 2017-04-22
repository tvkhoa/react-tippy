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
  <h2>Normal component</h2>
);

const Header = () => (
  <h2>Component with tooltip</h2>
);

const HeaderWithTootip = withTooltip(Header, {
  title: 'Welcome to React with tooltip',
});

class App extends Component {
  render() {
    const {
      tooltipContent,
      setTooltipContent,
      disabled,
      setDisabled,
    } = this.props;
    return (
      <div className="App">
        <div className="App-header" onClick={() => {setDisabled(!disabled)}}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <NormalHeader />
        <hr />
        <HeaderWithTootip />
        <hr />
        <Tooltip
          title={tooltipContent}
          position="left"
          arrow
          arrowSize="big"
          disabled={disabled}
          animateFill={false}
        >
          <span className="App-intro">
            Big Tooltip with dynamic content: {tooltipContent}
          </span>
        </Tooltip>
        <hr />
        <Tooltip
          trigger="click"
          interactive
          position="right"
          animateFill={false}
          transitionFlip={false}
          html={(
            <div>
              <p>{tooltipContent}</p>
              <input
                type="text"
                value={tooltipContent}
                onChange={(e) => {setTooltipContent(e.target.value)}}
              />
            </div>
          )}
        >
          <span className="App-intro">
            Interactive tooltip
          </span>
        </Tooltip>
      </div>
    );
  }
}

const enhance = compose(
  withState('tooltipContent', 'setTooltipContent', 'tooltipContent'),
  withState('disabled', 'setDisabled', false),
);

export default enhance(App);
