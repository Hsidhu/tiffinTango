"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_orderMealPlan_js"],{

/***/ "./node_modules/@ant-design/icons-svg/es/asn/CheckOutlined.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/es/asn/CheckOutlined.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// This icon file is generated automatically.
var CheckOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, "name": "check", "theme": "outlined" };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckOutlined);


/***/ }),

/***/ "./node_modules/@ant-design/icons/es/icons/CheckOutlined.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ant-design/icons/es/icons/CheckOutlined.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons_svg_es_asn_CheckOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons-svg/es/asn/CheckOutlined */ "./node_modules/@ant-design/icons-svg/es/asn/CheckOutlined.js");
/* harmony import */ var _components_AntdIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/es/components/AntdIcon.js");

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var CheckOutlined = function CheckOutlined(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_AntdIcon__WEBPACK_IMPORTED_MODULE_2__["default"], (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props), {}, {
    ref: ref,
    icon: _ant_design_icons_svg_es_asn_CheckOutlined__WEBPACK_IMPORTED_MODULE_3__["default"]
  }));
};
CheckOutlined.displayName = 'CheckOutlined';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(CheckOutlined));

/***/ }),

/***/ "./node_modules/antd/es/progress/Circle.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/es/progress/Circle.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ant_design_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/colors */ "./node_modules/@ant-design/colors/dist/index.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-progress */ "./node_modules/rc-progress/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/antd/es/progress/utils.js");






function getPercentage(_ref) {
  var percent = _ref.percent,
    success = _ref.success,
    successPercent = _ref.successPercent;
  var realSuccessPercent = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.validProgress)((0,_utils__WEBPACK_IMPORTED_MODULE_5__.getSuccessPercent)({
    success: success,
    successPercent: successPercent
  }));
  return [realSuccessPercent, (0,_utils__WEBPACK_IMPORTED_MODULE_5__.validProgress)((0,_utils__WEBPACK_IMPORTED_MODULE_5__.validProgress)(percent) - realSuccessPercent)];
}
function getStrokeColor(_ref2) {
  var _ref2$success = _ref2.success,
    success = _ref2$success === void 0 ? {} : _ref2$success,
    strokeColor = _ref2.strokeColor;
  var successColor = success.strokeColor;
  return [successColor || _ant_design_colors__WEBPACK_IMPORTED_MODULE_1__.presetPrimaryColors.green, strokeColor || null];
}
var Circle = function Circle(props) {
  var prefixCls = props.prefixCls,
    width = props.width,
    strokeWidth = props.strokeWidth,
    _props$trailColor = props.trailColor,
    trailColor = _props$trailColor === void 0 ? null : _props$trailColor,
    _props$strokeLinecap = props.strokeLinecap,
    strokeLinecap = _props$strokeLinecap === void 0 ? 'round' : _props$strokeLinecap,
    gapPosition = props.gapPosition,
    gapDegree = props.gapDegree,
    type = props.type,
    children = props.children,
    success = props.success;
  var circleSize = width || 120;
  var circleStyle = {
    width: circleSize,
    height: circleSize,
    fontSize: circleSize * 0.15 + 6
  };
  var circleWidth = strokeWidth || 6;
  var gapPos = gapPosition || type === 'dashboard' && 'bottom' || undefined;
  var getGapDegree = function getGapDegree() {
    // Support gapDeg = 0 when type = 'dashboard'
    if (gapDegree || gapDegree === 0) {
      return gapDegree;
    }
    if (type === 'dashboard') {
      return 75;
    }
    return undefined;
  };
  // using className to style stroke color
  var isGradient = Object.prototype.toString.call(props.strokeColor) === '[object Object]';
  var strokeColor = getStrokeColor({
    success: success,
    strokeColor: props.strokeColor
  });
  var wrapperClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()("".concat(prefixCls, "-inner"), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-circle-gradient"), isGradient));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: wrapperClassName,
    style: circleStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(rc_progress__WEBPACK_IMPORTED_MODULE_3__.Circle, {
    percent: getPercentage(props),
    strokeWidth: circleWidth,
    trailWidth: circleWidth,
    strokeColor: strokeColor,
    strokeLinecap: strokeLinecap,
    trailColor: trailColor,
    prefixCls: prefixCls,
    gapDegree: getGapDegree(),
    gapPosition: gapPos
  }), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Circle);

/***/ }),

/***/ "./node_modules/antd/es/progress/Line.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/es/progress/Line.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   handleGradient: () => (/* binding */ handleGradient),
/* harmony export */   sortGradient: () => (/* binding */ sortGradient)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _ant_design_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/colors */ "./node_modules/@ant-design/colors/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/antd/es/progress/utils.js");

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



/**
 * @example
 *   {
 *     "0%": "#afc163",
 *     "75%": "#009900",
 *     "50%": "green", // ====> '#afc163 0%, #66FF00 25%, #00CC00 50%, #009900 75%, #ffffff 100%'
 *     "25%": "#66FF00",
 *     "100%": "#ffffff"
 *   }
 */
var sortGradient = function sortGradient(gradients) {
  var tempArr = [];
  Object.keys(gradients).forEach(function (key) {
    var formattedKey = parseFloat(key.replace(/%/g, ''));
    if (!isNaN(formattedKey)) {
      tempArr.push({
        key: formattedKey,
        value: gradients[key]
      });
    }
  });
  tempArr = tempArr.sort(function (a, b) {
    return a.key - b.key;
  });
  return tempArr.map(function (_ref) {
    var key = _ref.key,
      value = _ref.value;
    return "".concat(value, " ").concat(key, "%");
  }).join(', ');
};
/**
 * Then this man came to realize the truth: Besides six pence, there is the moon. Besides bread and
 * butter, there is the bug. And... Besides women, there is the code.
 *
 * @example
 *   {
 *     "0%": "#afc163",
 *     "25%": "#66FF00",
 *     "50%": "#00CC00", // ====>  linear-gradient(to right, #afc163 0%, #66FF00 25%,
 *     "75%": "#009900", //        #00CC00 50%, #009900 75%, #ffffff 100%)
 *     "100%": "#ffffff"
 *   }
 */
