"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Terms_js"],{

/***/ "./resources/js/components/sitePageHeader.js":
/*!***************************************************!*\
  !*** ./resources/js/components/sitePageHeader.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/col/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/typography/index.js");
/* harmony import */ var _config_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/helpers */ "./resources/js/config/helpers.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var breadcrumbBG = {
  background: " url('".concat((0,_config_helpers__WEBPACK_IMPORTED_MODULE_1__.imageUrl)('images/site/slider_440.png'), "') no-repeat center center rgb(108 30 30 / 70%)"),
  backgroundSize: 'cover',
  backgroundBlendMode: 'multiply',
  display: 'flex',
  justifyContent: 'center',
  padding: "60px"
};
var SitePageHeader = function SitePageHeader(_ref) {
  var pageTitle = _ref.pageTitle;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
        span: 24,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          style: breadcrumbBG,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__["default"].Title, {
            level: 1,
            style: {
              margin: "14px 8px",
              color: "#ffffff"
            },
            children: pageTitle
          })
        })
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SitePageHeader);

/***/ }),

/***/ "./resources/js/pages/Terms.js":
/*!*************************************!*\
  !*** ./resources/js/pages/Terms.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/layout/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/row/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/col/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/divider/index.js");
/* harmony import */ var _components_sitePageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sitePageHeader */ "./resources/js/components/sitePageHeader.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var Content = antd__WEBPACK_IMPORTED_MODULE_3__["default"].Content;
var Terms = function Terms() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_sitePageHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      pageTitle: 'Terms & Conditions'
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: {
        padding: '0 50px'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
        style: {
          padding: '24px 0'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Content, {
          className: "site-layout-background",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
            align: "middle",
            justify: "space-between",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
              md: 12,
              sm: 24,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
                children: "Terms and Conditions"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                children: "Welcome to ABcatering. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
                children: "Payment Terms: We accept payment through our website and payment is non-refundable. Once the payment is made, it cannot be refunded. Delivery: We aim to deliver your tiffin on time, but we cannot be held responsible for any delays due to traffic, weather, or other circumstances beyond our control. Menu Changes: We reserve the right to make changes to the menu or the price of our tiffin service without prior notice. Allergies and Dietary Restrictions: If you have any allergies or dietary restrictions, please inform us when placing your order. We will do our best to accommodate your needs, but we cannot guarantee that our tiffin service will be free from all allergens. Intellectual Property: This website contains material that is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions. Disclaimer: We make no warranties or representations about the accuracy or completeness of the information provided on this website. Any reliance you place on such information is therefore strictly at your own risk. Limitation of Liability: We shall not be liable for any indirect or consequential loss or damage whatsoever arising from or in connection with the use of this website or our tiffin service. Governing Law: These terms and conditions are governed by and construed in accordance with the laws of Canada."
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__["default"], {
              style: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              },
              md: 12,
              sm: 24,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                alt: "Shopping Cart ",
                style: {
                  paddingBottom: 20
                },
                src: "https://img.icons8.com/color/240/000000/shopaholic.png"
              })
            })]
          })
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Terms);

/***/ })

}]);