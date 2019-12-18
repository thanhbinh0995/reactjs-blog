(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 1652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_homeStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1653);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "homeStyle", function() { return _page_homeStyle__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ 1653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1654);


var homeStyle = function homeStyle() {
  return {
    text: {
      color: _theme__WEBPACK_IMPORTED_MODULE_0__["defaultColor"]
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (homeStyle);

/***/ }),

/***/ 1654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryColor", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningColor", function() { return warningColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerColor", function() { return dangerColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successColor", function() { return successColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoColor", function() { return infoColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseColor", function() { return roseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whiteColor", function() { return whiteColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultColor", function() { return defaultColor; });
var primaryColor = '#9c27b0';
var warningColor = '#ff9800';
var dangerColor = '#f44336';
var successColor = '#4caf50';
var infoColor = '#00acc1';
var roseColor = '#e91e63';
var whiteColor = 'white';
var defaultColor = '#004d7f';


/***/ }),

/***/ 1666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(320);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(339);
/* harmony import */ var _pages_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1667);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({}, dispatch);
};

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state.articles);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_pages_test__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ 1667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(309);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(421);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_anything_sortable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1668);
/* harmony import */ var react_anything_sortable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_anything_sortable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1652);
/* harmony import */ var _SortableItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1669);
/* harmony import */ var _BasicExample__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1674);
/* harmony import */ var _Example1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1694);
/* harmony import */ var _users_UserPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1698);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var TestPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TestPage, _React$Component);

  function TestPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TestPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TestPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "handleSort", function (data) {
      console.log(data);
    });

    return _this;
  }

  _createClass(TestPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          marginTop: 79,
          width: '100vw'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_users_UserPage__WEBPACK_IMPORTED_MODULE_7__["default"], null));
    }
  }]);

  return TestPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

TestPage.propTypes = {};
TestPage.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(_assets_jss__WEBPACK_IMPORTED_MODULE_3__["homeStyle"])(TestPage));

/***/ }),

/***/ 1669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(309);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var create_react_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1670);
/* harmony import */ var create_react_class__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(create_react_class__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_anything_sortable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1668);
/* harmony import */ var react_anything_sortable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_anything_sortable__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (create_react_class__WEBPACK_IMPORTED_MODULE_1___default()({
  displayName: "SortableItem",
  mixins: [react_anything_sortable__WEBPACK_IMPORTED_MODULE_2__["SortableItemMixin"]],
  getDefaultProps: function getDefaultProps() {
    return {
      className: 'demo-item'
    };
  },
  render: function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children;
    return this.renderWithSortable(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: className
    }, children));
  }
}));

/***/ }),

/***/ 1674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(309);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1675);
/* harmony import */ var react_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(703);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1197);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(605);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dnd_ax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1686);
/* harmony import */ var react_dnd_ax__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dnd_ax__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // import '../styles/common.css';
// import './basic-example.css';

var basicItems = Array.from(Array(100).keys()).map(function (num) {
  return {
    id: num,
    text: "Row ".concat(num)
  };
});

var BasicExample =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BasicExample, _React$Component);

  function BasicExample() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BasicExample);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BasicExample)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      items: basicItems,
      anchorEl: null
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      _this.setState({
        anchorEl: event.currentTarget
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.setState({
        anchorEl: null
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onReorderLinks", function (newItems) {
      _this.setState({
        items: _toConsumableArray(newItems)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTest", function () {
      console.log('test1');
    });

    return _this;
  }

  _createClass(BasicExample, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          items = _this$state.items,
          anchorEl = _this$state.anchorEl;
      var BasicItem = Object(react_dnd_ax__WEBPACK_IMPORTED_MODULE_5__["DragNDropItem"])(function (_ref) {
        var item = _ref.item,
            itemRef = _ref.itemRef,
            dragPointRef = _ref.dragPointRef;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          ref: itemRef // mandatory: put this attribute to the container element of the movable item

        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "text"
        }, item.text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          // mandatory if supporting FireFox. FireFox does not support dragstart event on buttons.
          ref: dragPointRef // mandatory: put this attribute to the drag handler
          ,
          draggable: true // mandatory HTML attribute for drag handler

        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_fa__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
          name: "arrows"
        })));
      });
      var BasicList = Object(react_dnd_ax__WEBPACK_IMPORTED_MODULE_5__["DragNDropContainer"])(function (props) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, props.items.map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BasicItem, _extends({
            item: item,
            index: index,
            key: item.id
          }, props));
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BasicList, {
        items: items,
        onReorderItem: this.onReorderLinks
      }));
    }
  }]);

  return BasicExample;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BasicExample);

