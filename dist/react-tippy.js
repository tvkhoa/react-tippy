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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _tippy = __webpack_require__(4);

var _tippy2 = _interopRequireDefault(_tippy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// title

var Tooltip = function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

    _this.initTippy = _this._initTippy.bind(_this);
    _this.destroyTippy = _this._destroyTippy.bind(_this);
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
      if (this.props.html !== prevProps.html && this.props.interactive === true) {
        var popper = this.tippy.getPopperElement(this.tooltipDOM);
        this.tippy.updateForReact(popper, this.props.html);
      } else {
        if (this.tippy) {
          this.destroyTippy();
        }
        this.initTippy();
      }
    }
  }, {
    key: '_initTippy',
    value: function _initTippy() {
      if (!this.props.disabled) {
        this.tooltipDOM.setAttribute('title', this.props.title);
        this.tippy = new _tippy2.default(this.tooltipDOM, {
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
          hidden: this.props.hidden
        });
        if (this.props.html) {
          var popper = this.tippy.getPopperElement(this.tooltipDOM);
          this.tippy.updateForReact(popper, this.props.html);
        }
      } else {
        this.tippy = null;
      }
    }
  }, {
    key: '_destroyTippy',
    value: function _destroyTippy() {
      var popper = this.tippy.getPopperElement(this.tooltipDOM);
      this.tippy.hide(popper, 0);
      this.tippy.destroy(popper);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(tooltip) {
            _this2.tooltipDOM = tooltip;
          },
          className: this.props.className,
          styles: this.props.styles
        },
        this.props.children
      );
    }
  }]);

  return Tooltip;
}(_react.Component);

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
  beforeShown: function beforeShown() {},
  shown: function shown() {},
  beforeHidden: function beforeHidden() {},
  hidden: function hidden() {},
  disabled: false,
  arrowSize: 'regular',
  size: 'regular',
  className: '',
  styles: {}
};

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**!
* @file tippy.js | Pure JS Tooltip Library
* @version 0.6.1
* @license MIT
*/

