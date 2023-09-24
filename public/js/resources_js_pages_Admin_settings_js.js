"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Admin_settings_js"],{

/***/ "./node_modules/@ant-design/icons-svg/es/asn/PlusOutlined.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/es/asn/PlusOutlined.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// This icon file is generated automatically.
var PlusOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { "tag": "path", "attrs": { "d": "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z" } }] }, "name": "plus", "theme": "outlined" };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlusOutlined);


/***/ }),

/***/ "./node_modules/@ant-design/icons/es/icons/PlusOutlined.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ant-design/icons/es/icons/PlusOutlined.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons_svg_es_asn_PlusOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons-svg/es/asn/PlusOutlined */ "./node_modules/@ant-design/icons-svg/es/asn/PlusOutlined.js");
/* harmony import */ var _components_AntdIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/es/components/AntdIcon.js");

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var PlusOutlined = function PlusOutlined(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_AntdIcon__WEBPACK_IMPORTED_MODULE_2__["default"], (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props), {}, {
    ref: ref,
    icon: _ant_design_icons_svg_es_asn_PlusOutlined__WEBPACK_IMPORTED_MODULE_3__["default"]
  }));
};
PlusOutlined.displayName = 'PlusOutlined';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(PlusOutlined));

/***/ }),

/***/ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@googlemaps/js-api-loader/dist/index.esm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_ID: () => (/* binding */ DEFAULT_ID),
/* harmony export */   Loader: () => (/* binding */ Loader),
/* harmony export */   LoaderStatus: () => (/* binding */ LoaderStatus)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

// do not edit .js files directly - edit src/index.jst



var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at.
 *
 *      Http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ID = "__googleMapsScriptId";
/**
 * The status of the [[Loader]].
 */
var LoaderStatus;
(function (LoaderStatus) {
    LoaderStatus[LoaderStatus["INITIALIZED"] = 0] = "INITIALIZED";
    LoaderStatus[LoaderStatus["LOADING"] = 1] = "LOADING";
    LoaderStatus[LoaderStatus["SUCCESS"] = 2] = "SUCCESS";
    LoaderStatus[LoaderStatus["FAILURE"] = 3] = "FAILURE";
})(LoaderStatus || (LoaderStatus = {}));
/**
 * [[Loader]] makes it easier to add Google Maps JavaScript API to your application
 * dynamically using
 * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
 * It works by dynamically creating and appending a script node to the the
 * document head and wrapping the callback function so as to return a promise.
 *
 * ```
 * const loader = new Loader({
 *   apiKey: "",
 *   version: "weekly",
 *   libraries: ["places"]
 * });
 *
 * loader.load().then((google) => {
 *   const map = new google.maps.Map(...)
 * })
 * ```
 */
class Loader {
    /**
     * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
     * using this library, instead the defaults are set by the Google Maps
     * JavaScript API server.
     *
     * ```
     * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
     * ```
     */
    constructor({ apiKey, authReferrerPolicy, channel, client, id = DEFAULT_ID, language, libraries = [], mapIds, nonce, region, retries = 3, url = "https://maps.googleapis.com/maps/api/js", version, }) {
        this.callbacks = [];
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.apiKey = apiKey;
        this.authReferrerPolicy = authReferrerPolicy;
        this.channel = channel;
        this.client = client;
        this.id = id || DEFAULT_ID; // Do not allow empty string
        this.language = language;
        this.libraries = libraries;
        this.mapIds = mapIds;
        this.nonce = nonce;
        this.region = region;
        this.retries = retries;
        this.url = url;
        this.version = version;
        if (Loader.instance) {
            if (!fastDeepEqual(this.options, Loader.instance.options)) {
                throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Loader.instance.options)}`);
            }
            return Loader.instance;
        }
        Loader.instance = this;
    }
    get options() {
        return {
            version: this.version,
            apiKey: this.apiKey,
            channel: this.channel,
            client: this.client,
            id: this.id,
            libraries: this.libraries,
            language: this.language,
            region: this.region,
            mapIds: this.mapIds,
            nonce: this.nonce,
            url: this.url,
            authReferrerPolicy: this.authReferrerPolicy,
        };
    }
    get status() {
        if (this.errors.length) {
            return LoaderStatus.FAILURE;
        }
        if (this.done) {
            return LoaderStatus.SUCCESS;
        }
        if (this.loading) {
            return LoaderStatus.LOADING;
        }
        return LoaderStatus.INITIALIZED;
    }
    get failed() {
        return this.done && !this.loading && this.errors.length >= this.retries + 1;
    }
    /**
     * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
     *
     * @ignore
     * @deprecated
     */
    createUrl() {
        let url = this.url;
        url += `?callback=__googleMapsCallback`;
        if (this.apiKey) {
            url += `&key=${this.apiKey}`;
        }
        if (this.channel) {
            url += `&channel=${this.channel}`;
        }
        if (this.client) {
            url += `&client=${this.client}`;
        }
        if (this.libraries.length > 0) {
            url += `&libraries=${this.libraries.join(",")}`;
        }
        if (this.language) {
            url += `&language=${this.language}`;
        }
        if (this.region) {
            url += `&region=${this.region}`;
        }
        if (this.version) {
            url += `&v=${this.version}`;
        }
        if (this.mapIds) {
            url += `&map_ids=${this.mapIds.join(",")}`;
        }
        if (this.authReferrerPolicy) {
            url += `&auth_referrer_policy=${this.authReferrerPolicy}`;
        }
        return url;
    }
    deleteScript() {
        const script = document.getElementById(this.id);
        if (script) {
            script.remove();
        }
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     * @deprecated, use importLibrary() instead.
     */
    load() {
        return this.loadPromise();
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     *
     * @ignore
     * @deprecated, use importLibrary() instead.
     */
    loadPromise() {
        return new Promise((resolve, reject) => {
            this.loadCallback((err) => {
                if (!err) {
                    resolve(window.google);
                }
                else {
                    reject(err.error);
                }
            });
        });
    }
    importLibrary(name) {
        this.execute();
        return google.maps.importLibrary(name);
    }
    /**
     * Load the Google Maps JavaScript API script with a callback.
     * @deprecated, use importLibrary() instead.
     */
    loadCallback(fn) {
        this.callbacks.push(fn);
        this.execute();
    }
    /**
     * Set the script on document.
     */
    setScript() {
        var _a, _b;
        if (document.getElementById(this.id)) {
            // TODO wrap onerror callback for cases where the script was loaded elsewhere
            this.callback();
            return;
        }
        const params = {
            key: this.apiKey,
            channel: this.channel,
            client: this.client,
            libraries: this.libraries.length && this.libraries,
            v: this.version,
            mapIds: this.mapIds,
            language: this.language,
            region: this.region,
            authReferrerPolicy: this.authReferrerPolicy,
        };
        // keep the URL minimal:
        Object.keys(params).forEach(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (key) => !params[key] && delete params[key]);
        if (!((_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.maps) === null || _b === void 0 ? void 0 : _b.importLibrary)) {
            // tweaked copy of https://developers.google.com/maps/documentation/javascript/load-maps-js-api#dynamic-library-import
            // which also sets the base url, the id, and the nonce
            /* eslint-disable */
            ((g) => {
                // @ts-ignore
                let h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window;
                // @ts-ignore
                b = b[c] || (b[c] = {});
                // @ts-ignore
                const d = b.maps || (b.maps = {}), r = new Set(), e = new URLSearchParams(), u = () => 
                // @ts-ignore
                h || (h = new Promise((f, n) => __awaiter(this, void 0, void 0, function* () {
                    var _a;
                    yield (a = m.createElement("script"));
                    a.id = this.id;
                    e.set("libraries", [...r] + "");
                    // @ts-ignore
                    for (k in g)
                        e.set(k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()), g[k]);
                    e.set("callback", c + ".maps." + q);
                    a.src = this.url + `?` + e;
                    d[q] = f;
                    a.onerror = () => (h = n(Error(p + " could not load.")));
                    // @ts-ignore
                    a.nonce = this.nonce || ((_a = m.querySelector("script[nonce]")) === null || _a === void 0 ? void 0 : _a.nonce) || "";
                    m.head.append(a);
                })));
                // @ts-ignore
                d[l] ? console.warn(p + " only loads once. Ignoring:", g) : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
            })(params);
            /* eslint-enable */
        }
        // While most libraries populate the global namespace when loaded via bootstrap params,
        // this is not the case for "marker" when used with the inline bootstrap loader
        // (and maybe others in the future). So ensure there is an importLibrary for each:
        const libraryPromises = this.libraries.map((library) => this.importLibrary(library));
        // ensure at least one library, to kick off loading...
        if (!libraryPromises.length) {
            libraryPromises.push(this.importLibrary("core"));
        }
        Promise.all(libraryPromises).then(() => this.callback(), (error) => {
            const event = new ErrorEvent("error", { error }); // for backwards compat
            this.loadErrorCallback(event);
        });
    }
    /**
     * Reset the loader state.
     */
    reset() {
        this.deleteScript();
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.onerrorEvent = null;
    }
    resetIfRetryingFailed() {
        if (this.failed) {
            this.reset();
        }
    }
    loadErrorCallback(e) {
        this.errors.push(e);
        if (this.errors.length <= this.retries) {
            const delay = this.errors.length * Math.pow(2, this.errors.length);
            console.error(`Failed to load Google Maps script, retrying in ${delay} ms.`);
            setTimeout(() => {
                this.deleteScript();
                this.setScript();
            }, delay);
        }
        else {
            this.onerrorEvent = e;
            this.callback();
        }
    }
    callback() {
        this.done = true;
        this.loading = false;
        this.callbacks.forEach((cb) => {
            cb(this.onerrorEvent);
        });
        this.callbacks = [];
    }
    execute() {
        this.resetIfRetryingFailed();
        if (this.done) {
            this.callback();
        }
        else {
            // short circuit and warn if google.maps is already loaded
            if (window.google && window.google.maps && window.google.maps.version) {
                console.warn("Google Maps already loaded outside @googlemaps/js-api-loader." +
                    "This may result in undesirable behavior as options and script parameters may not match.");
                this.callback();
                return;
            }
            if (this.loading) ;
            else {
                this.loading = true;
                this.setScript();
            }
        }
    }
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@mapbox/point-geometry/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@mapbox/point-geometry/index.js ***!
  \******************************************************/
/***/ ((module) => {



module.exports = Point;

/**
 * A standalone point geometry with useful accessor, comparison, and
 * modification methods.
 *
 * @class Point
 * @param {Number} x the x-coordinate. this could be longitude or screen
 * pixels, or any other sort of unit.
 * @param {Number} y the y-coordinate. this could be latitude or screen
 * pixels, or any other sort of unit.
 * @example
 * var point = new Point(-77, 38);
 */
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype = {

    /**
     * Clone this point, returning a new point that can be modified
     * without affecting the old one.
     * @return {Point} the clone
     */
    clone: function() { return new Point(this.x, this.y); },

    /**
     * Add this point's x & y coordinates to another point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    add:     function(p) { return this.clone()._add(p); },

    /**
     * Subtract this point's x & y coordinates to from point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    sub:     function(p) { return this.clone()._sub(p); },

    /**
     * Multiply this point's x & y coordinates by point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    multByPoint:    function(p) { return this.clone()._multByPoint(p); },

    /**
     * Divide this point's x & y coordinates by point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    divByPoint:     function(p) { return this.clone()._divByPoint(p); },

    /**
     * Multiply this point's x & y coordinates by a factor,
     * yielding a new point.
     * @param {Point} k factor
     * @return {Point} output point
     */
    mult:    function(k) { return this.clone()._mult(k); },

    /**
     * Divide this point's x & y coordinates by a factor,
     * yielding a new point.
     * @param {Point} k factor
     * @return {Point} output point
     */
    div:     function(k) { return this.clone()._div(k); },

    /**
     * Rotate this point around the 0, 0 origin by an angle a,
     * given in radians
     * @param {Number} a angle to rotate around, in radians
     * @return {Point} output point
     */
    rotate:  function(a) { return this.clone()._rotate(a); },

    /**
     * Rotate this point around p point by an angle a,
     * given in radians
     * @param {Number} a angle to rotate around, in radians
     * @param {Point} p Point to rotate around
     * @return {Point} output point
     */
    rotateAround:  function(a,p) { return this.clone()._rotateAround(a,p); },

    /**
     * Multiply this point by a 4x1 transformation matrix
     * @param {Array<Number>} m transformation matrix
     * @return {Point} output point
     */
    matMult: function(m) { return this.clone()._matMult(m); },

    /**
     * Calculate this point but as a unit vector from 0, 0, meaning
     * that the distance from the resulting point to the 0, 0
     * coordinate will be equal to 1 and the angle from the resulting
     * point to the 0, 0 coordinate will be the same as before.
     * @return {Point} unit vector point
     */
    unit:    function() { return this.clone()._unit(); },

    /**
     * Compute a perpendicular point, where the new y coordinate
     * is the old x coordinate and the new x coordinate is the old y
     * coordinate multiplied by -1
     * @return {Point} perpendicular point
     */
    perp:    function() { return this.clone()._perp(); },

    /**
     * Return a version of this point with the x & y coordinates
     * rounded to integers.
     * @return {Point} rounded point
     */
    round:   function() { return this.clone()._round(); },

    /**
     * Return the magitude of this point: this is the Euclidean
     * distance from the 0, 0 coordinate to this point's x and y
     * coordinates.
     * @return {Number} magnitude
     */
    mag: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },

    /**
     * Judge whether this point is equal to another point, returning
     * true or false.
     * @param {Point} other the other point
     * @return {boolean} whether the points are equal
     */
    equals: function(other) {
        return this.x === other.x &&
               this.y === other.y;
    },

    /**
     * Calculate the distance from this point to another point
     * @param {Point} p the other point
     * @return {Number} distance
     */
    dist: function(p) {
        return Math.sqrt(this.distSqr(p));
    },

    /**
     * Calculate the distance from this point to another point,
     * without the square root step. Useful if you're comparing
     * relative distances.
     * @param {Point} p the other point
     * @return {Number} distance
     */
    distSqr: function(p) {
        var dx = p.x - this.x,
            dy = p.y - this.y;
        return dx * dx + dy * dy;
    },

    /**
     * Get the angle from the 0, 0 coordinate to this point, in radians
     * coordinates.
     * @return {Number} angle
     */
    angle: function() {
        return Math.atan2(this.y, this.x);
    },

    /**
     * Get the angle from this point to another point, in radians
     * @param {Point} b the other point
     * @return {Number} angle
     */
    angleTo: function(b) {
        return Math.atan2(this.y - b.y, this.x - b.x);
    },

    /**
     * Get the angle between this point and another point, in radians
     * @param {Point} b the other point
     * @return {Number} angle
     */
    angleWith: function(b) {
        return this.angleWithSep(b.x, b.y);
    },

    /*
     * Find the angle of the two vectors, solving the formula for
     * the cross product a x b = |a||b|sin(θ) for θ.
     * @param {Number} x the x-coordinate
     * @param {Number} y the y-coordinate
     * @return {Number} the angle in radians
     */
    angleWithSep: function(x, y) {
        return Math.atan2(
            this.x * y - this.y * x,
            this.x * x + this.y * y);
    },

    _matMult: function(m) {
        var x = m[0] * this.x + m[1] * this.y,
            y = m[2] * this.x + m[3] * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _add: function(p) {
        this.x += p.x;
        this.y += p.y;
        return this;
    },

    _sub: function(p) {
        this.x -= p.x;
        this.y -= p.y;
        return this;
    },

    _mult: function(k) {
        this.x *= k;
        this.y *= k;
        return this;
    },

    _div: function(k) {
        this.x /= k;
        this.y /= k;
        return this;
    },

    _multByPoint: function(p) {
        this.x *= p.x;
        this.y *= p.y;
        return this;
    },

    _divByPoint: function(p) {
        this.x /= p.x;
        this.y /= p.y;
        return this;
    },

    _unit: function() {
        this._div(this.mag());
        return this;
    },

    _perp: function() {
        var y = this.y;
        this.y = this.x;
        this.x = -y;
        return this;
    },

    _rotate: function(angle) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = cos * this.x - sin * this.y,
            y = sin * this.x + cos * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _rotateAround: function(angle, p) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = p.x + cos * (this.x - p.x) - sin * (this.y - p.y),
            y = p.y + sin * (this.x - p.x) + cos * (this.y - p.y);
        this.x = x;
        this.y = y;
        return this;
    },

    _round: function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }
};

/**
 * Construct a point from an array if necessary, otherwise if the input
 * is already a Point, or an unknown type, return it unchanged
 * @param {Array<Number>|Point|*} a any kind of input value
 * @return {Point} constructed point, or passed-through value.
 * @example
 * // this
 * var point = Point.convert([0, 1]);
 * // is equivalent to
 * var point = new Point(0, 1);
 */
Point.convert = function (a) {
    if (a instanceof Point) {
        return a;
    }
    if (Array.isArray(a)) {
        return new Point(a[0], a[1]);
    }
    return a;
};


/***/ }),

/***/ "./node_modules/antd/es/tabs/TabPane.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/es/tabs/TabPane.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var TabPane = function TabPane() {
  return null;
};
if (true) {
  TabPane.displayName = 'DeprecatedTabPane';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabPane);

/***/ }),

/***/ "./node_modules/antd/es/tabs/hooks/useAnimateConfig.js":
/*!*************************************************************!*\
  !*** ./node_modules/antd/es/tabs/hooks/useAnimateConfig.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useAnimateConfig)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_util/motion */ "./node_modules/antd/es/_util/motion.js");



var motion = {
  motionAppear: false,
  motionEnter: true,
  motionLeave: true
};
function useAnimateConfig(prefixCls) {
  var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    inkBar: true,
    tabPane: false
  };
  var mergedAnimated;
  if (animated === false) {
    mergedAnimated = {
      inkBar: false,
      tabPane: false
    };
  } else if (animated === true) {
    mergedAnimated = {
      inkBar: true,
      tabPane: true
    };
  } else {
    mergedAnimated = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      inkBar: true
    }, (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(animated) === 'object' ? animated : {});
  }
  if (mergedAnimated.tabPane) {
    mergedAnimated.tabPaneMotion = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, motion), {
      motionName: (0,_util_motion__WEBPACK_IMPORTED_MODULE_2__.getTransitionName)(prefixCls, 'switch')
    });
  }
  return mergedAnimated;
}

/***/ }),

/***/ "./node_modules/antd/es/tabs/hooks/useLegacyItems.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/es/tabs/hooks/useLegacyItems.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useLegacyItems)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "./node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_util/warning */ "./node_modules/antd/es/_util/warning.js");

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



function filter(items) {
  return items.filter(function (item) {
    return item;
  });
}
function useLegacyItems(items, children) {
  if (items) {
    return items;
  }
   true ? (0,_util_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!children, 'Tabs', 'Tabs.TabPane is deprecated. Please use `items` directly.') : 0;
  var childrenItems = (0,rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_2__["default"])(children).map(function (node) {
    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.isValidElement(node)) {
      var key = node.key,
        props = node.props;
      var _a = props || {},
        tab = _a.tab,
        restProps = __rest(_a, ["tab"]);
      var item = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: String(key)
      }, restProps), {
        label: tab
      });
      return item;
    }
    return null;
  });
  return filter(childrenItems);
}

/***/ }),

/***/ "./node_modules/antd/es/tabs/index.js":
/*!********************************************!*\
  !*** ./node_modules/antd/es/tabs/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/es/icons/CloseOutlined */ "./node_modules/@ant-design/icons/es/icons/CloseOutlined.js");
/* harmony import */ var _ant_design_icons_es_icons_EllipsisOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/es/icons/EllipsisOutlined */ "./node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js");
/* harmony import */ var _ant_design_icons_es_icons_PlusOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons/es/icons/PlusOutlined */ "./node_modules/@ant-design/icons/es/icons/PlusOutlined.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-tabs */ "./node_modules/rc-tabs/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _config_provider_SizeContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config-provider/SizeContext */ "./node_modules/antd/es/config-provider/SizeContext.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_util/warning */ "./node_modules/antd/es/_util/warning.js");
/* harmony import */ var _hooks_useAnimateConfig__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hooks/useAnimateConfig */ "./node_modules/antd/es/tabs/hooks/useAnimateConfig.js");
/* harmony import */ var _hooks_useLegacyItems__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hooks/useLegacyItems */ "./node_modules/antd/es/tabs/hooks/useLegacyItems.js");
/* harmony import */ var _TabPane__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TabPane */ "./node_modules/antd/es/tabs/TabPane.js");


var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};












function Tabs(_a) {
  var type = _a.type,
    className = _a.className,
    propSize = _a.size,
    _onEdit = _a.onEdit,
    hideAdd = _a.hideAdd,
    centered = _a.centered,
    addIcon = _a.addIcon,
    children = _a.children,
    items = _a.items,
    animated = _a.animated,
    props = __rest(_a, ["type", "className", "size", "onEdit", "hideAdd", "centered", "addIcon", "children", "items", "animated"]);
  var customizePrefixCls = props.prefixCls,
    _props$moreIcon = props.moreIcon,
    moreIcon = _props$moreIcon === void 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_ant_design_icons_es_icons_EllipsisOutlined__WEBPACK_IMPORTED_MODULE_5__["default"], null) : _props$moreIcon;
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_4__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_6__.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction,
    getPopupContainer = _React$useContext.getPopupContainer;
  var prefixCls = getPrefixCls('tabs', customizePrefixCls);
  var editable;
  if (type === 'editable-card') {
    editable = {
      onEdit: function onEdit(editType, _ref) {
        var key = _ref.key,
          event = _ref.event;
        _onEdit === null || _onEdit === void 0 ? void 0 : _onEdit(editType === 'add' ? event : key, editType);
      },
      removeIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_ant_design_icons_es_icons_CloseOutlined__WEBPACK_IMPORTED_MODULE_7__["default"], null),
      addIcon: addIcon || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_ant_design_icons_es_icons_PlusOutlined__WEBPACK_IMPORTED_MODULE_8__["default"], null),
      showAdd: hideAdd !== true
    };
  }
  var rootPrefixCls = getPrefixCls();
   true ? (0,_util_warning__WEBPACK_IMPORTED_MODULE_9__["default"])(!('onPrevClick' in props) && !('onNextClick' in props), 'Tabs', '`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead.') : 0;
  var mergedItems = (0,_hooks_useLegacyItems__WEBPACK_IMPORTED_MODULE_10__["default"])(items, children);
  var mergedAnimated = (0,_hooks_useAnimateConfig__WEBPACK_IMPORTED_MODULE_11__["default"])(prefixCls, animated);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_config_provider_SizeContext__WEBPACK_IMPORTED_MODULE_12__["default"].Consumer, null, function (contextSize) {
    var _classNames;
    var size = propSize !== undefined ? propSize : contextSize;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(rc_tabs__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      direction: direction,
      getPopupContainer: getPopupContainer,
      moreTransitionName: "".concat(rootPrefixCls, "-slide-up")
    }, props, {
      items: mergedItems,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-").concat(size), size), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-card"), ['card', 'editable-card'].includes(type)), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-editable-card"), type === 'editable-card'), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-centered"), centered), _classNames), className),
      editable: editable,
      moreIcon: moreIcon,
      prefixCls: prefixCls,
      animated: mergedAnimated
    }));
  });
}
Tabs.TabPane = _TabPane__WEBPACK_IMPORTED_MODULE_13__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);

