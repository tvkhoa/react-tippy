(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("popper.js"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("reactTippy", ["react", "popper.js", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["reactTippy"] = factory(require("react"), require("popper.js"), require("react-dom"));
	else
		root["reactTippy"] = factory(root["React"], root["Popper"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _tippy = __webpack_require__(4);

var _tippy2 = _interopRequireDefault(_tippy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
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
  beforeShown: function beforeShown() {},
  shown: function shown() {},
  beforeHidden: function beforeHidden() {},
  hidden: function hidden() {},
  disabled: false,
  arrowSize: 'regular',
  size: 'regular',
  className: '',
  style: {},
  distance: 10,
  onRequestClose: function onRequestClose() {},
  sticky: false,
  stickyDuration: 200,
  unmountHTMLWhenHide: false
};

var propKeys = Object.keys(defaultProps);

var detectPropsChanged = function detectPropsChanged(props, prevProps) {
  var result = [];
  propKeys.forEach(function (key) {
    if (props[key] !== prevProps[key]) {
      result.push(key);
    }
  });
  return result;
};

var Tooltip = function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

    _this.initTippy = _this._initTippy.bind(_this);
    _this.destroyTippy = _this._destroyTippy.bind(_this);
    _this.updateTippy = _this._updateTippy.bind(_this);
    _this.updateReactDom = _this._updateReactDom.bind(_this);
    _this.showTooltip = _this._showTooltip.bind(_this);
    _this.hideTooltip = _this._hideTooltip.bind(_this);
    _this.updateSettings = _this._updateSettings.bind(_this);
    return _this;
  }

  _createClass(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
      }
      this.initTippy();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
      }
      this.destroyTippy();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      // enable and disabled
      if (typeof window === 'undefined' || typeof document === 'undefined') {
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
        this.showTooltip();
        return;
      }
      if (this.props.open === false && prevProps.open === true) {
        this.updateSettings('open', false);
        this.hideTooltip();
        return;
      }

      if (this.props.html !== prevProps.html) {
        this.updateReactDom();
        return;
      }

      // Update content
      if (this.props.title !== prevProps.title) {
        this.updateTippy();
        return;
      }

      // update otherProps
      var propChanges = detectPropsChanged(this.props, prevProps);
      propChanges.forEach(function (key) {
        _this2.updateSettings(key, _this2.props[key]);
      });
    }
  }, {
    key: '_showTooltip',
    value: function _showTooltip() {
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
      }
      if (this.tippy) {
        var popper = this.tippy.getPopperElement(this.tooltipDOM);
        this.tippy.show(popper, this.props.duration);
      }
    }
  }, {
    key: '_hideTooltip',
    value: function _hideTooltip() {
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
      }
      if (this.tippy) {
        var popper = this.tippy.getPopperElement(this.tooltipDOM);
        this.tippy.hide(popper, this.props.hideDuration);
      }
    }
  }, {
    key: '_updateSettings',
    value: function _updateSettings(name, value) {
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
      }
      if (this.tippy) {
        var popper = this.tippy.getPopperElement(this.tooltipDOM);
        this.tippy.updateSettings(popper, name, value);
      }
    }
  }, {
    key: '_updateReactDom',
    value: function _updateReactDom() {
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
      }
      if (this.tippy) {
        this.updateSettings('ReactDOM', this.props.html);
        var popper = this.tippy.getPopperElement(this.tooltipDOM);
        var isVisible = popper.style.visibility === 'visible' || this.props.open;
        if (isVisible) {
          this.tippy.updateForReact(popper, this.props.html);
        }
      }
    }
  }, {
    key: '_updateTippy',
    value: function _updateTippy() {
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
      }
      if (this.tippy) {
        var popper = this.tippy.getPopperElement(this.tooltipDOM);
        this.tippy.update(popper);
      }
    }
  }, {
    key: '_initTippy',
    value: function _initTippy() {
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
      }
      if (!this.props.disabled) {
        this.tooltipDOM.setAttribute('title', this.props.title);
        this.tippy = new _tippy2.default(this.tooltipDOM, {
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
          beforeShown: this.props.beforeShown,
          shown: this.props.shown,
          beforeHidden: this.props.beforeHidden,
          hidden: this.props.hidden,
          distance: this.props.distance,
          reactDOM: this.props.html,
          unmountHTMLWhenHide: this.props.unmountHTMLWhenHide,
          open: this.props.open,
          sticky: this.props.sticky,
          stickyDuration: this.props.stickyDuration,
          onRequestClose: this.props.onRequestClose
        });
        if (this.props.open) {
          this.showTooltip();
        }
      } else {
        this.tippy = null;
      }
    }
  }, {
    key: '_destroyTippy',
    value: function _destroyTippy() {
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
      }
      if (this.tippy) {
        var popper = this.tippy.getPopperElement(this.tooltipDOM);
        this.updateSettings('open', false);
        this.tippy.hide(popper, 0);
        this.tippy.destroy(popper);
        this.tippy = null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(tooltip) {
            _this3.tooltipDOM = tooltip;
          },
          title: this.props.title,
          className: this.props.className,
          style: _extends({
            display: 'inline'
          }, this.props.style)
        },
        this.props.children
      );
    }
  }]);

  return Tooltip;
}(_react.Component);