var handleGradient = function handleGradient(strokeColor, directionConfig) {
  var _strokeColor$from = strokeColor.from,
    from = _strokeColor$from === void 0 ? _ant_design_colors__WEBPACK_IMPORTED_MODULE_1__.presetPrimaryColors.blue : _strokeColor$from,
    _strokeColor$to = strokeColor.to,
    to = _strokeColor$to === void 0 ? _ant_design_colors__WEBPACK_IMPORTED_MODULE_1__.presetPrimaryColors.blue : _strokeColor$to,
    _strokeColor$directio = strokeColor.direction,
    direction = _strokeColor$directio === void 0 ? directionConfig === 'rtl' ? 'to left' : 'to right' : _strokeColor$directio,
    rest = __rest(strokeColor, ["from", "to", "direction"]);
  if (Object.keys(rest).length !== 0) {
    var sortedGradients = sortGradient(rest);
    return {
      backgroundImage: "linear-gradient(".concat(direction, ", ").concat(sortedGradients, ")")
    };
  }
  return {
    backgroundImage: "linear-gradient(".concat(direction, ", ").concat(from, ", ").concat(to, ")")
  };
};
var Line = function Line(props) {
  var prefixCls = props.prefixCls,
    directionConfig = props.direction,
    percent = props.percent,
    strokeWidth = props.strokeWidth,
    size = props.size,
    strokeColor = props.strokeColor,
    _props$strokeLinecap = props.strokeLinecap,
    strokeLinecap = _props$strokeLinecap === void 0 ? 'round' : _props$strokeLinecap,
    children = props.children,
    _props$trailColor = props.trailColor,
    trailColor = _props$trailColor === void 0 ? null : _props$trailColor,
    success = props.success;
  var backgroundProps = strokeColor && typeof strokeColor !== 'string' ? handleGradient(strokeColor, directionConfig) : {
    background: strokeColor
  };
  var borderRadius = strokeLinecap === 'square' || strokeLinecap === 'butt' ? 0 : undefined;
  var trailStyle = {
    backgroundColor: trailColor || undefined,
    borderRadius: borderRadius
  };
  var percentStyle = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    width: "".concat((0,_utils__WEBPACK_IMPORTED_MODULE_3__.validProgress)(percent), "%"),
    height: strokeWidth || (size === 'small' ? 6 : 8),
    borderRadius: borderRadius
  }, backgroundProps);
  var successPercent = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getSuccessPercent)(props);
  var successPercentStyle = {
    width: "".concat((0,_utils__WEBPACK_IMPORTED_MODULE_3__.validProgress)(successPercent), "%"),
    height: strokeWidth || (size === 'small' ? 6 : 8),
    borderRadius: borderRadius,
    backgroundColor: success === null || success === void 0 ? void 0 : success.strokeColor
  };
  var successSegment = successPercent !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "".concat(prefixCls, "-success-bg"),
    style: successPercentStyle
  }) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "".concat(prefixCls, "-outer")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "".concat(prefixCls, "-inner"),
    style: trailStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "".concat(prefixCls, "-bg"),
    style: percentStyle
  }), successSegment)), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Line);

/***/ }),

/***/ "./node_modules/antd/es/progress/Steps.js":
/*!************************************************!*\
  !*** ./node_modules/antd/es/progress/Steps.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var Steps = function Steps(props) {
  var size = props.size,
    steps = props.steps,
    _props$percent = props.percent,
    percent = _props$percent === void 0 ? 0 : _props$percent,
    _props$strokeWidth = props.strokeWidth,
    strokeWidth = _props$strokeWidth === void 0 ? 8 : _props$strokeWidth,
    strokeColor = props.strokeColor,
    _props$trailColor = props.trailColor,
    trailColor = _props$trailColor === void 0 ? null : _props$trailColor,
    prefixCls = props.prefixCls,
    children = props.children;
  var current = Math.round(steps * (percent / 100));
  var stepWidth = size === 'small' ? 2 : 14;
  var styledSteps = new Array(steps);
  for (var i = 0; i < steps; i++) {
    var color = Array.isArray(strokeColor) ? strokeColor[i] : strokeColor;
    styledSteps[i] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      key: i,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-steps-item"), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-steps-item-active"), i <= current - 1)),
      style: {
        backgroundColor: i <= current - 1 ? color : trailColor,
        width: stepWidth,
        height: strokeWidth
      }
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "".concat(prefixCls, "-steps-outer")
  }, styledSteps, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Steps);

/***/ }),

/***/ "./node_modules/antd/es/progress/index.js":
/*!************************************************!*\
  !*** ./node_modules/antd/es/progress/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress */ "./node_modules/antd/es/progress/progress.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_progress__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/antd/es/progress/progress.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/es/progress/progress.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _ant_design_icons_es_icons_CheckCircleFilled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons/es/icons/CheckCircleFilled */ "./node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js");
/* harmony import */ var _ant_design_icons_es_icons_CheckOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons/es/icons/CheckOutlined */ "./node_modules/@ant-design/icons/es/icons/CheckOutlined.js");
/* harmony import */ var _ant_design_icons_es_icons_CloseCircleFilled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/es/icons/CloseCircleFilled */ "./node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js");
/* harmony import */ var _ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons/es/icons/CloseOutlined */ "./node_modules/@ant-design/icons/es/icons/CloseOutlined.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_util_es_omit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/omit */ "./node_modules/rc-util/es/omit.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _util_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/es/_util/type.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_util/warning */ "./node_modules/antd/es/_util/warning.js");
/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Circle */ "./node_modules/antd/es/progress/Circle.js");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Line */ "./node_modules/antd/es/progress/Line.js");
/* harmony import */ var _Steps__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Steps */ "./node_modules/antd/es/progress/Steps.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./node_modules/antd/es/progress/utils.js");