/***/ }),

/***/ 1694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(309);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(576);
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Dustbin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1695);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1696);
/* harmony import */ var _ItemTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1697);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Container =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Container);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Container)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      dustbins: [{
        accepts: [_ItemTypes__WEBPACK_IMPORTED_MODULE_4__["default"].GLASS],
        lastDroppedItem: null
      }, {
        accepts: [_ItemTypes__WEBPACK_IMPORTED_MODULE_4__["default"].FOOD],
        lastDroppedItem: null
      }, {
        accepts: [_ItemTypes__WEBPACK_IMPORTED_MODULE_4__["default"].PAPER, _ItemTypes__WEBPACK_IMPORTED_MODULE_4__["default"].GLASS, react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_1__["NativeTypes"].URL],
        lastDroppedItem: null
      }, {
        accepts: [_ItemTypes__WEBPACK_IMPORTED_MODULE_4__["default"].PAPER, react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_1__["NativeTypes"].FILE],
        lastDroppedItem: null
      }],
      boxes: [{
        name: 'Bottle',
        type: _ItemTypes__WEBPACK_IMPORTED_MODULE_4__["default"].GLASS
      }, {
        name: 'Banana',
        type: _ItemTypes__WEBPACK_IMPORTED_MODULE_4__["default"].FOOD
      }, {
        name: 'Magazine',
        type: _ItemTypes__WEBPACK_IMPORTED_MODULE_4__["default"].PAPER
      }],
      droppedBoxNames: []
    });

    _defineProperty(_assertThisInitialized(_this), "isDropped", function (boxName) {
      var droppedBoxNames = _this.state.droppedBoxNames;
      return droppedBoxNames.indexOf(boxName) > -1;
    });

    _defineProperty(_assertThisInitialized(_this), "handleDrop", function (index, item) {
      var _this$state = _this.state,
          dustbins = _this$state.dustbins,
          droppedBoxNames = _this$state.droppedBoxNames;
      var name = item.name;

      if (name) {
        droppedBoxNames.push(name);
      }

      dustbins[index].lastDroppedItem = item;

      _this.setState({
        droppedBoxNames: droppedBoxNames,
        dustbins: dustbins
      });
    });

    return _this;
  }

  _createClass(Container, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          dustbins = _this$state2.dustbins,
          boxes = _this$state2.boxes;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          overflow: 'hidden',
          clear: 'both'
        }
      }, dustbins.map(function (_ref, index) {
        var accepts = _ref.accepts,
            lastDroppedItem = _ref.lastDroppedItem;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dustbin__WEBPACK_IMPORTED_MODULE_2__["default"], {
          accepts: accepts,
          lastDroppedItem: lastDroppedItem,
          onDrop: function onDrop(item) {
            return _this2.handleDrop(index, item);
          },
          key: index
        });
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          overflow: 'hidden',
          clear: 'both'
        }
      }, boxes.map(function (_ref2, index) {
        var name = _ref2.name,
            type = _ref2.type;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
          name: name,
          type: type,
          isDropped: _this2.isDropped(name),
          key: index
        });
      })));
    }
  }]);

  return Container;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ 1695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dustbin", function() { return Dustbin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(309);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(508);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_1__);


var style = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  "float": 'left'
};
var Dustbin = function Dustbin(_ref) {
  var accepts = _ref.accepts,
      isOver = _ref.isOver,
      canDrop = _ref.canDrop,
      connectDropTarget = _ref.connectDropTarget,
      lastDroppedItem = _ref.lastDroppedItem;
  var isActive = isOver && canDrop;
  var backgroundColor = '#222';

  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }

  return connectDropTarget(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dragalbe: "true",
    style: Object.assign({}, style, {
      backgroundColor: backgroundColor
    })
  }, isActive ? 'Release to drop' : "This dustbin accepts: ".concat(accepts.join(', ')), lastDroppedItem && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Last dropped: ", JSON.stringify(lastDroppedItem))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_dnd__WEBPACK_IMPORTED_MODULE_1__["DropTarget"])(function (props) {
  return props.accepts;
}, {
  drop: function drop(props, monitor) {
    props.onDrop(monitor.getItem());
  }
}, function (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
})(Dustbin));

