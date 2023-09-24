"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Auth_LoginPage_js"],{

/***/ "./resources/js/pages/Auth/LoginPage.js":
/*!**********************************************!*\
  !*** ./resources/js/pages/Auth/LoginPage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_Authenticate_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/Authenticate/actions */ "./resources/js/redux/Authenticate/actions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }






var LoginPage = function LoginPage(_ref) {
  _objectDestructuringEmpty(_ref);
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (state) {
      return state.authenticateReducer;
    }),
    loader = _useSelector.loader;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
  var onFinish = function onFinish(values) {
    dispatch({
      type: _redux_Authenticate_actions__WEBPACK_IMPORTED_MODULE_1__["default"].LOGIN,
      payload: {
        'email': values.email,
        'password': values.password,
        'remember': values.remember
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
      children: "sfs"
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);

/***/ })

}]);