/***/ }),

/***/ "./resources/js/pages/Admin/Zones/index.js":
/*!*************************************************!*\
  !*** ./resources/js/pages/Admin/Zones/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/dist/index.modern.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/constants */ "./resources/js/config/constants.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* global google */



// https://github.com/google-map-react/google-map-react/issues/1034

var Zone = function Zone() {
  var handleApiLoaded = function handleApiLoaded(map, maps) {
    var drawingManager = new maps.drawing.DrawingManager({
      drawingMode: maps.drawing.OverlayType.MARKER,
      drawingControl: true,
      drawingControlOptions: {
        position: maps.ControlPosition.TOP_CENTER,
        drawingModes: [maps.drawing.OverlayType.MARKER, maps.drawing.OverlayType.POLYGON, maps.drawing.OverlayType.CIRCLE]
      },
      markerOptions: {
        icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
      },
      circleOptions: {
        fillColor: "#ffff00",
        fillOpacity: 1,
        strokeWeight: 5,
        clickable: false,
        editable: true,
        zIndex: 1
      }
    });
    drawingManager.setMap(map);
    maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon) {
      var area = null;
      var polygonPaths = polygon.getPath();
      area = maps.geometry.spherical.computeArea(polygonPaths);
      console.log({
        area: area,
        polygon: polygon
      });

      // adding events to each polygon vertex
      polygon.getPaths().forEach(function (path) {
        maps.event.addListener(path, 'insert_at', function () {
          // New point
          area = maps.geometry.spherical.computeArea(polygonPaths);
          console.log('new point added', {
            area: area
          });
        });
        maps.event.addListener(path, 'remove_at', function () {
          // Point was removed
          area = maps.geometry.spherical.computeArea(polygonPaths);
          console.log('a point was removed', {
            area: area
          });
        });
        maps.event.addListener(path, 'set_at', function () {
          // Point was moved
          area = maps.geometry.spherical.computeArea(polygonPaths);
          console.log('some point was relocated', {
            area: area
          });
        });
      });
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(google_map_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
    bootstrapURLKeys: {
      libraries: 'drawing',
      key: _config_constants__WEBPACK_IMPORTED_MODULE_1__.GOOGLE_API_KEY
    },
    defaultCenter: {
      lat: 40.7549394,
      lng: -73.9772689
    },
    defaultZoom: 10,
    yesIWantToUseGoogleMapApiInternals: true,
    onGoogleApiLoaded: function onGoogleApiLoaded(_ref) {
      var map = _ref.map,
        maps = _ref.maps;
      //this.renderMarker(map, maps)
      handleApiLoaded(map, maps);
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Zone);

/***/ }),

/***/ "./resources/js/pages/Admin/settings.js":
/*!**********************************************!*\
  !*** ./resources/js/pages/Admin/settings.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/tabs/index.js");
/* harmony import */ var _Zones_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Zones/index */ "./resources/js/pages/Admin/Zones/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var Settings = function Settings() {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)();
  var onChange = function onChange(key) {
    console.log(key);
  };
  var clickHandler = function clickHandler() {
    history.push('/admin/drivers/edit');
  };
  var tabContent = [{
    label: 'Location',
    key: 'location-1',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
      children: "test"
    })
  }, {
    label: 'Tab 2',
    key: 'item-2',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: {
        height: '400px'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Zones_index__WEBPACK_IMPORTED_MODULE_1__["default"], {})
    })
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onChange: onChange,
    type: "card",
    items: tabContent
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

/***/ }),

/***/ "./node_modules/eventemitter3/index.js":
/*!*********************************************!*\
  !*** ./node_modules/eventemitter3/index.js ***!
  \*********************************************/