Tooltip.defaultProps = defaultProps;

exports.default = Tooltip;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var withTooltip = function withTooltip(Component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (_ref) {
    var props = _objectWithoutProperties(_ref, []);

    return _react2.default.createElement(
      _component2.default,
      options,
      _react2.default.createElement(Component, props)
    );
  };
};

exports.default = withTooltip;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTooltip = exports.Tooltip = undefined;

var _component = __webpack_require__(0);

var _component2 = _interopRequireDefault(_component);

var _hoc = __webpack_require__(2);

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Tooltip = _component2.default;
exports.withTooltip = _hoc2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _popper2 = __webpack_require__(5);

var _popper3 = _interopRequireDefault(_popper2);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**!
* @file tippy.js | Pure JS Tooltip Library
* @version 0.14.0
* @license MIT
*/

// Unsupported: IE<=9, Opera Mini
var IS_UNSUPPORTED_BROWSER = typeof window !== 'undefined' && (!('addEventListener' in window) || /MSIE 9/i.test(navigator.userAgent) || window.operamini);

// Touch user is assumed false until a `touchstart` event is fired
// id counter for our aria-describedby labelling (tooltip IDs)
var GLOBALS = {
    touchUser: false,
    idCounter: 0
};

// Storage object to hold all references from instance instantiation
// Allows us to hide tooltips from other instances when clicking on the body
var STORE = {
    refs: []
};

var DEFAULTS = !IS_UNSUPPORTED_BROWSER && Object.freeze({
    html: false,
    position: 'top',
    animation: 'shift',
    animateFill: true,
    arrow: false,
    arrowSize: 'regular',
    delay: 0,
    hideDelay: 0,
    trigger: 'mouseenter focus',
    duration: 375,
    hideDuration: 375,
    interactive: false,
    interactiveBorder: 2,
    theme: 'dark',
    size: 'regular',
    distance: 10,
    offset: 0,
    hideOnClick: true,
    multiple: false,
    followCursor: false,
    inertia: false,
    transitionFlip: true,
    sticky: false,
    stickyDuration: 200,
    appendTo: typeof document !== 'undefined' ? document.body : null,
    popperOptions: {},
    open: undefined,
    onRequestClose: function onRequestClose() {}
});

var DEFAULTS_KEYS = !IS_UNSUPPORTED_BROWSER && Object.keys(DEFAULTS);

var SELECTORS = {
    popper: '.tippy-popper',
    tooltip: '.tippy-tooltip',
    content: '.tippy-tooltip-content',
    circle: '[x-circle]',
    arrow: '[x-arrow]',
    el: '[data-tooltipped]',
    controller: '[data-tippy-controller]'
};

// Determine touch users
function handleDocumentTouchstart() {
    GLOBALS.touchUser = true;

    // iOS needs a `cursor: pointer` on the body to register clicks
    if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && !window.MSStream) {
        document.body.classList.add('tippy-touch');
    }

    document.removeEventListener('touchstart', handleDocumentTouchstart);
}

// Handle clicks anywhere on the document
function handleDocumentClick(event) {

    var el = closest(event.target, SELECTORS.el);
    var popper = closest(event.target, SELECTORS.popper);

    if (popper) {
        var ref = find(STORE.refs, function (ref) {
            return ref.popper === popper;
        });
        var interactive = ref.settings.interactive;

        if (interactive) return;
    }

    if (el) {
        var _ref = find(STORE.refs, function (ref) {
            return ref.el === el;
        });
        var _popper = _ref.popper,
            _ref$settings = _ref.settings,
            hideOnClick = _ref$settings.hideOnClick,
            multiple = _ref$settings.multiple,
            trigger = _ref$settings.trigger;

        // If they clicked before the show() was to fire, clear it

        if (hideOnClick === true && !GLOBALS.touchUser) {
            clearTimeout(_popper.getAttribute('data-delay'));
        }

        // Hide all poppers except the one belonging to the element that was clicked IF
        // `multiple` is false AND they are a touch user, OR
        // `multiple` is false AND it's triggered by a click
        if (!multiple && GLOBALS.touchUser || !multiple && trigger.indexOf('click') !== -1) return hideAllPoppers(_ref);

        // If hideOnClick is not strictly true or triggered by a click don't hide poppers
        if (hideOnClick !== true || trigger.indexOf('click') !== -1) return;
    }

    // Don't trigger a hide for tippy controllers, and don't needlessly run loop
    if (closest(event.target, SELECTORS.controller) || !document.querySelector(SELECTORS.popper)) return;

    hideAllPoppers();
}