/***/ }),

/***/ 1696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(309);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(508);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  "float": 'left' // width: '100%'

};
var Box =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Box, _React$Component);

  function Box() {
    _classCallCheck(this, Box);

    return _possibleConstructorReturn(this, _getPrototypeOf(Box).apply(this, arguments));
  }

  _createClass(Box, [{
    key: "render",
    // componentDidMount() {
    //     const { connectDragPreview, connectDropTarget } = this.props;
    //     connectDragPreview(connectDropTarget(<div>testd</div>));
    // }
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          isDropped = _this$props.isDropped,
          isDragging = _this$props.isDragging,
          connectDragSource = _this$props.connectDragSource,
          connectDragPreview = _this$props.connectDragPreview;
      var opacity = isDragging ? 0.4 : 1;
      return connectDragPreview(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: Object.assign({}, style, {
          opacity: opacity
        })
      }, connectDragSource(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          console.log('tset 1');
        },
        style: Object.assign({}, style, {
          opacity: opacity
        })
      }, isDropped ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("s", null, name) : name)), "Drag me by the handle"));
    }
  }]);

  return Box;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_dnd__WEBPACK_IMPORTED_MODULE_1__["DragSource"])(function (props) {
  return props.type;
}, {
  beginDrag: function beginDrag(props) {
    return {
      name: props.name
    };
  }
}, function (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
})(Box));

/***/ }),

/***/ 1697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  FOOD: 'food',
  GLASS: 'glass',
  PAPER: 'paper'
});

/***/ }),

/***/ 1698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(309);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(421);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(323);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(599);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1699);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(700);
/* harmony import */ var _UserTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1701);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var UserPage =
/*#__PURE__*/
function (_Component) {
  _inherits(UserPage, _Component);

  function UserPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UserPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UserPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isComfirmDialogShowing: false,
      user: null,
      page: 1,
      newStatus: '',
      rolesValue: [],
      isFormDialogShowing: false,
      isUserProfilesFormDialogShowing: false,
      isOpenFilterPanel: false,
      isDesktop: true,
      isShowPanelDesktop: false
    });

    _defineProperty(_assertThisInitialized(_this), "showUserFormDialog", function (user) {});

    _defineProperty(_assertThisInitialized(_this), "closeUserFormDialog", function () {});

    _defineProperty(_assertThisInitialized(_this), "showUserProfilesFormDialog", function (user) {});

    _defineProperty(_assertThisInitialized(_this), "closeUserProfilesFormDialog", function () {});

    _defineProperty(_assertThisInitialized(_this), "onClickView", function () {});

    _defineProperty(_assertThisInitialized(_this), "initPropsFilter", function (formValue) {});

    _defineProperty(_assertThisInitialized(_this), "onPageClick", function (data) {});

    _defineProperty(_assertThisInitialized(_this), "onFilterApplied", function (filterPayload) {});

    _defineProperty(_assertThisInitialized(_this), "onChangeSelectStatus", function (e, user) {});

    _defineProperty(_assertThisInitialized(_this), "onCloseDialogChangeStatus", function () {});

    _defineProperty(_assertThisInitialized(_this), "onConfirmChangeStatus", function () {});

    _defineProperty(_assertThisInitialized(_this), "onClickFilter", function () {});

    _defineProperty(_assertThisInitialized(_this), "onCloseFilterPanel", function () {});

    _defineProperty(_assertThisInitialized(_this), "toggleFilter", function () {});

    return _this;
  }

  _createClass(UserPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var page = this.state.page;
      var users = [{
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh 1',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh 2',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }, {
        username: 'Binh',
        displayName: 'Binh',
        createdAt: '44'
      }];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "page page-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "flex height-100"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.grid, classes.tableContainer)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.titleContainer
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inline-flex"
      }, "ff"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_components__WEBPACK_IMPORTED_MODULE_5__["ProgressButton"], {
        label: "Add new",
        onClick: function onClick() {
          return _this2.showUserFormDialog();
        },
        progress: false,
        className: classes.addBtn
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
        values: users,
        isLoading: false,
        page: page,
        onUserDetailClicked: this.showUserProfilesFormDialog,
        onUserDetailUpdated: this.showUserFormDialog,
        onUserStatusChanged: this.onChangeSelectStatus
      }))));
    }
  }]);

  return UserPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

