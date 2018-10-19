/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/App.jsx":
/*!********************************!*\
  !*** ./src/components/App.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Board_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.jsx */ \"./src/components/Board.jsx\");\n/* harmony import */ var _Messages_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Messages.jsx */ \"./src/components/Messages.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));\n    _this.state = {\n      matrix: _.range(6).map(function (_) {\n        return Array(7).fill(0);\n      }),\n      numMovesLeft: 42,\n      currentPlayer: 1,\n      endState: null\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"_getHorizontalWinner\",\n    value: function _getHorizontalWinner(matrix) {\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = matrix[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var row = _step.value;\n\n          for (var i = 0; i < row.length - 3; i++) {\n            if (row[i] === row[i + 1] && row[i] === row[i + 2] && row[i] === row[i + 3] && row[i] !== 0) {\n              return this.state.currentPlayer;\n            }\n          }\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return != null) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      return null;\n    }\n  }, {\n    key: \"_getVerticalWinner\",\n    value: function _getVerticalWinner(matrix) {\n      var _ref;\n\n      return this._getHorizontalWinner((_ref = _).zip.apply(_ref, _toConsumableArray(matrix)));\n    }\n  }, {\n    key: \"_getDiagonalWinner\",\n    value: function _getDiagonalWinner(matrix) {\n      var majorDiags = {};\n\n      _.range(-3, 3).forEach(function (i) {\n        return majorDiags[i] = [];\n      });\n\n      var minorDiags = {};\n\n      _.range(3, 9).forEach(function (i) {\n        return minorDiags[i] = [];\n      }); // get all diagonals; order of elements preserved\n\n\n      _.range(6).forEach(function (r) {\n        _.range(7).forEach(function (c) {\n          if (-3 <= r - c && r - c <= 2) {\n            majorDiags[r - c].push(matrix[r][c]);\n          }\n\n          if (3 <= r + c && r + c <= 8) {\n            minorDiags[r + c].push(matrix[r][c]);\n          }\n        });\n      });\n\n      var allDiags = Object.values(majorDiags).concat(Object.values(minorDiags));\n      return this._getHorizontalWinner(allDiags);\n    }\n  }, {\n    key: \"_getWinner\",\n    value: function _getWinner(matrix) {\n      return this._getHorizontalWinner(matrix) || this._getVerticalWinner(matrix) || this._getDiagonalWinner(matrix);\n    }\n  }, {\n    key: \"handleBoardClick\",\n    value: function handleBoardClick(e) {\n      if (!this.state.endState) {\n        // find the bottomest, free cell of the column\n        var colnum = e.target.id[3];\n        var col = this.state.matrix.map(function (row) {\n          return row[colnum];\n        });\n        var targetRow = col.lastIndexOf(0);\n\n        if (targetRow !== -1) {\n          var newMatrix = JSON.parse(JSON.stringify(this.state.matrix)); // deep copy\n\n          newMatrix[targetRow][colnum] = this.state.currentPlayer;\n\n          var winner = this._getWinner(newMatrix);\n\n          if (winner) {\n            this.setState({\n              matrix: newMatrix,\n              endState: 'win'\n            });\n          } else {\n            if (this.state.numMovesLeft === 1) {\n              // last move used up\n              this.setState({\n                matrix: newMatrix,\n                numMovesLeft: 0,\n                endState: 'tie'\n              });\n            } else {\n              this.setState({\n                matrix: newMatrix,\n                numMovesLeft: this.state.numMovesLeft - 1,\n                currentPlayer: 3 - this.state.currentPlayer // toggle player\n\n              });\n            }\n          }\n        }\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, React.createElement(_Messages_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        endState: this.state.endState,\n        currentPlayer: this.state.currentPlayer\n      }), React.createElement(_Board_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        matrix: this.state.matrix,\n        handleBoardClick: this.handleBoardClick.bind(this)\n      }));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcHAuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzeD9jNThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb2FyZCBmcm9tICcuL0JvYXJkLmpzeCc7XG5pbXBvcnQgTWVzc2FnZXMgZnJvbSAnLi9NZXNzYWdlcy5qc3gnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtYXRyaXg6IF8ucmFuZ2UoNikubWFwKF8gPT4gQXJyYXkoNykuZmlsbCgwKSksXG4gICAgICBudW1Nb3Zlc0xlZnQ6IDQyLFxuICAgICAgY3VycmVudFBsYXllcjogMSxcbiAgICAgIGVuZFN0YXRlOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBfZ2V0SG9yaXpvbnRhbFdpbm5lcihtYXRyaXgpIHtcbiAgICBmb3IgKGxldCByb3cgb2YgbWF0cml4KSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdy5sZW5ndGggLSAzOyBpKyspIHtcbiAgICAgICAgaWYgKHJvd1tpXSA9PT0gcm93W2kgKyAxXSAmJlxuICAgICAgICAgICAgcm93W2ldID09PSByb3dbaSArIDJdICYmXG4gICAgICAgICAgICByb3dbaV0gPT09IHJvd1tpICsgM10gJiZcbiAgICAgICAgICAgIHJvd1tpXSAhPT0gMCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmN1cnJlbnRQbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBfZ2V0VmVydGljYWxXaW5uZXIobWF0cml4KSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldEhvcml6b250YWxXaW5uZXIoXy56aXAoLi4ubWF0cml4KSk7XG4gIH1cblxuICBfZ2V0RGlhZ29uYWxXaW5uZXIobWF0cml4KSB7XG4gICAgY29uc3QgbWFqb3JEaWFncyA9IHt9O1xuICAgIF8ucmFuZ2UoLTMsIDMpLmZvckVhY2goaSA9PiBtYWpvckRpYWdzW2ldID0gW10pO1xuXG4gICAgY29uc3QgbWlub3JEaWFncyA9IHt9O1xuICAgIF8ucmFuZ2UoMywgOSkuZm9yRWFjaChpID0+IG1pbm9yRGlhZ3NbaV0gPSBbXSk7XG5cbiAgICAvLyBnZXQgYWxsIGRpYWdvbmFsczsgb3JkZXIgb2YgZWxlbWVudHMgcHJlc2VydmVkXG4gICAgXy5yYW5nZSg2KS5mb3JFYWNoKHIgPT4ge1xuICAgICAgXy5yYW5nZSg3KS5mb3JFYWNoKGMgPT4ge1xuICAgICAgICBpZiAoLTMgPD0gciAtIGMgJiYgciAtIGMgPD0gMikge1xuICAgICAgICAgIG1ham9yRGlhZ3NbciAtIGNdLnB1c2gobWF0cml4W3JdW2NdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoMyA8PSByICsgYyAmJiByICsgYyA8PSA4KSB7XG4gICAgICAgICAgbWlub3JEaWFnc1tyICsgY10ucHVzaChtYXRyaXhbcl1bY10pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFsbERpYWdzID0gT2JqZWN0LnZhbHVlcyhtYWpvckRpYWdzKS5jb25jYXQoT2JqZWN0LnZhbHVlcyhtaW5vckRpYWdzKSk7XG4gICAgcmV0dXJuIHRoaXMuX2dldEhvcml6b250YWxXaW5uZXIoYWxsRGlhZ3MpO1xuXG4gIH1cblxuICBfZ2V0V2lubmVyKG1hdHJpeCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRIb3Jpem9udGFsV2lubmVyKG1hdHJpeCkgfHxcbiAgICAgICAgICAgdGhpcy5fZ2V0VmVydGljYWxXaW5uZXIobWF0cml4KSB8fFxuICAgICAgICAgICB0aGlzLl9nZXREaWFnb25hbFdpbm5lcihtYXRyaXgpO1xuICB9XG5cbiAgaGFuZGxlQm9hcmRDbGljayhlKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmVuZFN0YXRlKSB7XG4gICAgICAvLyBmaW5kIHRoZSBib3R0b21lc3QsIGZyZWUgY2VsbCBvZiB0aGUgY29sdW1uXG4gICAgICBjb25zdCBjb2xudW0gPSBlLnRhcmdldC5pZFszXTtcbiAgICAgIGNvbnN0IGNvbCA9IHRoaXMuc3RhdGUubWF0cml4Lm1hcChyb3cgPT4gcm93W2NvbG51bV0pO1xuICAgICAgY29uc3QgdGFyZ2V0Um93ID0gY29sLmxhc3RJbmRleE9mKDApO1xuXG4gICAgICBpZiAodGFyZ2V0Um93ICE9PSAtMSkge1xuICAgICAgICBjb25zdCBuZXdNYXRyaXggPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUubWF0cml4KSk7ICAvLyBkZWVwIGNvcHlcbiAgICAgICAgbmV3TWF0cml4W3RhcmdldFJvd11bY29sbnVtXSA9IHRoaXMuc3RhdGUuY3VycmVudFBsYXllcjtcblxuICAgICAgICBjb25zdCB3aW5uZXIgPSB0aGlzLl9nZXRXaW5uZXIobmV3TWF0cml4KTtcblxuICAgICAgICBpZiAod2lubmVyKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtYXRyaXg6IG5ld01hdHJpeCxcbiAgICAgICAgICAgIGVuZFN0YXRlOiAnd2luJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5udW1Nb3Zlc0xlZnQgPT09IDEpIHsgLy8gbGFzdCBtb3ZlIHVzZWQgdXBcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBtYXRyaXg6IG5ld01hdHJpeCxcbiAgICAgICAgICAgICAgbnVtTW92ZXNMZWZ0OiAwLFxuICAgICAgICAgICAgICBlbmRTdGF0ZTogJ3RpZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIG1hdHJpeDogbmV3TWF0cml4LFxuICAgICAgICAgICAgICBudW1Nb3Zlc0xlZnQ6IHRoaXMuc3RhdGUubnVtTW92ZXNMZWZ0IC0gMSxcbiAgICAgICAgICAgICAgY3VycmVudFBsYXllcjogMyAtIHRoaXMuc3RhdGUuY3VycmVudFBsYXllciwgIC8vIHRvZ2dsZSBwbGF5ZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE1lc3NhZ2VzIGVuZFN0YXRlPXt0aGlzLnN0YXRlLmVuZFN0YXRlfSBjdXJyZW50UGxheWVyPXt0aGlzLnN0YXRlLmN1cnJlbnRQbGF5ZXJ9Lz5cbiAgICAgICAgPEJvYXJkIG1hdHJpeD17dGhpcy5zdGF0ZS5tYXRyaXh9IGhhbmRsZUJvYXJkQ2xpY2s9e3RoaXMuaGFuZGxlQm9hcmRDbGljay5iaW5kKHRoaXMpfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFRQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTs7OztBQXZHQTtBQUNBO0FBeUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/App.jsx\n");