// Hook events only if rendered on a browser
if (!(typeof window === 'undefined' || typeof document === 'undefined')) {
    if (!IS_UNSUPPORTED_BROWSER) {
        document.addEventListener('click', handleDocumentClick);
        document.addEventListener('touchstart', handleDocumentTouchstart);
    }
}

/**
* Returns the supported prefixed property - only `webkit` is needed, `moz`, `ms` and `o` are obsolete
* @param {String} property
* @return {String} - browser supported prefixed property
*/
function prefix(property) {
    var prefixes = [false, 'webkit'];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

    for (var i = 0; i < prefixes.length; i++) {
        var _prefix = prefixes[i];
        var prefixedProp = _prefix ? '' + _prefix + upperProp : property;
        if (typeof window.document.body.style[prefixedProp] !== 'undefined') {
            return prefixedProp;
        }
    }

    return null;
}

/**
* Returns the non-shifted placement (e.g., 'bottom-start' => 'bottom')
* @param {String} placement
* @return {String}
*/
function getCorePlacement(placement) {
    return placement.replace(/-.+/, '');
}

/**
* Polyfill to get the closest parent element
* @param {Element} element - child of parent to be returned
* @param {String} parentSelector - selector to match the parent if found
* @return {Element}
*/
function closest(element, parentSelector) {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || function (s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {}
            return i > -1;
        };
    }
    if (!Element.prototype.closest) Element.prototype.closest = function (selector) {
        var el = this;
        while (el) {
            if (el.matches(selector)) {
                return el;
            }
            el = el.parentElement;
        }
    };
    return element.closest(parentSelector);
}

/**
* Polyfill for Array.prototype.find
* @param {Array} arr
* @param {Function} checkFn
* @return item in the array
*/
function find(arr, checkFn) {
    if (Array.prototype.find) {
        return arr.find(checkFn);
    }

    // use `filter` as fallback
    return arr.filter(checkFn)[0];
}

/**
* Creates a new popper instance
* @param {Object} ref
* @return {Object} - the popper instance
*/
function createPopperInstance(ref) {
    var _ref$settings2 = ref.settings,
        position = _ref$settings2.position,
        popperOptions = _ref$settings2.popperOptions,
        offset = _ref$settings2.offset,
        distance = _ref$settings2.distance,
        el = ref.el,
        popper = ref.popper;


    var tooltip = popper.querySelector(SELECTORS.tooltip);

    var config = _extends({
        placement: position
    }, popperOptions || {}, {
        modifiers: _extends({}, popperOptions ? popperOptions.modifiers : {}, {
            flip: _extends({
                padding: parseInt(distance) + 5 /* 5px from viewport boundary */
            }, popperOptions && popperOptions.modifiers ? popperOptions.modifiers.flip : {}),
            offset: _extends({
                offset: parseInt(offset)
            }, popperOptions && popperOptions.modifiers ? popperOptions.modifiers.offset : {})
        }),
        onUpdate: function onUpdate() {
            popper.style[prefix('transitionDuration')] = '';
            tooltip.style.top = '';
            tooltip.style.bottom = '';
            tooltip.style.left = '';
            tooltip.style.right = '';
            tooltip.style[getCorePlacement(popper.getAttribute('x-placement'))] = -(distance - DEFAULTS.distance) + 'px';
        }
    });

    return new _popper3.default(el, popper, config);
}

