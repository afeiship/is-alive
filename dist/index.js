'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slateHyperscript = require('slate-hyperscript');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'color',
  importer: function importer(el, children) {
    var nodeName = el.nodeName.toLowerCase();
    if (nodeName === 'span' && el.style.color) {
      return (0, _slateHyperscript.jsx)('text', { value: el.style.color }, children);
    }
  },
  // to-html
  exporter: function exporter(node, children) {
    if (!children) {
      if (node.color) {
        var value = node.color.value;

        return '<span style="color: ' + value + ';">' + node.text + '</span>';
      }
    }
  },
  hooks: {
    leaf: function leaf(inContext, _ref) {
      var attributes = _ref.attributes,
          children = _ref.children,
          _leaf = _ref.leaf;

      if (_leaf.color) {
        var value = _leaf.color.value;

        return _react2.default.createElement(
          'span',
          _extends({}, attributes, { style: { color: value } }),
          children
        );
      }
    }
  }
};