/***/ ((module) => {



var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "./node_modules/google-map-react/dist/index.modern.js":
/*!************************************************************!*\
  !*** ./node_modules/google-map-react/dist/index.modern.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertNeSwToNwSe: () => (/* binding */ _e),
/* harmony export */   convertNwSeToNeSw: () => (/* binding */ fe),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fitBounds: () => (/* binding */ ve),
/* harmony export */   getTilesIds: () => (/* binding */ we),
/* harmony export */   latLng2Tile: () => (/* binding */ Ce),
/* harmony export */   meters2ScreenPixels: () => (/* binding */ Me),
/* harmony export */   tile2LatLng: () => (/* binding */ ye)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @googlemaps/js-api-loader */ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js");
/* harmony import */ var _mapbox_point_geometry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mapbox/point-geometry */ "./node_modules/@mapbox/point-geometry/index.js");
/* harmony import */ var _mapbox_point_geometry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mapbox_point_geometry__WEBPACK_IMPORTED_MODULE_4__);
function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function p(e,t){var o,n;e.prototype=Object.create(t.prototype),e.prototype.constructor=e,o=e,n=t,(Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(o,n)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u={width:"100%",height:"100%",left:0,top:0,margin:0,padding:0,position:"absolute"},h=function(t){function o(){return t.apply(this,arguments)||this}p(o,t);var n=o.prototype;return n.shouldComponentUpdate=function(){return!1},n.render=function(){return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{ref:this.props.registerChild,style:u})},o}(react__WEBPACK_IMPORTED_MODULE_0__.Component),c=function(e){function t(t){var o;return(o=e.call(this)||this).gmapInstance=t,o}p(t,e);var o=t.prototype;return o.getChildren=function(){return this.gmapInstance.props.children},o.getMousePosition=function(){return this.gmapInstance.mouse_},o.getUpdateCounter=function(){return this.gmapInstance.updateCounter_},o.dispose=function(){this.gmapInstance=null,this.removeAllListeners()},t}((eventemitter3__WEBPACK_IMPORTED_MODULE_2___default())),d=function(e,t){for(var o=a({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e)),n=0;n<t.length;n++){var r=t[n];r in o&&delete o[r]}return o},m=Object.prototype.hasOwnProperty;function g(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function _(e,t){if(g(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var o=Object.keys(e),n=Object.keys(t);if(o.length!==n.length)return!1;for(var r=0;r<o.length;r++)if(!m.call(t,o[r])||!g(e[o[r]],t[o[r]]))return!1;return!0}var f={width:"100%",height:"100%",left:0,top:0,margin:0,padding:0,position:"absolute"},v={width:0,height:0,left:0,top:0,backgroundColor:"transparent",position:"absolute"},M=function(t){function o(o){var n;return(n=t.call(this,o)||this)._getState=function(){return{children:n.props.dispatcher.getChildren(),updateCounter:n.props.dispatcher.getUpdateCounter()}},n._onChangeHandler=function(){if(n.dimensionsCache_){var e=(n.state.children||[]).length,t=n._getState();n.setState(t,function(){return(t.children||[]).length!==e&&n._onMouseChangeHandler()})}},n._onChildClick=function(){n.props.onChildClick&&n.hoverChildProps_&&n.props.onChildClick(n.hoverKey_,n.hoverChildProps_)},n._onChildMouseDown=function(){n.props.onChildMouseDown&&n.hoverChildProps_&&n.props.onChildMouseDown(n.hoverKey_,n.hoverChildProps_)},n._onChildMouseEnter=function(e,t){n.dimensionsCache_&&(n.props.onChildMouseEnter&&n.props.onChildMouseEnter(e,t),n.hoverChildProps_=t,n.hoverKey_=e,n.setState({hoverKey:e}))},n._onChildMouseLeave=function(){if(n.dimensionsCache_){var e=n.hoverKey_;null!=e&&(n.props.onChildMouseLeave&&n.props.onChildMouseLeave(e,n.hoverChildProps_),n.hoverKey_=null,n.hoverChildProps_=null,n.setState({hoverKey:null}))}},n._onMouseAllow=function(e){e||n._onChildMouseLeave(),n.allowMouse_=e},n._onMouseChangeHandler=function(){n.allowMouse_&&n._onMouseChangeHandlerRaf()},n._onMouseChangeHandlerRaf=function(){if(n.dimensionsCache_){var t=n.props.dispatcher.getMousePosition();if(t){var o=[],r=n.props.getHoverDistance();if(react__WEBPACK_IMPORTED_MODULE_0___default().Children.forEach(n.state.children,function(e,i){if(e&&(void 0!==e.props.latLng||void 0!==e.props.lat||void 0!==e.props.lng)){var s=null!=e.key?e.key:i,a=n.props.distanceToMouse(n.dimensionsCache_[s],t,e.props);a<r&&o.push({key:s,dist:a,props:e.props})}}),o.length){o.sort(function(e,t){return e.dist-t.dist});var i=o[0].key,s=o[0].props;n.hoverKey_!==i&&(n._onChildMouseLeave(),n._onChildMouseEnter(i,s))}else n._onChildMouseLeave()}else n._onChildMouseLeave()}},n._getDimensions=function(e){return n.dimensionsCache_[e]},n.dimensionsCache_={},n.hoverKey_=null,n.hoverChildProps_=null,n.allowMouse_=!0,n.state=a({},n._getState(),{hoverKey:null}),n}p(o,t);var n=o.prototype;return n.componentDidMount=function(){this.props.dispatcher.on("kON_CHANGE",this._onChangeHandler),this.props.dispatcher.on("kON_MOUSE_POSITION_CHANGE",this._onMouseChangeHandler),this.props.dispatcher.on("kON_CLICK",this._onChildClick),this.props.dispatcher.on("kON_MDOWN",this._onChildMouseDown)},n.shouldComponentUpdate=function(e,t){return!0===this.props.experimental?!_(this.props,e)||!_(d(this.state,["hoverKey"]),d(t,["hoverKey"])):!_(this.props,e)||!_(this.state,t)},n.componentWillUnmount=function(){this.props.dispatcher.removeListener("kON_CHANGE",this._onChangeHandler),this.props.dispatcher.removeListener("kON_MOUSE_POSITION_CHANGE",this._onMouseChangeHandler),this.props.dispatcher.removeListener("kON_CLICK",this._onChildClick),this.props.dispatcher.removeListener("kON_MDOWN",this._onChildMouseDown),this.dimensionsCache_=null},n.render=function(){var t=this,o=this.props.style||f;this.dimensionsCache_={};var n=react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(this.state.children,function(o,n){if(o){if(void 0===o.props.latLng&&void 0===o.props.lat&&void 0===o.props.lng)return react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(o,{$geoService:t.props.geoService,$onMouseAllow:t._onMouseAllow,$prerender:t.props.prerender});var r=void 0!==o.props.latLng?o.props.latLng:{lat:o.props.lat,lng:o.props.lng},i=t.props.insideMapPanes?t.props.geoService.fromLatLngToDivPixel(r):t.props.geoService.fromLatLngToCenterPixel(r),s={left:i.x,top:i.y};if(void 0!==o.props.seLatLng||void 0!==o.props.seLat&&void 0!==o.props.seLng){var p=void 0!==o.props.seLatLng?o.props.seLatLng:{lat:o.props.seLat,lng:o.props.seLng},l=t.props.insideMapPanes?t.props.geoService.fromLatLngToDivPixel(p):t.props.geoService.fromLatLngToCenterPixel(p);s.width=l.x-i.x,s.height=l.y-i.y}var u=t.props.geoService.fromLatLngToContainerPixel(r),h=null!=o.key?o.key:n;return t.dimensionsCache_[h]=a({x:u.x,y:u.y},r),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{key:h,style:a({},v,s),className:o.props.$markerHolderClassName},react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(o,{$hover:h===t.state.hoverKey,$getDimensions:t._getDimensions,$dimensionKey:h,$geoService:t.props.geoService,$onMouseAllow:t._onMouseAllow,$prerender:t.props.prerender}))}});return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:o},n)},o}(react__WEBPACK_IMPORTED_MODULE_0__.Component);M.propTypes={geoService:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().any),style:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().any),distanceToMouse:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),dispatcher:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().any),onChildClick:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),onChildMouseDown:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),onChildMouseLeave:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),onChildMouseEnter:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),getHoverDistance:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),insideMapPanes:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),prerender:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool)},M.defaultProps={insideMapPanes:!1,prerender:!1};var y={width:"50%",height:"50%",left:"50%",top:"50%",margin:0,padding:0,position:"absolute"};function C(t){return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:y},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(M,a({},t,{prerender:!0})))}var w,L,b,D=["key"],z=new Promise(function(e){b=e}),O=function(e,t){if(!e)return z;if(L)return L;e.libraries||(e.libraries=[]);var o=[].concat(e.libraries);if(t&&(0!==o.length&&o.includes("visualization")||o.push("visualization"),console.warn("heatmapLibrary will be deprecated in the future. Please use { libraries: ['visualization'] } in bootstrapURLKeys property instead")), true&&Object.keys(e).indexOf("callback")>-1){var n='"callback" key in bootstrapURLKeys is not allowed,\n                      use onGoogleApiLoaded property instead';throw console.error(n),new Error(n)}if("undefined"==typeof window)throw new Error("google map cannot be loaded outside browser env");var r=e.key,s=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(o=i[n])>=0||(r[o]=e[o]);return r}(e,D);return w||(w=new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_3__.Loader(a({apiKey:r||""},s,{libraries:o}))),L=w.load().then(function(){return b(window.google.maps),window.google.maps}),b(L),L};function k(e,t,o){var n=o-t;return e===o?e:((e-t)%n+n)%n+t}var x=function(){function e(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid LatLng object: ("+e+", "+t+")");this.lat=+e,this.lng=+t}return e.prototype.wrap=function(){return new e(this.lat,k(this.lng,-180,180))},e}();x.convert=function(e){return e instanceof x?e:Array.isArray(e)?new x(e[0],e[1]):"lng"in e&&"lat"in e?new x(e.lat,e.lng):e};var S=function(){function e(e,t,o){this.tileSize=e||512,this._minZoom=t||0,this._maxZoom=o||52,this.latRange=[-85.05113,85.05113],this.width=0,this.height=0,this.zoom=0,this.center=new x(0,0),this.angle=0}var t,o,n=e.prototype;return n.zoomScale=function(e){return Math.pow(2,e)},n.scaleZoom=function(e){return Math.log(e)/Math.LN2},n.project=function(e,t){return new (_mapbox_point_geometry__WEBPACK_IMPORTED_MODULE_4___default())(this.lngX(e.lng,t),this.latY(e.lat,t))},n.unproject=function(e,t){return new x(this.yLat(e.y,t),this.xLng(e.x,t))},n.lngX=function(e,t){return(180+e)*(t||this.worldSize)/360},n.latY=function(e,t){return(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+e*Math.PI/360)))*(t||this.worldSize)/360},n.xLng=function(e,t){return 360*e/(t||this.worldSize)-180},n.yLat=function(e,t){return 360/Math.PI*Math.atan(Math.exp((180-360*e/(t||this.worldSize))*Math.PI/180))-90},n.locationPoint=function(e){var t=this.project(e);return this.centerPoint._sub(this.point._sub(t)._rotate(this.angle))},n.pointLocation=function(e){var t=this.centerPoint._sub(e)._rotate(-this.angle);return this.unproject(this.point.sub(t))},t=e,(o=[{key:"minZoom",get:function(){return this._minZoom},set:function(e){this._minZoom=e,this.zoom=Math.max(this.zoom,e)}},{key:"maxZoom",get:function(){return this._maxZoom},set:function(e){this._maxZoom=e,this.zoom=Math.min(this.zoom,e)}},{key:"worldSize",get:function(){return this.tileSize*this.scale}},{key:"centerPoint",get:function(){return new (_mapbox_point_geometry__WEBPACK_IMPORTED_MODULE_4___default())(0,0)}},{key:"size",get:function(){return new (_mapbox_point_geometry__WEBPACK_IMPORTED_MODULE_4___default())(this.width,this.height)}},{key:"bearing",get:function(){return-this.angle/Math.PI*180},set:function(e){this.angle=-k(e,-180,180)*Math.PI/180}},{key:"zoom",get:function(){return this._zoom},set:function(e){var t=Math.min(Math.max(e,this.minZoom),this.maxZoom);this._zoom=t,this.scale=this.zoomScale(t),this.tileZoom=Math.floor(t),this.zoomFraction=t-this.tileZoom}},{key:"x",get:function(){return this.lngX(this.center.lng)}},{key:"y",get:function(){return this.latY(this.center.lat)}},{key:"point",get:function(){return new (_mapbox_point_geometry__WEBPACK_IMPORTED_MODULE_4___default())(this.x,this.y)}}])&&function(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,"symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key))?r:String(r),n)}var r}(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}(),T=function(){function e(e){this.hasSize_=!1,this.hasView_=!1,this.transform_=new S(e||512)}var t=e.prototype;return t.setView=function(e,t,o){this.transform_.center=x.convert(e),this.transform_.zoom=+t,this.transform_.bearing=+o,this.hasView_=!0},t.setViewSize=function(e,t){this.transform_.width=e,this.transform_.height=t,this.hasSize_=!0},t.setMapCanvasProjection=function(e,t){this.maps_=e,this.mapCanvasProjection_=t},t.canProject=function(){return this.hasSize_&&this.hasView_},t.hasSize=function(){return this.hasSize_},t.fromLatLngToCenterPixel=function(e){return this.transform_.locationPoint(x.convert(e))},t.fromLatLngToDivPixel=function(e){if(this.mapCanvasProjection_){var t=new this.maps_.LatLng(e.lat,e.lng);return this.mapCanvasProjection_.fromLatLngToDivPixel(t)}return this.fromLatLngToCenterPixel(e)},t.fromLatLngToContainerPixel=function(e){if(this.mapCanvasProjection_){var t=new this.maps_.LatLng(e.lat,e.lng);return this.mapCanvasProjection_.fromLatLngToContainerPixel(t)}var o=this.fromLatLngToCenterPixel(e);return o.x-=this.transform_.worldSize*Math.round(o.x/this.transform_.worldSize),o.x+=this.transform_.width/2,o.y+=this.transform_.height/2,o},t.fromContainerPixelToLatLng=function(e){if(this.mapCanvasProjection_){var t=this.mapCanvasProjection_.fromContainerPixelToLatLng(e);return{lat:t.lat(),lng:t.lng()}}var o=a({},e);o.x-=this.transform_.width/2,o.y-=this.transform_.height/2;var n=this.transform_.pointLocation(_mapbox_point_geometry__WEBPACK_IMPORTED_MODULE_4___default().convert(o));return n.lng-=360*Math.round(n.lng/360),n},t.getWidth=function(){return this.transform_.width},t.getHeight=function(){return this.transform_.height},t.getZoom=function(){return this.transform_.zoom},t.getCenter=function(){return this.transform_.pointLocation({x:0,y:0})},t.getBounds=function(e,t){var o=e&&e[0]||0,n=e&&e[1]||0,r=e&&e[2]||0,i=e&&e[3]||0;if(this.getWidth()-n-i>0&&this.getHeight()-o-r>0){var a=this.transform_.pointLocation(_mapbox_point_geometry__WEBPACK_IMPORTED_MODULE_4___default().convert({x:i-this.getWidth()/2,y:o-this.getHeight()/2})),p=this.transform_.pointLocation(_mapbox_point_geometry__WEBPACK_IMPORTED_MODULE_4___default().convert({x:this.getWidth()/2-n,y:this.getHeight()/2-r})),l=[a.lat,a.lng,p.lat,p.lng,p.lat,a.lng,a.lat,p.lng];return t&&(l=l.map(function(e){return Math.round(e*t)/t})),l}return[0,0,0,0]},e}();function E(e){if(window.requestAnimationFrame)return window.requestAnimationFrame(e);var t=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;return t?t(e):window.setTimeout(e,1e3/60)}var P=Math.log2?Math.log2:function(e){return Math.log(e)/Math.LN2};function A(e,t){return Object.keys(e).reduce(function(o,n){return t(e[n])&&(o[n]=e[n]),o},{})}var I=function(e){if(null!==e&&"object"==typeof e){if(0===Object.keys(e).length)return!0}else if(null==e||""===e)return!0;return!1},N=Object.prototype.toString;function Z(e){return"number"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Number]"===N.call(e)}var j=null;function U(){if(j)return j;if("undefined"!=typeof navigator){var e=navigator.userAgent.indexOf("MSIE")>-1,t=navigator.userAgent.indexOf("Firefox")>-1,o=navigator.userAgent.toLowerCase().indexOf("op")>-1,n=navigator.userAgent.indexOf("Chrome")>-1,r=navigator.userAgent.indexOf("Safari")>-1;return n&&r&&(r=!1),n&&o&&(n=!1),j={isExplorer:e,isFirefox:t,isOpera:o,isChrome:n,isSafari:r}}return j={isChrome:!0,isExplorer:!1,isFirefox:!1,isOpera:!1,isSafari:!1}}var H=function(e){return Function.prototype.toString.call(e)};function K(e){if(!e||"object"!=typeof e)return!1;var t="function"==typeof e.constructor?Object.getPrototypeOf(e):Object.prototype;if(null===t)return!0;var o=t.constructor;return"function"==typeof o&&o instanceof o&&H(o)===H(Object)}function R(e,t,o,n){e.addEventListener(t,o,function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){e=!1}return e}()?{capture:n,passive:!0}:n)}var G,B=!("undefined"==typeof window||!window.document||!window.document.createElement);G=B?window:"undefined"!=typeof self?self:void 0;var W,V="undefined"!=typeof document&&document.attachEvent,F=!1;if(B&&!V){var $=function(){var e=G.requestAnimationFrame||G.mozRequestAnimationFrame||G.webkitRequestAnimationFrame||function(e){return G.setTimeout(e,20)};return function(t){return e(t)}}(),q=(W=G.cancelAnimationFrame||G.mozCancelAnimationFrame||G.webkitCancelAnimationFrame||G.clearTimeout,function(e){return W(e)}),Y=function(e){var t=e.__resizeTriggers__,o=t.firstElementChild,n=t.lastElementChild,r=o.firstElementChild;n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight,r.style.width=o.offsetWidth+1+"px",r.style.height=o.offsetHeight+1+"px",o.scrollLeft=o.scrollWidth,o.scrollTop=o.scrollHeight},X=function(e){var t=this;Y(this),this.__resizeRAF__&&q(this.__resizeRAF__),this.__resizeRAF__=$(function(){(function(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height})(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach(function(o){o.call(t,e)}))})},J=!1,Q="",ee="animationstart",te="Webkit Moz O ms".split(" "),oe="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" ");if(B){var ne=document.createElement("fakeelement");if(void 0!==ne.style.animationName&&(J=!0),!1===J)for(var re=0;re<te.length;re++)if(void 0!==ne.style[te[re]+"AnimationName"]){Q="-"+te[re].toLowerCase()+"-",ee=oe[re],J=!0;break}}var ie="resizeanim",se="@"+Q+"keyframes "+ie+" { from { opacity: 0; } to { opacity: 0; } } ",ae=Q+"animation: 1ms "+ie+"; "}var pe=void 0!==react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal,le=pe?react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal:react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_renderSubtreeIntoContainer,ue=function(e){return K(e)?e:{lat:e[0],lng:e[1]}},he=function(e,t){return true&&e<t&&console.warn("GoogleMap: minZoom option is less than recommended minZoom option for your map sizes.\noverrided to value "+t),t<e?e:t},ce=function(t){function o(o){var r;if((r=t.call(this,o)||this)._getMinZoom=function(){if(r.geoService_.getWidth()>0||r.geoService_.getHeight()>0){var e=Math.ceil(r.geoService_.getWidth()/256)+2,t=Math.ceil(r.geoService_.getHeight()/256)+2,o=Math.max(e,t);return Math.ceil(P(o))}return 3},r._computeMinZoom=function(e){return I(e)?r._getMinZoom():e},r._mapDomResizeCallback=function(){if(r.resetSizeOnIdle_=!0,r.maps_){var e=r.props.center||r.props.defaultCenter,t=r.map_.getCenter();r.maps_.event.trigger(r.map_,"resize"),r.map_.setCenter(r.props.resetBoundsOnResize?e:t)}},r._setLayers=function(e){e.forEach(function(e){r.layers_[e]=new r.maps_[e],r.layers_[e].setMap(r.map_)})},r._renderPortal=function(){return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(M,{experimental:r.props.experimental,onChildClick:r._onChildClick,onChildMouseDown:r._onChildMouseDown,onChildMouseEnter:r._onChildMouseEnter,onChildMouseLeave:r._onChildMouseLeave,geoService:r.geoService_,insideMapPanes:!0,distanceToMouse:r.props.distanceToMouse,getHoverDistance:r._getHoverDistance,dispatcher:r.markersDispatcher_})},r._initMap=function(){if(!r.initialized_){r.initialized_=!0;var e=ue(r.props.center||r.props.defaultCenter);r.geoService_.setView(e,r.props.zoom||r.props.defaultZoom,0),r._onBoundsChanged();var t=a({},r.props.apiKey&&{key:r.props.apiKey},r.props.bootstrapURLKeys);r.props.googleMapLoader(t,r.props.heatmapLibrary).then(function(e){if(r.mounted_){var t,o,i=r.geoService_.getCenter(),s={zoom:r.props.zoom||r.props.defaultZoom,center:new e.LatLng(i.lat,i.lng)};r.props.heatmap.positions&&(Object.assign(l(r),{heatmap:(t=e,o=r.props.heatmap,new t.visualization.HeatmapLayer({data:o.positions.reduce(function(e,o){var n=o.weight,r=void 0===n?1:n;return e.push({location:new t.LatLng(o.lat,o.lng),weight:r}),e},[])}))}),function(e,t){var o=t.options,n=void 0===o?{}:o;Object.keys(n).map(function(t){return e.set(t,n[t])})}(r.heatmap,r.props.heatmap));var p=A(e,K),u="function"==typeof r.props.options?r.props.options(p):r.props.options,h=!I(r.props.draggable)&&{draggable:r.props.draggable},c=r._computeMinZoom(u.minZoom);r.minZoom_=c;var d=a({},{overviewMapControl:!1,streetViewControl:!1,rotateControl:!0,mapTypeControl:!1,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}],minZoom:3},{minZoom:c},u,s);r.defaultDraggableOption_=I(d.draggable)?r.defaultDraggableOption_:d.draggable;var m=a({},d,h);m.minZoom=he(m.minZoom,c);var g=new e.Map(react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(r.googleMapDom_),m);r.map_=g,r.maps_=e,r._setLayers(r.props.layerTypes);var _=e.version.match(/^3\.(\d+)\./),f=_&&Number(_[1]),v=l(r),M=Object.assign(new e.OverlayView,{onAdd:function(){var t="undefined"!=typeof screen?screen.width+"px":"2000px",o="undefined"!=typeof screen?screen.height+"px":"2000px",n=document.createElement("div");if(n.style.backgroundColor="transparent",n.style.position="absolute",n.style.left="0px",n.style.top="0px",n.style.width=t,n.style.height=o,v.props.overlayViewDivStyle){var r=v.props.overlayViewDivStyle;"object"==typeof r&&Object.keys(r).forEach(function(e){n.style[e]=r[e]})}this.getPanes().overlayMouseTarget.appendChild(n),v.geoService_.setMapCanvasProjection(e,M.getProjection()),pe?v.setState({overlay:n}):le(v,v._renderPortal(),n,function(){return v.setState({overlay:n})})},onRemove:function(){var e=v.state.overlay;e&&!pe&&react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(e),v.setState({overlay:null})},draw:function(){if(v.updateCounter_++,v._onBoundsChanged(g,e,!v.props.debounced),v.googleApiLoadedCalled_||(v._onGoogleApiLoaded({map:g,maps:e,ref:v.googleMapDom_}),v.googleApiLoadedCalled_=!0),v.mouse_){var t=v.geoService_.fromContainerPixelToLatLng(v.mouse_);v.mouse_.lat=t.lat,v.mouse_.lng=t.lng}v._onChildMouseMove(),v.markersDispatcher_&&(v.markersDispatcher_.emit("kON_CHANGE"),v.fireMouseEventOnIdle_&&v.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE"))}});r.overlay_=M,M.setMap(g),r.props.heatmap.positions&&r.heatmap.setMap(g),r.props.onTilesLoaded&&e.event.addListener(g,"tilesloaded",function(){v._onTilesLoaded()}),e.event.addListener(g,"zoom_changed",function(){v.geoService_.getZoom()!==g.getZoom()&&(v.zoomAnimationInProgress_||(v.zoomAnimationInProgress_=!0,v._onZoomAnimationStart(g.zoom)),f<32)&&((new Date).getTime()-r.zoomControlClickTime_<300?E(function(){return E(function(){v.updateCounter_++,v._onBoundsChanged(g,e)})}):(v.updateCounter_++,v._onBoundsChanged(g,e)))}),e.event.addListener(g,"idle",function(){if(r.resetSizeOnIdle_){r._setViewSize();var t=r._computeMinZoom(u.minZoom);t!==r.minZoom_&&(r.minZoom_=t,g.setOptions({minZoom:t})),r.resetSizeOnIdle_=!1}v.zoomAnimationInProgress_&&(v.zoomAnimationInProgress_=!1,v._onZoomAnimationEnd(g.zoom)),v.updateCounter_++,v._onBoundsChanged(g,e),v.dragTime_=0,v.markersDispatcher_&&v.markersDispatcher_.emit("kON_CHANGE")}),e.event.addListener(g,"mouseover",function(){v.mouseInMap_=!0}),e.event.addListener(g,"click",function(){v.mouseInMap_=!0}),e.event.addListener(g,"mouseout",function(){v.mouseInMap_=!1,v.mouse_=null,v.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE")}),e.event.addListener(g,"drag",function(){v.dragTime_=(new Date).getTime(),v._onDrag(g)}),e.event.addListener(g,"dragend",function(){var t=e.event.addListener(g,"idle",function(){e.event.removeListener(t),v._onDragEnd(g)})}),e.event.addListener(g,"maptypeid_changed",function(){v._onMapTypeIdChange(g.getMapTypeId())})}}).catch(function(e){throw r._onGoogleApiLoaded({map:null,maps:null,ref:r.googleMapDom_}),console.error(e),e})}},r._onGoogleApiLoaded=function(){var e;r.props.onGoogleApiLoaded&&( true&&!0!==r.props.yesIWantToUseGoogleMapApiInternals&&console.warn("GoogleMap: Usage of internal api objects is dangerous and can cause a lot of issues.\nTo hide this warning add yesIWantToUseGoogleMapApiInternals={true} to <GoogleMap instance"),(e=r.props).onGoogleApiLoaded.apply(e,arguments))},r._getHoverDistance=function(){return r.props.hoverDistance},r._onDrag=function(){var e;return r.props.onDrag&&(e=r.props).onDrag.apply(e,arguments)},r._onDragEnd=function(){var e;return r.props.onDragEnd&&(e=r.props).onDragEnd.apply(e,arguments)},r._onMapTypeIdChange=function(){var e;return r.props.onMapTypeIdChange&&(e=r.props).onMapTypeIdChange.apply(e,arguments)},r._onZoomAnimationStart=function(){var e;return r.props.onZoomAnimationStart&&(e=r.props).onZoomAnimationStart.apply(e,arguments)},r._onZoomAnimationEnd=function(){var e;return r.props.onZoomAnimationEnd&&(e=r.props).onZoomAnimationEnd.apply(e,arguments)},r._onTilesLoaded=function(){return r.props.onTilesLoaded&&r.props.onTilesLoaded()},r._onChildClick=function(){var e;if(r.props.onChildClick)return(e=r.props).onChildClick.apply(e,arguments)},r._onChildMouseDown=function(e,t){r.childMouseDownArgs_=[e,t],r.props.onChildMouseDown&&r.props.onChildMouseDown(e,t,a({},r.mouse_))},r._onChildMouseUp=function(){var e;r.childMouseDownArgs_&&(r.props.onChildMouseUp&&(e=r.props).onChildMouseUp.apply(e,r.childMouseDownArgs_.concat([a({},r.mouse_)])),r.childMouseDownArgs_=null,r.childMouseUpTime_=(new Date).getTime())},r._onChildMouseMove=function(){var e;r.childMouseDownArgs_&&r.props.onChildMouseMove&&(e=r.props).onChildMouseMove.apply(e,r.childMouseDownArgs_.concat([a({},r.mouse_)]))},r._onChildMouseEnter=function(){var e;if(r.props.onChildMouseEnter)return(e=r.props).onChildMouseEnter.apply(e,arguments)},r._onChildMouseLeave=function(){var e;if(r.props.onChildMouseLeave)return(e=r.props).onChildMouseLeave.apply(e,arguments)},r._setViewSize=function(){if(r.mounted_){if(document.fullscreen||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement)r.geoService_.setViewSize(window.innerWidth,window.innerHeight);else{var e=react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(r.googleMapDom_);r.geoService_.setViewSize(e.clientWidth,e.clientHeight)}r._onBoundsChanged()}},r._onWindowResize=function(){r.resetSizeOnIdle_=!0},r._onMapMouseMove=function(e){if(r.mouseInMap_){var t=(new Date).getTime();t-r.mouseMoveTime_>50&&(r.boundingRect_=e.currentTarget.getBoundingClientRect()),r.mouseMoveTime_=t;var o=e.clientX-r.boundingRect_.left,n=e.clientY-r.boundingRect_.top;r.mouse_||(r.mouse_={x:0,y:0,lat:0,lng:0}),r.mouse_.x=o,r.mouse_.y=n;var i=r.geoService_.fromContainerPixelToLatLng(r.mouse_);r.mouse_.lat=i.lat,r.mouse_.lng=i.lng,r._onChildMouseMove(),t-r.dragTime_<100?r.fireMouseEventOnIdle_=!0:(r.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE"),r.fireMouseEventOnIdle_=!1)}},r._onClick=function(){var e;return r.props.onClick&&!r.childMouseDownArgs_&&(new Date).getTime()-r.childMouseUpTime_>300&&0===r.dragTime_&&(e=r.props).onClick.apply(e,arguments)},r._onMapClick=function(e){r.markersDispatcher_&&(r._onMapMouseMove(e),(new Date).getTime()-r.dragTime_>100&&(r.mouse_&&r._onClick(a({},r.mouse_,{event:e})),r.markersDispatcher_.emit("kON_CLICK",e)))},r._onMapMouseDownNative=function(e){r.mouseInMap_&&r._onMapMouseDown(e)},r._onMapMouseDown=function(e){r.markersDispatcher_&&(new Date).getTime()-r.dragTime_>100&&(r._onMapMouseMove(e),r.markersDispatcher_.emit("kON_MDOWN",e))},r._onMapMouseDownCapture=function(){U().isChrome&&(r.zoomControlClickTime_=(new Date).getTime())},r._onKeyDownCapture=function(){U().isChrome&&(r.zoomControlClickTime_=(new Date).getTime())},r._isCenterDefined=function(e){return e&&(K(e)&&Z(e.lat)&&Z(e.lng)||2===e.length&&Z(e[0])&&Z(e[1]))},r._onBoundsChanged=function(e,t,o){if(e){var n=e.getCenter();r.geoService_.setView([n.lat(),n.lng()],e.getZoom(),0)}if((r.props.onChange||r.props.onBoundsChange)&&r.geoService_.canProject()){var i=r.geoService_.getZoom(),s=r.geoService_.getBounds(),p=r.geoService_.getCenter();if(!function(e,t,o){if(e&&t){for(var n=0;n!==e.length;++n)if(Math.abs(e[n]-t[n])>1e-5)return!1;return!0}return!1}(s,r.prevBounds_)&&!1!==o){var l=r.geoService_.getBounds(r.props.margin);r.props.onBoundsChange&&r.props.onBoundsChange(r.centerIsObject_?a({},p):[p.lat,p.lng],i,s,l),r.props.onChange&&r.props.onChange({center:a({},p),zoom:i,bounds:{nw:{lat:s[0],lng:s[1]},se:{lat:s[2],lng:s[3]},sw:{lat:s[4],lng:s[5]},ne:{lat:s[6],lng:s[7]}},marginBounds:{nw:{lat:l[0],lng:l[1]},se:{lat:l[2],lng:l[3]},sw:{lat:l[4],lng:l[5]},ne:{lat:l[6],lng:l[7]}},size:r.geoService_.hasSize()?{width:r.geoService_.getWidth(),height:r.geoService_.getHeight()}:{width:0,height:0}}),r.prevBounds_=s}}},r._registerChild=function(e){r.googleMapDom_=e},r.mounted_=!1,r.initialized_=!1,r.googleApiLoadedCalled_=!1,r.map_=null,r.maps_=null,r.prevBounds_=null,r.heatmap=null,r.layers_={},r.mouse_=null,r.mouseMoveTime_=0,r.boundingRect_=null,r.mouseInMap_=!0,r.dragTime_=0,r.fireMouseEventOnIdle_=!1,r.updateCounter_=0,r.markersDispatcher_=new c(l(r)),r.geoService_=new T(256),r.centerIsObject_=K(r.props.center),r.minZoom_=3,r.defaultDraggableOption_=!0,r.zoomControlClickTime_=0,r.childMouseDownArgs_=null,r.childMouseUpTime_=0,r.googleMapDom_=null, true&&(r.props.apiKey&&console.warn("GoogleMap: apiKey is deprecated, use bootstrapURLKeys={{key: YOUR_API_KEY}} instead."),r.props.onBoundsChange&&console.warn("GoogleMap: onBoundsChange is deprecated, use onChange({center, zoom, bounds, ...other}) instead."),I(r.props.center)&&I(r.props.defaultCenter)&&console.warn("GoogleMap: center or defaultCenter property must be defined"),I(r.props.zoom)&&I(r.props.defaultZoom)&&console.warn("GoogleMap: zoom or defaultZoom property must be defined")),r._isCenterDefined(r.props.center||r.props.defaultCenter)){var i=ue(r.props.center||r.props.defaultCenter);r.geoService_.setView(i,r.props.zoom||r.props.defaultZoom,0)}return r.zoomAnimationInProgress_=!1,r.state={overlay:null},r}p(o,t);var r=o.prototype;return r.componentDidMount=function(){var e=this;this.mounted_=!0,this.markersDispatcher_=new c(this),R(window,"resize",this._onWindowResize,!1),R(window,"keydown",this._onKeyDownCapture,!0);var t=react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(this.googleMapDom_);t&&R(t,"mousedown",this._onMapMouseDownNative,!0),R(window,"mouseup",this._onChildMouseUp,!1);var o=a({},this.props.apiKey&&{key:this.props.apiKey},this.props.bootstrapURLKeys);this.props.googleMapLoader(o,this.props.heatmapLibrary),setTimeout(function(){e._setViewSize(),e._isCenterDefined(e.props.center||e.props.defaultCenter)&&e._initMap()},0,this),this.props.resetBoundsOnResize&&function(e,t){if(void 0===e.parentNode){var o=document.createElement("div");e.parentNode=o}e=e.parentNode,V?e.attachEvent("onresize",t):(e.__resizeTriggers__||("static"==getComputedStyle(e).position&&(e.style.position="relative"),function(){if(!F){var e=(se||"")+".resize-triggers { "+(ae||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e)),t.appendChild(o),F=!0}}(),e.__resizeLast__={},e.__resizeListeners__=[],(e.__resizeTriggers__=document.createElement("div")).className="resize-triggers",e.__resizeTriggers__.innerHTML='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',e.appendChild(e.__resizeTriggers__),Y(e),R(e,"scroll",X,!0),ee&&e.__resizeTriggers__.addEventListener(ee,function(t){t.animationName==ie&&Y(e)})),e.__resizeListeners__.push(t))}(t,this._mapDomResizeCallback)},r.shouldComponentUpdate=function(e,t){return!_(d(this.props,["draggable"]),d(e,["draggable"]))||!_(this.state,t)},r.componentDidUpdate=function(e){var t=this;if( true&&(_(e.defaultCenter,this.props.defaultCenter)||console.warn("GoogleMap: defaultCenter prop changed. You can't change default props."),_(e.defaultZoom,this.props.defaultZoom)||console.warn("GoogleMap: defaultZoom prop changed. You can't change default props.")),!this._isCenterDefined(e.center)&&this._isCenterDefined(this.props.center)&&setTimeout(function(){return t._initMap()},0),this.map_){var o=this.geoService_.getCenter();if(this._isCenterDefined(this.props.center)){var n=ue(this.props.center),r=this._isCenterDefined(e.center)?ue(e.center):null;(!r||Math.abs(n.lat-r.lat)+Math.abs(n.lng-r.lng)>1e-5)&&Math.abs(n.lat-o.lat)+Math.abs(n.lng-o.lng)>1e-5&&this.map_.panTo({lat:n.lat,lng:n.lng})}if(I(this.props.zoom)||Math.abs(this.props.zoom-e.zoom)>0&&this.map_.setZoom(this.props.zoom),!I(e.draggable)&&I(this.props.draggable)?this.map_.setOptions({draggable:this.defaultDraggableOption_}):_(e.draggable,this.props.draggable)||this.map_.setOptions({draggable:this.props.draggable}),!I(this.props.options)&&!_(e.options,this.props.options)){var i=A(this.maps_,K),s="function"==typeof this.props.options?this.props.options(i):this.props.options;if("minZoom"in(s=d(s,["zoom","center","draggable"]))){var a=this._computeMinZoom(s.minZoom);s.minZoom=he(s.minZoom,a)}this.map_.setOptions(s)}_(this.props.layerTypes,e.layerTypes)||(Object.keys(this.layers_).forEach(function(e){t.layers_[e].setMap(null),delete t.layers_[e]}),this._setLayers(this.props.layerTypes)),this.heatmap&&!_(this.props.heatmap.positions,e.heatmap.positions)&&this.heatmap.setData(this.props.heatmap.positions.map(function(e){return{location:new t.maps_.LatLng(e.lat,e.lng),weight:e.weight}})),this.heatmap&&!_(this.props.heatmap.options,e.heatmap.options)&&Object.keys(this.props.heatmap.options).forEach(function(e){t.heatmap.set(e,t.props.heatmap.options[e])})}this.markersDispatcher_.emit("kON_CHANGE"),_(this.props.hoverDistance,e.hoverDistance)||this.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE")},r.componentWillUnmount=function(){this.mounted_=!1;var e,t,o=react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(this.googleMapDom_);o&&o.removeEventListener("mousedown",this._onMapMouseDownNative,!0),window.removeEventListener("resize",this._onWindowResize),window.removeEventListener("keydown",this._onKeyDownCapture),window.removeEventListener("mouseup",this._onChildMouseUp,!1),this.props.resetBoundsOnResize&&(t=this._mapDomResizeCallback,e=(e=o).parentNode,V?e.detachEvent("onresize",t):(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),e.__resizeListeners__.length||(e.removeEventListener("scroll",X),e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)))),this.overlay_&&this.overlay_.setMap(null),this.maps_&&this.map_&&this.props.shouldUnregisterMapOnUnmount&&(this.map_.setOptions({scrollwheel:!1}),this.maps_.event.clearInstanceListeners(this.map_)),this.props.shouldUnregisterMapOnUnmount&&(this.map_=null,this.maps_=null),this.markersDispatcher_.dispose(),this.resetSizeOnIdle_=!1,this.props.shouldUnregisterMapOnUnmount&&(delete this.map_,delete this.markersDispatcher_)},r.render=function(){var t=this.state.overlay,o=t?null:react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C,{experimental:this.props.experimental,onChildClick:this._onChildClick,onChildMouseDown:this._onChildMouseDown,onChildMouseEnter:this._onChildMouseEnter,onChildMouseLeave:this._onChildMouseLeave,geoService:this.geoService_,insideMapPanes:!1,distanceToMouse:this.props.distanceToMouse,getHoverDistance:this._getHoverDistance,dispatcher:this.markersDispatcher_});return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:this.props.style,onMouseMove:this._onMapMouseMove,onMouseDownCapture:this._onMapMouseDownCapture,onClick:this._onMapClick},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(h,{registerChild:this._registerChild}),pe&&t&&le(this._renderPortal(),t),o)},o}(react__WEBPACK_IMPORTED_MODULE_0__.Component);function de(e){var t=e.lng,o=Math.sin(e.lat*Math.PI/180),n=t/360+.5,r=.5-.25*Math.log((1+o)/(1-o))/Math.PI;return{x:n,y:r=r<0?0:r>1?1:r}}function me(e){var t=e.x,o=Math.PI-2*Math.PI*e.y;return{lat:180/Math.PI*Math.atan(.5*(Math.exp(o)-Math.exp(-o))),lng:360*t-180}}function ge(e,t,o,n){var r=de(e),i=de(t),s=r.x<i.x?i.x-r.x:1-r.x+i.x,a=i.y-r.y;if(s<=0&&a<=0)return null;var p=P(o/256/Math.abs(s)),l=P(n/256/Math.abs(a)),u=Math.floor(1e-9+Math.min(p,l)),h={x:r.x<i.x?.5*(r.x+i.x):r.x+i.x-1>0?.5*(r.x+i.x-1):.5*(1+r.x+i.x),y:.5*(r.y+i.y)},c=Math.pow(2,u),d=o/c/256/2,m=n/c/256/2,g=me({x:h.x-d,y:h.y-m}),_=me({x:h.x+d,y:h.y+m});return{center:me(h),zoom:u,newBounds:{nw:g,se:_}}}function _e(e){var t=e.ne,o=e.sw;return{nw:{lat:t.lat,lng:o.lng},se:{lat:o.lat,lng:t.lng}}}function fe(e){var t=e.nw,o=e.se;return{ne:{lat:t.lat,lng:o.lng},sw:{lat:o.lat,lng:t.lng}}}function ve(e,t){var o,n=e.nw,r=e.se,i=e.ne,s=e.sw,p=t.width,l=t.height;if(n&&r)o=ge(n,r,p,l);else{var u=_e({ne:i,sw:s});o=ge(u.nw,u.se,p,l)}return a({},o,{newBounds:a({},o.newBounds,fe(o.newBounds))})}function Me(e,t,o){var n=function(e,t){var o=function(e,t){var o,n=t.lat,r=t.lng,i=(o=n*Math.PI/180,{metersPerLatDegree:111132.92-559.82*Math.cos(2*o)+1.175*Math.cos(4*o)-.0023*Math.cos(6*o),metersPerLngDegree:111412.84*Math.cos(o)-93.5*Math.cos(3*o)+.118*Math.cos(5*o)}),s=.5*e/i.metersPerLatDegree,a=.5*e/i.metersPerLngDegree;return{nw:{lat:n-s,lng:r-a},se:{lat:n+s,lng:r+a}}}(e,{lat:t.lat,lng:t.lng}),n=o.se,r=de(o.nw),i=de(n);return{w:Math.abs(i.x-r.x),h:Math.abs(i.y-r.y)}}(e,{lat:t.lat,lng:t.lng}),r=n.w,i=n.h,s=Math.pow(2,o);return{w:r*s*256,h:i*s*256}}function ye(e,t){var o=e.x,n=Math.PI-2*Math.PI*e.y/Math.pow(2,t);return{lat:180/Math.PI*Math.atan(.5*(Math.exp(n)-Math.exp(-n))),lng:o/Math.pow(2,t)*360-180}}function Ce(e,t){var o=de({lat:e.lat,lng:e.lng}),n=Math.pow(2,t);return{x:Math.floor(o.x*n),y:Math.floor(o.y*n)}}function we(e,t){for(var o=e.from,n=e.to,r=Math.pow(2,t),i=[],s=o.x;s!==(n.x+1)%r;s=(s+1)%r)for(var a=o.y;a!==(n.y+1)%r;a=(a+1)%r)i.push([t,s,a]);return i}ce.propTypes={apiKey:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),bootstrapURLKeys:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().any),defaultCenter:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().array),prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({lat:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().number),lng:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().number)})]),center:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().array),prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({lat:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().number),lng:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().number)})]),defaultZoom:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().number),zoom:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().number),onBoundsChange:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),onChange:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),onClick:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),onChildClick:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),onChildMouseDown:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),onChildMouseUp:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),onChildMouseMove:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),onChildMouseEnter:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),onChildMouseLeave:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),onZoomAnimationStart:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),onZoomAnimationEnd:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),onDrag:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),onDragEnd:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),onMapTypeIdChange:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),onTilesLoaded:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),options:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().any),distanceToMouse:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),hoverDistance:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().number),debounced:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),margin:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().array),googleMapLoader:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().any),onGoogleApiLoaded:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),yesIWantToUseGoogleMapApiInternals:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),draggable:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),style:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().any),resetBoundsOnResize:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),layerTypes:prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)),shouldUnregisterMapOnUnmount:(prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool)},ce.defaultProps={distanceToMouse:function(e,t){return Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y))},hoverDistance:30,debounced:!0,options:function(){return{overviewMapControl:!1,streetViewControl:!1,rotateControl:!0,mapTypeControl:!1,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}],minZoom:3}},googleMapLoader:O,yesIWantToUseGoogleMapApiInternals:!1,style:{width:"100%",height:"100%",margin:0,padding:0,position:"relative"},layerTypes:[],heatmap:{},heatmapLibrary:!1,shouldUnregisterMapOnUnmount:!0},ce.googleMapLoader=O;/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ce);
//# sourceMappingURL=index.modern.js.map


