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
        { ref: function ref(tooltip) {
            _this2.tooltipDOM = tooltip;
          } },
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
  disabled: false
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


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _popper = __webpack_require__(5);

var _popper2 = _interopRequireDefault(_popper);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**!
    * @file tippy.js | Pure JS Tooltip Library
    * @version 0.4.0
    * @license MIT
*/

var Tippy = function () {
    function Tippy(selector) {
        var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Tippy);

        // Use default browser tooltip on old browsers (IE < 10) and Opera Mini
        if (!('addEventListener' in window) || /MSIE 9/i.test(navigator.userAgent) || window.operamini) return;

        this.defaultSettings = {
            html: false,
            position: 'top',
            animation: 'shift',
            animateFill: true,
            arrow: false,
            delay: 0,
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
            popperOptions: {}
        };
        this.settings = this._applyGlobalSettings(settings);
        this.classNames = {
            popper: 'tippy-popper',
            tooltip: 'tippy-tooltip',
            content: 'tippy-tooltip-content'
        };

        // Check if selector is a DOM element
        this.tooltippedEls = selector instanceof Element ? [selector] : [].slice.call(document.querySelectorAll(selector));

        this._createBus();
        this._createTooltips();
        this._handleDocumentEvents();
    }

    /**
    * ================================== PRIVATE METHODS ==================================
    */

    /**
    * Returns a global settings object to be applied to the instance
    * @param {Object} - settings
    * @return {Object}
    */


    _createClass(Tippy, [{
        key: '_applyGlobalSettings',
        value: function _applyGlobalSettings(settings) {
            // Object.assign polyfill
            if (typeof Object.assign != 'function') {
                Object.assign = function (target, varArgs) {
                    'use strict';

                    var to = Object(target);
                    for (var index = 1; index < arguments.length; index++) {
                        var nextSource = arguments[index];
                        if (nextSource != null) {
                            for (var nextKey in nextSource) {
                                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                                    to[nextKey] = nextSource[nextKey];
                                }
                            }
                        }
                    }
                    return to;
                };
            }

            this.callbacks = {
                wait: settings.wait,
                beforeShown: settings.beforeShown || new Function(),
                shown: settings.shown || new Function(),
                beforeHidden: settings.beforeHidden || new Function(),
                hidden: settings.hidden || new Function()
            };

            return Object.assign(this.defaultSettings, settings);
        }

        /**
        * Creates the global bus to store all tooltip references from instance instantiation
        */

    }, {
        key: '_createBus',
        value: function _createBus() {
            if (Tippy.bus) return;

            Tippy.bus = {
                refs: [],
                tooltippedEls: [],
                poppers: []
            };
        }

        /**
        * In-class polyfill to get closest parent based on a selector
        * @param {Element} element
        * @param {String} parentSelector
        * @return {Element}
        */

    }, {
        key: '_closest',
        value: function _closest(element, parentSelector) {
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
        * Hides all poppers
        * @param {Object} - currentRef
        */

    }, {
        key: '_hideAllPoppers',
        value: function _hideAllPoppers(currentRef) {
            var _this = this;

            Tippy.bus.refs.forEach(function (ref) {
                // Don't hide already hidden ones
                if (!document.body.contains(ref.popper)) return;

                if (!currentRef) {
                    // hideOnClick can have the truthy value of 'persistent', so strict check is needed
                    if (ref.settings.hideOnClick === true) {
                        _this.hide(ref.popper, ref.settings.hideDuration);
                    }
                } else {
                    if (ref.popper !== currentRef.popper && ref.settings.hideOnClick === true) {
                        _this.hide(ref.popper, ref.settings.hideDuration);
                    }
                }
            });
        }

        /**
        * Creates listeners on the document for click and touch start (to determine touch users)
        */

    }, {
        key: '_handleDocumentEvents',
        value: function _handleDocumentEvents() {
            var _this2 = this;

            /**
            * Gets the actual popper or tooltipped element due to inner element event targets
            * @param {Element} target
            * @return {Object} or {null}
            */
            var actualElement = function actualElement(target) {
                var tooltippedEl = _this2._closest(target, '[data-tooltipped]');
                var popper = _this2._closest(target, '.' + _this2.classNames.popper);
                var obj = {};

                if (tooltippedEl) {
                    obj.type = 'tooltippedEl';
                    obj.target = tooltippedEl;
                } else if (popper) {
                    obj.type = 'popper';
                    obj.target = popper;
                } else {
                    obj = null;
                }

                return obj;
            };

            /**
            * Returns the indices of the target in the Element arrays
            * @param {Element} target
            * @return {Object}
            */
            var getRefIndices = function getRefIndices(target) {
                var tooltippedElIndex = -1;
                var popperIndex = -1;

                // Ensure the target gets the actual element or popper as they could have clicked
                // on an inner element
                var eventTarget = actualElement(target);

                // Is a tooltipped element or popper
                if (eventTarget) {
                    if (eventTarget.type === 'tooltippedEl') {
                        tooltippedElIndex = Tippy.bus.tooltippedEls.indexOf(eventTarget.target);
                    } else if (eventTarget.type === 'popper') {
                        popperIndex = Tippy.bus.poppers.indexOf(eventTarget.target);
                    }
                }

                return {
                    tooltippedElIndex: tooltippedElIndex,
                    popperIndex: popperIndex
                };
            };

            /**
            * Event listener method for document click
            * @param {Object} event
            */
            var handleClick = function handleClick(event) {

                var refIndices = getRefIndices(event.target);
                var clickedOnTooltippedEl = refIndices.tooltippedElIndex !== -1;
                var clickedOnPopper = refIndices.popperIndex !== -1;

                if (clickedOnPopper) {
                    var ref = Tippy.bus.refs[refIndices.popperIndex];
                    if (ref.settings.interactive) return;
                }

                if (clickedOnTooltippedEl) {
                    var _ref = Tippy.bus.refs[refIndices.tooltippedElIndex];

                    if (!_ref.settings.multiple && (_ref.settings.trigger.indexOf('click') !== -1 || Tippy.touchUser)) {
                        // Hide all except popper belonging to the element that was clicked on
                        return _this2._hideAllPoppers(_ref);
                    }

                    // If hideOnClick is not strictly true or triggered by a click don't hide poppers
                    if (_ref.settings.hideOnClick !== true || _ref.settings.trigger.indexOf('click') !== -1) return;
                }

                if (!_this2._closest(event.target, '[data-tippy-controller]')) {
                    _this2._hideAllPoppers();
                }
            };

            var handleTouch = function handleTouch() {
                Tippy.touchUser = true;
                document.body.classList.add('tippy-touch');
                document.removeEventListener('touchstart', handleTouch);
            };

            if (!Tippy.bus.listeners) {
                Tippy.bus.listeners = {
                    touchstart: handleTouch,
                    click: handleClick
                };
                document.addEventListener('touchstart', handleTouch);
                document.addEventListener('click', handleClick);
            }
        }

        /**
        * Creates a new popper instance
        * @param {Element} tooltippedEl
        * @param {Element} popper
        * @param {Object} settings
        * @return {Object} - the popper instance
        */

    }, {
        key: '_createPopperInstance',
        value: function _createPopperInstance(tooltippedEl, popper, settings) {
            var config = _extends({
                placement: settings.position
            }, settings.popperOptions || {}, {
                modifiers: _extends({}, settings.popperOptions ? settings.popperOptions.modifiers : {}, {
                    offset: _extends({
                        offset: parseInt(settings.offset)
                    }, settings.popperOptions && settings.popperOptions.modifiers ? settings.popperOptions.modifiers.offset : {})
                })
            });

            // Temporarily append popper for Popper.js
            document.body.appendChild(popper);

            var instance = new _popper2.default(tooltippedEl, popper, config);
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

    }, {
        key: '_createPopperElement',
        value: function _createPopperElement(title, settings) {
            var popper = document.createElement('div');
            popper.setAttribute('class', this.classNames.popper);

            // Fix for iOS animateFill
            if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
                popper.classList.add('tippy-iOS-fix');
            }

            var tooltip = document.createElement('div');
            tooltip.setAttribute('class', this.classNames.tooltip + ' ' + settings.theme + ' leave');
            tooltip.setAttribute('data-animation', settings.animation);

            if (settings.arrow) {
                // Add an arrow
                var arrow = document.createElement('div');
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
            content.setAttribute('class', this.classNames.content);

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
        * Returns an object of settings to override global settings
        * @param {Element} el - the tooltipped element
        * @return {Object} - individual settings
        */

    }, {
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

            // 'mouseenter focus' string to array
            var trigger = el.getAttribute('data-trigger') || this.settings.trigger;
            if (trigger) trigger = trigger.trim().split(' ');

            // 'dark', 'light', '{custom}'
            var theme = el.getAttribute('data-theme') || this.settings.theme;
            if (theme) theme += '-theme';

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
                delay: delay,
                trigger: trigger,
                duration: duration,
                hideDuration: hideDuration,
                interactive: interactive,
                theme: theme,
                offset: offset,
                hideOnClick: hideOnClick,
                multiple: multiple,
                followCursor: followCursor,
                inertia: inertia,
                popperOptions: popperOptions
            };
        }

        /**
        * Returns relevant listeners methods for each ref
        * @param {Element} tooltippedEl
        * @param {Element} popper
        * @param {Object} settings
        * @return {Object} - relevant listener methods
        */

    }, {
        key: '_getEventListenerMethods',
        value: function _getEventListenerMethods(tooltippedEl, popper, settings) {
            var _this3 = this;

            // Avoid creating unnecessary timeouts
            var _show = function _show() {
                if (settings.delay) {
                    var delay = setTimeout(function () {
                        return _this3.show(popper, settings.duration);
                    }, settings.delay);
                    popper.setAttribute('data-delay', delay);
                } else {
                    _this3.show(popper, settings.duration);
                }
            };

            var show = function show() {
                return _this3.callbacks.wait ? _this3.callbacks.wait(_show) : _show();
            };
            var hide = function hide() {
                return _this3.hide(popper, settings.hideDuration);
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
                        if (_this3._closest(event.target, '.' + _this3.classNames.popper) !== popper && _this3._closest(event.target, '[data-tooltipped]') !== tooltippedEl && settings.trigger.indexOf('click') === -1) {
                            document.removeEventListener('mousemove', handleMousemove);
                            tooltippedEl.classList.remove('active');
                            hide();
                        }
                    };
                    document.addEventListener('mousemove', handleMousemove);
                    return;
                }

                // If it's not interactive, just hide it
                hide();
            };

            var handleBlur = function handleBlur(event) {
                // Only hide if not a touch user and has a focus 'relatedtarget', of which is not
                // a popper element
                if (!Tippy.touchUser && event.relatedTarget) {
                    if (!_this3._closest(event.relatedTarget, '.' + _this3.classNames.popper)) {
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
        * Creates a trigger for each one specified
        * @param {Object} event - the custom event specified in the `trigger` setting
        * @param {Element} tooltippedEl
        * @param {Object} methods - the methods for each listener
        * @return {Array} - array of listener objects
        */

    }, {
        key: '_createTrigger',
        value: function _createTrigger(event, tooltippedEl, methods) {
            if (event === 'manual') return;

            var listeners = [];

            // Enter
            tooltippedEl.addEventListener(event, methods.handleTrigger);
            listeners.push({
                event: event,
                method: methods.handleTrigger
            });

            // Leave
            if (event === 'mouseenter') {
                tooltippedEl.addEventListener('mouseleave', methods.handleMouseleave);
                listeners.push({
                    event: 'mouseleave',
                    method: methods.handleMouseleave
                });
            }
            if (event === 'focus') {
                tooltippedEl.addEventListener('blur', methods.handleBlur);
                listeners.push({
                    event: 'blur',
                    method: methods.handleBlur
                });
            }

            return listeners;
        }

        /**
        * Adds each reference (tooltipped element, popper and its settings/listeners etc)
        * into global bus
        * @param {Object} ref - current ref in the forEach loop to be pushed
        */

    }, {
        key: '_pushIntoBus',
        value: function _pushIntoBus(ref) {
            Tippy.bus.refs.push(ref);
            Tippy.bus.tooltippedEls.push(ref.tooltippedEl);
            Tippy.bus.poppers.push(ref.popper);
        }

        /**
        * Removes the title from the tooltipped element
        * @param {Element} tooltippedEl
        */

    }, {
        key: '_removeTitle',
        value: function _removeTitle(tooltippedEl) {
            var title = tooltippedEl.getAttribute('title');
            tooltippedEl.setAttribute('data-original-title', title || 'html');
            tooltippedEl.removeAttribute('title');
        }

        /**
        * Creates tooltips for all elements that match the instance's selector
        */

    }, {
        key: '_createTooltips',
        value: function _createTooltips() {
            var _this4 = this;

            this.tooltippedEls.forEach(function (tooltippedEl) {

                tooltippedEl.setAttribute('data-tooltipped', '');

                var settings = _this4._applyIndividualSettings(tooltippedEl);

                var title = tooltippedEl.getAttribute('title');
                if (!title && !settings.html) return;

                _this4._removeTitle(tooltippedEl);

                var popper = _this4._createPopperElement(title, settings);
                var instance = _this4._createPopperInstance(tooltippedEl, popper, settings);
                var methods = _this4._getEventListenerMethods(tooltippedEl, popper, settings);
                var listeners = [];

                settings.trigger.forEach(function (event) {
                    listeners = listeners.concat(_this4._createTrigger(event, tooltippedEl, methods));
                });

                _this4._pushIntoBus({
                    tooltippedEl: tooltippedEl,
                    popper: popper,
                    settings: settings,
                    listeners: listeners,
                    instance: instance
                });
            });
        }

        /**
        * Mousemove event listener method for follow cursor setting
        * @param {Object} e (event)
        */

    }, {
        key: '_followCursor',
        value: function _followCursor(e) {
            var ref = Tippy.bus.refs[Tippy.bus.tooltippedEls.indexOf(this)];
            var position = ref.popper.getAttribute('x-placement');
            var offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            var halfPopperWidth = Math.round(ref.popper.offsetWidth / 2);
            var halfPopperHeight = Math.round(ref.popper.offsetHeight / 2);

            // Default = top
            var x = e.clientX - halfPopperWidth;
            var y = e.clientY + offset - 50;

            if (position === 'left') {
                x = e.clientX - 2 * halfPopperWidth - 10;
                y = e.clientY + offset - halfPopperHeight;
            } else if (position === 'right') {
                x = e.clientX + 15;
                y = e.clientY + offset - halfPopperHeight;
            } else if (position === 'bottom') {
                y = e.clientY + offset + 15;
            }

            ref.popper.style.WebkitTransform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
            ref.popper.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
        }

        /**
        * Fixes CSS transition when showing a flipped tooltip
        * @param {Object} ref - the popper/element reference
        * @param {Number} duration
        */

    }, {
        key: '_adjustFlip',
        value: function _adjustFlip(ref, duration) {
            var _this5 = this;

            var flipAdjust = function flipAdjust() {
                _this5.hide(ref.popper, 0, false);
                setTimeout(function () {
                    return _this5.show(ref.popper, duration, false);
                }, 0);
            };
            setTimeout(function () {
                if (!ref.adjusted && ref.settings.position !== ref.popper.getAttribute('x-placement')) {
                    ref.adjusted = true;
                    flipAdjust();
                } else if (ref.adjusted && ref.settings.position === ref.popper.getAttribute('x-placement')) {
                    ref.adjusted = false;
                    flipAdjust();
                }
            }, 0);
        }

        /**
        * ================================== PUBLIC METHODS ==================================
        */

        /**
        * Returns a tooltipped element's popper reference
        * @param {Element} el
        * @return {Element}
        */

    }, {
        key: 'getPopperElement',
        value: function getPopperElement(el) {
            try {
                return Tippy.bus.refs[Tippy.bus.tooltippedEls.indexOf(el)].popper;
            } catch (e) {
                throw new Error('[Tippy error]: Element does not exist in any Tippy instances');
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
            var ref = Tippy.bus.refs[Tippy.bus.poppers.indexOf(popper)];
            var tooltip = popper.querySelector('.' + this.classNames.tooltip);
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
            var _this6 = this;

            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.defaultSettings.duration;
            var enableCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;


            // Already visible
            if (popper.style.visibility === 'visible') return;

            var ref = Tippy.bus.refs[Tippy.bus.poppers.indexOf(popper)];
            var tooltip = popper.querySelector('.' + this.classNames.tooltip);
            var circle = popper.querySelector('[x-circle]');
            var arrow = popper.querySelector('[x-arrow]');

            this._adjustFlip(ref, duration);

            if (enableCallback) this.callbacks.beforeShown();

            document.body.appendChild(popper);

            popper.style.visibility = 'visible';

            // Follow cursor setting, not applicable to touch users
            if (ref.settings.followCursor && !Tippy.touchUser) {
                if (!ref.hasFollowCursorListener) {
                    ref.hasFollowCursorListener = true;
                    ref.tooltippedEl.addEventListener('mousemove', this._followCursor);
                }
            } else {
                ref.instance.enableEventListeners();
            }

            ref.instance.update();

            // Repaint is required for CSS transition when appending
            getComputedStyle(tooltip).opacity;

            tooltip.style.WebkitTransitionDuration = duration + 'ms';
            tooltip.style.transitionDuration = duration + 'ms';
            tooltip.classList.add('enter');
            tooltip.classList.remove('leave');

            if (circle) {
                // Reflow
                var style = getComputedStyle(circle);
                if (!style.transform) style.WebkitTransform;
                style.transform;

                circle.style.WebkitTransitionDuration = duration + 'ms';
                circle.style.transitionDuration = duration + 'ms';
                circle.classList.add('enter');
                circle.classList.remove('leave');
            }

            var onShown = function onShown() {
                if (popper.style.visibility === 'hidden') return;

                // Focus click triggered tooltips (popovers) only
                if (ref.settings.trigger.indexOf('click') !== -1) {
                    popper.focus();
                }

                _this6.callbacks.shown();
            };

            // Wait for transitions to complete
            // transitionend listener is not as reliable as timeouts for now
            clearTimeout(ref.showTimeout);
            ref.showTimeout = setTimeout(onShown, duration);
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
            var _this7 = this;

            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.settings.duration;
            var enableCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            // Clear unwanted timeouts due to `delay` setting
            clearTimeout(popper.getAttribute('data-delay'));

            // Hidden anyway
            if (!document.body.contains(popper)) return;

            if (enableCallback) this.callbacks.beforeHidden();

            popper.style.visibility = 'hidden';

            var ref = Tippy.bus.refs[Tippy.bus.poppers.indexOf(popper)];
            var tooltip = popper.querySelector('.' + this.classNames.tooltip);
            var circle = popper.querySelector('[x-circle]');

            ref.tooltippedEl.classList.remove('active');

            // Use the same duration as the show if it's the default
            if (duration === this.defaultSettings.hideDuration) {
                if (tooltip.style.transitionDuration) {
                    duration = parseInt(tooltip.style.transitionDuration.replace('ms', ''));
                } else if (tooltip.style.WebkitTransitionDuration) {
                    duration = parseInt(tooltip.style.WebkitTransitionDuration.replace('ms', ''));
                }
            } else {
                tooltip.style.WebkitTransitionDuration = duration + 'ms';
                tooltip.style.transitionDuration = duration + 'ms';
                if (circle) {
                    circle.style.WebkitTransitionDuration = duration + 'ms';
                    circle.style.transitionDuration = duration + 'ms';
                }
            }

            tooltip.classList.add('leave');
            tooltip.classList.remove('enter');
            if (circle) {
                circle.classList.add('leave');
                circle.classList.remove('enter');
            }

            // Re-focus tooltipped element if it's a HTML popover
            if (ref.settings.html && ref.settings.trigger.indexOf('click') !== -1) {
                ref.tooltippedEl.focus();
            }

            var onHidden = function onHidden() {
                if (popper.style.visibility === 'visible') return;

                // Follow cursor setting
                if (ref.hasFollowCursorListener) {
                    ref.tooltippedEl.removeEventListener('mousemove', _this7._followCursor);
                    ref.hasFollowCursorListener = false;
                }

                ref.instance.disableEventListeners();

                if (document.body.contains(popper)) document.body.removeChild(popper);

                if (enableCallback) _this7.callbacks.hidden();
            };

            // Wait for transitions to complete
            // transitionend listener is not as reliable as timeouts for now
            clearTimeout(ref.hideTimeout);
            ref.hideTimeout = setTimeout(onHidden, duration);
        }

        /**
        * Destroys a popper
        * @param {Element} popper
        */

    }, {
        key: 'destroy',
        value: function destroy(popper) {
            var index = Tippy.bus.poppers.indexOf(popper);
            var ref = Tippy.bus.refs[index];

            // Remove Tippy-only event listeners from tooltipped element
            ref.listeners.forEach(function (listener) {
                return ref.tooltippedEl.removeEventListener(listener.event, listener.method);
            });

            ref.instance.destroy();

            // Remove from global ref arrays
            Tippy.bus.poppers.splice(index, 1);
            Tippy.bus.tooltippedEls.splice(index, 1);
            Tippy.bus.refs.splice(index, 1);
        }

        /**
        * Updates a popper with new content
        * @param {Element} popper
        */

    }, {
        key: 'update',
        value: function update(popper) {
            var index = Tippy.bus.poppers.indexOf(popper);
            var ref = Tippy.bus.refs[index];
            var content = popper.querySelector('.' + this.classNames.content);

            if (ref.settings.html) {
                content.innerHTML = ref.settings.html instanceof Element ? ref.settings.html.innerHTML : document.getElementById(ref.settings.html.replace('#', '')).innerHTML;
            } else {
                content.innerHTML = ref.tooltippedEl.getAttribute('title') || ref.tooltippedEl.getAttribute('data-original-title');
                this._removeTitle(ref.tooltippedEl);
            }
        }
    }]);

    return Tippy;
}();

window.Tippy = Tippy;
module.exports = Tippy;

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