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
  onRequestClose: function onRequestClose() {}
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
    _this.updateForReact = _this._updateForReact.bind(_this);
    _this.showTooltip = _this._showTooltip.bind(_this);
    _this.hideTooltip = _this._hideTooltip.bind(_this);
    _this.updateSettings = _this._updateSettings.bind(_this);
    return _this;
  }

  _createClass(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initTippy();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.destroyTippy();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

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
      if (this.props.html !== prevProps.html && this.props.interactive === true) {
        this.updateForReact();
        return;
      } else if (this.props.title !== prevProps.title) {
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
      if (this.tippy) {
        var popper = this.tippy.getPopperElement(this.tooltipDOM);
        this.tippy.show(popper, this.props.duration);
      }
    }
  }, {
    key: '_hideTooltip',
    value: function _hideTooltip() {
      if (this.tippy) {
        var popper = this.tippy.getPopperElement(this.tooltipDOM);
        this.tippy.hide(popper, this.props.hideDuration);
      }
    }
  }, {
    key: '_updateSettings',
    value: function _updateSettings(name, value) {
      if (this.tippy) {
        var popper = this.tippy.getPopperElement(this.tooltipDOM);
        this.tippy.updateSettings(popper, name, value);
      }
    }
  }, {
    key: '_updateForReact',
    value: function _updateForReact() {
      if (this.tippy) {
        var popper = this.tippy.getPopperElement(this.tooltipDOM);
        this.tippy.updateForReact(popper, this.props.html);
      }
    }
  }, {
    key: '_updateTippy',
    value: function _updateTippy() {
      if (this.tippy) {
        var popper = this.tippy.getPopperElement(this.tooltipDOM);
        this.tippy.update(popper);
      }
    }
  }, {
    key: '_initTippy',
    value: function _initTippy() {
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
          onRequestClose: this.props.onRequestClose
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
  }, {
    key: '_destroyTippy',
    value: function _destroyTippy() {
      if (this.tippy) {
        var popper = this.tippy.getPopperElement(this.tooltipDOM);
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

var _popper = __webpack_require__(5);

var _popper2 = _interopRequireDefault(_popper);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**!
* @file tippy.js | Pure JS Tooltip Library
* @version 0.11.1
* @license MIT
*/

// Touch user is assumed false until a `touchstart` event is fired
// id counter for our aria-describedby labelling (tooltip IDs)
var GLOBALS = {
    touchUser: false,
    idCounter: 0
};

// Storage object to hold all references from instance instantiation
// Allows us to hide tooltips from other instances when clicking on the body
var STORE = {
    refs: [],
    els: [],
    poppers: []
};

var DEFAULTS = {
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
    theme: 'dark',
    size: 'regular',
    distance: 10,
    offset: 0,
    hideOnClick: true,
    multiple: false,
    followCursor: false,
    inertia: false,
    transitionFlip: true,
    popperOptions: {},
    open: undefined,
    onRequestClose: function onRequestClose() {}
};

var DEFAULTS_KEYS = Object.keys(DEFAULTS);

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
    document.body.classList.add('tippy-touch');
    document.removeEventListener('touchstart', handleDocumentTouchstart);
}

// Handle clicks anywhere on the document
function handleDocumentClick(event) {

    var el = closest(event.target, SELECTORS.el);
    var popper = closest(event.target, SELECTORS.popper);

    if (popper) {
        var ref = STORE.refs[STORE.poppers.indexOf(popper)];
        if (ref.settings.interactive) return;
    }

    if (el) {
        var _ref = STORE.refs[STORE.els.indexOf(el)];

        // Hide all poppers except the one belonging to the element that was clicked IF
        // `multiple` is false AND they are a touch user, OR
        // `multiple` is false AND it's triggered by a click
        if (!_ref.settings.multiple && GLOBALS.touchUser || !_ref.settings.multiple && _ref.settings.trigger.indexOf('click') !== -1) {
            return hideAllPoppers(_ref);
        }

        // If hideOnClick is not strictly true or triggered by a click don't hide poppers
        if (_ref.settings.hideOnClick !== true || _ref.settings.trigger.indexOf('click') !== -1) return;
    }

    // Don't trigger a hide for tippy controllers, and don't needlessly run loop
    if (!closest(event.target, SELECTORS.controller) && document.body.querySelector(SELECTORS.popper)) {
        hideAllPoppers();
    }
}

document.addEventListener('click', handleDocumentClick);
document.addEventListener('touchstart', handleDocumentTouchstart);

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
* @param {String} str - placement
* @return {String}
*/
function getCorePlacement(str) {
    return str.replace(/-.+/, '');
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
* Creates a new popper instance
* @param {Object} ref
* @return {Object} - the popper instance
*/
function createPopperInstance(ref) {

    var settings = ref.settings;
    var tooltip = ref.popper.querySelector(SELECTORS.tooltip);

    var config = _extends({
        placement: settings.position
    }, settings.popperOptions || {}, {
        modifiers: _extends({}, settings.popperOptions ? settings.popperOptions.modifiers : {}, {
            flip: _extends({
                padding: parseInt(settings.distance) + 3 /* 3px from viewport boundary */
            }, settings.popperOptions && settings.popperOptions.modifiers ? settings.popperOptions.modifiers.flip : {}),
            offset: _extends({
                offset: parseInt(settings.offset)
            }, settings.popperOptions && settings.popperOptions.modifiers ? settings.popperOptions.modifiers.offset : {})
        }),
        onUpdate: function onUpdate() {
            tooltip.style.top = '';
            tooltip.style.bottom = '';
            tooltip.style.left = '';
            tooltip.style.right = '';
            tooltip.style[getCorePlacement(ref.popper.getAttribute('x-placement'))] = -(settings.distance - 10) + 'px';
        }
    });

    return new _popper2.default(ref.el, ref.popper, config);
}

/**
* Creates a popper element then returns it
* @param {String} title - the tooltip's `title` attribute
* @param {Object} settings - individual settings
* @return {Element} - the popper element
*/
function createPopperElement(id, title, settings) {
    var popper = document.createElement('div');
    popper.setAttribute('class', 'tippy-popper');
    popper.setAttribute('role', 'tooltip');
    popper.setAttribute('aria-hidden', 'true');
    popper.setAttribute('id', 'tippy-tooltip-' + id);

    var tooltip = document.createElement('div');
    tooltip.setAttribute('class', 'tippy-tooltip tippy-tooltip--' + settings.size + ' ' + settings.theme + '-theme leave');
    tooltip.setAttribute('data-animation', settings.animation);

    if (settings.arrow) {
        // Add an arrow
        var arrow = document.createElement('div');
        arrow.setAttribute('class', 'arrow-' + settings.arrowSize);
        arrow.setAttribute('x-arrow', '');
        tooltip.appendChild(arrow);
    }

    if (settings.animateFill) {
        // Create animateFill circle element for animation
        tooltip.setAttribute('data-animatefill', '');
        var circle = document.createElement('div');
        circle.setAttribute('class', 'leave');
        circle.setAttribute('x-circle', '');
        tooltip.appendChild(circle);
    }

    if (settings.inertia) {
        // Change transition timing function cubic bezier
        tooltip.setAttribute('data-inertia', '');
    }

    // Tooltip content (text or HTML)
    var content = document.createElement('div');
    content.setAttribute('class', 'tippy-tooltip-content');

    if (settings.html) {

        var templateId = void 0;

        if (settings.html instanceof Element) {
            content.innerHTML = settings.html.innerHTML;
            templateId = settings.html.id || 'tippy-html-template';
        } else {
            content.innerHTML = document.getElementById(settings.html.replace('#', '')).innerHTML;
            templateId = settings.html;
        }

        popper.classList.add('html-template');
        popper.setAttribute('tabindex', '0');
        tooltip.setAttribute('data-template-id', templateId);
    } else {
        content.innerHTML = title;
    }

    // Init distance. Further updates are made in the popper instance's `onUpdate()` method
    tooltip.style[getCorePlacement(settings.position)] = -(settings.distance - 10) + 'px';

    tooltip.appendChild(content);
    popper.appendChild(tooltip);

    return popper;
}

/**
* Creates a trigger for each one specified
* @param {Object} event - the custom event specified in the `trigger` setting
* @param {Element} el
* @param {Object} methods - the methods for each listener
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
    STORE.els.push(ref.el);
    STORE.poppers.push(ref.popper);
}

/**
* Removes the title from the tooltipped element
* @param {Element} el
*/
function removeTitle(el) {
    var title = el.getAttribute('title');
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
* @param {Object} e (event)
*/
function followCursor(e) {
    var ref = STORE.refs[STORE.els.indexOf(this)];
    var position = getCorePlacement(ref.popper.getAttribute('x-placement'));
    var halfPopperWidth = Math.round(ref.popper.offsetWidth / 2);
    var halfPopperHeight = Math.round(ref.popper.offsetHeight / 2);

    // Default = top
    var x = e.pageX - halfPopperWidth;
    var y = e.pageY - 2.5 * halfPopperHeight;

    if (position === 'left') {
        x = e.pageX - 2 * halfPopperWidth - 15;
        y = e.pageY - halfPopperHeight;
    } else if (position === 'right') {
        x = e.pageX + halfPopperHeight;
        y = e.pageY - halfPopperHeight;
    } else if (position === 'bottom') {
        y = e.pageY + halfPopperHeight / 1.5;
    }

    ref.popper.style[prefix('transform')] = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
}

/**
* Triggers a document repaint or reflow for CSS transition
* @param {Element} el
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
        if (el.hasAttribute('x-circle')) duration = Math.round(duration / 1.25);
        el.style[prefix('transitionDuration')] = duration + 'ms';
    });
}

/**
* Fixes CSS transition
* @param {Object} ref - element/popper reference
* @param {Function} callback - the quick hide/show correction
*/
function correctTransition(ref, callback) {
    setTimeout(function () {
        if (ref.settings.position !== ref.popper.getAttribute('x-placement')) {
            ref.flipped = true;
            callback();
        } else if (ref.flipped && ref.settings.position === ref.popper.getAttribute('x-placement')) {
            ref.flipped = false;
            callback();
        }
    }, 0);
}

/**
* Prepares the callback functions for `show` and `hide` methods
* @param {Object} ref -  the element/popper reference
* @param {Function} callback - callback function to fire once transitions complete
*/
function onTransitionEnd(ref, callback) {
    var tooltip = ref.popper.querySelector(SELECTORS.tooltip);

    var listenerCallback = function listenerCallback() {
        tooltip.removeEventListener('webkitTransitionEnd', listenerCallback);
        tooltip.removeEventListener('transitionend', listenerCallback);
        callback();
    };

    // Wait for transitions to complete
    tooltip.addEventListener('webkitTransitionEnd', listenerCallback);
    tooltip.addEventListener('transitionend', listenerCallback);
}

/**
* Creates a popper instance if one does not exist, then appends the popper
* Also updates its position if need be and enables event listeners
* @param {Object} ref -  the element/popper reference
*/
function awakenPopper(ref) {
    document.body.appendChild(ref.popper);

    if (ref.settings.followCursor && !ref.hasFollowCursorListener && !GLOBALS.touchUser) {
        ref.hasFollowCursorListener = true;
        ref.el.addEventListener('mousemove', followCursor);
    }

    if (!ref.popperInstance) {
        // Create instance if it hasn't been created yet
        ref.popperInstance = createPopperInstance(ref);
        if (ref.settings.followCursor && !GLOBALS.touchUser) {
            ref.popperInstance.disableEventListeners();
        }
    } else {
        ref.popperInstance.update();
        if (!ref.settings.followCursor) {
            ref.popperInstance.enableEventListeners();
        }
    }
}

/**
* Hides all poppers
* @param {Object} - currentRef
*/
function hideAllPoppers(currentRef) {
    STORE.refs.forEach(function (ref) {
        // Don't hide already hidden ones
        if (!document.body.contains(ref.popper)) return;

        // hideOnClick can have the truthy value of 'persistent', so strict check is needed
        if (ref.settings.hideOnClick === true && (!currentRef || ref.popper !== currentRef.popper)) {
            ref.settings.onRequestClose();
            ref.tippyInstance.hide(ref.popper, ref.settings.hideDuration);
        }
    });
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

        // Use default browser tooltip on old browsers (IE < 10) and Opera Mini
        if (!('addEventListener' in window) || /MSIE 9/i.test(navigator.userAgent) || window.operamini) return;

        this.settings = Object.assign(JSON.parse(JSON.stringify(DEFAULTS)), settings);

        this.callbacks = {
            wait: settings.wait,
            beforeShown: settings.beforeShown || new Function(),
            shown: settings.shown || new Function(),
            beforeHidden: settings.beforeHidden || new Function(),
            hidden: settings.hidden || new Function()
        };

        // Check if selector is a DOM element
        var els = selector instanceof Element ? [selector] : [].slice.call(document.querySelectorAll(selector));

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
            var _this = this;

            var settings = {};

            DEFAULTS_KEYS.forEach(function (key) {
                var val = el.getAttribute('data-' + key.toLowerCase()) || _this.settings[key];
                if (val === 'false') val = false;

                settings[key] = val;
            });

            // animateFill is disabled if an arrow is true
            if (settings.arrow) settings['animateFill'] = false;

            return Object.assign(Object.assign({}, this.settings), settings);
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
            var _this2 = this;

            // Avoid creating unnecessary timeouts
            var _show = function _show() {
                clearTimeout(popper.getAttribute('data-delay'));
                clearTimeout(popper.getAttribute('data-hidedelay'));

                // Already visible. For clicking when it also has a `focus` event listener
                if (popper.style.visibility === 'visible') return;

                if (settings.delay) {
                    var delay = setTimeout(function () {
                        return _this2.show(popper, settings.duration);
                    }, settings.delay);
                    popper.setAttribute('data-delay', delay);
                } else {
                    _this2.show(popper, settings.duration);
                }
            };

            var show = function show() {
                return _this2.callbacks.wait ? _this2.callbacks.wait(_show) : _show();
            };

            var hide = function hide() {
                clearTimeout(popper.getAttribute('data-hidedelay'));
                clearTimeout(popper.getAttribute('data-delay'));

                if (settings.hideDelay) {
                    var delay = setTimeout(function () {
                        return _this2.hide(popper, settings.hideDuration);
                    }, settings.hideDelay);
                    popper.setAttribute('data-hidedelay', delay);
                } else {
                    _this2.hide(popper, settings.hideDuration);
                }
            };

            var handleTrigger = function handleTrigger(event) {
                // Interactive tooltips receive a class of 'active'
                if (settings.interactive) {
                    event.target.classList.add('active');
                }

                // Toggle show/hide when clicking click-triggered tooltips
                if (event.type === 'click' && popper.style.visibility === 'visible' && settings.hideOnClick !== 'persistent') {
                    return hide();
                }

                show();
            };

            var handleMouseleave = function handleMouseleave(event) {

                if (settings.interactive) {
                    // Temporarily handle mousemove to check if the mouse left somewhere
                    // other than its popper
                    var handleMousemove = function handleMousemove(event) {
                        // If cursor is NOT on the popper
                        // and it's NOT on the popper's tooltipped element
                        // and it's NOT triggered by a click, then hide
                        if (closest(event.target, SELECTORS.popper) !== popper && closest(event.target, SELECTORS.el) !== el && settings.trigger.indexOf('click') === -1) {
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
                if (!GLOBALS.touchUser && event.relatedTarget) {
                    if (!closest(event.relatedTarget, SELECTORS.popper)) {
                        hide();
                    }
                }
            };

            return {
                handleTrigger: handleTrigger,
                handleMouseleave: handleMouseleave,
                handleBlur: handleBlur
            };
        }

        /**
        * Creates tooltips for all elements that match the instance's selector
        */

    }, {
        key: '_createTooltips',
        value: function _createTooltips(els) {
            var _this3 = this;

            els.forEach(function (el) {
                var settings = _this3._applyIndividualSettings(el);

                var title = el.getAttribute('title');
                if (!title && !settings.html) return;

                var id = GLOBALS.idCounter;
                el.setAttribute('data-tooltipped', '');
                el.setAttribute('aria-describedby', 'tippy-tooltip-' + id);

                removeTitle(el);

                var popper = createPopperElement(id, title, settings);
                var handlers = _this3._getEventListenerHandlers(el, popper, settings);
                var listeners = [];

                settings.trigger.trim().split(' ').forEach(function (event) {
                    return listeners = listeners.concat(createTrigger(event, el, handlers));
                });

                pushIntoStorage({
                    id: id,
                    el: el,
                    popper: popper,
                    settings: settings,
                    listeners: listeners,
                    tippyInstance: _this3
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
                return STORE.refs[STORE.els.indexOf(el)].popper;
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
                return STORE.refs[STORE.poppers.indexOf(popper)].el;
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
            var ref = STORE.refs[STORE.poppers.indexOf(popper)];
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
            var ref = STORE.refs[STORE.poppers.indexOf(popper)];
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
            var _this4 = this;

            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.settings.duration;
            var enableCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            var ref = STORE.refs[STORE.poppers.indexOf(popper)];
            var tooltip = popper.querySelector(SELECTORS.tooltip);
            var circle = popper.querySelector(SELECTORS.circle);

            if (ref.settings.open === false) {
                return;
            }

            if (enableCallback) {
                this.callbacks.beforeShown();

                // Flipping causes CSS transition to go haywire
                if (duration >= 20) {
                    correctTransition(ref, function () {
                        _this4.hide(popper, 0, false);
                        setTimeout(function () {
                            // Under fast-moving cursor cases, the tooltip can stay stuck because
                            // the mouseleave triggered before this show
                            // hidden only becomes `true` in the `hide` method if callback is enabled
                            // (i.e. legitimate hide, not triggered by this correcttransition function)
                            if (ref.hidden) return;

                            _this4.show(popper, duration, false);
                        }, 0);
                    });
                }
            }

            if (!document.body.contains(popper)) {
                awakenPopper(ref);
            }

            // Interactive tooltips receive a class of 'active'
            if (ref.settings.interactive) {
                ref.el.classList.add('active');
            }

            ref.hidden = false;
            ref.popper.style.visibility = 'visible';
            ref.popper.setAttribute('aria-hidden', 'false');

            // Repaint/reflow is required for CSS transition when appending
            triggerReflow(tooltip, circle);

            modifyClassList([tooltip, circle], function (list) {
                list.remove('leave');
                list.add('enter');
            });

            applyTransitionDuration([tooltip, circle], duration);

            // Wait for transitions to complete

            var transitionendFired = false;

            var transitionendCallback = function transitionendCallback() {
                transitionendFired = true;

                if (popper.style.visibility === 'hidden' || ref.onShownFired) return;

                if (!ref.settings.transitionFlip) {
                    tooltip.classList.add('tippy-notransition');
                }

                // Focus interactive tooltips only
                if (ref.settings.interactive) {
                    popper.focus();
                }

                // Prevents shown() from firing more than once from early transition cancellations
                ref.onShownFired = true;

                if (enableCallback) _this4.callbacks.shown();
            };

            onTransitionEnd(ref, transitionendCallback);

            // transitionend listener sometimes may not fire
            clearTimeout(ref.transitionendTimeout);
            ref.transitionendTimeout = setTimeout(function () {
                if (!transitionendFired) {
                    transitionendCallback();
                }
            }, duration);
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
            var _this5 = this;

            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.settings.duration;
            var enableCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;


            var ref = STORE.refs[STORE.poppers.indexOf(popper)];
            var tooltip = popper.querySelector(SELECTORS.tooltip);
            var circle = popper.querySelector(SELECTORS.circle);
            var content = popper.querySelector(SELECTORS.content);
            // Prevent hide if open
            if (ref.settings.disabled === false && ref.settings.open) {
                return;
            }
            if (enableCallback) {
                this.callbacks.beforeHidden();

                // flag needed for correctTransition, popper.style.visibility must be used by
                // correctTransition
                ref.hidden = true;

                ref.el.classList.remove('active');

                ref.onShownFired = false;

                if (!ref.settings.transitionFlip) {
                    tooltip.classList.remove('tippy-notransition');
                }

                ref.flipped = ref.settings.position !== popper.getAttribute('x-placement');
            }

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

            // Re-focus tooltipped element if it's a HTML popover
            // and the tooltipped element IS in the viewport (otherwise it causes unsightly scrolling
            // if the tooltip is closed and the element isn't in the viewport anymore)
            if (ref.settings.html && ref.settings.trigger.indexOf('click') !== -1 && elementIsInViewport(ref.el)) {
                ref.el.focus();
            }

            // Wait for transitions to complete

            var transitionendFired = false;

            var transitionendCallback = function transitionendCallback() {
                transitionendFired = true;

                if (popper.style.visibility === 'visible' || !document.body.contains(popper)) return;

                ref.popperInstance.disableEventListeners();

                document.body.removeChild(popper);

                if (enableCallback) _this5.callbacks.hidden();
            };

            onTransitionEnd(ref, transitionendCallback);

            // transitionend listener sometimes may not fire
            clearTimeout(ref.transitionendTimeout);
            ref.transitionendTimeout = setTimeout(function () {
                if (!transitionendFired) {
                    transitionendCallback();
                }
            }, duration);
        }

        /**
        * Destroys a popper
        * @param {Element} popper
        */

    }, {
        key: 'destroy',
        value: function destroy(popper) {
            var index = STORE.poppers.indexOf(popper);
            var ref = STORE.refs[index];

            // Remove Tippy-only event listeners from tooltipped element
            ref.listeners.forEach(function (listener) {
                return ref.el.removeEventListener(listener.event, listener.handler);
            });

            ref.el.removeAttribute('data-tooltipped');
            ref.el.removeAttribute('aria-describedby');

            if (ref.popperInstance) {
                ref.popperInstance.destroy();
            }

            // Remove from storage
            STORE.refs.splice(index, 1);
            STORE.els.splice(index, 1);
            STORE.poppers.splice(index, 1);
        }

        /**
        * Updates a popper with new content
        * @param {Element} popper
        */

    }, {
        key: 'update',
        value: function update(popper) {
            var ref = STORE.refs[STORE.poppers.indexOf(popper)];
            var content = popper.querySelector(SELECTORS.content);
            var template = ref.settings.html;

            if (template) {
                content.innerHTML = template instanceof Element ? template.innerHTML : document.getElementById(template.replace('#', '')).innerHTML;
            } else {
                content.innerHTML = ref.el.getAttribute('title') || ref.el.getAttribute('data-original-title');
                removeTitle(ref.el);
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