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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Board_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.jsx */ \"./src/components/Board.jsx\");\n/* harmony import */ var _Messages_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Messages.jsx */ \"./src/components/Messages.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));\n    _this.state = {\n      matrix: _.range(6).map(function (_) {\n        return Array(7).fill(0);\n      }),\n      numMovesLeft: 42,\n      currentPlayer: 1,\n      endState: null\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"_getHorizontal\",\n    value: function _getHorizontal(matrix) {}\n  }, {\n    key: \"_getVertical\",\n    value: function _getVertical(matrix) {}\n  }, {\n    key: \"_getDiagonal\",\n    value: function _getDiagonal(matrix) {}\n  }, {\n    key: \"getWinner\",\n    value: function getWinner(matrix) {\n      return _getHorizontal(matrix) || _getVertical(matrix) || _getDiagonal();\n    }\n  }, {\n    key: \"handleBoardClick\",\n    value: function handleBoardClick(e) {\n      // find the bottomest, free cell of the column\n      var colnum = e.target.id[3];\n      var col = this.state.matrix.map(function (row) {\n        return row[colnum];\n      });\n      var targetRow = col.lastIndexOf(0);\n\n      if (targetRow !== -1) {\n        var newMatrix = JSON.parse(JSON.stringify(this.state.matrix)); // deep copy\n\n        newMatrix[targetRow][colnum] = this.state.currentPlayer;\n        var winner = this.getWinner(newMatrix);\n\n        if (winner) {\n          this.setState({\n            matrix: newMatrix,\n            endState: 'win'\n          });\n        } else {\n          if (this.state.numMovesLeft === 1) {\n            // last move used up\n            this.setState({\n              matrix: newMatrix,\n              numMovesLeft: 0,\n              endState: 'tie'\n            });\n          } else {\n            this.setState({\n              matrix: newMatrix,\n              numMovesLeft: this.state.numMovesLeft - 1,\n              currentPlayer: 3 - this.state.currentPlayer // toggle player\n\n            });\n          }\n        }\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, React.createElement(_Messages_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        endState: this.state.endState,\n        currentPlayer: this.state.currentPlayer\n      }), React.createElement(_Board_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        matrix: this.state.matrix,\n        handleBoardClick: this.handleBoardClick.bind(this)\n      }));\n    }\n  }]);\n\n  return App;\n}(React.Component); // const App = () => (\n//   <div>\n//     Hello\n//   </div>\n// );\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcHAuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzeD9jNThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb2FyZCBmcm9tICcuL0JvYXJkLmpzeCc7XG5pbXBvcnQgTWVzc2FnZXMgZnJvbSAnLi9NZXNzYWdlcy5qc3gnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtYXRyaXg6IF8ucmFuZ2UoNikubWFwKF8gPT4gQXJyYXkoNykuZmlsbCgwKSksXG4gICAgICBudW1Nb3Zlc0xlZnQ6IDQyLFxuICAgICAgY3VycmVudFBsYXllcjogMSxcbiAgICAgIGVuZFN0YXRlOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBfZ2V0SG9yaXpvbnRhbChtYXRyaXgpIHtcblxuICB9XG5cbiAgX2dldFZlcnRpY2FsKG1hdHJpeCkge1xuXG4gIH1cblxuICBfZ2V0RGlhZ29uYWwobWF0cml4KSB7XG5cbiAgfVxuXG4gIGdldFdpbm5lcihtYXRyaXgpIHtcbiAgICByZXR1cm4gX2dldEhvcml6b250YWwobWF0cml4KSB8fFxuICAgICAgICAgICBfZ2V0VmVydGljYWwobWF0cml4KSB8fFxuICAgICAgICAgICBfZ2V0RGlhZ29uYWwoKTtcbiAgfVxuXG4gIGhhbmRsZUJvYXJkQ2xpY2soZSkge1xuICAgIC8vIGZpbmQgdGhlIGJvdHRvbWVzdCwgZnJlZSBjZWxsIG9mIHRoZSBjb2x1bW5cbiAgICBjb25zdCBjb2xudW0gPSBlLnRhcmdldC5pZFszXTtcbiAgICBjb25zdCBjb2wgPSB0aGlzLnN0YXRlLm1hdHJpeC5tYXAocm93ID0+IHJvd1tjb2xudW1dKTtcbiAgICBjb25zdCB0YXJnZXRSb3cgPSBjb2wubGFzdEluZGV4T2YoMCk7XG5cbiAgICBpZiAodGFyZ2V0Um93ICE9PSAtMSkge1xuICAgICAgY29uc3QgbmV3TWF0cml4ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLm1hdHJpeCkpOyAgLy8gZGVlcCBjb3B5XG4gICAgICBuZXdNYXRyaXhbdGFyZ2V0Um93XVtjb2xudW1dID0gdGhpcy5zdGF0ZS5jdXJyZW50UGxheWVyO1xuXG4gICAgICBjb25zdCB3aW5uZXIgPSB0aGlzLmdldFdpbm5lcihuZXdNYXRyaXgpO1xuXG4gICAgICBpZiAod2lubmVyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1hdHJpeDogbmV3TWF0cml4LFxuICAgICAgICAgIGVuZFN0YXRlOiAnd2luJyxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5udW1Nb3Zlc0xlZnQgPT09IDEpIHsgLy8gbGFzdCBtb3ZlIHVzZWQgdXBcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1hdHJpeDogbmV3TWF0cml4LFxuICAgICAgICAgICAgbnVtTW92ZXNMZWZ0OiAwLFxuICAgICAgICAgICAgZW5kU3RhdGU6ICd0aWUnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbWF0cml4OiBuZXdNYXRyaXgsXG4gICAgICAgICAgICBudW1Nb3Zlc0xlZnQ6IHRoaXMuc3RhdGUubnVtTW92ZXNMZWZ0IC0gMSxcbiAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXI6IDMgLSB0aGlzLnN0YXRlLmN1cnJlbnRQbGF5ZXIsICAvLyB0b2dnbGUgcGxheWVyXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxNZXNzYWdlcyBlbmRTdGF0ZT17dGhpcy5zdGF0ZS5lbmRTdGF0ZX0gY3VycmVudFBsYXllcj17dGhpcy5zdGF0ZS5jdXJyZW50UGxheWVyfS8+XG4gICAgICAgIDxCb2FyZCBtYXRyaXg9e3RoaXMuc3RhdGUubWF0cml4fSBoYW5kbGVCb2FyZENsaWNrPXt0aGlzLmhhbmRsZUJvYXJkQ2xpY2suYmluZCh0aGlzKX0vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBjb25zdCBBcHAgPSAoKSA9PiAoXG4vLyAgIDxkaXY+XG4vLyAgICAgSGVsbG9cbi8vICAgPC9kaXY+XG4vLyApO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFGQTtBQVFBO0FBQ0E7OztBQUNBOzs7QUFJQTs7O0FBSUE7OztBQUlBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBOzs7O0FBdkVBO0FBMkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/App.jsx\n");