var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};














var ProgressTypes = (0,_util_type__WEBPACK_IMPORTED_MODULE_5__.tuple)('line', 'circle', 'dashboard');
var ProgressStatuses = (0,_util_type__WEBPACK_IMPORTED_MODULE_5__.tuple)('normal', 'exception', 'active', 'success');
var Progress = function Progress(props) {
  var _classNames;
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    steps = props.steps,
    strokeColor = props.strokeColor,
    _props$percent = props.percent,
    percent = _props$percent === void 0 ? 0 : _props$percent,
    _props$size = props.size,
    size = _props$size === void 0 ? 'default' : _props$size,
    _props$showInfo = props.showInfo,
    showInfo = _props$showInfo === void 0 ? true : _props$showInfo,
    _props$type = props.type,
    type = _props$type === void 0 ? 'line' : _props$type,
    restProps = __rest(props, ["prefixCls", "className", "steps", "strokeColor", "percent", "size", "showInfo", "type"]);
  function getPercentNumber() {
    var successPercent = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getSuccessPercent)(props);
    return parseInt(successPercent !== undefined ? successPercent.toString() : percent.toString(), 10);
  }
  function getProgressStatus() {
    var status = props.status;
    if (!ProgressStatuses.includes(status) && getPercentNumber() >= 100) {
      return 'success';
    }
    return status || 'normal';
  }
  function renderProcessInfo(prefixCls, progressStatus) {
    var format = props.format;
    var successPercent = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getSuccessPercent)(props);
    if (!showInfo) {
      return null;
    }
    var text;
    var textFormatter = format || function (percentNumber) {
      return "".concat(percentNumber, "%");
    };
    var isLineType = type === 'line';
    if (format || progressStatus !== 'exception' && progressStatus !== 'success') {
      text = textFormatter((0,_utils__WEBPACK_IMPORTED_MODULE_6__.validProgress)(percent), (0,_utils__WEBPACK_IMPORTED_MODULE_6__.validProgress)(successPercent));
    } else if (progressStatus === 'exception') {
      text = isLineType ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_ant_design_icons_es_icons_CloseCircleFilled__WEBPACK_IMPORTED_MODULE_7__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_8__["default"], null);
    } else if (progressStatus === 'success') {
      text = isLineType ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_ant_design_icons_es_icons_CheckCircleFilled__WEBPACK_IMPORTED_MODULE_9__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_ant_design_icons_es_icons_CheckOutlined__WEBPACK_IMPORTED_MODULE_10__["default"], null);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
      className: "".concat(prefixCls, "-text"),
      title: typeof text === 'string' ? text : undefined
    }, text);
  }
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_4__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_11__.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var prefixCls = getPrefixCls('progress', customizePrefixCls);
  var progressStatus = getProgressStatus();
  var progressInfo = renderProcessInfo(prefixCls, progressStatus);
   true ? (0,_util_warning__WEBPACK_IMPORTED_MODULE_12__["default"])(!('successPercent' in props), 'Progress', '`successPercent` is deprecated. Please use `success.percent` instead.') : 0;
  var strokeColorNotArray = Array.isArray(strokeColor) ? strokeColor[0] : strokeColor;
  var strokeColorNotGradient = typeof strokeColor === 'string' || Array.isArray(strokeColor) ? strokeColor : undefined;
  var progress;
  // Render progress shape
  if (type === 'line') {
    progress = steps ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Steps__WEBPACK_IMPORTED_MODULE_13__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      strokeColor: strokeColorNotGradient,
      prefixCls: prefixCls,
      steps: steps
    }), progressInfo) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Line__WEBPACK_IMPORTED_MODULE_14__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      strokeColor: strokeColorNotArray,
      prefixCls: prefixCls,
      direction: direction
    }), progressInfo);
  } else if (type === 'circle' || type === 'dashboard') {
    progress = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Circle__WEBPACK_IMPORTED_MODULE_15__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      strokeColor: strokeColorNotArray,
      prefixCls: prefixCls,
      progressStatus: progressStatus
    }), progressInfo);
  }
  var classString = classnames__WEBPACK_IMPORTED_MODULE_2___default()(prefixCls, (_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-").concat(type === 'dashboard' && 'circle' || steps && 'steps' || type), true), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-status-").concat(progressStatus), true), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-show-info"), showInfo), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-").concat(size), size), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, (0,rc_util_es_omit__WEBPACK_IMPORTED_MODULE_3__["default"])(restProps, ['status', 'format', 'trailColor', 'strokeWidth', 'width', 'gapDegree', 'gapPosition', 'strokeLinecap', 'success', 'successPercent']), {
    className: classString,
    role: "progressbar"
  }), progress);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Progress);

/***/ }),

/***/ "./node_modules/antd/es/progress/utils.js":
/*!************************************************!*\
  !*** ./node_modules/antd/es/progress/utils.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSuccessPercent: () => (/* binding */ getSuccessPercent),
/* harmony export */   validProgress: () => (/* binding */ validProgress)
/* harmony export */ });
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_util/warning */ "./node_modules/antd/es/_util/warning.js");

function validProgress(progress) {
  if (!progress || progress < 0) {
    return 0;
  }
  if (progress > 100) {
    return 100;
  }
  return progress;
}
function getSuccessPercent(_ref) {
  var success = _ref.success,
    successPercent = _ref.successPercent;
  var percent = successPercent;
  /** @deprecated Use `percent` instead */
  if (success && 'progress' in success) {
     true ? (0,_util_warning__WEBPACK_IMPORTED_MODULE_0__["default"])(false, 'Progress', '`success.progress` is deprecated. Please use `success.percent` instead.') : 0;
    percent = success.progress;
  }
  if (success && 'percent' in success) {
    percent = success.percent;
  }
  return percent;
}

