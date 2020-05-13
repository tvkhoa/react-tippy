import React, { Component } from 'react';
import tippy from './js/tippy';
import {Browser} from './js/core/globals';

const stopPortalEvent = e => e.stopPropagation();

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
  interactiveBorder: 2,
  theme: 'dark',
  offset: 0,
  hideOnClick: true,
  multiple: false,
  followCursor: false,
  inertia: false,
  popperOptions: {},
  onShow: () => {},
  onShown: () => {},
  onHide: () => {},
  onHidden: () => {},
  disabled: false,
  arrowSize: 'regular',
  size: 'regular',
  className: '',
  style: {},
  distance: 10,
  onRequestClose: () => {},
  sticky: false,
  stickyDuration: 200,
  tag: 'div',
  touchHold: false,
  unmountHTMLWhenHide: false,
  zIndex: 9999
};

const propKeys = Object.keys(defaultProps);

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
    this.updateReactDom = this._updateReactDom.bind(this);
    this.showTooltip = this._showTooltip.bind(this);
    this.hideTooltip = this._hideTooltip.bind(this);
    this.updateSettings = this._updateSettings.bind(this);

    this.state = {
      reactDOMValue: null,
    }
  }

  componentDidMount() {
    if (typeof window === 'undefined' || typeof document === 'undefined' ) {
      return;
    }
    this.initTippy();
  }

  componentWillUnmount() {
    if (typeof window === 'undefined' || typeof document === 'undefined' ) {
      return;
    }
    this.destroyTippy();
  }

  componentDidUpdate(prevProps) {
    // enable and disabled
    if (typeof window === 'undefined' || typeof document === 'undefined' ) {
      return;
    }
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
      setTimeout(() => {
        this.showTooltip();
      }, 0)
    }
    if (this.props.open === false && prevProps.open === true) {
      this.updateSettings('open', false);
      this.hideTooltip();
    }

    if (this.props.html !== prevProps.html) {
      this.updateReactDom();
    }

    // Update content
    if (this.props.title !== prevProps.title) {
      this.updateTippy();
    }

    // update otherProps
    const propChanges = detectPropsChanged(this.props, prevProps);
    propChanges.forEach(key => {
      this.updateSettings(key, this.props[key]);
    });
  }

  _showTooltip() {
    if (typeof window === 'undefined' || typeof document === 'undefined' ) {
      return;
    }
    if (this.tippy) {
      const popper = this.tippy.getPopperElement(this.tooltipDOM);
      this.tippy.show(popper, this.props.duration);
    }
  }

  _hideTooltip() {
    if (typeof window === 'undefined' || typeof document === 'undefined' ) {
      return;
    }
    if (this.tippy) {
      const popper = this.tippy.getPopperElement(this.tooltipDOM);
      this.tippy.hide(popper, this.props.hideDuration);
    }
  }

  _updateSettings(name, value) {
    if (typeof window === 'undefined' || typeof document === 'undefined' ) {
      return;
    }
    if (this.tippy) {
      const popper = this.tippy.getPopperElement(this.tooltipDOM);
      this.tippy.updateSettings(popper, name, value);
    }
  }

  _updateReactDom() {
    if (typeof window === 'undefined' || typeof document === 'undefined' ) {
      return;
    }
    if (this.tippy) {
      this.updateSettings('reactDOM', this.props.html);
      const popper = this.tippy.getPopperElement(this.tooltipDOM);
      const isVisible = popper.style.visibility === 'visible' || this.props.open;
      if (isVisible) {
        this.tippy.updateForReact(popper, this.props.html);
      }
    }
  }

  _updateTippy() {
    if (typeof window === 'undefined' || typeof document === 'undefined' ) {
      return;
    }
    if (this.tippy) {
      const popper = this.tippy.getPopperElement(this.tooltipDOM);
      this.tippy.update(popper);
    }
  }

  _initTippy() {
      if (typeof window === 'undefined' || typeof document === 'undefined' || !Browser.SUPPORTED) {
      return;
    }
    if (!this.props.disabled) {
      if (this.props.title) {
        this.tooltipDOM.setAttribute('title', this.props.title);
      }

      this.tippy = tippy(this.tooltipDOM, {
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
        interactiveBorder: this.props.interactiveBorder,
        theme: this.props.theme,
        offset: this.props.offset,
        hideOnClick: this.props.hideOnClick,
        multiple: this.props.multiple,
        size: this.props.size,
        followCursor: this.props.followCursor,
        inertia: this.props.inertia,
        popperOptions: this.props.popperOptions,
        onShow: this.props.onShow,
        onShown: this.props.onShown,
        onHide: this.props.onHide,
        onHidden: this.props.onHidden,
        distance: this.props.distance,
        reactDOM: this.props.html,
        setReactDOMValue: newReactDOM => this.setState({ reactDOMValue: newReactDOM }),
        unmountHTMLWhenHide: this.props.unmountHTMLWhenHide,
        open: this.props.open,
        sticky: this.props.sticky,
        stickyDuration: this.props.stickyDuration,
        tag: this.props.tag,
        touchHold: this.props.touchHold,
        onRequestClose: this.props.onRequestClose,
        useContext: this.props.useContext,
        reactInstance: this.props.useContext ? this : undefined,
        performance: true,
        html: this.props.rawTemplate ? this.props.rawTemplate : undefined,
        zIndex: this.props.zIndex
      });
      if (this.props.open) {
        this.showTooltip();
      }
    } else {
      this.tippy = null;
    }
  }

  _destroyTippy() {
    if (typeof window === 'undefined' || typeof document === 'undefined' ) {
      return;
    }
    if (this.tippy) {
      const popper = this.tippy.getPopperElement(this.tooltipDOM);
      this.updateSettings('open', false);
      this.tippy.hide(popper, 0);
      this.tippy.destroy(popper);
      this.tippy = null;
    }
  }

  render() {
    let {
      tag: Tag,
    } = this.props;

    return (
      <React.Fragment>
        <Tag
          ref={(tooltip) =>
            { this.tooltipDOM = tooltip; }}
            title={this.props.title}
            className={this.props.className}
            tabIndex={this.props.tabIndex}
            style={{
              display: 'inline',
                ...this.props.style
            }}
          >
            {this.props.children}

        </Tag>
        {this.state.reactDOMValue && (
          <div
            onClick={stopPortalEvent}
            onContextMenu={stopPortalEvent}
            onDoubleClick={stopPortalEvent}
            onDrag={stopPortalEvent}
            onDragEnd={stopPortalEvent}
            onDragEnter={stopPortalEvent}
            onDragExit={stopPortalEvent}
            onDragLeave={stopPortalEvent}
            onDragOver={stopPortalEvent}
            onDragStart={stopPortalEvent}
            onDrop={stopPortalEvent}
            onMouseDown={stopPortalEvent}
            onMouseEnter={stopPortalEvent}
            onMouseLeave={stopPortalEvent}
            onMouseMove={stopPortalEvent}
            onMouseOver={stopPortalEvent}
            onMouseOut={stopPortalEvent}
            onMouseUp={stopPortalEvent}
    
            onKeyDown={stopPortalEvent}
            onKeyPress={stopPortalEvent}
            onKeyUp={stopPortalEvent}
    
            onFocus={stopPortalEvent}
            onBlur={stopPortalEvent}
    
            onChange={stopPortalEvent}
            onInput={stopPortalEvent}
            onInvalid={stopPortalEvent}
            onSubmit={stopPortalEvent}
          >
            {this.state.reactDOMValue}
          </div>
        )}
      </React.Fragment>
    );
  }
}


Tooltip.defaultProps = defaultProps;

export default Tooltip;