/***/ }),

/***/ "./node_modules/rc-tabs/es/TabContext.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-tabs/es/TabContext.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null));

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabNavList/AddButton.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-tabs/es/TabNavList/AddButton.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function AddButton(_ref, ref) {
  var prefixCls = _ref.prefixCls,
    editable = _ref.editable,
    locale = _ref.locale,
    style = _ref.style;
  if (!editable || editable.showAdd === false) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    ref: ref,
    type: "button",
    className: "".concat(prefixCls, "-nav-add"),
    style: style,
    "aria-label": (locale === null || locale === void 0 ? void 0 : locale.addAriaLabel) || 'Add tab',
    onClick: function onClick(event) {
      editable.onEdit('add', {
        event: event
      });
    }
  }, editable.addIcon || '+');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(AddButton));

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabNavList/ExtraContent.js":
/*!************************************************************!*\
  !*** ./node_modules/rc-tabs/es/TabNavList/ExtraContent.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var ExtraContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (_ref, ref) {
  var position = _ref.position,
    prefixCls = _ref.prefixCls,
    extra = _ref.extra;
  if (!extra) return null;
  var content;

  // Parse extra
  var assertExtra = {};
  if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(extra) === 'object' && ! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.isValidElement(extra)) {
    assertExtra = extra;
  } else {
    assertExtra.right = extra;
  }
  if (position === 'right') {
    content = assertExtra.right;
  }
  if (position === 'left') {
    content = assertExtra.left;
  }
  return content ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "".concat(prefixCls, "-extra-content"),
    ref: ref
  }, content) : null;
});
if (true) {
  ExtraContent.displayName = 'ExtraContent';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExtraContent);

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabNavList/OperationNode.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-tabs/es/TabNavList/OperationNode.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-dropdown */ "./node_modules/rc-dropdown/es/index.js");
/* harmony import */ var rc_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-menu */ "./node_modules/rc-menu/es/index.js");
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _AddButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AddButton */ "./node_modules/rc-tabs/es/TabNavList/AddButton.js");