/***/ }),

/***/ "./node_modules/antd/es/steps/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/es/steps/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ant_design_icons_es_icons_CheckOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons/es/icons/CheckOutlined */ "./node_modules/@ant-design/icons/es/icons/CheckOutlined.js");
/* harmony import */ var _ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons/es/icons/CloseOutlined */ "./node_modules/@ant-design/icons/es/icons/CloseOutlined.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_steps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-steps */ "./node_modules/rc-steps/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _grid_hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../grid/hooks/useBreakpoint */ "./node_modules/antd/es/grid/hooks/useBreakpoint.js");
/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../progress */ "./node_modules/antd/es/progress/index.js");
/* harmony import */ var _useLegacyItems__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useLegacyItems */ "./node_modules/antd/es/steps/useLegacyItems.js");


var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};









var Steps = function Steps(props) {
  var _classNames;
  var percent = props.percent,
    size = props.size,
    className = props.className,
    direction = props.direction,
    items = props.items,
    _props$responsive = props.responsive,
    responsive = _props$responsive === void 0 ? true : _props$responsive,
    _props$current = props.current,
    current = _props$current === void 0 ? 0 : _props$current,
    children = props.children,
    restProps = __rest(props, ["percent", "size", "className", "direction", "items", "responsive", "current", "children"]);
  var _useBreakpoint = (0,_grid_hooks_useBreakpoint__WEBPACK_IMPORTED_MODULE_5__["default"])(responsive),
    xs = _useBreakpoint.xs;
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_4__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_6__.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    rtlDirection = _React$useContext.direction;
  var getDirection = react__WEBPACK_IMPORTED_MODULE_4__.useCallback(function () {
    return responsive && xs ? 'vertical' : direction;
  }, [xs, direction]);
  var prefixCls = getPrefixCls('steps', props.prefixCls);
  var iconPrefix = getPrefixCls('', props.iconPrefix);
  var mergedItems = (0,_useLegacyItems__WEBPACK_IMPORTED_MODULE_7__["default"])(items, children);
  var stepsClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-rtl"), rtlDirection === 'rtl'), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-with-progress"), percent !== undefined), _classNames), className);
  var icons = {
    finish: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_ant_design_icons_es_icons_CheckOutlined__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: "".concat(prefixCls, "-finish-icon")
    }),
    error: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: "".concat(prefixCls, "-error-icon")
    })
  };
  var stepIconRender = function stepIconRender(_ref) {
    var node = _ref.node,
      status = _ref.status;
    if (status === 'process' && percent !== undefined) {
      // currently it's hard-coded, since we can't easily read the actually width of icon
      var progressWidth = size === 'small' ? 32 : 40;
      // iconWithProgress
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
        className: "".concat(prefixCls, "-progress-icon")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_progress__WEBPACK_IMPORTED_MODULE_10__["default"], {
        type: "circle",
        percent: percent,
        width: progressWidth,
        strokeWidth: 4,
        format: function format() {
          return null;
        }
      }), node);
    }
    return node;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(rc_steps__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    icons: icons
  }, restProps, {
    current: current,
    size: size,
    items: mergedItems,
    direction: getDirection(),
    stepIcon: stepIconRender,
    prefixCls: prefixCls,
    iconPrefix: iconPrefix,
    className: stepsClassName
  }));
};
Steps.Step = rc_steps__WEBPACK_IMPORTED_MODULE_3__["default"].Step;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Steps);

/***/ }),

/***/ "./node_modules/antd/es/steps/useLegacyItems.js":
/*!******************************************************!*\
  !*** ./node_modules/antd/es/steps/useLegacyItems.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useLegacyItems)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "./node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_util/warning */ "./node_modules/antd/es/_util/warning.js");




function filter(items) {
  return items.filter(function (item) {
    return item;
  });
}
function useLegacyItems(items, children) {
  if (items) {
    return items;
  }
   true ? (0,_util_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!children, 'Steps', 'Step is deprecated. Please use `items` directly.') : 0;
  var childrenItems = (0,rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_2__["default"])(children).map(function (node) {
    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.isValidElement(node)) {
      var props = node.props;
      var item = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props);
      return item;
    }
    return null;
  });
  return filter(childrenItems);
}

/***/ }),

/***/ "./resources/js/pages/orderMealPlan.js":
/*!*********************************************!*\
  !*** ./resources/js/pages/orderMealPlan.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/steps/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/message/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var steps = [{
  title: 'Select Your Plan',
  content: 'First-content'
}, {
  title: 'Second',
  content: 'Second-content'
}, {
  title: 'Last',
  content: 'Last-content'
}];
var OrderMealPlan = function OrderMealPlan() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    current = _useState2[0],
    setCurrent = _useState2[1];
  var next = function next() {
    setCurrent(current + 1);
  };
  var prev = function prev() {
    setCurrent(current - 1);
  };
  var items = steps.map(function (item) {
    return {
      key: item.title,
      title: item.title
    };
  });
  var contentStyle = {
    lineHeight: '260px',
    textAlign: 'center',
    color: '#000000',
    backgroundColor: '#d9d9d9',
    borderRadius: '8px',
    border: "1px dashed #494848",
    marginTop: 16
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__["default"], {
      current: current,
      items: items
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      style: contentStyle,
      children: steps[current].content
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      style: {
        marginTop: 24
      },
      children: [current < steps.length - 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "primary",
        onClick: function onClick() {
          return next();
        },
        children: "Next"
      }), current === steps.length - 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "primary",
        onClick: function onClick() {
          return antd__WEBPACK_IMPORTED_MODULE_4__["default"].success('Processing complete!');
        },
        children: "Done"
      }), current > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__["default"], {
        style: {
          margin: '0 8px'
        },
        onClick: function onClick() {
          return prev();
        },
        children: "Previous"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderMealPlan);

/***/ }),

