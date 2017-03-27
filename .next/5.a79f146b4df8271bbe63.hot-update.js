webpackHotUpdate(5,{

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/ovimacbook/apps/quotes/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/ovimacbook/apps/quotes/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(82)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9mMjM5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNO1FBQ0U7QUFBTixDQURhO1FBR1A7QUFBTjtRQUVNO0FBQU47UUFFTTtBQUFOO1FBS0Y7QUFIRTs7a0NBR21CO2VBQ25CO0FBRCtCLDhDQUU3Qjs7YUFDUyxLQUVWO0FBRkc7QUFHSjtBQU4rQiw0Q0FPN0I7V0FBTyxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxTQUNsRDtBQUNEO0FBVCtCLHdDQVU3QjtTQUFLO2FBQ0ksS0FFVjtBQUZHO0FBR0o7QUFkK0IsNEJBZTdCOzJCQUNFOztrQkFBQTtvQkFDRTtBQURGO0FBQUEsdUJBQ0U7O2tCQUFBO29CQUFBO0FBQUE7QUFBQSxPQUNBOztrQkFBQTtvQkFBTTtBQUFOO0FBQUEsWUFBVyxNQUFNLE1BQ2pCLDRDQUFHLFNBQVMsS0FBSztrQkFBakI7b0JBQUE7QUFBQTtPQUdMO0FBdEI4QjtBQUFBLENBQWxCLEUiLCJmaWxlIjoiNS5hNzlmMTQ2YjRkZjgyNzFiYmU2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgcXVvdGVzID0gW3tcbiAgdGV4dDogXCJEb25lYyBpZCBlbGl0IG5vbiBtaSBwb3J0YSBncmF2aWRhIGF0IGVnZXQgbWV0dXMuIE51bGxhbSBpZCBkb2xvciBpZCBuaWJoIHVsdHJpY2llcyB2ZWhpY3VsYSB1dCBpZCBlbGl0LiBEdWlzIG1vbGxpcywgZXN0IG5vbiBjb21tb2RvIGx1Y3R1cywgbmlzaSBlcmF0IHBvcnR0aXRvciBsaWd1bGEsIGVnZXQgbGFjaW5pYSBvZGlvIHNlbSBuZWMgZWxpdC4gRnVzY2UgZGFwaWJ1cywgdGVsbHVzIGFjIGN1cnN1cyBjb21tb2RvLCB0b3J0b3IgbWF1cmlzIGNvbmRpbWVudHVtIG5pYmgsIHV0IGZlcm1lbnR1bSBtYXNzYSBqdXN0byBzaXQgYW1ldCByaXN1cy5cIlxufSwge1xuICB0ZXh0OiBcIkFlbmVhbiBldSBsZW8gcXVhbS4gUGVsbGVudGVzcXVlIG9ybmFyZSBzZW0gbGFjaW5pYSBxdWFtIHZlbmVuYXRpcyB2ZXN0aWJ1bHVtLiBNYWVjZW5hcyBmYXVjaWJ1cyBtb2xsaXMgaW50ZXJkdW0uIERvbmVjIHVsbGFtY29ycGVyIG51bGxhIG5vbiBtZXR1cyBhdWN0b3IgZnJpbmdpbGxhLiBEb25lYyB1bGxhbWNvcnBlciBudWxsYSBub24gbWV0dXMgYXVjdG9yIGZyaW5naWxsYS4gTW9yYmkgbGVvIHJpc3VzLCBwb3J0YSBhYyBjb25zZWN0ZXR1ciBhYywgdmVzdGlidWx1bSBhdCBlcm9zLiBEb25lYyBzZWQgb2RpbyBkdWkuXCJcbn0sIHtcbiAgdGV4dDogXCJBZW5lYW4gZXUgbGVvIHF1YW0uIFBlbGxlbnRlc3F1ZSBvcm5hcmUgc2VtIGxhY2luaWEgcXVhbSB2ZW5lbmF0aXMgdmVzdGlidWx1bS4gRXRpYW0gcG9ydGEgc2VtIG1hbGVzdWFkYSBtYWduYSBtb2xsaXMgZXVpc21vZC4gVmVzdGlidWx1bSBpZCBsaWd1bGEgcG9ydGEgZmVsaXMgZXVpc21vZCBzZW1wZXIuIE51bGxhbSBpZCBkb2xvciBpZCBuaWJoIHVsdHJpY2llcyB2ZWhpY3VsYSB1dCBpZCBlbGl0LlwiXG59LCB7XG4gIHRleHQ6IFwiQ3JhcyBtYXR0aXMgY29uc2VjdGV0dXIgcHVydXMgc2l0IGFtZXQgZmVybWVudHVtLiBBZW5lYW4gbGFjaW5pYSBiaWJlbmR1bSBudWxsYSBzZWQgY29uc2VjdGV0dXIuIE1hZWNlbmFzIGZhdWNpYnVzIG1vbGxpcyBpbnRlcmR1bS4gQ3JhcyBqdXN0byBvZGlvLCBkYXBpYnVzIGFjIGZhY2lsaXNpcyBpbiwgZWdlc3RhcyBlZ2V0IHF1YW0uXCJcbn0sIHtcbiAgdGV4dDogXCJFdGlhbSBwb3J0YSBzZW0gbWFsZXN1YWRhIG1hZ25hIG1vbGxpcyBldWlzbW9kLiBFdGlhbSBwb3J0YSBzZW0gbWFsZXN1YWRhIG1hZ25hIG1vbGxpcyBldWlzbW9kLiBOdWxsYW0gcXVpcyByaXN1cyBlZ2V0IHVybmEgbW9sbGlzIG9ybmFyZSB2ZWwgZXUgbGVvLiBDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXCJcbn1dO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVvdGU6IHRoaXMuZ2V0UmFuZG9tUXVvdGUoKVxuICAgIH1cbiAgfSxcbiAgZ2V0UmFuZG9tUXVvdGUoKSB7XG4gICAgcmV0dXJuIHF1b3Rlc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAocXVvdGVzLmxlbmd0aCAtIDEpKV07XG4gIH0sXG4gIGNsaWNrSGFuZGxlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHF1b3RlOiB0aGlzLmdldFJhbmRvbVF1b3RlKClcbiAgICB9KTtcbiAgfSxcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+SGVsbG8gd29ybGQ8L2gxPlxuICAgICAgICA8ZGl2Pnt0aGlzLnN0YXRlLnF1b3RlLnRleHR9PC9kaXY+XG4gICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuY2xpY2tIYW5kbGVyfT5SYW5kb20gcXVvdGU8L2E+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgXG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==