function OperationNode(_ref, ref) {
  var prefixCls = _ref.prefixCls,
    id = _ref.id,
    tabs = _ref.tabs,
    locale = _ref.locale,
    mobile = _ref.mobile,
    _ref$moreIcon = _ref.moreIcon,
    moreIcon = _ref$moreIcon === void 0 ? 'More' : _ref$moreIcon,
    moreTransitionName = _ref.moreTransitionName,
    style = _ref.style,
    className = _ref.className,
    editable = _ref.editable,
    tabBarGutter = _ref.tabBarGutter,
    rtl = _ref.rtl,
    removeAriaLabel = _ref.removeAriaLabel,
    onTabClick = _ref.onTabClick,
    getPopupContainer = _ref.getPopupContainer,
    popupClassName = _ref.popupClassName;
  // ======================== Dropdown ========================
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
    _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null),
    _useState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
    selectedKey = _useState4[0],
    setSelectedKey = _useState4[1];
  var popupId = "".concat(id, "-more-popup");
  var dropdownPrefix = "".concat(prefixCls, "-dropdown");
  var selectedItemId = selectedKey !== null ? "".concat(popupId, "-").concat(selectedKey) : null;
  var dropdownAriaLabel = locale === null || locale === void 0 ? void 0 : locale.dropdownAriaLabel;
  function onRemoveTab(event, key) {
    event.preventDefault();
    event.stopPropagation();
    editable.onEdit('remove', {
      key: key,
      event: event
    });
  }
  var menu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(rc_menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: function onClick(_ref2) {
      var key = _ref2.key,
        domEvent = _ref2.domEvent;
      onTabClick(key, domEvent);
      setOpen(false);
    },
    prefixCls: "".concat(dropdownPrefix, "-menu"),
    id: popupId,
    tabIndex: -1,
    role: "listbox",
    "aria-activedescendant": selectedItemId,
    selectedKeys: [selectedKey],
    "aria-label": dropdownAriaLabel !== undefined ? dropdownAriaLabel : 'expanded dropdown'
  }, tabs.map(function (tab) {
    var removable = editable && tab.closable !== false && !tab.disabled;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(rc_menu__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
      key: tab.key,
      id: "".concat(popupId, "-").concat(tab.key),
      role: "option",
      "aria-controls": id && "".concat(id, "-panel-").concat(tab.key),
      disabled: tab.disabled
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, tab.label), removable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("button", {
      type: "button",
      "aria-label": removeAriaLabel || 'remove',
      tabIndex: 0,
      className: "".concat(dropdownPrefix, "-menu-item-remove"),
      onClick: function onClick(e) {
        e.stopPropagation();
        onRemoveTab(e, tab.key);
      }
    }, tab.closeIcon || editable.removeIcon || '×'));
  }));
  function selectOffset(offset) {
    var enabledTabs = tabs.filter(function (tab) {
      return !tab.disabled;
    });
    var selectedIndex = enabledTabs.findIndex(function (tab) {
      return tab.key === selectedKey;
    }) || 0;
    var len = enabledTabs.length;
    for (var i = 0; i < len; i += 1) {
      selectedIndex = (selectedIndex + offset + len) % len;
      var tab = enabledTabs[selectedIndex];
      if (!tab.disabled) {
        setSelectedKey(tab.key);
        return;
      }
    }
  }
  function onKeyDown(e) {
    var which = e.which;
    if (!open) {
      if ([rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__["default"].DOWN, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__["default"].SPACE, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__["default"].ENTER].includes(which)) {
        setOpen(true);
        e.preventDefault();
      }
      return;
    }
    switch (which) {
      case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__["default"].UP:
        selectOffset(-1);
        e.preventDefault();
        break;
      case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__["default"].DOWN:
        selectOffset(1);
        e.preventDefault();
        break;
      case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__["default"].ESC:
        setOpen(false);
        break;
      case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__["default"].SPACE:
      case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__["default"].ENTER:
        if (selectedKey !== null) onTabClick(selectedKey, e);
        break;
    }
  }

  // ========================= Effect =========================
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    // We use query element here to avoid React strict warning
    var ele = document.getElementById(selectedItemId);
    if (ele && ele.scrollIntoView) {
      ele.scrollIntoView(false);
    }
  }, [selectedKey]);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    if (!open) {
      setSelectedKey(null);
    }
  }, [open]);

  // ========================= Render =========================
  var moreStyle = (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rtl ? 'marginRight' : 'marginLeft', tabBarGutter);
  if (!tabs.length) {
    moreStyle.visibility = 'hidden';
    moreStyle.order = 1;
  }
  var overlayClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(dropdownPrefix, "-rtl"), rtl));
  var moreNode = mobile ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(rc_dropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
    prefixCls: dropdownPrefix,
    overlay: menu,
    trigger: ['hover'],
    visible: tabs.length ? open : false,
    transitionName: moreTransitionName,
    onVisibleChange: setOpen,
    overlayClassName: classnames__WEBPACK_IMPORTED_MODULE_2___default()(overlayClassName, popupClassName),
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    getPopupContainer: getPopupContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("button", {
    type: "button",
    className: "".concat(prefixCls, "-nav-more"),
    style: moreStyle,
    tabIndex: -1,
    "aria-hidden": "true",
    "aria-haspopup": "listbox",
    "aria-controls": popupId,
    id: "".concat(id, "-more"),
    "aria-expanded": open,
    onKeyDown: onKeyDown
  }, moreIcon));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("".concat(prefixCls, "-nav-operations"), className),
    style: style,
    ref: ref
  }, moreNode, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_AddButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    prefixCls: prefixCls,
    locale: locale,
    editable: editable
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.memo( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.forwardRef(OperationNode), function (_, next) {
  return (
    // https://github.com/ant-design/ant-design/issues/32544
    // We'd better remove syntactic sugar in `rc-menu` since this has perf issue
    next.tabMoving
  );
}));

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabNavList/TabNode.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-tabs/es/TabNavList/TabNode.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util */ "./node_modules/rc-tabs/es/util.js");