/***/ "./node_modules/rc-progress/es/Circle.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-progress/es/Circle.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common */ "./node_modules/rc-progress/es/common.js");
/* harmony import */ var _hooks_useId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks/useId */ "./node_modules/rc-progress/es/hooks/useId.js");




var _excluded = ["id", "prefixCls", "steps", "strokeWidth", "trailWidth", "gapDegree", "gapPosition", "trailColor", "strokeLinecap", "style", "className", "strokeColor", "percent"];




function stripPercentToNumber(percent) {
  return +percent.replace('%', '');
}
function toArray(value) {
  var mergedValue = value !== null && value !== void 0 ? value : [];
  return Array.isArray(mergedValue) ? mergedValue : [mergedValue];
}
var VIEW_BOX_SIZE = 100;
var getCircleStyle = function getCircleStyle(perimeter, perimeterWithoutGap, offset, percent, rotateDeg, gapDegree, gapPosition, strokeColor, strokeLinecap, strokeWidth) {
  var stepSpace = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0;
  var offsetDeg = offset / 100 * 360 * ((360 - gapDegree) / 360);
  var positionDeg = gapDegree === 0 ? 0 : {
    bottom: 0,
    top: 180,
    left: 90,
    right: -90
  }[gapPosition];
  var strokeDashoffset = (100 - percent) / 100 * perimeterWithoutGap;
  // Fix percent accuracy when strokeLinecap is round
  // https://github.com/ant-design/ant-design/issues/35009
  if (strokeLinecap === 'round' && percent !== 100) {
    strokeDashoffset += strokeWidth / 2;
    // when percent is small enough (<= 1%), keep smallest value to avoid it's disappearance
    if (strokeDashoffset >= perimeterWithoutGap) {
      strokeDashoffset = perimeterWithoutGap - 0.01;
    }
  }
  return {
    stroke: typeof strokeColor === 'string' ? strokeColor : undefined,
    strokeDasharray: "".concat(perimeterWithoutGap, "px ").concat(perimeter),
    strokeDashoffset: strokeDashoffset + stepSpace,
    transform: "rotate(".concat(rotateDeg + offsetDeg + positionDeg, "deg)"),
    transformOrigin: '0 0',
    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s',
    fillOpacity: 0
  };
};
var Circle = function Circle(props) {
  var _defaultProps$props = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _common__WEBPACK_IMPORTED_MODULE_6__.defaultProps), props),
    id = _defaultProps$props.id,
    prefixCls = _defaultProps$props.prefixCls,
    steps = _defaultProps$props.steps,
    strokeWidth = _defaultProps$props.strokeWidth,
    trailWidth = _defaultProps$props.trailWidth,
    _defaultProps$props$g = _defaultProps$props.gapDegree,
    gapDegree = _defaultProps$props$g === void 0 ? 0 : _defaultProps$props$g,
    gapPosition = _defaultProps$props.gapPosition,
    trailColor = _defaultProps$props.trailColor,
    strokeLinecap = _defaultProps$props.strokeLinecap,
    style = _defaultProps$props.style,
    className = _defaultProps$props.className,
    strokeColor = _defaultProps$props.strokeColor,
    percent = _defaultProps$props.percent,
    restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_defaultProps$props, _excluded);
  var mergedId = (0,_hooks_useId__WEBPACK_IMPORTED_MODULE_7__["default"])(id);
  var gradientId = "".concat(mergedId, "-gradient");
  var radius = VIEW_BOX_SIZE / 2 - strokeWidth / 2;
  var perimeter = Math.PI * 2 * radius;
  var rotateDeg = gapDegree > 0 ? 90 + gapDegree / 2 : -90;
  var perimeterWithoutGap = perimeter * ((360 - gapDegree) / 360);
  var _ref = (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(steps) === 'object' ? steps : {
      count: steps,
      space: 2
    },
    stepCount = _ref.count,
    stepSpace = _ref.space;
  var circleStyle = getCircleStyle(perimeter, perimeterWithoutGap, 0, 100, rotateDeg, gapDegree, gapPosition, trailColor, strokeLinecap, strokeWidth);
  var percentList = toArray(percent);
  var strokeColorList = toArray(strokeColor);
  var gradient = strokeColorList.find(function (color) {
    return color && (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(color) === 'object';
  });
  var paths = (0,_common__WEBPACK_IMPORTED_MODULE_6__.useTransitionDuration)();
  var getStokeList = function getStokeList() {
    var stackPtg = 0;
    return percentList.map(function (ptg, index) {
      var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];
      var stroke = color && (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(color) === 'object' ? "url(#".concat(gradientId, ")") : undefined;
      var circleStyleForStack = getCircleStyle(perimeter, perimeterWithoutGap, stackPtg, ptg, rotateDeg, gapDegree, gapPosition, color, strokeLinecap, strokeWidth);
      stackPtg += ptg;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("circle", {
        key: index,
        className: "".concat(prefixCls, "-circle-path"),
        r: radius,
        cx: 0,
        cy: 0,
        stroke: stroke,
        strokeLinecap: strokeLinecap,
        strokeWidth: strokeWidth,
        opacity: ptg === 0 ? 0 : 1,
        style: circleStyleForStack,
        ref: function ref(elem) {
          // https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
          // React will call the ref callback with the DOM element when the component mounts,
          // and call it with `null` when it unmounts.
          // Refs are guaranteed to be up-to-date before componentDidMount or componentDidUpdate fires.
          paths[index] = elem;
        }
      });
    }).reverse();
  };
  var getStepStokeList = function getStepStokeList() {
    // only show the first percent when pass steps
    var current = Math.round(stepCount * (percentList[0] / 100));
    var stepPtg = 100 / stepCount;
    var stackPtg = 0;
    return new Array(stepCount).fill(null).map(function (_, index) {
      var color = index <= current - 1 ? strokeColorList[0] : trailColor;
      var stroke = color && (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(color) === 'object' ? "url(#".concat(gradientId, ")") : undefined;
      var circleStyleForStack = getCircleStyle(perimeter, perimeterWithoutGap, stackPtg, stepPtg, rotateDeg, gapDegree, gapPosition, color, 'butt', strokeWidth, stepSpace);
      stackPtg += (perimeterWithoutGap - circleStyleForStack.strokeDashoffset + stepSpace) * 100 / perimeterWithoutGap;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("circle", {
        key: index,
        className: "".concat(prefixCls, "-circle-path"),
        r: radius,
        cx: 0,
        cy: 0,
        stroke: stroke
        // strokeLinecap={strokeLinecap}
        ,
        strokeWidth: strokeWidth,
        opacity: 1,
        style: circleStyleForStack,
        ref: function ref(elem) {
          paths[index] = elem;
        }
      });
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("svg", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("".concat(prefixCls, "-circle"), className),
    viewBox: "".concat(-VIEW_BOX_SIZE / 2, " ").concat(-VIEW_BOX_SIZE / 2, " ").concat(VIEW_BOX_SIZE, " ").concat(VIEW_BOX_SIZE),
    style: style,
    id: id,
    role: "presentation"
  }, restProps), gradient && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("linearGradient", {
    id: gradientId,
    x1: "100%",
    y1: "0%",
    x2: "0%",
    y2: "0%"
  }, Object.keys(gradient).sort(function (a, b) {
    return stripPercentToNumber(a) - stripPercentToNumber(b);
  }).map(function (key, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("stop", {
      key: index,
      offset: key,
      stopColor: gradient[key]
    });
  }))), !stepCount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("circle", {
    className: "".concat(prefixCls, "-circle-trail"),
    r: radius,
    cx: 0,
    cy: 0,
    stroke: trailColor,
    strokeLinecap: strokeLinecap,
    strokeWidth: trailWidth || strokeWidth,
    style: circleStyle
  }), stepCount ? getStepStokeList() : getStokeList());
};
if (true) {
  Circle.displayName = 'Circle';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Circle);

/***/ }),