/***/ }),

/***/ "./src/components/Board.jsx":
/*!**********************************!*\
  !*** ./src/components/Board.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Board = function Board(_ref) {\n  var matrix = _ref.matrix,\n      handleBoardClick = _ref.handleBoardClick;\n  return React.createElement(\"div\", null, _.range(6).map(function (i) {\n    return React.createElement(\"div\", {\n      key: \"r\" + i\n    }, _.range(7).map(function (j) {\n      return React.createElement(\"div\", {\n        className: \"player\" + matrix[i][j],\n        id: \"r\" + i + \"c\" + j,\n        key: \"r\" + i + \"c\" + j,\n        onClick: function onClick(e) {\n          return handleBoardClick(e);\n        }\n      });\n    }));\n  }));\n}; // const Board = () => (\n//   <div>board</div>\n// )\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Cb2FyZC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Cb2FyZC5qc3g/MDZhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCb2FyZCA9ICh7IG1hdHJpeCwgaGFuZGxlQm9hcmRDbGljayB9KSA9PiAoXG4gIDxkaXY+XG4gICAge18ucmFuZ2UoNikubWFwKGkgPT4gXG4gICAgICA8ZGl2IGtleT17IFwiclwiICsgaSB9PlxuICAgICAgICB7Xy5yYW5nZSg3KS5tYXAoaiA9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgXCJwbGF5ZXJcIiArIG1hdHJpeFtpXVtqXSB9XG4gICAgICAgICAgICAgICBpZD17IFwiclwiICsgaSArIFwiY1wiICsgaiB9XG4gICAgICAgICAgICAgICBrZXk9eyBcInJcIiArIGkgKyBcImNcIiArIGogfVxuICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiBoYW5kbGVCb2FyZENsaWNrKGUpfT5cbiAgICAgICAgICA8L2Rpdj4pfVxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgPC9kaXY+XG4pO1xuXG4vLyBjb25zdCBCb2FyZCA9ICgpID0+IChcbi8vICAgPGRpdj5ib2FyZDwvZGl2PlxuLy8gKVxuXG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFEQTtBQUZBO0FBRkE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Board.jsx\n");

/***/ }),

/***/ "./src/components/Messages.jsx":
/*!*************************************!*\
  !*** ./src/components/Messages.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Messages = function Messages(_ref) {\n  var endState = _ref.endState,\n      currentPlayer = _ref.currentPlayer;\n  return React.createElement(\"div\", {\n    id: \"messages\"\n  }, endState === 'win' ? 'You won, Player ' + currentPlayer : endState === 'tie' ? 'It\\'s a tie!' : 'It\\'s your turn, Player ' + currentPlayer);\n}; // const Messages = () => (\n//   <div>messages</div>\n// );\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Messages);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlcy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlcy5qc3g/Njc2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNZXNzYWdlcyA9ICh7IGVuZFN0YXRlLCBjdXJyZW50UGxheWVyIH0pID0+IChcbiAgPGRpdiBpZD1cIm1lc3NhZ2VzXCI+e1xuICAgIGVuZFN0YXRlID09PSAnd2luJ1xuICAgICAgPyAnWW91IHdvbiwgUGxheWVyICcgKyBjdXJyZW50UGxheWVyXG4gICAgICA6IChlbmRTdGF0ZSA9PT0gJ3RpZSdcbiAgICAgICAgICA/ICdJdFxcJ3MgYSB0aWUhJ1xuICAgICAgICAgIDogJ0l0XFwncyB5b3VyIHR1cm4sIFBsYXllciAnICsgY3VycmVudFBsYXllcilcbiAgfTwvZGl2PlxuKTtcblxuXG4vLyBjb25zdCBNZXNzYWdlcyA9ICgpID0+IChcbi8vICAgPGRpdj5tZXNzYWdlczwvZGl2PlxuLy8gKTtcblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZXM7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Messages.jsx\n");

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