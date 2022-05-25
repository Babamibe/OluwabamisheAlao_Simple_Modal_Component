"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Modal.css");

var _exit = _interopRequireDefault(require("../exit.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(_ref) {
  var isVisible = _ref.isVisible,
      setIsVisible = _ref.setIsVisible,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal--group ".concat(isVisible ? 'visible' : 'hidden')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, children, /*#__PURE__*/_react.default.createElement("img", {
    className: "exit",
    src: _exit.default,
    alt: "exit modal",
    onClick: function onClick() {
      return setIsVisible(false);
    }
  })));
};

var _default = Modal;
exports.default = _default;