UserPage.propTypes = {
  users: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  roles: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  isSubmitting: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  count: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
UserPage.defaultProps = {
  users: [],
  roles: null,
  isLoading: false,
  isSubmitting: false,
  count: 0
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(_styles__WEBPACK_IMPORTED_MODULE_4__["UserStyle"])(UserPage));

/***/ }),

/***/ 1699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1700);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserStyle", function() { return _user_style__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ 1700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var palette = _ref.palette,
      color = _ref.color;
  return {
    addBtn: {
      display: 'inline-flex',
      backgroundColor: color.white,
      '&:hover': {
        backgroundColor: color.white
      },
      marginTop: 0,
      marginBottom: 0,
      color: "".concat(palette.primary.main, " !important"),
      fontWeight: 'bold',
      "float": 'right'
    },
    grid: {
      marginBottom: 0
    },
    filterBtn: {
      background: palette.primary.main,
      '&:hover': {
        backgroundColor: palette.primary.main
      },
      marginLeft: 8,
      marginRight: 5,
      boxShadow: 'none',
      minHeight: 42,
      paddingTop: 9
    },
    filterText: {
      color: color.white,
      fontSize: 14,
      textAlign: 'center',
      fontWeight: 700,
      display: 'inline-flex'
    },
    iconFilter: {
      color: color.white,
      marginLeft: 5,
      fontSize: 20
    },
    hide: {
      display: 'none'
    },
    right: {
      textAlign: 'right'
    },
    titleContainer: {
      background: palette.primary.main,
      marginBottom: 0,
      padding: 8,
      borderRadius: '8px 8px 0 0px'
    },
    center: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      display: 'flex'
    },
    filterBg: {
      background: palette.primary.main,
      borderRadius: 16,
      minWidth: 240
    },
    filterTitle: {
      textAlign: 'center',
      marginBottom: 16,
      background: '#004d7f',
      borderRadius: '16px 16px 0 0',
      padding: '8px 0'
    },
    tableContainer: {
      overflow: 'auto',
      flexGrow: 1,
      flexDirection: 'column',
      maxHeight: '100%',
      display: 'flex'
    },
    filterContainer: {
      height: 'calc(100vh - 120px)',
      display: 'flex',
      overflow: 'auto',
      flexGrow: 1,
      maxHeight: '100%',
      flexDirection: 'column'
    },
    isCollapsed: {
      minWidth: 120,
      width: 120
    },
    filterButton: {
      outline: 'none',
      padding: '8px 32px',
      fontSize: 14,
      marginLeft: 8,
      minHeight: 42,
      "float": 'right',
      display: 'inline-flex',
      color: color.white,
      border: "1px solid ".concat(color.white)
    }
  };
});

/***/ }),