/***/ }),

/***/ "./src/components/Board.jsx":
/*!**********************************!*\
  !*** ./src/components/Board.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Board = function Board(_ref) {\n  var matrix = _ref.matrix,\n      handleBoardClick = _ref.handleBoardClick;\n  return React.createElement(\"div\", null, _.range(6).map(function (i) {\n    return React.createElement(\"div\", {\n      key: \"r\" + i\n    }, _.range(7).map(function (j) {\n      return React.createElement(\"div\", {\n        className: \"player\" + matrix[i][j],\n        id: \"r\" + i + \"c\" + j,\n        key: \"r\" + i + \"c\" + j,\n        onClick: function onClick(e) {\n          return handleBoardClick(e);\n        }\n      });\n    }));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Cb2FyZC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Cb2FyZC5qc3g/MDZhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCb2FyZCA9ICh7IG1hdHJpeCwgaGFuZGxlQm9hcmRDbGljayB9KSA9PiAoXG4gIDxkaXY+XG4gICAge18ucmFuZ2UoNikubWFwKGkgPT4gXG4gICAgICA8ZGl2IGtleT17IFwiclwiICsgaSB9PlxuICAgICAgICB7Xy5yYW5nZSg3KS5tYXAoaiA9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgXCJwbGF5ZXJcIiArIG1hdHJpeFtpXVtqXSB9XG4gICAgICAgICAgICAgICBpZD17IFwiclwiICsgaSArIFwiY1wiICsgaiB9XG4gICAgICAgICAgICAgICBrZXk9eyBcInJcIiArIGkgKyBcImNcIiArIGogfVxuICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiBoYW5kbGVCb2FyZENsaWNrKGUpfT5cbiAgICAgICAgICA8L2Rpdj4pfVxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCb2FyZDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBREE7QUFGQTtBQUZBO0FBQ0E7QUFjQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Board.jsx\n");

/***/ }),

