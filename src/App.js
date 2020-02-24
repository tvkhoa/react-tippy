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

const ManualPopover = ({ children, open, onRequestClose, content }) => {
  return (
    <Tooltip
      useContext
      html={content}
      position={"bottom"}
      open={open}
      onRequestClose={onRequestClose}
      trigger="manual"
      interactive
      animateFill={false}
    >
      {children}
    </Tooltip>
  );
};

class Menu extends React.Component {
  state = { visible: false };
  render() {
    const { selected, children } = this.props;

    const PopoverContent = (
      <div onClick={() => this.setState({ visible: false })}>
        {children}
      </div>
    );

    return (
      <div>
        <ManualPopover
          open={this.state.visible}
          content={PopoverContent}
          onRequestClose={() => {
            console.log('triggered');
            this.setState({ visible: false });
          }}
        >
          <button onClick={e => this.setState({ visible: !this.state.visible })}>
            {selected}
          </button>
        </ManualPopover>
        {children}
      </div>
    );
  }
}

class Example extends React.Component {
  state = { value: 1 };

  render() {
    const { value } = this.state;
    const options = [1, 2];

    return (
      <Menu selected={value}>
        {options.map(option => {
          const isActive = option === value;
          console.log(`Rendering ${option}, isActive: ${isActive}`);
          return (
            <div key={option} onClick={() => this.setState({ value: option })}>
              {option} – {isActive ? "Active" : "Not Active"}
            </div>
          );
        })}
      </Menu>
    );
  }
}


const NormalHeader = () => (
  <h2>Normal component</h2>
);

const Header = () => (
  <h2>Component with tooltip</h2>
);

const HeaderWithTootip = withTooltip(Header, {
  title: 'Welcome to React with tooltip',
  tag: 'a'
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
          tag="span"
          trigger="mouseenter focus click"
          duration={300}
        >
          <p>
            Hover here to show popup
          </p>
        </Tooltip>
        <hr />
        <Tooltip
          // options
          title="Welcome to React"
          position="bottom"
          trigger="mouseenter"
          duration={3000}
          unmountHTMLWhenHide
        >
          <p>
            Hover here to show popup
          </p>
        </Tooltip>
        <hr />
        <Tooltip
          trigger="click"
          tabIndex={0}
          unmountHTMLWhenHide
          useContext
          rawTemplate={document.querySelector('#rawHTML')}
        >
          Raw html
        </Tooltip>
        <hr />
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
            tabIndex={0}
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

        <Example />
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