/***/ 1701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(421);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1702);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1704);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(323);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(309);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1706);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(700);
/* harmony import */ var _UserTableBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1723);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var styles = function styles() {
  return {
    avatar: {
      width: '100%'
    },
    selectStatus: {
      minWidth: 132
    },
    fixedHeader: {
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  };
};

var columns = [{
  id: 'createdAt',
  numeric: false,
  hasSort: true,
  label: 'Created at',
  size: 'ex-medium-size'
}, {
  id: 'username',
  numeric: true,
  hasSort: true,
  label: 'Username',
  size: 'ex-large-size'
}, {
  id: 'displayName',
  numeric: true,
  hasSort: true,
  label: 'Display name',
  size: 'medium-size'
}, {
  id: 'avatarUrl',
  numeric: true,
  hasSort: true,
  label: 'Avatar',
  size: 'medium-size'
}, {
  id: 'role',
  hasSort: false,
  label: 'Role',
  size: 'medium-size'
}, {
  id: 'status',
  numeric: true,
  hasSort: true,
  label: 'Status',
  size: 'medium-size'
}, {
  id: 'action',
  numeric: true,
  hasSort: false,
  label: 'Action',
  size: 'medium-size'
}];

var UserTable =
/*#__PURE__*/
function (_Component) {
  _inherits(UserTable, _Component);

  function UserTable() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UserTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UserTable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      order: 'desc',
      orderBy: 'createdAt'
    });

    _defineProperty(_assertThisInitialized(_this), "onRequestSort", function (_, newOrderBy) {
      var _this$state = _this.state,
          orderBy = _this$state.orderBy,
          order = _this$state.order;
      var newOrder = orderBy === newOrderBy && order === 'desc' ? 'asc' : 'desc';

      _this.setState({
        order: newOrder,
        orderBy: newOrderBy
      });
    });

    return _this;
  }

  _createClass(UserTable, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          order = _this$state2.order,
          orderBy = _this$state2.orderBy;
      var _this$props = this.props,
          onUserStatusChanged = _this$props.onUserStatusChanged,
          onUserDetailClicked = _this$props.onUserDetailClicked,
          onUserDetailUpdated = _this$props.onUserDetailUpdated,
          values = _this$props.values,
          classes = _this$props.classes;
      console.log('values', values);
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "table-list"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_5__["Scrollbars"], {
        autoHide: true,
        className: "flex-1"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_common_components__WEBPACK_IMPORTED_MODULE_6__["MaterialTable"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_2___default.a, {
        className: classes.fixedHeader
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_common_components__WEBPACK_IMPORTED_MODULE_6__["HeaderTableRow"], {
        columns: columns,
        order: order,
        orderBy: orderBy,
        onRequestSort: this.onRequestSort
      })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_UserTableBody__WEBPACK_IMPORTED_MODULE_7__["default"], {
        classes: classes,
        order: order,
        orderBy: orderBy,
        values: values,
        onUserStatusChanged: onUserStatusChanged,
        onUserDetailClicked: onUserDetailClicked,
        onUserDetailUpdated: onUserDetailUpdated
      })))));
    }
  }]);

  return UserTable;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

UserTable.propTypes = {
  values: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  onUserStatusChanged: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onUserDetailClicked: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onUserDetailUpdated: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
UserTable.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["withStyles"])(styles)(UserTable));

/***/ }),

/***/ 1723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(323);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(309);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(700);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(771);





function UserTableBody(props) {
  var values = props.values,
      order = props.order,
      orderBy = props.orderBy;
  console.log('fd', values);
  return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["stableSort"])(values, Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getSorting"])(order, orderBy)).map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_components__WEBPACK_IMPORTED_MODULE_2__["MaterialTableRow"], {
      key: index,
      odd: index % 2 !== 0
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_components__WEBPACK_IMPORTED_MODULE_2__["MaterialTableBody"], {
      data: item.createdAt,
      size: "ex-medium-size"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_components__WEBPACK_IMPORTED_MODULE_2__["MaterialTableBody"], {
      data: item.username,
      align: "left",
      size: "ex-large-size"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_components__WEBPACK_IMPORTED_MODULE_2__["MaterialTableBody"], {
      data: item.displayName,
      align: "left",
      size: "medium-size"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_components__WEBPACK_IMPORTED_MODULE_2__["MaterialTableBody"], {
      data: "avatar",
      size: "medium-size"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_components__WEBPACK_IMPORTED_MODULE_2__["MaterialTableBody"], {
      data: "Test Role",
      align: "left",
      size: "medium-size"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_components__WEBPACK_IMPORTED_MODULE_2__["MaterialTableBody"], {
      data: "Test",
      size: "medium-size"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_components__WEBPACK_IMPORTED_MODULE_2__["MaterialTableBody"], {
      data: "Crud",
      size: "medium-size"
    }));
  });
}

UserTableBody.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  order: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  orderBy: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  values: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array
};
UserTableBody.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (UserTableBody);

/***/ })

}]);