// Touch user is assumed false until a `touchstart` event is fired
var touchUser = false;

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
    trigger: 'mouseenter focus',
    duration: 400,
    hideDuration: 400,
    interactive: false,
    theme: 'dark',
    size: 'regular',
    offset: 0,
    hideOnClick: true,
    multiple: false,
    followCursor: false,
    inertia: false,
    popperOptions: {}
};

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
    touchUser = true;
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
        if (!_ref.settings.multiple && touchUser || !_ref.settings.multiple && _ref.settings.trigger.indexOf('click') !== -1) {
            return hideAllPoppers(_ref);
        }

        // If hideOnClick is not strictly true or triggered by a click don't hide poppers
        if (_ref.settings.hideOnClick !== true || _ref.settings.trigger.indexOf('click') !== -1) return;
    }

    // Don't trigger a hide for tippy controllers
    if (!closest(event.target, SELECTORS.controller)) {
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
* Polyfill to get the closest parent element
* @param {Element} element - child of parent to be returned
* @param {String} parentSelector - selector to match the parent if found
* @return {Element}
*/
function closest(element, parentSelector) {
    if (!Element.prototype.matches) {
        if (element.matchesSelector) {
            Element.prototype.matches = Element.prototype.matchesSelector;
        } else if (element.webkitMatchesSelector) {
            Element.prototype.matches = Element.prototype.webkitMatchesSelector;
        } else if (element.mozMatchesSelector) {
            Element.prototype.matches = Element.prototype.mozMatchesSelector;
        } else if (element.msMatchesSelector) {
            Element.prototype.matches = Element.prototype.msMatchesSelector;
        } else {
            return element;
        }
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
* @param {Element} el
* @param {Element} popper
* @param {Object} settings
* @return {Object} - the popper instance
*/
function createPopperInstance(el, popper, settings) {
    var config = _extends({
        placement: settings.position
    }, settings.popperOptions || {}, {
        modifiers: _extends({}, settings.popperOptions ? settings.popperOptions.modifiers : {}, {
            flip: _extends({
                padding: 15
            }, settings.popperOptions && settings.popperOptions.modifiers ? settings.popperOptions.modifiers.flip : {}),
            offset: _extends({
                offset: parseInt(settings.offset)
            }, settings.popperOptions && settings.popperOptions.modifiers ? settings.popperOptions.modifiers.offset : {})
        })
    });

    // Temporarily append popper for Popper.js
    document.body.appendChild(popper);

    var instance = new _popper2.default(el, popper, config);
    instance.disableEventListeners();

    document.body.removeChild(popper);

    return instance;
}

/**
* Creates a popper element then returns it
* @param {String} title - the tooltip's `title` attribute
* @param {Object} settings - individual settings
* @return {Element} - the popper element
*/
function createPopperElement(title, settings) {
    var popper = document.createElement('div');
    popper.setAttribute('class', 'tippy-popper');

    // Fix for iOS animateFill
    if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
        popper.classList.add('tippy-iOS-fix');
    }

    var tooltip = document.createElement('div');
    tooltip.setAttribute('class', 'tippy-tooltip tippy-tooltip--' + settings.size + ' ' + settings.theme + ' leave');
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
    if (event === 'manual') return;

    var listeners = [];

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
* Mousemove event listener callback method for follow cursor setting
* @param {Object} e (event)
*/
function followCursor(e) {
    var ref = STORE.refs[STORE.els.indexOf(this)];
    var position = ref.popper.getAttribute('x-placement');
    var offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var halfPopperWidth = Math.round(ref.popper.offsetWidth / 2);
    var halfPopperHeight = Math.round(ref.popper.offsetHeight / 2);

    // Default = top
    var x = e.clientX - halfPopperWidth;
    var y = e.clientY + offset - 2.5 * halfPopperHeight;

    if (position === 'left') {
        x = e.clientX - 2 * halfPopperWidth - 15;
        y = e.clientY + offset - halfPopperHeight;
    } else if (position === 'right') {
        x = e.clientX + halfPopperHeight;
        y = e.clientY + offset - halfPopperHeight;
    } else if (position === 'bottom') {
        y = e.clientY + offset + halfPopperHeight / 1.5;
    }

    ref.popper.style[prefix('transform')] = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
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
        el.style[prefix('transitionDuration')] = duration + 'ms';
    });
}

/**
* Prepares the callback functions for `show` and `hide` methods
* @param {Object} ref -  the element/popper reference
* @param {Boolean} immediatelyFire - whether to instantly fire the callback or wait
* @param {Function} callback - callback function to fire once transitions complete
*/
function onTransitionEnd(ref, immediatelyFire, callback) {
    var listenerCallback = function listenerCallback() {
        if (!immediatelyFire) {
            ref.popper.removeEventListener('webkitTransitionEnd', listenerCallback);
            ref.popper.removeEventListener('transitionend', listenerCallback);
        }
        callback();
    };

    // transitionend may not fire for 0 duration, keep it safe and use ~1 frame of time
    if (immediatelyFire) return listenerCallback();

    // Wait for transitions to complete
    ref.popper.addEventListener('webkitTransitionEnd', listenerCallback);
    ref.popper.addEventListener('transitionend', listenerCallback);
}

/**
* Appends the popper, updates its position and enables event listeners
* @param {Object} ref -  the element/popper reference
*/
function awakenPopper(ref) {
    document.body.appendChild(ref.popper);
    ref.popper.style.visibility = 'visible';

    ref.instance.update();

    if (ref.settings.followCursor && !touchUser) {
        if (!ref.hasFollowCursorListener) {
            ref.hasFollowCursorListener = true;
            ref.el.addEventListener('mousemove', followCursor);
        }
    } else {
        ref.instance.enableEventListeners();
    }
}

/**
* Fixes CSS transition when showing a flipped tooltip
* @param {Object} ref - the popper/element reference
* @param {Number} duration
*/
function correctTransition(ref, callback) {
    setTimeout(function () {
        var position = ref.popper.getAttribute('x-placement');
        var a = !ref.adjusted && ref.settings.position !== position;
        var b = ref.adjusted && ref.settings.position === position;
        if (a || b) {
            ref.adjusted = a ? true : false;
            callback();
        }
    }, 0);
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
            privateInstance.hide(ref.popper, ref.settings.hideDuration);
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
        this.els = selector instanceof Element ? [selector] : [].slice.call(document.querySelectorAll(selector));

        this._createTooltips();
    }

    /**
    * Returns an object of settings to override global settings
    * @param {Element} el - the tooltipped element
    * @return {Object} - individual settings
    */


    _createClass(Tippy, [{
        key: '_applyIndividualSettings',
        value: function _applyIndividualSettings(el) {
            // Some falsy values require more verbose defining

            // false, 'false', or a template id
            var html = el.getAttribute('data-html') || this.settings.html;
            if (!html || html === 'false') html = false;

            // 'top', 'bottom', 'left', 'right'
            var position = el.getAttribute('data-position') || this.settings.position;

            // 'shift', 'perspective', 'scale', 'fade'
            var animation = el.getAttribute('data-animation') || this.settings.animation;

            // 'true', true, 'false', false
            var animateFill = el.getAttribute('data-animatefill') || this.settings.animateFill;
            if (animateFill === 'false') animateFill = false;

            // 'true', true, 'false', false
            var arrow = el.getAttribute('data-arrow') || this.settings.arrow;
            if (!arrow || arrow === 'false') arrow = false;else animateFill = false;

            // 'small', 'regular', 'big'
            var arrowSize = el.getAttribute('data-arrowsize') || this.settings.arrowSize;

            // 'mouseenter focus' string to array
            var trigger = el.getAttribute('data-trigger') || this.settings.trigger;
            if (trigger) trigger = trigger.trim().split(' ');

            // 'dark', 'light', '{custom}'
            var theme = el.getAttribute('data-theme') || this.settings.theme;
            if (theme) theme += '-theme';

            // 'small', 'regular', 'big'
            var size = el.getAttribute('data-size') || this.settings.size;

            // 0, '0'
            var delay = parseInt(el.getAttribute('data-delay'));
            if (!delay && delay !== 0) delay = this.settings.delay;

            // 0, '0'
            var duration = parseInt(el.getAttribute('data-duration'));
            if (!duration && duration !== 0) duration = this.settings.duration;

            // 0, '0'
            var hideDuration = parseInt(el.getAttribute('data-hideduration'));
            if (!hideDuration && hideDuration !== 0) hideDuration = this.settings.hideDuration;

            // 'true', true, 'false', false
            var interactive = el.getAttribute('data-interactive') || this.settings.interactive;
            if (interactive === 'false') interactive = false;

            // '0', 0
            var offset = parseInt(el.getAttribute('data-offset'));
            if (!offset && offset !== 0) offset = this.settings.offset;

            // 'true', true, 'false', false
            var hideOnClick = el.getAttribute('data-hideonclick') || this.settings.hideOnClick;
            if (hideOnClick === 'false') hideOnClick = false;

            // 'true', true, 'false', false
            var multiple = el.getAttribute('data-multiple') || this.settings.multiple;
            if (multiple === 'false') multiple = false;

            // 'true', true, 'false', false
            var followCursor = el.getAttribute('data-followcursor') || this.settings.followCursor;
            if (followCursor === 'false') followCursor = false;

            // 'true', true, 'false', false
            var inertia = el.getAttribute('data-inertia') || this.settings.inertia;
            if (inertia === 'false') inertia = false;

            // just take the provided value
            var popperOptions = this.settings.popperOptions;

            return {
                html: html,
                position: position,
                animation: animation,
                animateFill: animateFill,
                arrow: arrow,
                arrowSize: arrowSize,
                delay: delay,
                trigger: trigger,
                duration: duration,
                hideDuration: hideDuration,
                interactive: interactive,
                theme: theme,
                size: size,
                offset: offset,
                hideOnClick: hideOnClick,
                multiple: multiple,
                followCursor: followCursor,
                inertia: inertia,
                popperOptions: popperOptions
            };
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
            var _this = this;

            // Avoid creating unnecessary timeouts
            var _show = function _show() {
                if (settings.delay) {
                    var delay = setTimeout(function () {
                        return _this.show(popper, settings.duration);
                    }, settings.delay);
                    popper.setAttribute('data-delay', delay);
                } else {
                    _this.show(popper, settings.duration);
                }
            };

            var show = function show() {
                return _this.callbacks.wait ? _this.callbacks.wait(_show) : _show();
            };
            var hide = function hide() {
                return _this.hide(popper, settings.hideDuration);
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
                if (!touchUser && event.relatedTarget) {
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
        value: function _createTooltips() {
            var _this2 = this;

            this.els.forEach(function (el) {

                el.setAttribute('data-tooltipped', '');

                var settings = _this2._applyIndividualSettings(el);

                var title = el.getAttribute('title');
                if (!title && !settings.html) return;

                removeTitle(el);

                var popper = createPopperElement(title, settings);
                var instance = createPopperInstance(el, popper, settings);
                var handlers = _this2._getEventListenerHandlers(el, popper, settings);
                var listeners = [];

                settings.trigger.forEach(function (event) {
                    return listeners = listeners.concat(createTrigger(event, el, handlers));
                });

                pushIntoStorage({
                    el: el,
                    popper: popper,
                    settings: settings,
                    listeners: listeners,
                    instance: instance
                });
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
        * Update a popper
        * @param {DOMElement} - popper
        * @param {ReactElement} - content
        */

    }, {
        key: 'updateForReact',
        value: function updateForReact(popper, content) {
            var ref = STORE.refs[STORE.poppers.indexOf(popper)];
            var tooltip = popper.querySelector(SELECTORS.tooltip);
            ref.settings.content = content;
            ref.instance.update();
            _reactDom2.default.render(content, tooltip);
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
            var _this3 = this;

            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.settings.duration;
            var enableCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;


            // Already visible
            if (popper.style.visibility === 'visible') return;

            var ref = STORE.refs[STORE.poppers.indexOf(popper)];
            var tooltip = popper.querySelector(SELECTORS.tooltip);
            var circle = popper.querySelector(SELECTORS.circle);

            if (enableCallback) this.callbacks.beforeShown();

            awakenPopper(ref);

            // Flipping causes CSS transition to go haywire
            correctTransition(ref, function () {
                _this3.hide(ref.popper, 0, false);
                setTimeout(function () {
                    return _this3.show(ref.popper, duration, false);
                }, 0);
            });

            // Repaint/reflow is required for CSS transition when appending
            triggerReflow(tooltip, circle);

            modifyClassList([tooltip, circle], function (list) {
                list.remove('leave');
                list.add('enter');
            });

            applyTransitionDuration([tooltip, circle], duration);

            onTransitionEnd(ref, duration < 20, function () {
                if (popper.style.visibility === 'hidden' || ref.onShownFired) return;

                // Focus click triggered interactive tooltips (popovers) only
                if (ref.settings.interactive && ref.settings.trigger.indexOf('click') !== -1) {
                    popper.focus();
                }

                ref.onShownFired = true;

                _this3.callbacks.shown();
            });
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
            var _this4 = this;

            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.settings.duration;
            var enableCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            // Clear unwanted timeouts due to `delay` setting
            clearTimeout(popper.getAttribute('data-delay'));

            // Hidden anyway
            if (!document.body.contains(popper)) return;

            var ref = STORE.refs[STORE.poppers.indexOf(popper)];
            var tooltip = popper.querySelector(SELECTORS.tooltip);
            var circle = popper.querySelector(SELECTORS.circle);

            if (enableCallback) {
                this.callbacks.beforeHidden();
                ref.el.classList.remove('active');
                ref.onShownFired = false;
            }

            popper.style.visibility = 'hidden';

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

            onTransitionEnd(ref, duration < 20, function () {
                if (popper.style.visibility === 'visible' || !document.body.contains(popper)) return;

                // Follow cursor setting
                if (ref.hasFollowCursorListener) {
                    ref.el.removeEventListener('mousemove', followCursor);
                    ref.hasFollowCursorListener = false;
                }

                ref.instance.disableEventListeners();

                document.body.removeChild(popper);

                _this4.callbacks.hidden();
            });
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

            ref.instance.destroy();

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


var privateInstance = new Tippy();

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