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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Board_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board.jsx */ \"./src/components/Board.jsx\");\n/* harmony import */ var _Messages_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Messages.jsx */ \"./src/components/Messages.jsx\");\n\n\n\nvar App = function App() {\n  return React.createElement(\"div\", null, React.createElement(_Messages_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), React.createElement(_Board_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcHAuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzeD9jNThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb2FyZCBmcm9tICcuL0JvYXJkLmpzeCc7XG5pbXBvcnQgTWVzc2FnZXMgZnJvbSAnLi9NZXNzYWdlcy5qc3gnO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPE1lc3NhZ2VzIC8+XG4gICAgPEJvYXJkIC8+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQU1BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/App.jsx\n");

/***/ }),

/***/ "./src/components/Board.jsx":
/*!**********************************!*\
  !*** ./src/components/Board.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Board = function Board() {\n  return React.createElement(\"div\", null, _.range(6).map(function (i) {\n    return React.createElement(\"div\", {\n      key: \"r\" + i\n    }, _.range(7).map(function (j) {\n      return React.createElement(\"div\", {\n        className: \"cell\",\n        id: \"r\" + i + \"c\" + j,\n        key: \"r\" + i + \"c\" + j\n      });\n    }));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Cb2FyZC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Cb2FyZC5qc3g/MDZhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCb2FyZCA9ICgpID0+IChcbiAgPGRpdj5cbiAgICB7Xy5yYW5nZSg2KS5tYXAoaSA9PiBcbiAgICAgIDxkaXYga2V5PXtcInJcIiArIGl9PntfLnJhbmdlKDcpLm1hcChqID0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VsbFwiIGlkPXtcInJcIiArIGkgKyBcImNcIiArIGp9IGtleT17XCJyXCIgKyBpICsgXCJjXCIgKyBqfT48L2Rpdj4pfVxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCb2FyZDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBRkE7QUFDQTtBQVNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Board.jsx\n");

/***/ }),

/***/ "./src/components/Messages.jsx":
/*!*************************************!*\
  !*** ./src/components/Messages.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Messages = function Messages() {\n  return React.createElement(\"div\", {\n    id: \"messages\"\n  }, \"messages\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Messages);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlcy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlcy5qc3g/Njc2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNZXNzYWdlcyA9ICgpID0+IChcbiAgPGRpdiBpZD1cIm1lc3NhZ2VzXCI+bWVzc2FnZXM8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VzOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBQ0E7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Messages.jsx\n");

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