/***/ "./node_modules/rc-progress/es/Line.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-progress/es/Line.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common */ "./node_modules/rc-progress/es/common.js");



var _excluded = ["className", "percent", "prefixCls", "strokeColor", "strokeLinecap", "strokeWidth", "style", "trailColor", "trailWidth", "transition"];



var Line = function Line(props) {
  var _defaultProps$props = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _common__WEBPACK_IMPORTED_MODULE_5__.defaultProps), props),
    className = _defaultProps$props.className,
    percent = _defaultProps$props.percent,
    prefixCls = _defaultProps$props.prefixCls,
    strokeColor = _defaultProps$props.strokeColor,
    strokeLinecap = _defaultProps$props.strokeLinecap,
    strokeWidth = _defaultProps$props.strokeWidth,
    style = _defaultProps$props.style,
    trailColor = _defaultProps$props.trailColor,
    trailWidth = _defaultProps$props.trailWidth,
    transition = _defaultProps$props.transition,
    restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_defaultProps$props, _excluded);
  // eslint-disable-next-line no-param-reassign
  delete restProps.gapPosition;
  var percentList = Array.isArray(percent) ? percent : [percent];
  var strokeColorList = Array.isArray(strokeColor) ? strokeColor : [strokeColor];
  var paths = (0,_common__WEBPACK_IMPORTED_MODULE_5__.useTransitionDuration)();
  var center = strokeWidth / 2;
  var right = 100 - strokeWidth / 2;
  var pathString = "M ".concat(strokeLinecap === 'round' ? center : 0, ",").concat(center, "\n         L ").concat(strokeLinecap === 'round' ? right : 100, ",").concat(center);
  var viewBoxString = "0 0 100 ".concat(strokeWidth);
  var stackPtg = 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("svg", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("".concat(prefixCls, "-line"), className),
    viewBox: viewBoxString,
    preserveAspectRatio: "none",
    style: style
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("path", {
    className: "".concat(prefixCls, "-line-trail"),
    d: pathString,
    strokeLinecap: strokeLinecap,
    stroke: trailColor,
    strokeWidth: trailWidth || strokeWidth,
    fillOpacity: "0"
  }), percentList.map(function (ptg, index) {
    var dashPercent = 1;
    switch (strokeLinecap) {
      case 'round':
        dashPercent = 1 - strokeWidth / 100;
        break;
      case 'square':
        dashPercent = 1 - strokeWidth / 2 / 100;
        break;
      default:
        dashPercent = 1;
        break;
    }
    var pathStyle = {
      strokeDasharray: "".concat(ptg * dashPercent, "px, 100px"),
      strokeDashoffset: "-".concat(stackPtg, "px"),
      transition: transition || 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear'
    };
    var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];
    stackPtg += ptg;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("path", {
      key: index,
      className: "".concat(prefixCls, "-line-path"),
      d: pathString,
      strokeLinecap: strokeLinecap,
      stroke: color,
      strokeWidth: strokeWidth,
      fillOpacity: "0",
      ref: function ref(elem) {
        // https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
        // React will call the ref callback with the DOM element when the component mounts,
        // and call it with `null` when it unmounts.
        // Refs are guaranteed to be up-to-date before componentDidMount or componentDidUpdate fires.
        paths[index] = elem;
      },
      style: pathStyle
    });
  }));
};
if (true) {
  Line.displayName = 'Line';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Line);

/***/ }),

