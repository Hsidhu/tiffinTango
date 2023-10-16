"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Admin_Order_StickerView_js"],{

/***/ "./resources/js/components/StickerSheet.js":
/*!*************************************************!*\
  !*** ./resources/js/components/StickerSheet.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var StickerSheet = function StickerSheet(_ref) {
  var pages = _ref.pages;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    children: pages.map(function (page, pageIndex) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "sticker-sheet print-section",
        children: page.map(function (label, labelIndex) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "sticker",
            children: label
          }, labelIndex);
        })
      }, pageIndex);
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StickerSheet);

/***/ }),

/***/ "./resources/js/pages/Admin/Order/StickerView.js":
/*!*******************************************************!*\
  !*** ./resources/js/pages/Admin/Order/StickerView.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_StickerSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/StickerSheet */ "./resources/js/components/StickerSheet.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var StickerView = function StickerView() {
  var printStickerSheet = function printStickerSheet() {
    window.print();
  };
  var stickerData = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7', 'Label 8', 'Label 9', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7', 'Label 16', 'Label 17', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7', 'Label 32'];
  var labelsPerPage = 32;
  var splitStickerDataIntoPages = function splitStickerDataIntoPages(stickerData, labelsPerPage) {
    var pages = [];
    for (var i = 0; i < stickerData.length; i += labelsPerPage) {
      pages.push(stickerData.slice(i, i + labelsPerPage));
    }
    return pages;
  };
  var pages = splitStickerDataIntoPages(stickerData, labelsPerPage);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_StickerSheet__WEBPACK_IMPORTED_MODULE_1__["default"], {
      pages: pages
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
      onClick: printStickerSheet,
      children: "Print"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StickerView);

/***/ })

}]);