function TabNode(_ref) {
  var _classNames;
  var prefixCls = _ref.prefixCls,
    id = _ref.id,
    active = _ref.active,
    _ref$tab = _ref.tab,
    key = _ref$tab.key,
    label = _ref$tab.label,
    disabled = _ref$tab.disabled,
    closeIcon = _ref$tab.closeIcon,
    closable = _ref.closable,
    renderWrapper = _ref.renderWrapper,
    removeAriaLabel = _ref.removeAriaLabel,
    editable = _ref.editable,
    onClick = _ref.onClick,
    onFocus = _ref.onFocus,
    style = _ref.style;
  var tabPrefix = "".concat(prefixCls, "-tab");
  var removable = editable && closable !== false && !disabled;
  function onInternalClick(e) {
    if (disabled) {
      return;
    }
    onClick(e);
  }
  function onRemoveTab(event) {
    event.preventDefault();
    event.stopPropagation();
    editable.onEdit('remove', {
      key: key,
      event: event
    });
  }
  var node = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    key: key
    // ref={ref}
    ,
    "data-node-key": (0,_util__WEBPACK_IMPORTED_MODULE_4__.genDataNodeKey)(key),
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(tabPrefix, (_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(tabPrefix, "-with-remove"), removable), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(tabPrefix, "-active"), active), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(tabPrefix, "-disabled"), disabled), _classNames)),
    style: style,
    onClick: onInternalClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    role: "tab",
    "aria-selected": active,
    id: id && "".concat(id, "-tab-").concat(key),
    className: "".concat(tabPrefix, "-btn"),
    "aria-controls": id && "".concat(id, "-panel-").concat(key),
    "aria-disabled": disabled,
    tabIndex: disabled ? null : 0,
    onClick: function onClick(e) {
      e.stopPropagation();
      onInternalClick(e);
    },
    onKeyDown: function onKeyDown(e) {
      if ([rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].SPACE, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].ENTER].includes(e.which)) {
        e.preventDefault();
        onInternalClick(e);
      }
    },
    onFocus: onFocus
  }, label), removable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    type: "button",
    "aria-label": removeAriaLabel || 'remove',
    tabIndex: 0,
    className: "".concat(tabPrefix, "-remove"),
    onClick: function onClick(e) {
      e.stopPropagation();
      onRemoveTab(e);
    }
  }, closeIcon || editable.removeIcon || '×'));
  return renderWrapper ? renderWrapper(node) : node;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabNode);

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabNavList/Wrapper.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-tabs/es/TabNavList/Wrapper.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TabNavListWrapper)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./node_modules/rc-tabs/es/TabNavList/index.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TabContext */ "./node_modules/rc-tabs/es/TabContext.js");
/* harmony import */ var _TabPanelList_TabPane__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TabPanelList/TabPane */ "./node_modules/rc-tabs/es/TabPanelList/TabPane.js");



var _excluded = ["renderTabBar"],
  _excluded2 = ["label", "key"];
// zombieJ: To compatible with `renderTabBar` usage.





// We have to create a TabNavList components.
function TabNavListWrapper(_ref) {
  var renderTabBar = _ref.renderTabBar,
    restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded);
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_3__.useContext(_TabContext__WEBPACK_IMPORTED_MODULE_5__["default"]),
    tabs = _React$useContext.tabs;
  if (renderTabBar) {
    var tabNavBarProps = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, restProps), {}, {
      // Legacy support. We do not use this actually
      panes: tabs.map(function (_ref2) {
        var label = _ref2.label,
          key = _ref2.key,
          restTabProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, _excluded2);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_TabPanelList_TabPane__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          tab: label,
          key: key,
          tabKey: key
        }, restTabProps));
      })
    });
    return renderTabBar(tabNavBarProps, ___WEBPACK_IMPORTED_MODULE_4__["default"]);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(___WEBPACK_IMPORTED_MODULE_4__["default"], restProps);
}

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabNavList/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-tabs/es/TabNavList/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_resize_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-resize-observer */ "./node_modules/rc-resize-observer/es/index.js");
/* harmony import */ var rc_util_es_hooks_useEvent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/hooks/useEvent */ "./node_modules/rc-util/es/hooks/useEvent.js");
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-util/es/ref */ "./node_modules/rc-util/es/ref.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _hooks_useOffsets__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../hooks/useOffsets */ "./node_modules/rc-tabs/es/hooks/useOffsets.js");
/* harmony import */ var _hooks_useSyncState__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/useSyncState */ "./node_modules/rc-tabs/es/hooks/useSyncState.js");
/* harmony import */ var _hooks_useTouchMove__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../hooks/useTouchMove */ "./node_modules/rc-tabs/es/hooks/useTouchMove.js");
/* harmony import */ var _hooks_useUpdate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../hooks/useUpdate */ "./node_modules/rc-tabs/es/hooks/useUpdate.js");
/* harmony import */ var _hooks_useVisibleRange__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../hooks/useVisibleRange */ "./node_modules/rc-tabs/es/hooks/useVisibleRange.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../TabContext */ "./node_modules/rc-tabs/es/TabContext.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../util */ "./node_modules/rc-tabs/es/util.js");
/* harmony import */ var _AddButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./AddButton */ "./node_modules/rc-tabs/es/TabNavList/AddButton.js");
/* harmony import */ var _ExtraContent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ExtraContent */ "./node_modules/rc-tabs/es/TabNavList/ExtraContent.js");
/* harmony import */ var _OperationNode__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./OperationNode */ "./node_modules/rc-tabs/es/TabNavList/OperationNode.js");
/* harmony import */ var _TabNode__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./TabNode */ "./node_modules/rc-tabs/es/TabNavList/TabNode.js");























var getSize = function getSize(refObj) {
  var _ref = refObj.current || {},
    _ref$offsetWidth = _ref.offsetWidth,
    offsetWidth = _ref$offsetWidth === void 0 ? 0 : _ref$offsetWidth,
    _ref$offsetHeight = _ref.offsetHeight,
    offsetHeight = _ref$offsetHeight === void 0 ? 0 : _ref$offsetHeight;
  return [offsetWidth, offsetHeight];
};

/**
 * Convert `SizeInfo` to unit value. Such as [123, 456] with `top` position get `123`
 */