/***/ "./node_modules/rc-progress/es/common.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-progress/es/common.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultProps: () => (/* binding */ defaultProps),
/* harmony export */   useTransitionDuration: () => (/* binding */ useTransitionDuration)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var defaultProps = {
  percent: 0,
  prefixCls: 'rc-progress',
  strokeColor: '#2db7f5',
  strokeLinecap: 'round',
  strokeWidth: 1,
  trailColor: '#D9D9D9',
  trailWidth: 1,
  gapPosition: 'bottom'
};
var useTransitionDuration = function useTransitionDuration() {
  var pathsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  var prevTimeStamp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var now = Date.now();
    var updated = false;
    pathsRef.current.forEach(function (path) {
      if (!path) {
        return;
      }
      updated = true;
      var pathStyle = path.style;
      pathStyle.transitionDuration = '.3s, .3s, .3s, .06s';
      if (prevTimeStamp.current && now - prevTimeStamp.current < 100) {
        pathStyle.transitionDuration = '0s, 0s';
      }
    });
    if (updated) {
      prevTimeStamp.current = Date.now();
    }
  });
  return pathsRef.current;
};

/***/ }),

/***/ "./node_modules/rc-progress/es/hooks/useId.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-progress/es/hooks/useId.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isBrowserClient: () => (/* binding */ isBrowserClient)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/Dom/canUseDom */ "./node_modules/rc-util/es/Dom/canUseDom.js");



var uuid = 0;
/** Is client side and not jsdom */
var isBrowserClient =  true && (0,rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_2__["default"])();
/** Get unique id for accessibility usage */
function getUUID() {
  var retId;
  // Test never reach
  /* istanbul ignore if */
  if (isBrowserClient) {
    retId = uuid;
    uuid += 1;
  } else {
    retId = 'TEST_OR_SSR';
  }
  return retId;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (id) {
  // Inner id for accessibility usage. Only work in client side
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(),
    _React$useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
    innerId = _React$useState2[0],
    setInnerId = _React$useState2[1];
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
    setInnerId("rc_progress_".concat(getUUID()));
  }, []);
  return id || innerId;
});

/***/ }),

/***/ "./node_modules/rc-progress/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-progress/es/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Circle: () => (/* reexport safe */ _Circle__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Line: () => (/* reexport safe */ _Line__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Line */ "./node_modules/rc-progress/es/Line.js");
/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Circle */ "./node_modules/rc-progress/es/Circle.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  Line: _Line__WEBPACK_IMPORTED_MODULE_0__["default"],
  Circle: _Circle__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/rc-steps/es/Step.js":
/*!******************************************!*\
  !*** ./node_modules/rc-steps/es/Step.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Step)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);









var _excluded = ["className", "prefixCls", "style", "active", "status", "iconPrefix", "icon", "wrapperStyle", "stepNumber", "disabled", "description", "title", "subTitle", "progressDot", "stepIcon", "tailContent", "icons", "stepIndex", "onStepClick", "onClick"];

/* eslint react/prop-types: 0 */



function isString(str) {
  return typeof str === 'string';
}

var Step = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Step, _React$Component);

  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(Step);

  function Step() {
    var _this;

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Step);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onClick", function () {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          onStepClick = _this$props.onStepClick,
          stepIndex = _this$props.stepIndex;

      if (onClick) {
        onClick.apply(void 0, arguments);
      }

      onStepClick(stepIndex);
    });

    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Step, [{
    key: "renderIconNode",
    value: function renderIconNode() {
      var _classNames;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          progressDot = _this$props2.progressDot,
          stepIcon = _this$props2.stepIcon,
          stepNumber = _this$props2.stepNumber,
          status = _this$props2.status,
          title = _this$props2.title,
          description = _this$props2.description,
          icon = _this$props2.icon,
          iconPrefix = _this$props2.iconPrefix,
          icons = _this$props2.icons;
      var iconNode;
      var iconClassName = classnames__WEBPACK_IMPORTED_MODULE_10___default()("".concat(prefixCls, "-icon"), "".concat(iconPrefix, "icon"), (_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_classNames, "".concat(iconPrefix, "icon-").concat(icon), icon && isString(icon)), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_classNames, "".concat(iconPrefix, "icon-check"), !icon && status === 'finish' && (icons && !icons.finish || !icons)), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_classNames, "".concat(iconPrefix, "icon-cross"), !icon && status === 'error' && (icons && !icons.error || !icons)), _classNames));
      var iconDot = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("span", {
        className: "".concat(prefixCls, "-icon-dot")
      }); // `progressDot` enjoy the highest priority

      if (progressDot) {
        if (typeof progressDot === 'function') {
          iconNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("span", {
            className: "".concat(prefixCls, "-icon")
          }, progressDot(iconDot, {
            index: stepNumber - 1,
            status: status,
            title: title,
            description: description
          }));
        } else {
          iconNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("span", {
            className: "".concat(prefixCls, "-icon")
          }, iconDot);
        }
      } else if (icon && !isString(icon)) {
        iconNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("span", {
          className: "".concat(prefixCls, "-icon")
        }, icon);
      } else if (icons && icons.finish && status === 'finish') {
        iconNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("span", {
          className: "".concat(prefixCls, "-icon")
        }, icons.finish);
      } else if (icons && icons.error && status === 'error') {
        iconNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("span", {
          className: "".concat(prefixCls, "-icon")
        }, icons.error);
      } else if (icon || status === 'finish' || status === 'error') {
        iconNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("span", {
          className: iconClassName
        });
      } else {
        iconNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("span", {
          className: "".concat(prefixCls, "-icon")
        }, stepNumber);
      }

      if (stepIcon) {
        iconNode = stepIcon({
          index: stepNumber - 1,
          status: status,
          title: title,
          description: description,
          node: iconNode
        });
      }

      return iconNode;
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames2;

      var _this$props3 = this.props,
          className = _this$props3.className,
          prefixCls = _this$props3.prefixCls,
          style = _this$props3.style,
          active = _this$props3.active,
          _this$props3$status = _this$props3.status,
          status = _this$props3$status === void 0 ? 'wait' : _this$props3$status,
          iconPrefix = _this$props3.iconPrefix,
          icon = _this$props3.icon,
          wrapperStyle = _this$props3.wrapperStyle,
          stepNumber = _this$props3.stepNumber,
          disabled = _this$props3.disabled,
          description = _this$props3.description,
          title = _this$props3.title,
          subTitle = _this$props3.subTitle,
          progressDot = _this$props3.progressDot,
          stepIcon = _this$props3.stepIcon,
          tailContent = _this$props3.tailContent,
          icons = _this$props3.icons,
          stepIndex = _this$props3.stepIndex,
          onStepClick = _this$props3.onStepClick,
          onClick = _this$props3.onClick,
          restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props3, _excluded);

      var classString = classnames__WEBPACK_IMPORTED_MODULE_10___default()("".concat(prefixCls, "-item"), "".concat(prefixCls, "-item-").concat(status), className, (_classNames2 = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_classNames2, "".concat(prefixCls, "-item-custom"), icon), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_classNames2, "".concat(prefixCls, "-item-active"), active), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_classNames2, "".concat(prefixCls, "-item-disabled"), disabled === true), _classNames2));

      var stepItemStyle = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, style);

      var accessibilityProps = {};

      if (onStepClick && !disabled) {
        accessibilityProps.role = 'button';
        accessibilityProps.tabIndex = 0;
        accessibilityProps.onClick = this.onClick;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restProps, {
        className: classString,
        style: stepItemStyle
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        onClick: onClick
      }, accessibilityProps, {
        className: "".concat(prefixCls, "-item-container")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        className: "".concat(prefixCls, "-item-tail")
      }, tailContent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        className: "".concat(prefixCls, "-item-icon")
      }, this.renderIconNode()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        className: "".concat(prefixCls, "-item-content")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        className: "".concat(prefixCls, "-item-title")
      }, title, subTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        title: typeof subTitle === 'string' ? subTitle : undefined,
        className: "".concat(prefixCls, "-item-subtitle")
      }, subTitle)), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        className: "".concat(prefixCls, "-item-description")
      }, description))));
    }
  }]);

  return Step;
}(react__WEBPACK_IMPORTED_MODULE_9__.Component);



