"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/ovimacbook/apps/quotes/pages/index.js?entry";


var quotes = [{
  text: "Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
}, {
  text: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui."
}, {
  text: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit."
}, {
  text: "Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
}, {
  text: "Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}];

exports.default = _react2.default.createClass({
  displayName: "pages",
  getInitialState: function getInitialState() {
    return {
      quote: this.getRandomQuote()
    };
  },
  getRandomQuote: function getRandomQuote() {
    return quotes[Math.round(Math.random() * (quotes.length - 1))];
  },
  clickHandler: function clickHandler() {
    this.setState({
      quote: this.getRandomQuote()
    });
  },
  render: function render() {
    return _react2.default.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      }
    }, _react2.default.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      }
    }, "Hello world"), _react2.default.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      }
    }, this.state.quote.text), _react2.default.createElement("a", { onClick: this.clickHandler, __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      }
    }, "Random quote"));
  }
});