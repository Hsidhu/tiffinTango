"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Admin_Order_MapViewOfRoute_js"],{

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

/***/ "./resources/js/pages/Admin/Order/MapViewOfRoute.js":
/*!**********************************************************!*\
  !*** ./resources/js/pages/Admin/Order/MapViewOfRoute.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/dist/index.modern.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/constants */ "./resources/js/config/constants.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var MapViewOfRoute = function MapViewOfRoute(_ref) {
  var directionResponse = _ref.directionResponse;
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(directionResponse)) {
    return null;
  }
  var handleApiLoaded = function handleApiLoaded(map, maps) {
    var directionsRenderer = new maps.DirectionsRenderer({
      preserveViewport: true,
      // Adjust based on your requirements
      suppressMarkers: false // Adjust based on your requirements
    });

    directionsRenderer.setMap(map);
    directionResponse.request = {
      travelMode: maps.DirectionsTravelMode.DRIVING
    };
    directionsRenderer.setDirections(directionResponse);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(google_map_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
      style: {
        height: '500px'
      },
      bootstrapURLKeys: {
        libraries: ['drawing', 'geometry', 'places'],
        key: _config_constants__WEBPACK_IMPORTED_MODULE_2__.GOOGLE_API_KEY
      },
      defaultCenter: {
        lat: 43.7829505,
        lng: -79.7494863
      },
      defaultZoom: 12,
      yesIWantToUseGoogleMapApiInternals: true,
      onGoogleApiLoaded: function onGoogleApiLoaded(_ref2) {
        var map = _ref2.map,
          maps = _ref2.maps;
        handleApiLoaded(map, maps);
      }
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapViewOfRoute);

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


/***/ })

}]);