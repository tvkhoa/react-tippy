import React, { Component } from 'react';
import Tippy from './tippy';

const defaultProps = {
  html: null,
  position: 'top',
  animation: 'shift',
  animateFill: true,
  arrow: false,
  delay: 0,
  hideDelay: 0,
  trigger: 'mouseenter focus',
  duration: 375,
  hideDuration: 375,
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
  arrowSize: 'regular',
  size: 'regular',
  className: '',
  style: {},
  distance: 10,
  onRequestClose: () => {},
};

const propKeys = Object.keys(defaultProps)

const detectPropsChanged = (props, prevProps) => {
  const result = [];
  propKeys.forEach(key => {
    if (props[key] !== prevProps[key]) {
      result.push(key);
    }
  })
  return result;
}

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.initTippy = this._initTippy.bind(this);
    this.destroyTippy = this._destroyTippy.bind(this);
    this.updateTippy = this._updateTippy.bind(this);
    this.updateForReact = this._updateForReact.bind(this);
    this.showTooltip = this._showTooltip.bind(this);
    this.hideTooltip = this._hideTooltip.bind(this);
    this.updateSettings = this._updateSettings.bind(this);
  }

  componentDidMount() {
    this.initTippy();
  }

  componentWillUnmount() {
    this.destroyTippy();
  }

  componentDidUpdate(prevProps) {
    // enable and disabled
    if (this.props.disabled === false && prevProps.disabled === true) {
      this.updateSettings('disabled', false);
      this.destroyTippy();
      this.initTippy();
      return;
    }

    if (this.props.disabled === true && prevProps.disabled === false) {
      this.updateSettings('disabled', true);
      this.destroyTippy();
      return;
    }

    // open
    if (this.props.open === true && !prevProps.open) {
      this.updateSettings('open', true);
      this.showTooltip();
      return;
    }
    if (this.props.open === false && prevProps.open === true) {
      this.updateSettings('open', false);
      this.hideTooltip();
      return;
    }


    // Update content
    if (this.props.html !== prevProps.html && this.props.interactive === true){
      this.updateForReact();
      return;
    } else if (this.props.title !== prevProps.title) {
      this.updateTippy();
      return;
    }

    // update otherProps
    const propChanges = detectPropsChanged(this.props, prevProps);
    propChanges.forEach(key => {
      this.updateSettings(key, this.props[key]);
    });
  }

  _showTooltip() {
    if (this.tippy) {
      const popper = this.tippy.getPopperElement(this.tooltipDOM);
      this.tippy.show(popper, this.props.duration);
    }
  }

  _hideTooltip() {
    if (this.tippy) {
      const popper = this.tippy.getPopperElement(this.tooltipDOM);
      this.tippy.hide(popper, this.props.hideDuration);
    }
  }

  _updateSettings(name, value) {
    if (this.tippy) {
      const popper = this.tippy.getPopperElement(this.tooltipDOM);
      this.tippy.updateSettings(popper, name, value);
    }
  }

  _updateForReact() {
    if (this.tippy) {
      const popper = this.tippy.getPopperElement(this.tooltipDOM);
      this.tippy.updateForReact(popper, this.props.html);
    }
  }

  _updateTippy() {
    if (this.tippy) {
      const popper = this.tippy.getPopperElement(this.tooltipDOM);
      this.tippy.update(popper);
    }
  }

  _initTippy() {
    if (!this.props.disabled) {
      this.tooltipDOM.setAttribute('title', this.props.title);
      this.tippy = new Tippy(this.tooltipDOM, {
        disabled: this.props.disabled,
        position: this.props.position,
        animation: this.props.animation,
        animateFill: this.props.animateFill,
        arrow: this.props.arrow,
        arrowSize: this.props.arrowSize,
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
        size: this.props.size,
        followCursor: this.props.followCursor,
        inertia: this.props.inertia,
        popperOptions: this.props.popperOptions,
        beforeShown: this.props.beforeShown,
        shown: this.props.shown,
        beforeHidden: this.props.beforeHidden,
        hidden: this.props.hidden,
        distance: this.props.distance,
        open: this.props.open,
        onRequestClose: this.props.onRequestClose,
      });
      if (this.props.html) {
        this.updateForReact();
      }
      if (this.props.open) {
        this.showTooltip();
      }
    } else {
      this.tippy = null;
    }
  }

  _destroyTippy() {
    if (this.tippy) {
      const popper = this.tippy.getPopperElement(this.tooltipDOM);
      this.updateSettings('open', false);
      this.tippy.hide(popper, 0);
      this.tippy.destroy(popper);
      this.tippy = null;
    }
  }

  render() {
    return (
      <div
        ref={(tooltip) => { this.tooltipDOM = tooltip; }}
        title={this.props.title}
        className={this.props.className}
        style={{
          display: 'inline',
          ...this.props.style
        }}
      >
        {this.props.children}
      </div>
    );
  }
}


Tooltip.defaultProps = defaultProps;

export default Tooltip;