/***/ }),

/***/ "./node_modules/rc-steps/es/Steps.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-steps/es/Steps.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Steps)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Step__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Step */ "./node_modules/rc-steps/es/Step.js");









var _excluded = ["prefixCls", "style", "className", "children", "direction", "type", "labelPlacement", "iconPrefix", "status", "size", "current", "progressDot", "stepIcon", "initial", "icons", "onChange", "items"];

/* eslint react/no-did-mount-set-state: 0, react/prop-types: 0 */




var Steps = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Steps, _React$Component);

  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(Steps);

  function Steps() {
    var _this;

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Steps);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onStepClick", function (next) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          current = _this$props.current;

      if (onChange && current !== next) {
        onChange(next);
      }
    });

    return _this;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Steps, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          _this$props2$style = _this$props2.style,
          style = _this$props2$style === void 0 ? {} : _this$props2$style,
          className = _this$props2.className,
          children = _this$props2.children,
          direction = _this$props2.direction,
          type = _this$props2.type,
          labelPlacement = _this$props2.labelPlacement,
          iconPrefix = _this$props2.iconPrefix,
          status = _this$props2.status,
          size = _this$props2.size,
          current = _this$props2.current,
          progressDot = _this$props2.progressDot,
          stepIcon = _this$props2.stepIcon,
          initial = _this$props2.initial,
          icons = _this$props2.icons,
          onChange = _this$props2.onChange,
          _this$props2$items = _this$props2.items,
          items = _this$props2$items === void 0 ? [] : _this$props2$items,
          restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props2, _excluded);

      var isNav = type === 'navigation';
      var adjustedLabelPlacement = progressDot ? 'vertical' : labelPlacement;
      var classString = classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls, "".concat(prefixCls, "-").concat(direction), className, (_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_classNames, "".concat(prefixCls, "-").concat(size), size), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_classNames, "".concat(prefixCls, "-label-").concat(adjustedLabelPlacement), direction === 'horizontal'), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_classNames, "".concat(prefixCls, "-dot"), !!progressDot), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_classNames, "".concat(prefixCls, "-navigation"), isNav), _classNames));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: classString,
        style: style
      }, restProps), items.filter(function (item) {
        return item;
      }).map(function (item, index) {
        var mergedItem = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, item);

        var stepNumber = initial + index; // fix tail color

        if (status === 'error' && index === current - 1) {
          mergedItem.className = "".concat(prefixCls, "-next-error");
        }

        if (!mergedItem.status) {
          if (stepNumber === current) {
            mergedItem.status = status;
          } else if (stepNumber < current) {
            mergedItem.status = 'finish';
          } else {
            mergedItem.status = 'wait';
          }
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(_Step__WEBPACK_IMPORTED_MODULE_11__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, mergedItem, {
          active: stepNumber === current,
          stepNumber: stepNumber + 1,
          stepIndex: stepNumber,
          key: stepNumber,
          prefixCls: prefixCls,
          iconPrefix: iconPrefix,
          wrapperStyle: style,
          progressDot: progressDot,
          stepIcon: stepIcon,
          icons: icons,
          onStepClick: onChange && _this2.onStepClick
        }));
      }));
    }
  }]);

  return Steps;
}((react__WEBPACK_IMPORTED_MODULE_10___default().Component));

(0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Steps, "Step", _Step__WEBPACK_IMPORTED_MODULE_11__["default"]);

(0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Steps, "defaultProps", {
  type: 'default',
  prefixCls: 'rc-steps',
  iconPrefix: 'rc',
  direction: 'horizontal',
  labelPlacement: 'horizontal',
  initial: 0,
  current: 0,
  status: 'process',
  size: '',
  progressDot: false
});



/***/ }),

/***/ "./node_modules/rc-steps/es/index.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-steps/es/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Step: () => (/* reexport safe */ _Step__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Steps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Steps */ "./node_modules/rc-steps/es/Steps.js");
/* harmony import */ var _Step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Step */ "./node_modules/rc-steps/es/Step.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Steps__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

}]);