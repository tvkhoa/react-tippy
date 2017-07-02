import React, { Component } from 'react';
import {
  compose,
  withState,
} from 'recompose';
import {
  connect,
} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import {
  Tooltip,
  withTooltip,
} from './Tooltip';
import {
  contentSelector
} from './state';

const NormalHeader = () => (
  <h2>Normal component</h2>
);

const Header = () => (
  <h2>Component with tooltip</h2>
);

const HeaderWithTootip = withTooltip(Header, {
  title: 'Welcome to React with tooltip',
});

const mapStateToProps = (state) => ({
  content: contentSelector(state),
});

class TooltipContentComponent extends Component {
  componentWillMount() {
    console.log('mount now');
  }
  componentWillUnmount() {
    console.log('unmount now');
  }

  render() {
    return (
      <div>
        TooltipContent here {this.props.content}
      </div>
    );
  }
};

const TooltipContent = connect(mapStateToProps)(TooltipContentComponent);

class App extends Component {
  render() {
    const {
      tooltipContent,
      setTooltipContent,
      disabled,
      setDisabled,
      open,
      setIsOpen,
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
          // options
          title="Welcome to React"
          position="bottom"
          trigger="click"
        >
          <p>
            Click here to show popup
          </p>
        </Tooltip>

        <Tooltip
          // options
          title="Sticky"
          trigger="mouseenter"
          sticky
          interactiveBorder={10}
        >
          <p
            style={{
              animation: 'hover 2s ease-in-out infinite',
            }}
          >
            Sticky
          </p>
        </Tooltip>
        <button onClick={() => { console.log('call open'); setIsOpen(true) }}>
          Do something
        </button>
        <hr />
        <Tooltip
          disabled={disabled}
          title={tooltipContent}
          open={open}
          onRequestClose={() => {console.log('call'); setIsOpen(false)}}
        >
          <span className="App-intro" onClick={() => { console.log('call open'); setIsOpen(true) }}>
            Big Tooltip with dynamic content: {tooltipContent} {open.toString()} {disabled.toString()}
          </span>
        </Tooltip>
        <hr />

        {!disabled && (
          <Tooltip
            trigger="click"
            unmountHTMLWhenHide
            useContext
            html={(
              <TooltipContent />
            )}
          >
            Click here
          </Tooltip>
        )}

        <hr />
        <Tooltip
          trigger="click"
          interactive
          position="right"
          animateFill={false}
          transitionFlip={false}
          html={(
            <div style={{ width: 400 }}>
              <p>{tooltipContent}</p>
              <input
                type="text"
                value={tooltipContent}
                onChange={(e) => {setTooltipContent(e.target.value)}}
              />
            </div>
          )}
        >
          <span className="App-intro" >
            Interactive tooltip
          </span>
        </Tooltip>
      </div>
    );
  }
}

const enhance = compose(
  withState('tooltipContent', 'setTooltipContent', 'tooltipContent'),
  withState('open', 'setIsOpen', false),
  withState('disabled', 'setDisabled', false),
);

export default enhance(App);