var getUnitValue = function getUnitValue(size, tabPositionTopOrBottom) {
  return size[tabPositionTopOrBottom ? 0 : 1];
};
function TabNavList(props, ref) {
  var _classNames;
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_10__.useContext(_TabContext__WEBPACK_IMPORTED_MODULE_16__["default"]),
    prefixCls = _React$useContext.prefixCls,
    tabs = _React$useContext.tabs;
  var className = props.className,
    style = props.style,
    id = props.id,
    animated = props.animated,
    activeKey = props.activeKey,
    rtl = props.rtl,
    extra = props.extra,
    editable = props.editable,
    locale = props.locale,
    tabPosition = props.tabPosition,
    tabBarGutter = props.tabBarGutter,
    children = props.children,
    onTabClick = props.onTabClick,
    onTabScroll = props.onTabScroll;
  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_10__.useRef)();
  var extraLeftRef = (0,react__WEBPACK_IMPORTED_MODULE_10__.useRef)();
  var extraRightRef = (0,react__WEBPACK_IMPORTED_MODULE_10__.useRef)();
  var tabsWrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_10__.useRef)();
  var tabListRef = (0,react__WEBPACK_IMPORTED_MODULE_10__.useRef)();
  var operationsRef = (0,react__WEBPACK_IMPORTED_MODULE_10__.useRef)();
  var innerAddButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_10__.useRef)();
  // const [getBtnRef, removeBtnRef] = useRefs<HTMLDivElement>();

  var tabPositionTopOrBottom = tabPosition === 'top' || tabPosition === 'bottom';
  var _useSyncState = (0,_hooks_useSyncState__WEBPACK_IMPORTED_MODULE_12__["default"])(0, function (next, prev) {
      if (tabPositionTopOrBottom && onTabScroll) {
        onTabScroll({
          direction: next > prev ? 'left' : 'right'
        });
      }
    }),
    _useSyncState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useSyncState, 2),
    transformLeft = _useSyncState2[0],
    setTransformLeft = _useSyncState2[1];
  var _useSyncState3 = (0,_hooks_useSyncState__WEBPACK_IMPORTED_MODULE_12__["default"])(0, function (next, prev) {
      if (!tabPositionTopOrBottom && onTabScroll) {
        onTabScroll({
          direction: next > prev ? 'top' : 'bottom'
        });
      }
    }),
    _useSyncState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useSyncState3, 2),
    transformTop = _useSyncState4[0],
    setTransformTop = _useSyncState4[1];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([0, 0]),
    _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
    containerExcludeExtraSize = _useState2[0],
    setContainerExcludeExtraSize = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([0, 0]),
    _useState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
    tabContentSize = _useState4[0],
    setTabContentSize = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([0, 0]),
    _useState6 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState5, 2),
    addSize = _useState6[0],
    setAddSize = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([0, 0]),
    _useState8 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState7, 2),
    operationSize = _useState8[0],
    setOperationSize = _useState8[1];
  var _useUpdateState = (0,_hooks_useUpdate__WEBPACK_IMPORTED_MODULE_14__.useUpdateState)(new Map()),
    _useUpdateState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useUpdateState, 2),
    tabSizes = _useUpdateState2[0],
    setTabSizes = _useUpdateState2[1];
  var tabOffsets = (0,_hooks_useOffsets__WEBPACK_IMPORTED_MODULE_11__["default"])(tabs, tabSizes, tabContentSize[0]);

  // ========================== Unit =========================
  var containerExcludeExtraSizeValue = getUnitValue(containerExcludeExtraSize, tabPositionTopOrBottom);
  var tabContentSizeValue = getUnitValue(tabContentSize, tabPositionTopOrBottom);
  var addSizeValue = getUnitValue(addSize, tabPositionTopOrBottom);
  var operationSizeValue = getUnitValue(operationSize, tabPositionTopOrBottom);
  var needScroll = containerExcludeExtraSizeValue < tabContentSizeValue + addSizeValue;
  var visibleTabContentValue = needScroll ? containerExcludeExtraSizeValue - operationSizeValue : containerExcludeExtraSizeValue - addSizeValue;

  // ========================== Util =========================
  var operationsHiddenClassName = "".concat(prefixCls, "-nav-operations-hidden");
  var transformMin = 0;
  var transformMax = 0;
  if (!tabPositionTopOrBottom) {
    transformMin = Math.min(0, visibleTabContentValue - tabContentSizeValue);
    transformMax = 0;
  } else if (rtl) {
    transformMin = 0;
    transformMax = Math.max(0, tabContentSizeValue - visibleTabContentValue);
  } else {
    transformMin = Math.min(0, visibleTabContentValue - tabContentSizeValue);
    transformMax = 0;
  }
  function alignInRange(value) {
    if (value < transformMin) {
      return transformMin;
    }
    if (value > transformMax) {
      return transformMax;
    }
    return value;
  }

  // ========================= Mobile ========================
  var touchMovingRef = (0,react__WEBPACK_IMPORTED_MODULE_10__.useRef)();
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(),
    _useState10 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState9, 2),
    lockAnimation = _useState10[0],
    setLockAnimation = _useState10[1];
  function doLockAnimation() {
    setLockAnimation(Date.now());
  }
  function clearTouchMoving() {
    window.clearTimeout(touchMovingRef.current);
  }
  (0,_hooks_useTouchMove__WEBPACK_IMPORTED_MODULE_13__["default"])(tabsWrapperRef, function (offsetX, offsetY) {
    function doMove(setState, offset) {
      setState(function (value) {
        var newValue = alignInRange(value + offset);
        return newValue;
      });
    }

    // Skip scroll if place is enough
    if (!needScroll) {
      return false;
    }
    if (tabPositionTopOrBottom) {
      doMove(setTransformLeft, offsetX);
    } else {
      doMove(setTransformTop, offsetY);
    }
    clearTouchMoving();
    doLockAnimation();
    return true;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function () {
    clearTouchMoving();
    if (lockAnimation) {
      touchMovingRef.current = window.setTimeout(function () {
        setLockAnimation(0);
      }, 100);
    }
    return clearTouchMoving;
  }, [lockAnimation]);

  // ===================== Visible Range =====================
  // Render tab node & collect tab offset
  var _useVisibleRange = (0,_hooks_useVisibleRange__WEBPACK_IMPORTED_MODULE_15__["default"])(tabOffsets,
    // Container
    visibleTabContentValue,
    // Transform
    tabPositionTopOrBottom ? transformLeft : transformTop,
    // Tabs
    tabContentSizeValue,
    // Add
    addSizeValue,
    // Operation
    operationSizeValue, (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, props), {}, {
      tabs: tabs
    })),
    _useVisibleRange2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useVisibleRange, 2),
    visibleStart = _useVisibleRange2[0],
    visibleEnd = _useVisibleRange2[1];

  // ========================= Scroll ========================
  var scrollToTab = (0,rc_util_es_hooks_useEvent__WEBPACK_IMPORTED_MODULE_7__["default"])(function () {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : activeKey;
    var tabOffset = tabOffsets.get(key) || {
      width: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0
    };
    if (tabPositionTopOrBottom) {
      // ============ Align with top & bottom ============
      var newTransform = transformLeft;

      // RTL
      if (rtl) {
        if (tabOffset.right < transformLeft) {
          newTransform = tabOffset.right;
        } else if (tabOffset.right + tabOffset.width > transformLeft + visibleTabContentValue) {
          newTransform = tabOffset.right + tabOffset.width - visibleTabContentValue;
        }
      }
      // LTR
      else if (tabOffset.left < -transformLeft) {
        newTransform = -tabOffset.left;
      } else if (tabOffset.left + tabOffset.width > -transformLeft + visibleTabContentValue) {
        newTransform = -(tabOffset.left + tabOffset.width - visibleTabContentValue);
      }
      setTransformTop(0);
      setTransformLeft(alignInRange(newTransform));
    } else {
      // ============ Align with left & right ============
      var _newTransform = transformTop;
      if (tabOffset.top < -transformTop) {
        _newTransform = -tabOffset.top;
      } else if (tabOffset.top + tabOffset.height > -transformTop + visibleTabContentValue) {
        _newTransform = -(tabOffset.top + tabOffset.height - visibleTabContentValue);
      }
      setTransformLeft(0);
      setTransformTop(alignInRange(_newTransform));
    }
  });

  // ========================== Tab ==========================
  var tabNodeStyle = {};
  if (tabPosition === 'top' || tabPosition === 'bottom') {
    tabNodeStyle[rtl ? 'marginRight' : 'marginLeft'] = tabBarGutter;
  } else {
    tabNodeStyle.marginTop = tabBarGutter;
  }
  var tabNodes = tabs.map(function (tab, i) {
    var key = tab.key;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__.createElement(_TabNode__WEBPACK_IMPORTED_MODULE_21__["default"], {
      id: id,
      prefixCls: prefixCls,
      key: key,
      tab: tab
      /* first node should not have margin left */,
      style: i === 0 ? undefined : tabNodeStyle,
      closable: tab.closable,
      editable: editable,
      active: key === activeKey,
      renderWrapper: children,
      removeAriaLabel: locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
      onClick: function onClick(e) {
        onTabClick(key, e);
      },
      onFocus: function onFocus() {
        scrollToTab(key);
        doLockAnimation();
        if (!tabsWrapperRef.current) {
          return;
        }
        // Focus element will make scrollLeft change which we should reset back
        if (!rtl) {
          tabsWrapperRef.current.scrollLeft = 0;
        }
        tabsWrapperRef.current.scrollTop = 0;
      }
    });
  });

  // Update buttons records
  var updateTabSizes = function updateTabSizes() {
    return setTabSizes(function () {
      var newSizes = new Map();
      tabs.forEach(function (_ref2) {
        var _tabListRef$current;
        var key = _ref2.key;
        var btnNode = (_tabListRef$current = tabListRef.current) === null || _tabListRef$current === void 0 ? void 0 : _tabListRef$current.querySelector("[data-node-key=\"".concat((0,_util__WEBPACK_IMPORTED_MODULE_17__.genDataNodeKey)(key), "\"]"));
        if (btnNode) {
          newSizes.set(key, {
            width: btnNode.offsetWidth,
            height: btnNode.offsetHeight,
            left: btnNode.offsetLeft,
            top: btnNode.offsetTop
          });
        }
      });
      return newSizes;
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function () {
    updateTabSizes();
  }, [tabs.map(function (tab) {
    return tab.key;
  }).join('_')]);
  var onListHolderResize = (0,_hooks_useUpdate__WEBPACK_IMPORTED_MODULE_14__["default"])(function () {
    // Update wrapper records
    var containerSize = getSize(containerRef);
    var extraLeftSize = getSize(extraLeftRef);
    var extraRightSize = getSize(extraRightRef);
    setContainerExcludeExtraSize([containerSize[0] - extraLeftSize[0] - extraRightSize[0], containerSize[1] - extraLeftSize[1] - extraRightSize[1]]);
    var newAddSize = getSize(innerAddButtonRef);
    setAddSize(newAddSize);
    var newOperationSize = getSize(operationsRef);
    setOperationSize(newOperationSize);

    // Which includes add button size
    var tabContentFullSize = getSize(tabListRef);
    setTabContentSize([tabContentFullSize[0] - newAddSize[0], tabContentFullSize[1] - newAddSize[1]]);

    // Update buttons records
    updateTabSizes();
  });

  // ======================== Dropdown =======================
  var startHiddenTabs = tabs.slice(0, visibleStart);
  var endHiddenTabs = tabs.slice(visibleEnd + 1);
  var hiddenTabs = [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(startHiddenTabs), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(endHiddenTabs));

  // =================== Link & Operations ===================
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(),
    _useState12 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState11, 2),
    inkStyle = _useState12[0],
    setInkStyle = _useState12[1];
  var activeTabOffset = tabOffsets.get(activeKey);

  // Delay set ink style to avoid remove tab blink
  var inkBarRafRef = (0,react__WEBPACK_IMPORTED_MODULE_10__.useRef)();
  function cleanInkBarRaf() {
    rc_util_es_raf__WEBPACK_IMPORTED_MODULE_8__["default"].cancel(inkBarRafRef.current);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function () {
    var newInkStyle = {};
    if (activeTabOffset) {
      if (tabPositionTopOrBottom) {
        if (rtl) {
          newInkStyle.right = activeTabOffset.right;
        } else {
          newInkStyle.left = activeTabOffset.left;
        }
        newInkStyle.width = activeTabOffset.width;
      } else {
        newInkStyle.top = activeTabOffset.top;
        newInkStyle.height = activeTabOffset.height;
      }
    }
    cleanInkBarRaf();
    inkBarRafRef.current = (0,rc_util_es_raf__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
      setInkStyle(newInkStyle);
    });
    return cleanInkBarRaf;
  }, [activeTabOffset, tabPositionTopOrBottom, rtl]);

  // ========================= Effect ========================
  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function () {
    scrollToTab();
    // eslint-disable-next-line
  }, [activeKey, transformMin, transformMax, (0,_util__WEBPACK_IMPORTED_MODULE_17__.stringify)(activeTabOffset), (0,_util__WEBPACK_IMPORTED_MODULE_17__.stringify)(tabOffsets), tabPositionTopOrBottom]);

  // Should recalculate when rtl changed
  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function () {
    onListHolderResize();
    // eslint-disable-next-line
  }, [rtl]);

  // ========================= Render ========================
  var hasDropdown = !!hiddenTabs.length;
  var wrapPrefix = "".concat(prefixCls, "-nav-wrap");
  var pingLeft;
  var pingRight;
  var pingTop;
  var pingBottom;
  if (tabPositionTopOrBottom) {
    if (rtl) {
      pingRight = transformLeft > 0;
      pingLeft = transformLeft !== transformMax;
    } else {
      pingLeft = transformLeft < 0;
      pingRight = transformLeft !== transformMin;
    }
  } else {
    pingTop = transformTop < 0;
    pingBottom = transformTop !== transformMin;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__.createElement(rc_resize_observer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onResize: onListHolderResize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__.createElement("div", {
    ref: (0,rc_util_es_ref__WEBPACK_IMPORTED_MODULE_9__.useComposeRef)(ref, containerRef),
    role: "tablist",
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("".concat(prefixCls, "-nav"), className),
    style: style,
    onKeyDown: function onKeyDown() {
      // No need animation when use keyboard
      doLockAnimation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__.createElement(_ExtraContent__WEBPACK_IMPORTED_MODULE_19__["default"], {
    ref: extraLeftRef,
    position: "left",
    extra: extra,
    prefixCls: prefixCls
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(wrapPrefix, (_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(wrapPrefix, "-ping-left"), pingLeft), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(wrapPrefix, "-ping-right"), pingRight), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(wrapPrefix, "-ping-top"), pingTop), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(wrapPrefix, "-ping-bottom"), pingBottom), _classNames)),
    ref: tabsWrapperRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__.createElement(rc_resize_observer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onResize: onListHolderResize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__.createElement("div", {
    ref: tabListRef,
    className: "".concat(prefixCls, "-nav-list"),
    style: {
      transform: "translate(".concat(transformLeft, "px, ").concat(transformTop, "px)"),
      transition: lockAnimation ? 'none' : undefined
    }
  }, tabNodes, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__.createElement(_AddButton__WEBPACK_IMPORTED_MODULE_18__["default"], {
    ref: innerAddButtonRef,
    prefixCls: prefixCls,
    locale: locale,
    editable: editable,
    style: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, tabNodes.length === 0 ? undefined : tabNodeStyle), {}, {
      visibility: hasDropdown ? 'hidden' : null
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("".concat(prefixCls, "-ink-bar"), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "".concat(prefixCls, "-ink-bar-animated"), animated.inkBar)),
    style: inkStyle
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__.createElement(_OperationNode__WEBPACK_IMPORTED_MODULE_20__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    removeAriaLabel: locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
    ref: operationsRef,
    prefixCls: prefixCls,
    tabs: hiddenTabs,
    className: !hasDropdown && operationsHiddenClassName,
    tabMoving: !!lockAnimation
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__.createElement(_ExtraContent__WEBPACK_IMPORTED_MODULE_19__["default"], {
    ref: extraRightRef,
    position: "right",
    extra: extra,
    prefixCls: prefixCls
  })));
  /* eslint-enable */
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__.forwardRef(TabNavList));

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabPanelList/TabPane.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-tabs/es/TabPanelList/TabPane.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


var TabPane = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (_ref, ref) {
  var prefixCls = _ref.prefixCls,
    className = _ref.className,
    style = _ref.style,
    id = _ref.id,
    active = _ref.active,
    tabKey = _ref.tabKey,
    children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: id && "".concat(id, "-panel-").concat(tabKey),
    role: "tabpanel",
    tabIndex: active ? 0 : -1,
    "aria-labelledby": id && "".concat(id, "-tab-").concat(tabKey),
    "aria-hidden": !active,
    style: style,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, active && "".concat(prefixCls, "-active"), className),
    ref: ref
  }, children);
});
if (true) {
  TabPane.displayName = 'TabPane';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabPane);

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabPanelList/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-tabs/es/TabPanelList/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TabPanelList)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-motion */ "./node_modules/rc-motion/es/index.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../TabContext */ "./node_modules/rc-tabs/es/TabContext.js");
/* harmony import */ var _TabPane__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TabPane */ "./node_modules/rc-tabs/es/TabPanelList/TabPane.js");




var _excluded = ["key", "forceRender", "style", "className"];





function TabPanelList(_ref) {
  var id = _ref.id,
    activeKey = _ref.activeKey,
    animated = _ref.animated,
    tabPosition = _ref.tabPosition,
    destroyInactiveTabPane = _ref.destroyInactiveTabPane;
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_4__.useContext(_TabContext__WEBPACK_IMPORTED_MODULE_7__["default"]),
    prefixCls = _React$useContext.prefixCls,
    tabs = _React$useContext.tabs;
  var tabPaneAnimated = animated.tabPane;
  var tabPanePrefixCls = "".concat(prefixCls, "-tabpane");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("".concat(prefixCls, "-content-holder"))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("".concat(prefixCls, "-content"), "".concat(prefixCls, "-content-").concat(tabPosition), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, "".concat(prefixCls, "-content-animated"), tabPaneAnimated))
  }, tabs.map(function (_ref2) {
    var key = _ref2.key,
      forceRender = _ref2.forceRender,
      paneStyle = _ref2.style,
      paneClassName = _ref2.className,
      restTabProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, _excluded);
    var active = key === activeKey;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(rc_motion__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: key,
      visible: active,
      forceRender: forceRender,
      removeOnLeave: !!destroyInactiveTabPane,
      leavedClassName: "".concat(tabPanePrefixCls, "-hidden")
    }, animated.tabPaneMotion), function (_ref3, ref) {
      var motionStyle = _ref3.style,
        motionClassName = _ref3.className;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_TabPane__WEBPACK_IMPORTED_MODULE_8__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restTabProps, {
        prefixCls: tabPanePrefixCls,
        id: id,
        tabKey: key,
        animated: tabPaneAnimated,
        active: active,
        style: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, paneStyle), motionStyle),
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(paneClassName, motionClassName),
        ref: ref
      }));
    });
  })));
}

/***/ }),

/***/ "./node_modules/rc-tabs/es/Tabs.js":
/*!*****************************************!*\
  !*** ./node_modules/rc-tabs/es/Tabs.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_util_es_isMobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-util/es/isMobile */ "./node_modules/rc-util/es/isMobile.js");
/* harmony import */ var rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-util/es/hooks/useMergedState */ "./node_modules/rc-util/es/hooks/useMergedState.js");
/* harmony import */ var _TabPanelList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TabPanelList */ "./node_modules/rc-tabs/es/TabPanelList/index.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TabContext */ "./node_modules/rc-tabs/es/TabContext.js");
/* harmony import */ var _TabNavList_Wrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TabNavList/Wrapper */ "./node_modules/rc-tabs/es/TabNavList/Wrapper.js");
/* harmony import */ var _hooks_useAnimateConfig__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hooks/useAnimateConfig */ "./node_modules/rc-tabs/es/hooks/useAnimateConfig.js");






var _excluded = ["id", "prefixCls", "className", "items", "direction", "activeKey", "defaultActiveKey", "editable", "animated", "tabPosition", "tabBarGutter", "tabBarStyle", "tabBarExtraContent", "locale", "moreIcon", "moreTransitionName", "destroyInactiveTabPane", "renderTabBar", "onChange", "onTabClick", "onTabScroll", "getPopupContainer", "popupClassName"];
// Accessibility https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role










/**
 * Should added antd:
 * - type
 *
 * Removed:
 * - onNextClick
 * - onPrevClick
 * - keyboard
 */

