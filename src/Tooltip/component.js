import React, { Component } from 'react';
import Tippy from './tippy';

// title

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.initTippy = this._initTippy.bind(this);
    this.destroyTippy = this._destroyTippy.bind(this);
  }

  componentDidMount() {
    this.initTippy();
  }

  componentWillUnmount() {
    this.destroyTippy();
  }

  componentDidUpdate() {
    this.destroyTippy();
    this.initTippy();
  }

  _initTippy() {
    this.tooltipDOM.setAttribute('title', this.props.title);
    this.tippy = new Tippy(this.tooltipDOM, {
      position: this.props.position,
      animation: this.props.animation,
      animateFill: this.props.animateFill,
      arrow: this.props.arrow,
      delay: this.props.delay,
      hideDelay: this.props.hideDelay,
      trigger: this.props.trigger,
      duration: this.props.duration,
      hideDuration: this.props.hideDuration,
      interactive: this.props.interactive,
      theme: this.props.theme,
      offset: this.props.offset,
      hideOnClick: this.props.hideOnClick,
      multiple: this.props.multiple,
      followCursor: this.props.followCursor,
      inertia: this.props.inertia,
      popperOptions: this.props.popperOptions,
      beforeShown: this.props.beforeShown,
      shown: this.props.shown,
      beforeHidden: this.props.beforeHidden,
      hidden: this.props.hidden,
      html: this.props.id ? `#${this.props.id}` : this.props.id,
    });
  }

  _destroyTippy() {
    const popper = this.tippy.getPopperElement(this.tooltipDOM);
    this.tippy.destroy(popper);
  }

  render() {
    const { id, content } = this.props;
    return (
      <div>
        <div
          ref={(tooltip) => { this.tooltipDOM = tooltip; }}
        >
          {this.props.children}
        </div>
        { id && (
          <div id={id} style={{display: 'none'}}>
            { content }
          </div>
        )}
      </div>
    );
  }
}


Tooltip.defaultProps = {
  html: false,
  position: 'top',
  animation: 'shift',
  animateFill: true,
  arrow: false,
  delay: 0,
  hideDelay: 0,
  trigger: 'mouseenter focus',
  duration: 400,
  hideDuration: 400,
  interactive: false,
  theme: 'dark',
  offset: 0,
  hideOnClick: true,
  multiple: false,
  followCursor: false,
  inertia: false,
  popperOptions: {},
  beforeShown: () => {},
  shown: () => {},
  beforeHidden: () => {},
  hidden: () => {},
};

export default Tooltip;