/***/ "./src/components/Messages.jsx":
/*!*************************************!*\
  !*** ./src/components/Messages.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Messages = function Messages(_ref) {\n  var endState = _ref.endState,\n      currentPlayer = _ref.currentPlayer;\n  return React.createElement(\"div\", {\n    id: \"messages\"\n  }, endState === 'win' ? 'You won, Player ' + currentPlayer : endState === 'tie' ? 'It\\'s a tie!' : 'It\\'s your turn, Player ' + currentPlayer);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Messages);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlcy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlcy5qc3g/Njc2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNZXNzYWdlcyA9ICh7IGVuZFN0YXRlLCBjdXJyZW50UGxheWVyIH0pID0+IChcbiAgPGRpdiBpZD1cIm1lc3NhZ2VzXCI+e1xuICAgIGVuZFN0YXRlID09PSAnd2luJ1xuICAgICAgPyAnWW91IHdvbiwgUGxheWVyICcgKyBjdXJyZW50UGxheWVyXG4gICAgICA6IChlbmRTdGF0ZSA9PT0gJ3RpZSdcbiAgICAgICAgICA/ICdJdFxcJ3MgYSB0aWUhJ1xuICAgICAgICAgIDogJ0l0XFwncyB5b3VyIHR1cm4sIFBsYXllciAnICsgY3VycmVudFBsYXllcilcbiAgfTwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZXM7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBQ0E7QUFTQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Messages.jsx\n");

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App.jsx */ \"./src/components/App.jsx\");\n\nReactDOM.render(React.createElement(_components_App_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzeD9lZDEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcC5qc3gnO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.jsx\n");

/***/ })

/******/ });