// Used for accessibility
var uuid = 0;
function Tabs(_ref, ref) {
  var _classNames;
  var id = _ref.id,
    _ref$prefixCls = _ref.prefixCls,
    prefixCls = _ref$prefixCls === void 0 ? 'rc-tabs' : _ref$prefixCls,
    className = _ref.className,
    items = _ref.items,
    direction = _ref.direction,
    activeKey = _ref.activeKey,
    defaultActiveKey = _ref.defaultActiveKey,
    editable = _ref.editable,
    animated = _ref.animated,
    _ref$tabPosition = _ref.tabPosition,
    tabPosition = _ref$tabPosition === void 0 ? 'top' : _ref$tabPosition,
    tabBarGutter = _ref.tabBarGutter,
    tabBarStyle = _ref.tabBarStyle,
    tabBarExtraContent = _ref.tabBarExtraContent,
    locale = _ref.locale,
    moreIcon = _ref.moreIcon,
    moreTransitionName = _ref.moreTransitionName,
    destroyInactiveTabPane = _ref.destroyInactiveTabPane,
    renderTabBar = _ref.renderTabBar,
    onChange = _ref.onChange,
    onTabClick = _ref.onTabClick,
    onTabScroll = _ref.onTabScroll,
    getPopupContainer = _ref.getPopupContainer,
    popupClassName = _ref.popupClassName,
    restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__["default"])(_ref, _excluded);
  var tabs = react__WEBPACK_IMPORTED_MODULE_6__.useMemo(function () {
    return (items || []).filter(function (item) {
      return item && (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__["default"])(item) === 'object' && 'key' in item;
    });
  }, [items]);
  var rtl = direction === 'rtl';
  var mergedAnimated = (0,_hooks_useAnimateConfig__WEBPACK_IMPORTED_MODULE_13__["default"])(animated);

  // ======================== Mobile ========================
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
    _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    mobile = _useState2[0],
    setMobile = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    // Only update on the client side
    setMobile((0,rc_util_es_isMobile__WEBPACK_IMPORTED_MODULE_8__["default"])());
  }, []);

  // ====================== Active Key ======================
  var _useMergedState = (0,rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_9__["default"])(function () {
      var _tabs$;
      return (_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key;
    }, {
      value: activeKey,
      defaultValue: defaultActiveKey
    }),
    _useMergedState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useMergedState, 2),
    mergedActiveKey = _useMergedState2[0],
    setMergedActiveKey = _useMergedState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(function () {
      return tabs.findIndex(function (tab) {
        return tab.key === mergedActiveKey;
      });
    }),
    _useState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
    activeIndex = _useState4[0],
    setActiveIndex = _useState4[1];

  // Reset active key if not exist anymore
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    var newActiveIndex = tabs.findIndex(function (tab) {
      return tab.key === mergedActiveKey;
    });
    if (newActiveIndex === -1) {
      var _tabs$newActiveIndex;
      newActiveIndex = Math.max(0, Math.min(activeIndex, tabs.length - 1));
      setMergedActiveKey((_tabs$newActiveIndex = tabs[newActiveIndex]) === null || _tabs$newActiveIndex === void 0 ? void 0 : _tabs$newActiveIndex.key);
    }
    setActiveIndex(newActiveIndex);
  }, [tabs.map(function (tab) {
    return tab.key;
  }).join('_'), mergedActiveKey, activeIndex]);

  // ===================== Accessibility ====================
  var _useMergedState3 = (0,rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_9__["default"])(null, {
      value: id
    }),
    _useMergedState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useMergedState3, 2),
    mergedId = _useMergedState4[0],
    setMergedId = _useMergedState4[1];

  // Async generate id to avoid ssr mapping failed
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    if (!id) {
      setMergedId("rc-tabs-".concat( false ? 0 : uuid));
      uuid += 1;
    }
  }, []);

  // ======================== Events ========================
  function onInternalTabClick(key, e) {
    onTabClick === null || onTabClick === void 0 ? void 0 : onTabClick(key, e);
    var isActiveChanged = key !== mergedActiveKey;
    setMergedActiveKey(key);
    if (isActiveChanged) {
      onChange === null || onChange === void 0 ? void 0 : onChange(key);
    }
  }

  // ======================== Render ========================
  var sharedProps = {
    id: mergedId,
    activeKey: mergedActiveKey,
    animated: mergedAnimated,
    tabPosition: tabPosition,
    rtl: rtl,
    mobile: mobile
  };
  var tabNavBar;
  var tabNavBarProps = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, sharedProps), {}, {
    editable: editable,
    locale: locale,
    moreIcon: moreIcon,
    moreTransitionName: moreTransitionName,
    tabBarGutter: tabBarGutter,
    onTabClick: onInternalTabClick,
    onTabScroll: onTabScroll,
    extra: tabBarExtraContent,
    style: tabBarStyle,
    panes: null,
    getPopupContainer: getPopupContainer,
    popupClassName: popupClassName
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_TabContext__WEBPACK_IMPORTED_MODULE_11__["default"].Provider, {
    value: {
      tabs: tabs,
      prefixCls: prefixCls
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    id: id,
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(prefixCls, "".concat(prefixCls, "-").concat(tabPosition), (_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-mobile"), mobile), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-editable"), editable), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-rtl"), rtl), _classNames), className)
  }, restProps), tabNavBar, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_TabNavList_Wrapper__WEBPACK_IMPORTED_MODULE_12__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, tabNavBarProps, {
    renderTabBar: renderTabBar
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_TabPanelList__WEBPACK_IMPORTED_MODULE_10__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    destroyInactiveTabPane: destroyInactiveTabPane
  }, sharedProps, {
    animated: mergedAnimated
  }))));
}
var ForwardTabs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.forwardRef(Tabs);
if (true) {
  ForwardTabs.displayName = 'Tabs';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardTabs);

/***/ }),

/***/ "./node_modules/rc-tabs/es/hooks/useAnimateConfig.js":
/*!***********************************************************!*\
  !*** ./node_modules/rc-tabs/es/hooks/useAnimateConfig.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useAnimateConfig)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/warning */ "./node_modules/rc-util/es/warning.js");



function useAnimateConfig() {
  var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    inkBar: true,
    tabPane: false
  };
  var mergedAnimated;
  if (animated === false) {
    mergedAnimated = {
      inkBar: false,
      tabPane: false
    };
  } else if (animated === true) {
    mergedAnimated = {
      inkBar: true,
      tabPane: false
    };
  } else {
    mergedAnimated = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({
      inkBar: true
    }, (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(animated) === 'object' ? animated : {});
  }

  // Enable tabPane animation if provide motion
  if (mergedAnimated.tabPaneMotion && mergedAnimated.tabPane === undefined) {
    mergedAnimated.tabPane = true;
  }
  if (!mergedAnimated.tabPaneMotion && mergedAnimated.tabPane) {
    if (true) {
      (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, '`animated.tabPane` is true but `animated.tabPaneMotion` is not provided. Motion will not work.');
    }
    mergedAnimated.tabPane = false;
  }
  return mergedAnimated;
}

/***/ }),

/***/ "./node_modules/rc-tabs/es/hooks/useOffsets.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-tabs/es/hooks/useOffsets.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useOffsets)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function useOffsets(tabs, tabSizes, holderScrollWidth) {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    var _tabs$;
    var map = new Map();
    var lastOffset = tabSizes.get((_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key) || DEFAULT_SIZE;
    var rightOffset = lastOffset.left + lastOffset.width;
    for (var i = 0; i < tabs.length; i += 1) {
      var key = tabs[i].key;
      var data = tabSizes.get(key);

      // Reuse last one when not exist yet
      if (!data) {
        var _tabs;
        data = tabSizes.get((_tabs = tabs[i - 1]) === null || _tabs === void 0 ? void 0 : _tabs.key) || DEFAULT_SIZE;
      }
      var entity = map.get(key) || (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data);

      // Right
      entity.right = rightOffset - entity.left - entity.width;

      // Update entity
      map.set(key, entity);
    }
    return map;
  }, [tabs.map(function (tab) {
    return tab.key;
  }).join('_'), tabSizes, holderScrollWidth]);
}

/***/ }),

/***/ "./node_modules/rc-tabs/es/hooks/useSyncState.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-tabs/es/hooks/useSyncState.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useSyncState)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useSyncState(defaultState, onChange) {
  var stateRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(defaultState);
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState({}),
    _React$useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
    forceUpdate = _React$useState2[1];
  function setState(updater) {
    var newValue = typeof updater === 'function' ? updater(stateRef.current) : updater;
    if (newValue !== stateRef.current) {
      onChange(newValue, stateRef.current);
    }
    stateRef.current = newValue;
    forceUpdate({});
  }
  return [stateRef.current, setState];
}

/***/ }),

/***/ "./node_modules/rc-tabs/es/hooks/useTouchMove.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-tabs/es/hooks/useTouchMove.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useTouchMove)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var MIN_SWIPE_DISTANCE = 0.1;
var STOP_SWIPE_DISTANCE = 0.01;
var REFRESH_INTERVAL = 20;
var SPEED_OFF_MULTIPLE = Math.pow(0.995, REFRESH_INTERVAL);

// ================================= Hook =================================
function useTouchMove(ref, onOffset) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
    _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    touchPosition = _useState2[0],
    setTouchPosition = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
    lastTimestamp = _useState4[0],
    setLastTimestamp = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState6 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
    lastTimeDiff = _useState6[0],
    setLastTimeDiff = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
    _useState8 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
    lastOffset = _useState8[0],
    setLastOffset = _useState8[1];
  var motionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  // ========================= Events =========================
  // >>> Touch events
  function onTouchStart(e) {
    var _e$touches$ = e.touches[0],
      screenX = _e$touches$.screenX,
      screenY = _e$touches$.screenY;
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    window.clearInterval(motionRef.current);
  }
  function onTouchMove(e) {
    if (!touchPosition) return;
    e.preventDefault();
    var _e$touches$2 = e.touches[0],
      screenX = _e$touches$2.screenX,
      screenY = _e$touches$2.screenY;
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    var offsetX = screenX - touchPosition.x;
    var offsetY = screenY - touchPosition.y;
    onOffset(offsetX, offsetY);
    var now = Date.now();
    setLastTimestamp(now);
    setLastTimeDiff(now - lastTimestamp);
    setLastOffset({
      x: offsetX,
      y: offsetY
    });
  }
  function onTouchEnd() {
    if (!touchPosition) return;
    setTouchPosition(null);
    setLastOffset(null);

    // Swipe if needed
    if (lastOffset) {
      var distanceX = lastOffset.x / lastTimeDiff;
      var distanceY = lastOffset.y / lastTimeDiff;
      var absX = Math.abs(distanceX);
      var absY = Math.abs(distanceY);

      // Skip swipe if low distance
      if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) return;
      var currentX = distanceX;
      var currentY = distanceY;
      motionRef.current = window.setInterval(function () {
        if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
          window.clearInterval(motionRef.current);
          return;
        }
        currentX *= SPEED_OFF_MULTIPLE;
        currentY *= SPEED_OFF_MULTIPLE;
        onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL);
      }, REFRESH_INTERVAL);
    }
  }

  // >>> Wheel event
  var lastWheelDirectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  function onWheel(e) {
    var deltaX = e.deltaX,
      deltaY = e.deltaY;

    // Convert both to x & y since wheel only happened on PC
    var mixed = 0;
    var absX = Math.abs(deltaX);
    var absY = Math.abs(deltaY);
    if (absX === absY) {
      mixed = lastWheelDirectionRef.current === 'x' ? deltaX : deltaY;
    } else if (absX > absY) {
      mixed = deltaX;
      lastWheelDirectionRef.current = 'x';
    } else {
      mixed = deltaY;
      lastWheelDirectionRef.current = 'y';
    }
    if (onOffset(-mixed, -mixed)) {
      e.preventDefault();
    }
  }

  // ========================= Effect =========================
  var touchEventsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  touchEventsRef.current = {
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    onWheel: onWheel
  };
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
    function onProxyTouchStart(e) {
      touchEventsRef.current.onTouchStart(e);
    }
    function onProxyTouchMove(e) {
      touchEventsRef.current.onTouchMove(e);
    }
    function onProxyTouchEnd(e) {
      touchEventsRef.current.onTouchEnd(e);
    }
    function onProxyWheel(e) {
      touchEventsRef.current.onWheel(e);
    }
    document.addEventListener('touchmove', onProxyTouchMove, {
      passive: false
    });
    document.addEventListener('touchend', onProxyTouchEnd, {
      passive: false
    });

    // No need to clean up since element removed
    ref.current.addEventListener('touchstart', onProxyTouchStart, {
      passive: false
    });
    ref.current.addEventListener('wheel', onProxyWheel);
    return function () {
      document.removeEventListener('touchmove', onProxyTouchMove);
      document.removeEventListener('touchend', onProxyTouchEnd);
    };
  }, []);
}

/***/ }),

/***/ "./node_modules/rc-tabs/es/hooks/useUpdate.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-tabs/es/hooks/useUpdate.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useUpdate),
/* harmony export */   useUpdateState: () => (/* binding */ useUpdateState)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var rc_util_es_hooks_useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/hooks/useLayoutEffect */ "./node_modules/rc-util/es/hooks/useLayoutEffect.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Help to merge callback with `useLayoutEffect`.
 * One time will only trigger once.
 */
function useUpdate(callback) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    count = _useState2[0],
    setCount = _useState2[1];
  var effectRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(0);
  var callbackRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  callbackRef.current = callback;

  // Trigger on `useLayoutEffect`
  (0,rc_util_es_hooks_useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__.useLayoutUpdateEffect)(function () {
    var _callbackRef$current;
    (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef);
  }, [count]);

  // Trigger to update count
  return function () {
    if (effectRef.current !== count) {
      return;
    }
    effectRef.current += 1;
    setCount(effectRef.current);
  };
}
function useUpdateState(defaultState) {
  var batchRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)([]);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),
    _useState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
    forceUpdate = _useState4[1];
  var state = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(typeof defaultState === 'function' ? defaultState() : defaultState);
  var flushUpdate = useUpdate(function () {
    var current = state.current;
    batchRef.current.forEach(function (callback) {
      current = callback(current);
    });
    batchRef.current = [];
    state.current = current;
    forceUpdate({});
  });
  function updater(callback) {
    batchRef.current.push(callback);
    flushUpdate();
  }
  return [state.current, updater];
}

/***/ }),

/***/ "./node_modules/rc-tabs/es/hooks/useVisibleRange.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-tabs/es/hooks/useVisibleRange.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useVisibleRange)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
function useVisibleRange(tabOffsets, visibleTabContentValue, transform, tabContentSizeValue, addNodeSizeValue, operationNodeSizeValue, _ref) {
  var tabs = _ref.tabs,
    tabPosition = _ref.tabPosition,
    rtl = _ref.rtl;
  var charUnit;
  var position;
  var transformSize;
  if (['top', 'bottom'].includes(tabPosition)) {
    charUnit = 'width';
    position = rtl ? 'right' : 'left';
    transformSize = Math.abs(transform);
  } else {
    charUnit = 'height';
    position = 'top';
    transformSize = -transform;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (!tabs.length) {
      return [0, 0];
    }
    var len = tabs.length;
    var endIndex = len;
    for (var i = 0; i < len; i += 1) {
      var offset = tabOffsets.get(tabs[i].key) || DEFAULT_SIZE;
      if (offset[position] + offset[charUnit] > transformSize + visibleTabContentValue) {
        endIndex = i - 1;
        break;
      }
    }
    var startIndex = 0;
    for (var _i = len - 1; _i >= 0; _i -= 1) {
      var _offset = tabOffsets.get(tabs[_i].key) || DEFAULT_SIZE;
      if (_offset[position] < transformSize) {
        startIndex = _i + 1;
        break;
      }
    }
    return [startIndex, endIndex];
  }, [tabOffsets, visibleTabContentValue, tabContentSizeValue, addNodeSizeValue, operationNodeSizeValue, transformSize, tabPosition, tabs.map(function (tab) {
    return tab.key;
  }).join('_'), rtl]);
}

/***/ }),

/***/ "./node_modules/rc-tabs/es/index.js":
/*!******************************************!*\
  !*** ./node_modules/rc-tabs/es/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs */ "./node_modules/rc-tabs/es/Tabs.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Tabs__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-tabs/es/util.js":
/*!*****************************************!*\
  !*** ./node_modules/rc-tabs/es/util.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   genDataNodeKey: () => (/* binding */ genDataNodeKey),
/* harmony export */   stringify: () => (/* binding */ stringify)
/* harmony export */ });
/**
 * We trade Map as deps which may change with same value but different ref object.
 * We should make it as hash for deps
 * */
function stringify(obj) {
  var tgt;
  if (obj instanceof Map) {
    tgt = {};
    obj.forEach(function (v, k) {
      tgt[k] = v;
    });
  } else {
    tgt = obj;
  }
  return JSON.stringify(tgt);
}
var RC_TABS_DOUBLE_QUOTE = 'TABS_DQ';
function genDataNodeKey(key) {
  return String(key).replace(/"/g, RC_TABS_DOUBLE_QUOTE);
}

/***/ })

}]);