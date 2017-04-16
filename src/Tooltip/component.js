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

  componentDidUpdate(prevProps) {
    if (this.props.html !== prevProps.html && this.props.interactive === true){
      const popper = this.tippy.getPopperElement(this.tooltipDOM);
      this.tippy.updateForReact(popper, this.props.html);
    } else {
      if (this.tippy) {
        this.destroyTippy();
      }
      this.initTippy();
    }
  }

  _initTippy() {
    if (!this.props.disabled) {
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
      });
      if (this.props.html) {
        const popper = this.tippy.getPopperElement(this.tooltipDOM);
        this.tippy.updateForReact(popper, this.props.html);
      }
    } else {
      this.tippy = null;
    }
  }

  _destroyTippy() {
    const popper = this.tippy.getPopperElement(this.tooltipDOM);
    this.tippy.hide(popper, 0);
    this.tippy.destroy(popper);
  }

  render() {
    return (
      <div ref={(tooltip) => { this.tooltipDOM = tooltip; }}>
        {this.props.children}
      </div>
    );
  }
}


Tooltip.defaultProps = {
  html: null,
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
  disabled: false,
};

export default Tooltip;