/**
* Creates a popper element then returns it
* @param {Number} id - the popper id
* @param {String} title - the tooltip's `title` attribute
* @param {Object} settings - individual settings
* @return {Element} - the popper element
*/
function createPopperElement(id, title, settings) {
    var position = settings.position,
        distance = settings.distance,
        arrow = settings.arrow,
        animateFill = settings.animateFill,
        inertia = settings.inertia,
        animation = settings.animation,
        arrowSize = settings.arrowSize,
        size = settings.size,
        theme = settings.theme,
        html = settings.html;


    var popper = document.createElement('div');
    popper.setAttribute('class', 'tippy-popper');
    popper.setAttribute('role', 'tooltip');
    popper.setAttribute('aria-hidden', 'true');
    popper.setAttribute('id', 'tippy-tooltip-' + id);

    var tooltip = document.createElement('div');
    tooltip.setAttribute('class', 'tippy-tooltip tippy-tooltip--' + size + ' ' + theme + '-theme leave');
    tooltip.setAttribute('data-animation', animation);

    if (arrow) {
        // Add an arrow
        var _arrow = document.createElement('div');
        _arrow.setAttribute('class', 'arrow-' + arrowSize);
        _arrow.setAttribute('x-arrow', '');
        tooltip.appendChild(_arrow);
    }

    if (animateFill) {
        // Create animateFill circle element for animation
        tooltip.setAttribute('data-animatefill', '');
        var circle = document.createElement('div');
        circle.setAttribute('class', 'leave');
        circle.setAttribute('x-circle', '');
        tooltip.appendChild(circle);
    }

    if (inertia) {
        // Change transition timing function cubic bezier
        tooltip.setAttribute('data-inertia', '');
    }

    // Tooltip content (text or HTML)
    var content = document.createElement('div');
    content.setAttribute('class', 'tippy-tooltip-content');

    if (html) {

        var templateId = void 0;

        if (html instanceof Element) {
            content.innerHTML = html.innerHTML;
            templateId = html.id || 'tippy-html-template';
        } else {
            content.innerHTML = document.getElementById(html.replace('#', '')).innerHTML;
            templateId = html;
        }

        popper.classList.add('html-template');
        popper.setAttribute('tabindex', '0');
        tooltip.setAttribute('data-template-id', templateId);
    } else {
        content.innerHTML = title;
    }

    // Init distance. Further updates are made in the popper instance's `onUpdate()` method
    tooltip.style[getCorePlacement(position)] = -(distance - DEFAULTS.distance) + 'px';

    tooltip.appendChild(content);
    popper.appendChild(tooltip);

    return popper;
}

/**
* Creates a trigger
* @param {Object} event - the custom event specified in the `trigger` setting
* @param {Element} el - tooltipped element
* @param {Object} handlers - the handlers for each listener
* @return {Array} - array of listener objects
*/
function createTrigger(event, el, handlers) {
    var listeners = [];

    if (event === 'manual') return listeners;

    // Enter
    el.addEventListener(event, handlers.handleTrigger);
    listeners.push({
        event: event,
        handler: handlers.handleTrigger
    });

    // Leave
    if (event === 'mouseenter') {
        el.addEventListener('mouseleave', handlers.handleMouseleave);
        listeners.push({
            event: 'mouseleave',
            handler: handlers.handleMouseleave
        });
    }
    if (event === 'focus') {
        el.addEventListener('blur', handlers.handleBlur);
        listeners.push({
            event: 'blur',
            handler: handlers.handleBlur
        });
    }

    return listeners;
}

/**
* Adds each reference (tooltipped element, popper and its settings/listeners etc)
* into global storage
* @param {Object} ref - current ref in the forEach loop to be pushed
*/
function pushIntoStorage(ref) {
    STORE.refs.push(ref);
}

/**
* Removes the title from the tooltipped element
* @param {Element} el
*/
function removeTitle(el) {
    var title = el.title;
    el.setAttribute('data-original-title', title || 'html');
    el.removeAttribute('title');
}

