'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * @usage:
                                                                                                                                                                                                                                                                   * Editor.addMark(editor,'color', '#f00')
                                                                                                                                                                                                                                                                   */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slateHyperscript = require('slate-hyperscript');

var _nextSlatePlugin = require('@jswork/next-slate-plugin');

var _nextSlatePlugin2 = _interopRequireDefault(_nextSlatePlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _nextSlatePlugin2.default.define({
  id: 'color',
  serialize: {
    input: function input(_ref, children) {
      var el = _ref.el;

      var nodeName = el.nodeName.toLowerCase();
      if (nodeName === 'span' && el.style.color) {
        return (0, _slateHyperscript.jsx)('text', { color: el.style.color }, children);
      }
    },
    output: function output(_ref2) {
      var el = _ref2.el,
          color = _ref2.color;

      el.style.color = color;
      return el;
    }
  },
  render: function render(_, _ref3) {
    var attributes = _ref3.attributes,
        children = _ref3.children,
        leaf = _ref3.leaf;
    var color = leaf.color;

    return _react2.default.createElement(
      'span',
      _extends({ style: { color: color } }, attributes),
      children
    );
  }
});