/**
* Determines if an element is visible in the viewport
* @param {Element} el
* @return {Boolean}
*/
function elementIsInViewport(el) {
    var rect = el.getBoundingClientRect();

    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

/**
* Mousemove event listener callback method for follow cursor setting
* @param {Event} e
*/
function followCursor(e) {
    var _this = this;

    var ref = find(STORE.refs, function (ref) {
        return ref.el === _this;
    });
    var popper = ref.popper;


    var position = getCorePlacement(popper.getAttribute('x-placement'));
    var halfPopperWidth = Math.round(popper.offsetWidth / 2);
    var halfPopperHeight = Math.round(popper.offsetHeight / 2);
    var viewportPadding = 5;
    var pageWidth = document.documentElement.offsetWidth || document.body.offsetWidth;

    var pageX = e.pageX,
        pageY = e.pageY;


    var x = void 0,
        y = void 0;

    if (position === 'top') {
        x = pageX - halfPopperWidth;
        y = pageY - 2.5 * halfPopperHeight;
    } else if (position === 'left') {
        x = pageX - 2 * halfPopperWidth - 15;
        y = pageY - halfPopperHeight;
    } else if (position === 'right') {
        x = pageX + halfPopperHeight;
        y = pageY - halfPopperHeight;
    } else if (position === 'bottom') {
        x = pageX - halfPopperWidth;
        y = pageY + halfPopperHeight / 1.5;
    }

    // Prevent left/right overflow
    if (position === 'top' || position === 'bottom') {
        if (pageX + viewportPadding + halfPopperWidth > pageWidth) {
            // Right overflow
            x = pageWidth - viewportPadding - 2 * halfPopperWidth;
        } else if (pageX - viewportPadding - halfPopperWidth < 0) {
            // Left overflow
            x = viewportPadding;
        }
    }

    popper.style[prefix('transform')] = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
}

/**
* Triggers a document repaint or reflow for CSS transition
* @param {Element} tooltip
* @param {Element} circle
*/
function triggerReflow(tooltip, circle) {
    // Safari needs the specific 'transform' property to be accessed
    circle ? window.getComputedStyle(circle)[prefix('transform')] : window.getComputedStyle(tooltip).opacity;
}

/**
* Modifies elements' class lists
* @param {Array} els - HTML elements
* @param {Function} callback
*/
function modifyClassList(els, callback) {
    els.forEach(function (el) {
        if (!el) return;
        callback(el.classList);
    });
}

/**
* Applies the transition duration to each element
* @param {Array} els - HTML elements
* @param {Number} duration
*/
function applyTransitionDuration(els, duration) {
    els.forEach(function (el) {
        if (!el) return;
        if (el.hasAttribute('x-circle')) duration /= 1.1;
        el.style[prefix('transitionDuration')] = duration + 'ms';
    });
}

/**
* Prepares the callback functions for `show` and `hide` methods
* @param {Object} ref -  the element/popper reference
* @param {Number} duration
* @param {Function} callback - callback function to fire once transitions complete
*/
function onTransitionEnd(ref, duration, callback) {

    var tooltip = ref.popper.querySelector(SELECTORS.tooltip);
    var transitionendFired = false;

    var listenerCallback = function listenerCallback(e) {
        if (e.target !== tooltip) return;

        transitionendFired = true;

        tooltip.removeEventListener('webkitTransitionEnd', listenerCallback);
        tooltip.removeEventListener('transitionend', listenerCallback);

        callback();
    };

    // Wait for transitions to complete
    tooltip.addEventListener('webkitTransitionEnd', listenerCallback);
    tooltip.addEventListener('transitionend', listenerCallback);

    // transitionend listener sometimes may not fire
    clearTimeout(ref.transitionendTimeout);
    ref.transitionendTimeout = setTimeout(function () {
        if (!transitionendFired) {
            callback();
        }
    }, duration);
}

/**
* @param {Element} popper
* @param {String} type 'show'/'hide'
* @return {Boolean}
*/
function isExpectedState(popper, type) {
    var visibility = popper.style.visibility;
    return type === 'show' ? visibility === 'visible' : visibility === 'hidden';
}

/**
* Appends the popper and creates a popper instance if one does not exist
* Also updates its position if need be and enables event listeners
* @param {Object} ref -  the element/popper reference
*/
function awakenPopper(ref) {
    var el = ref.el,
        popper = ref.popper,
        appendTo = ref.settings.appendTo;

    var shouldFollowCursor = ref.settings.followCursor;

    appendTo.appendChild(ref.popper);

    if (!ref.popperInstance) {
        // Create instance if it hasn't been created yet
        ref.popperInstance = createPopperInstance(ref);

        // Follow cursor setting
        if (shouldFollowCursor && !GLOBALS.touchUser) {
            el.addEventListener('mousemove', followCursor);
            ref.popperInstance.disableEventListeners();
        }
    } else {
        ref.popperInstance.update();
        shouldFollowCursor || ref.popperInstance.enableEventListeners();
    }
}

/**
* Updates a popper's position on each animation frame to make it stick to a moving element
* @param {Object} ref
*/
function sticky(ref) {
    var popper = ref.popper,
        popperInstance = ref.popperInstance,
        stickyDuration = ref.settings.stickyDuration;


    var applyTransitionDuration = function applyTransitionDuration() {
        return popper.style[prefix('transitionDuration')] = stickyDuration + 'ms';
    };

    var removeTransitionDuration = function removeTransitionDuration() {
        return popper.style[prefix('transitionDuration')] = '';
    };

    var updatePosition = function updatePosition() {
        popperInstance && popperInstance.scheduleUpdate();

        applyTransitionDuration();

        var isVisible = !ref.hidden;

        if (window.requestAnimationFrame) {
            if (isVisible) {
                window.requestAnimationFrame(updatePosition);
            } else {
                window.cancelAnimationFrame(updatePosition);
                removeTransitionDuration();
            }
        } else {
            isVisible ? setTimeout(updatePosition, 20) : removeTransitionDuration();
        }
    };

    // Wait until Popper's position has been updated initially
    setTimeout(updatePosition, 0);
}

/**
* Hides all poppers
* @param {Object} currentRef
*/
function hideAllPoppers(currentRef) {
    STORE.refs.forEach(function (ref) {
        var popper = ref.popper,
            tippyInstance = ref.tippyInstance,
            _ref$settings3 = ref.settings,
            hideOnClick = _ref$settings3.hideOnClick,
            hideDuration = _ref$settings3.hideDuration,
            trigger = _ref$settings3.trigger,
            appendTo = _ref$settings3.appendTo;

        // Don't hide already hidden ones

        if (!appendTo.contains(popper)) return;

        // hideOnClick can have the truthy value of 'persistent', so strict check is needed
        var isHideOnClick = hideOnClick === true || trigger.indexOf('focus') !== -1;
        var isNotCurrentRef = !currentRef || popper !== currentRef.popper;

        if (isHideOnClick && isNotCurrentRef) {
            ref.settings.onRequestClose();
            tippyInstance.hide(popper, hideDuration);
        }
    });
}

/**
* Returns an array of elements based on the selector input
* @param {String|Element} selector
* @return {Array} of HTML Elements
*/
function getSelectorElementsArray(selector) {
    if (selector instanceof Element) {
        return [selector];
    }

    return [].slice.call(document.querySelectorAll(selector));
}

/**
* The class to be exported to be used on the `window`
* Private methods are prefixed with an underscore _
* @param {String|Element} selector
* @param {Object} settings (optional) - the object of settings to be applied to the instance
*/

var Tippy = function () {
    function Tippy(selector) {
        var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Tippy);

        // Use default browser tooltip on unsupported browsers
        if (IS_UNSUPPORTED_BROWSER) return;

        this.selector = selector;
        this.settings = Object.freeze(Object.assign({}, DEFAULTS, settings));
        this.callbacks = {
            wait: settings.wait,
            beforeShown: settings.beforeShown || new Function(),
            shown: settings.shown || new Function(),
            beforeHidden: settings.beforeHidden || new Function(),
            hidden: settings.hidden || new Function()
        };

        var els = getSelectorElementsArray(selector);
        this._createTooltips(els);
    }

    /**
    * Returns an object of settings to override global settings
    * @param {Element} el - the tooltipped element
    * @return {Object} - individual settings
    */


    _createClass(Tippy, [{
        key: '_applyIndividualSettings',
        value: function _applyIndividualSettings(el) {
            var _this2 = this;

            var settings = {};

            DEFAULTS_KEYS.forEach(function (key) {
                var val = el.getAttribute('data-' + key.toLowerCase()) || _this2.settings[key];
                if (val === 'false') val = false;

                settings[key] = val;
            });

            // animateFill is disabled if an arrow is true
            if (settings.arrow) settings['animateFill'] = false;

            return Object.assign({}, this.settings, settings);
        }

        /**
        * Returns relevant listener callbacks for each ref
        * @param {Element} el
        * @param {Element} popper
        * @param {Object} settings
        * @return {Object} - relevant listener callback methods
        */

    }, {
        key: '_getEventListenerHandlers',
        value: function _getEventListenerHandlers(el, popper, settings) {
            var _this3 = this;

            var delay = settings.delay,
                hideDelay = settings.hideDelay,
                hideDuration = settings.hideDuration,
                duration = settings.duration,
                interactive = settings.interactive,
                interactiveBorder = settings.interactiveBorder,
                hideOnClick = settings.hideOnClick,
                trigger = settings.trigger;


            var clearTimeouts = function clearTimeouts() {
                clearTimeout(popper.getAttribute('data-delay'));
                clearTimeout(popper.getAttribute('data-hidedelay'));
            };

            var _show = function _show() {
                clearTimeouts();

                // Already visible. For clicking when it also has a `focus` event listener
                if (popper.style.visibility === 'visible') return;

                if (delay) {
                    var timeout = setTimeout(function () {
                        return _this3.show(popper, duration);
                    }, delay);
                    popper.setAttribute('data-delay', timeout);
                } else {
                    _this3.show(popper, duration);
                }
            };

            var show = function show(event) {
                return _this3.callbacks.wait ? _this3.callbacks.wait.call(popper, _show, event) : _show();
            };

            var hide = function hide() {
                clearTimeouts();

                if (hideDelay) {
                    var timeout = setTimeout(function () {
                        return _this3.hide(popper, hideDuration);
                    }, hideDelay);
                    popper.setAttribute('data-hidedelay', timeout);
                } else {
                    _this3.hide(popper, hideDuration);
                }
            };

            var handleTrigger = function handleTrigger(event) {
                // Toggle show/hide when clicking click-triggered tooltips
                var isClick = event.type === 'click';
                var isVisible = popper.style.visibility === 'visible';
                var isNotPersistent = hideOnClick !== 'persistent';

                isClick && isVisible && isNotPersistent ? hide() : show(event);
            };

            var handleMouseleave = function handleMouseleave(event) {
                if (interactive) {
                    // Temporarily handle mousemove to check if the mouse left somewhere
                    // other than its popper
                    var handleMousemove = function handleMousemove(event) {
                        var isOverPopper = closest(event.target, SELECTORS.popper) === popper;
                        var isOverEl = closest(event.target, SELECTORS.el) === el;
                        var isClickTriggered = trigger.indexOf('click') !== -1;

                        if (isOverPopper || isOverEl || isClickTriggered) return;

                        // Firefox (and maybe other browsers) do not reliably place the popper
                        // directly next to the element, use a border margin to ensure the cursor is far
                        // enough away
                        var popperRect = popper.getBoundingClientRect();

                        if (Math.abs(event.clientY - popperRect.bottom) >= interactiveBorder && Math.abs(event.clientY - popperRect.top) >= interactiveBorder && Math.abs(event.clientX - popperRect.left) >= interactiveBorder && Math.abs(event.clientX - popperRect.right) >= interactiveBorder) {
                            document.removeEventListener('mousemove', handleMousemove);
                            hide();
                        }
                    };
                    return document.addEventListener('mousemove', handleMousemove);
                }

                // If it's not interactive, just hide it
                hide();
            };

            var handleBlur = function handleBlur(event) {
                // Only hide if not a touch user and has a focus 'relatedtarget', of which is not
                // a popper element
                if (GLOBALS.touchUser || !event.relatedTarget) return;
                if (closest(event.relatedTarget, SELECTORS.popper)) return;

                hide();
            };

            return {
                handleTrigger: handleTrigger,
                handleMouseleave: handleMouseleave,
                handleBlur: handleBlur
            };
        }

        /**
        * Creates tooltips for all elements that match the instance's selector
        * @param {Array} els - Elements
        */

    }, {
        key: '_createTooltips',
        value: function _createTooltips(els) {
            var _this4 = this;

            els.forEach(function (el) {
                var settings = _this4._applyIndividualSettings(el);
                var html = settings.html,
                    trigger = settings.trigger;


                var title = el.title;
                if (!title && !html) return;

                var id = GLOBALS.idCounter;
                el.setAttribute('data-tooltipped', '');
                el.setAttribute('aria-describedby', 'tippy-tooltip-' + id);

                removeTitle(el);

                var popper = createPopperElement(id, title, settings);

                var handlers = _this4._getEventListenerHandlers(el, popper, settings);
                var listeners = [];

                trigger.trim().split(' ').forEach(function (event) {
                    return listeners = listeners.concat(createTrigger(event, el, handlers));
                });

                pushIntoStorage({
                    id: id,
                    el: el,
                    popper: popper,
                    settings: settings,
                    listeners: listeners,
                    tippyInstance: _this4
                });

                GLOBALS.idCounter++;
            });

            Tippy.store = STORE; // Allow others to access `STORE` if need be
        }

        /**
        * Returns a tooltipped element's popper reference
        * @param {Element} el
        * @return {Element}
        */

    }, {
        key: 'getPopperElement',
        value: function getPopperElement(el) {
            try {
                return find(STORE.refs, function (ref) {
                    return ref.el === el;
                }).popper;
            } catch (e) {
                throw new Error('[Tippy error]: Element does not exist in any Tippy instances');
            }
        }

        /**
        * Returns a popper's tooltipped element reference
        * @param {Element} popper
        * @return {Element}
        */

    }, {
        key: 'getTooltippedElement',
        value: function getTooltippedElement(popper) {
            try {
                return find(STORE.refs, function (ref) {
                    return ref.popper === popper;
                }).el;
            } catch (e) {
                throw new Error('[Tippy error]: Popper does not exist in any Tippy instances');
            }
        }

        /**
        * Update settings
        * @param {DOMElement} - popper
        * @param {string} - name
        * @param {string} - value
        */

    }, {
        key: 'updateSettings',
        value: function updateSettings(popper, name, value) {
            var ref = find(STORE.refs, function (ref) {
                return ref.popper === popper;
            });
            var newSettings = _extends({}, ref.settings, _defineProperty({}, name, value));
            ref.settings = newSettings;
        }
    }, {
        key: 'updateForReact',


        /**
        * Update a popper
        * @param {DOMElement} - popper
        * @param {ReactElement} - content
        */
        value: function updateForReact(popper, updatedContent) {
            var tooltipContent = popper.querySelector(SELECTORS.content);

            _reactDom2.default.render(updatedContent, tooltipContent);
        }

        /**
        * Shows a popper
        * @param {Element} popper
        * @param {Number} duration (optional)
        * @param {Boolean} enableCallback (optional)
        */

    }, {
        key: 'show',
        value: function show(popper) {
            var _this5 = this;

            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.settings.duration;


            var ref = find(STORE.refs, function (ref) {
                return ref.popper === popper;
            });
            var tooltip = popper.querySelector(SELECTORS.tooltip);
            var circle = popper.querySelector(SELECTORS.circle);
            if (ref.settings.open === false) {
                return;
            }

            if (ref.settings.reactDOM) {
                this.updateForReact(popper, ref.settings.reactDOM);
            }
            this.callbacks.beforeShown.call(popper);

            !ref.settings.appendTo.contains(popper) && awakenPopper(ref);

            ref.hidden = false;
            popper.style.visibility = 'visible';
            popper.setAttribute('aria-hidden', 'false');

            // Remove transition duration (messes up flipping)
            applyTransitionDuration([tooltip, circle], 0);

            // Wait for popper to update position and alter x-placement
            setTimeout(function () {
                // Interactive tooltips receive a class of 'active'
                ref.settings.interactive && ref.el.classList.add('active');

                // Update popper's position on every animation frame
                ref.settings.sticky && sticky(ref);

                // Repaint/reflow is required for CSS transition when appending
                triggerReflow(tooltip, circle);

                modifyClassList([tooltip, circle], function (list) {
                    list.remove('leave');
                    list.add('enter');
                });

                applyTransitionDuration([tooltip, circle], duration);

                !ref.settings.followCursor && ref.popperInstance.scheduleUpdate();

                // Wait for transitions to complete
                onTransitionEnd(ref, duration, function () {
                    if (!isExpectedState(popper, 'show') || ref.onShownFired) return;

                    // Remove transitions for flipping
                    !ref.settings.transitionFlip && tooltip.classList.add('tippy-notransition');

                    // Focus interactive tooltips only
                    ref.settings.interactive && popper.focus();

                    // Prevents shown() from firing more than once from early transition cancellations
                    ref.onShownFired = true;

                    _this5.callbacks.shown.call(popper);
                });
            }, 0);
        }

        /**
        * Hides a popper
        * @param {Element} popper
        * @param {Number} duration (optional)
        * @param {Boolean} enableCallback (optional)
        */

    }, {
        key: 'hide',
        value: function hide(popper) {
            var _this6 = this;

            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.settings.duration;


            var ref = find(STORE.refs, function (ref) {
                return ref.popper === popper;
            });
            var tooltip = popper.querySelector(SELECTORS.tooltip);
            var circle = popper.querySelector(SELECTORS.circle);
            var content = popper.querySelector(SELECTORS.content);
            // Prevent hide if open
            if (ref.settings.disabled === false && ref.settings.open) {
                return;
            }

            if (ref.settings.unmountHTMLWhenHide && ref.settings.reactDOM) {
                _reactDom2.default.unmountComponentAtNode(content);
            }

            this.callbacks.beforeHidden.call(popper);

            ref.hidden = true;
            ref.settings.interactive && ref.el.classList.remove('active');
            ref.onShownFired = false;
            !ref.settings.transitionFlip && tooltip.classList.remove('tippy-notransition');

            popper.style.visibility = 'hidden';
            popper.setAttribute('aria-hidden', 'true');

            // Use same duration as show if it's the default
            if (duration === DEFAULTS.hideDuration) {
                duration = parseInt(tooltip.style[prefix('transitionDuration')]);
            } else {
                applyTransitionDuration([tooltip, circle], duration);
            }

            modifyClassList([tooltip, circle], function (list) {
                list.remove('enter');
                list.add('leave');
            });

            // Re-focus click-triggered html elements
            // and the tooltipped element IS in the viewport (otherwise it causes unsightly scrolling
            // if the tooltip is closed and the element isn't in the viewport anymore)
            if (ref.settings.html && ref.settings.trigger.indexOf('click') !== -1 && elementIsInViewport(ref.el)) {
                ref.el.focus();
            }

            // Wait for transitions to complete
            onTransitionEnd(ref, duration, function () {
                if (!isExpectedState(popper, 'hide') || !ref.settings.appendTo.contains(popper)) return;

                ref.popperInstance.disableEventListeners();

                ref.settings.appendTo.removeChild(popper);

                _this6.callbacks.hidden.call(popper);
            });
        }

        /**
        * Destroys a popper
        * @param {Element} popper
        */

    }, {
        key: 'destroy',
        value: function destroy(popper) {
            var ref = find(STORE.refs, function (ref) {
                return ref.popper === popper;
            });

            var el = ref.el,
                popperInstance = ref.popperInstance,
                listeners = ref.listeners;

            // Remove Tippy-only event listeners from tooltipped element

            listeners.forEach(function (listener) {
                return el.removeEventListener(listener.event, listener.handler);
            });

            el.removeAttribute('data-tooltipped');
            el.removeAttribute('aria-describedby');

            popperInstance && popperInstance.destroy();

            // Remove from storage
            STORE.refs.splice(STORE.refs.map(function (ref) {
                return ref.popper;
            }).indexOf(popper), 1);
        }

        /**
        * Updates a popper with new content
        * @param {Element} popper
        */

    }, {
        key: 'update',
        value: function update(popper) {
            var ref = find(STORE.refs, function (ref) {
                return ref.popper === popper;
            });
            var content = popper.querySelector(SELECTORS.content);
            var el = ref.el,
                html = ref.settings.html;


            if (html) {
                content.innerHTML = html instanceof Element ? html.innerHTML : document.getElementById(html.replace('#', '')).innerHTML;
            } else {
                content.innerHTML = el.title || el.getAttribute('data-original-title');
                removeTitle(el);
            }
        }
    }]);

    return Tippy;
}();

exports.default = Tippy;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=react-tippy.js.map