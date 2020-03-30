(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-title-wrapper\">\n  <div class=\"page-title\">Visualisation of COVID-19 in TAS, Australia</div>\n  <div class=\"time-updated\">Last Updated: {{ timeUpdated }}</div>\n</div>\n<app-case-number></app-case-number>\n\n<app-vic-details-table></app-vic-details-table>\n\n<app-vic-details-map></app-vic-details-map>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/case-number/case-number.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/case-number/case-number.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"outer-wrapper\">\n  <div class=\"box-wrapper confirmedVic\">\n    <div class=\"today red\">{{ confirmedVicToday }}</div>\n    <div class=\"delta\">\n      the day before\n      <span class=\"red\">{{\n        confirmedVicDelta ? \"+\" + confirmedVicDelta : \"-\"\n      }}</span>\n    </div>\n    <div class=\"label\">TAS Confirmed</div>\n    <div class=\"date\">{{ confirmedVicDate }}</div>\n  </div>\n\n  <div class=\"box-wrapper confirmedAu\">\n    <div class=\"today red\">{{ confirmedAuToday }}</div>\n    <div class=\"delta\">\n      the day before\n      <span class=\"red\">{{\n        confirmedAuDelta ? \"+\" + confirmedAuDelta : \"-\"\n      }}</span>\n    </div>\n    <div class=\"label\">AU Confirmed</div>\n    <div class=\"date\"></div>\n    {{ confirmedAuDate }}\n  </div>\n\n  <div class=\"box-wrapper recoveredAu \">\n    <div class=\"today green\">{{ recoveredAuToday }}</div>\n    <div class=\"delta\">\n      the day before\n      <span class=\"green\">{{\n        recoveredAuDelta ? \"+\" + recoveredAuDelta : \"-\"\n      }}</span>\n    </div>\n    <div class=\"label\">AU Recovered</div>\n    <div class=\"date\">{{ recoveredAuDate }}</div>\n  </div>\n\n  <div class=\"box-wrapper deathsAu\">\n    <div class=\"today grey\">{{ deathsAuToday }}</div>\n    <div class=\"delta\">\n      the day before\n      <span class=\"grey\">{{ deathsAuDelta ? \"+\" + deathsAuDelta : \"-\" }}</span>\n    </div>\n    <div class=\"label\">AU Deaths</div>\n    <div class=\"date\">{{ deathsAuDate }}</div>\n  </div>\n</div>\n\n<div class=\"echarts\">\n  <div echarts [options]=\"options\"></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vic-details-map/vic-details-map.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vic-details-map/vic-details-map.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"map-wrapper\">\n  <div class=\"title\">Public Exposure Sites for Confirmed Cases in TAS</div>\n\n  <div #mapContainer id=\"map\"></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vic-details-table/vic-details-table.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vic-details-table/vic-details-table.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table-wrapper\">\n  <div class=\"mat-elevation-z8\">\n    <div class=\"table-header\">\n      Confirmed Cases Details in TAS\n    </div>\n\n    <mat-form-field>\n      <mat-label>Filter</mat-label>\n      <input matInput (keyup)=\"applyFilter($event)\" />\n    </mat-form-field>\n\n    <table mat-table [dataSource]=\"dataSource\">\n      <!-- caseNumber Column -->\n      <ng-container matColumnDef=\"caseNumber\">\n        <th mat-header-cell *matHeaderCellDef>Case No.</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.caseNumber }}</td>\n      </ng-container>\n\n      <!-- dateConfirmed Column -->\n      <ng-container matColumnDef=\"dateConfirmed\">\n        <th mat-header-cell *matHeaderCellDef>Date Confirmed</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.dateConfirmed }}</td>\n      </ng-container>\n\n      <!-- age Column -->\n      <ng-container matColumnDef=\"age\">\n        <th mat-header-cell *matHeaderCellDef>Age</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.age }}</td>\n      </ng-container>\n\n      <!-- gender Column -->\n      <ng-container matColumnDef=\"gender\">\n        <th mat-header-cell *matHeaderCellDef>Gender</th>\n        <td mat-cell *matCellDef=\"let element\">{{ element.gender }}</td>\n      </ng-container>\n\n      <!-- description Column -->\n      <ng-container matColumnDef=\"description\">\n        <th mat-header-cell *matHeaderCellDef>Description</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <div *ngFor=\"let n of element.description; let i = index\">\n            <span class=\"description-number\">{{ i + 1 }}.</span>{{ n }}\n          </div>\n        </td>\n      </ng-container>\n\n      <!-- sourceLink Column -->\n      <ng-container matColumnDef=\"sourceLink\">\n        <th mat-header-cell *matHeaderCellDef>Source</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <div *ngFor=\"let n of element.sourceLink; let i = index\">\n            <a href=\"{{ n }}\" target=\"_blank\">Link {{ i + 1 }}</a>\n          </div>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n    </table>\n\n    <mat-paginator\n      [pageSizeOptions]=\"[5, 10, 20]\"\n      showFirstLastButtons\n    ></mat-paginator>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-title {\n  font-size: 22px;\n  font-weight: 600;\n  text-align: center;\n  margin-bottom: 5px;\n}\n\n.time-updated {\n  display: block;\n  font-size: 12px;\n  text-align: center;\n  color: #555;\n}\n\n.page-title-wrapper {\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95aXlpL2dpdGh1Yi9DT1ZJRC0xOS1WSUNfMjAyMDAzMTAvQ09WSUQxOS1WSUMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtdGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4udGltZS11cGRhdGVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzU1NTtcbn1cblxuLnBhZ2UtdGl0bGUtd3JhcHBlciB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4iLCIucGFnZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi50aW1lLXVwZGF0ZWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNTU1O1xufVxuXG4ucGFnZS10aXRsZS13cmFwcGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
       this.timeUpdated = "March 29 2020 22:30:00 GMT+1100 (Australian Eastern Daylight Time); \
                           Zehong (Jimmy) Cao - Email: zhcaonctu@gmail.com";
    }
    ngOnInit() { }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");
/* harmony import */ var _case_number_case_number_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./case-number/case-number.component */ "./src/app/case-number/case-number.component.ts");
/* harmony import */ var _vic_details_table_vic_details_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vic-details-table/vic-details-table.component */ "./src/app/vic-details-table/vic-details-table.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/table.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/select.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/tooltip.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/input.js");
/* harmony import */ var _vic_details_map_vic_details_map_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./vic-details-map/vic-details-map.component */ "./src/app/vic-details-map/vic-details-map.component.ts");
















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _case_number_case_number_component__WEBPACK_IMPORTED_MODULE_6__["CaseNumberComponent"],
            _vic_details_table_vic_details_table_component__WEBPACK_IMPORTED_MODULE_7__["VicDetailsTableComponent"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"],
            _vic_details_map_vic_details_map_component__WEBPACK_IMPORTED_MODULE_15__["VicDetailsMapComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_echarts__WEBPACK_IMPORTED_MODULE_5__["NgxEchartsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"]
        ],
        exports: [
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/case-number/case-number.component.scss":
/*!********************************************************!*\
  !*** ./src/app/case-number/case-number.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outer-wrapper {\n  margin: 30px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 5px;\n  max-width: 800px;\n  margin: 0 auto;\n}\n.outer-wrapper .box-wrapper {\n  flex: 1 1 auto;\n  text-align: center;\n  margin-bottom: 15px;\n  font-size: 14px;\n}\n.outer-wrapper .box-wrapper div {\n  margin: 5px 0;\n}\n.outer-wrapper .box-wrapper .today {\n  font-size: 20px;\n  font-weight: 500;\n}\n.outer-wrapper .box-wrapper .delta {\n  font-size: 11px;\n  color: red;\n}\n.outer-wrapper .box-wrapper .red {\n  color: blue;\n}\n.outer-wrapper .box-wrapper .green {\n  color: green;\n}\n.outer-wrapper .box-wrapper .grey {\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95aXlpL2dpdGh1Yi9DT1ZJRC0xOS1WSUNfMjAyMDAzMTAvQ09WSUQxOS1WSUMvc3JjL2FwcC9jYXNlLW51bWJlci9jYXNlLW51bWJlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FzZS1udW1iZXIvY2FzZS1udW1iZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0Y7QURDRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0k7RUFDRSxhQUFBO0FDQ047QURFSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0FOO0FER0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0ROO0FESUk7RUFFRSxVQUFBO0FDSE47QURNSTtFQUNFLFlBQUE7QUNKTjtBRE9JO0VBQ0UsV0FBQTtBQ0xOIiwiZmlsZSI6InNyYy9hcHAvY2FzZS1udW1iZXIvY2FzZS1udW1iZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXItd3JhcHBlciB7XG4gIG1hcmdpbjogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuXG4gIC5ib3gtd3JhcHBlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgZGl2IHtcbiAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgfVxuXG4gICAgLnRvZGF5IHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgLmRlbHRhIHtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIGNvbG9yOiAjODg4O1xuICAgIH1cblxuICAgIC5yZWQge1xuXG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cblxuICAgIC5ncmVlbiB7XG4gICAgICBjb2xvcjogZ3JlZW47XG4gICAgfVxuXG4gICAgLmdyZXkge1xuICAgICAgY29sb3I6IGdyZXk7XG4gICAgfVxuICB9XG59IiwiLm91dGVyLXdyYXBwZXIge1xuICBtYXJnaW46IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogNXB4O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5vdXRlci13cmFwcGVyIC5ib3gtd3JhcHBlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5vdXRlci13cmFwcGVyIC5ib3gtd3JhcHBlciBkaXYge1xuICBtYXJnaW46IDVweCAwO1xufVxuLm91dGVyLXdyYXBwZXIgLmJveC13cmFwcGVyIC50b2RheSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5vdXRlci13cmFwcGVyIC5ib3gtd3JhcHBlciAuZGVsdGEge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjODg4O1xufVxuLm91dGVyLXdyYXBwZXIgLmJveC13cmFwcGVyIC5yZWQge1xuICBjb2xvcjogcmVkO1xufVxuLm91dGVyLXdyYXBwZXIgLmJveC13cmFwcGVyIC5ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5vdXRlci13cmFwcGVyIC5ib3gtd3JhcHBlciAuZ3JleSB7XG4gIGNvbG9yOiBncmV5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/case-number/case-number.component.ts":
/*!******************************************************!*\
  !*** ./src/app/case-number/case-number.component.ts ***!
  \******************************************************/
/*! exports provided: CaseNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseNumberComponent", function() { return CaseNumberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_assets_statistics_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/statistics.json */ "./src/assets/statistics.json");
var src_assets_statistics_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/statistics.json */ "./src/assets/statistics.json", 1);



let CaseNumberComponent = class CaseNumberComponent {
    constructor() {
        this.dateShownNumberInSmallScreen = 10;
        this.dateShownNumberInLargeScreen = 15;
        this.dateShownNumberInSuperLargeScreen = 20;
    }
    ngOnInit() {
        const dateLength = RAW_DATA.deaths_au_arr.length;
        if (window.innerWidth < 550) {
            this.xAxisInterval = Math.max(Math.floor(dateLength / this.dateShownNumberInSmallScreen) - 1, 0);
        }
        else if (window.innerWidth < 1000) {
            this.xAxisInterval = Math.max(Math.floor(dateLength / this.dateShownNumberInLargeScreen) - 1, 0);
        }
        else {
            this.xAxisInterval = Math.max(Math.floor(dateLength / this.dateShownNumberInSuperLargeScreen) - 1, 0);
        }
        this.options = {
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: {
                        show: true,
                        readOnly: true,
                        title: "Data View",
                        lang: ["Data View", "Close"]
                    },
                    saveAsImage: { show: true, title: "Save as Picture" }
                }
            },
            title: {
                text: "Case Statistics in TAS & AU",
                x: "center"
            },
            tooltip: {
                trigger: "axis"
            },
            grid: {
                top: "25%",
                containLabel: true
            },
            legend: {
                top: "6%",
                data: ["AU Deaths", "AU Recovered", "TAS Confirmed", "AU Confirmed"]
            },
            xAxis: [
                {
                    type: "category",
                    axisTick: {
                        alignWithLabel: true
                    },
                    splitLine: {
                        show: false
                    },
                    splitArea: {
                        show: false
                    },
                    axisLabel: {
                        interval: this.xAxisInterval,
                        rotate: 50
                    },
                    data: RAW_DATA.date_arr
                }
            ],
            yAxis: [
                {
                    type: "value",
                    name: "AU Deaths & Recovered",
                    min: 0,
                    position: "left",
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        interval: 0
                    },
                    splitArea: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                },
                {
                    type: "value",
                    name: "TAS & AU Confirmed",
                    min: 0,
                    position: "right",
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        interval: 0
                    },
                    splitArea: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            dataZoom: [
                {
                    type: "slider",
                    xAxisIndex: 0,
                    filterMode: "empty",
                    start: this.setDataZoomStart(),
                    end: 100
                },
                {
                    type: "inside",
                    xAxisIndex: 0,
                    filterMode: "empty",
                    start: 0,
                    end: 100
                }
            ],
            series: [
                {
                    name: "AU Deaths",
                    type: "line",
                    label: {
                        normal: {
                            show: true,
                            position: "top"
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 3,
                            shadowColor: "rgba(0,0,0,0.4)",
                            shadowBlur: 10,
                            shadowOffsetY: 10
                        }
                    },
                    data: RAW_DATA.deaths_au_arr
                },
                {
                    name: "AU Recovered",
                    type: "line",
                    label: {
                        normal: {
                            show: true,
                            position: "top"
                        }
                    },
                    lineStyle: {
                        normal: {
                            width: 3,
                            shadowColor: "rgba(0,0,0,0.4)",
                            shadowBlur: 10,
                            shadowOffsetY: 10
                        }
                    },
                    data: RAW_DATA.recovered_au_arr
                },
                {
                    name: "TAS Confirmed",
                    type: "bar",
                    yAxisIndex: 1,
                    label: {
                        normal: {
                            show: true,
                            position: "top"
                        }
                    },
                    data: RAW_DATA.confirmed_vic_arr
                },
                {
                    name: "AU Confirmed",
                    type: "bar",
                    yAxisIndex: 1,
                    label: {
                        normal: {
                            show: true,
                            position: "top"
                        }
                    },
                    data: RAW_DATA.confirmed_au_arr
                }
            ]
        };
        this.processTodayNumber();
    }
    setDataZoomStart() {
        if (window.innerWidth >= 1000) {
            return 70;
        }
        else if (window.innerWidth >= 700) {
            return 85;
        }
        return 90;
    }
    processTodayNumber() {
        [
            this.confirmedVicDate,
            this.confirmedVicToday,
            this.confirmedVicDelta
        ] = this.getLastValidData("confirmed_vic_arr");
        [
            this.confirmedAuDate,
            this.confirmedAuToday,
            this.confirmedAuDelta
        ] = this.getLastValidData("confirmed_au_arr");
        [
            this.recoveredAuDate,
            this.recoveredAuToday,
            this.recoveredAuDelta
        ] = this.getLastValidData("recovered_au_arr");
        [
            this.deathsAuDate,
            this.deathsAuToday,
            this.deathsAuDelta
        ] = this.getLastValidData("deaths_au_arr");
    }
    getLastValidData(field) {
        const arr = RAW_DATA[field];
        for (let i = arr.length - 1; i >= 0; i--) {
            const arr = RAW_DATA[field];
            if (arr[i]) {
                return [
                    RAW_DATA["date_arr"][i],
                    RAW_DATA[field][i],
                    RAW_DATA[field][i] - RAW_DATA[field][i - 1]
                ];
            }
        }
    }
};
CaseNumberComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-case-number",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./case-number.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/case-number/case-number.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./case-number.component.scss */ "./src/app/case-number/case-number.component.scss")).default]
    })
], CaseNumberComponent);

const RAW_DATA = src_assets_statistics_json__WEBPACK_IMPORTED_MODULE_2__;


/***/ }),

/***/ "./src/app/vic-details-map/vic-details-map.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/vic-details-map/vic-details-map.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  font-size: 18px;\n  font-weight: 600;\n  text-align: center;\n  margin-bottom: 15px;\n}\n\n#map {\n  height: 600px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95aXlpL2dpdGh1Yi9DT1ZJRC0xOS1WSUNfMjAyMDAzMTAvQ09WSUQxOS1WSUMvc3JjL2FwcC92aWMtZGV0YWlscy1tYXAvdmljLWRldGFpbHMtbWFwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWMtZGV0YWlscy1tYXAvdmljLWRldGFpbHMtbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpYy1kZXRhaWxzLW1hcC92aWMtZGV0YWlscy1tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuI21hcCB7XG4gIGhlaWdodDogNjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuIiwiLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbiNtYXAge1xuICBoZWlnaHQ6IDYwMHB4O1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/vic-details-map/vic-details-map.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/vic-details-map/vic-details-map.component.ts ***!
  \**************************************************************/
/*! exports provided: VicDetailsMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VicDetailsMapComponent", function() { return VicDetailsMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_assets_public_exposure_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/public-exposure-data.json */ "./src/assets/public-exposure-data.json");
var src_assets_public_exposure_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/public-exposure-data.json */ "./src/assets/public-exposure-data.json", 1);



let VicDetailsMapComponent = class VicDetailsMapComponent {
    constructor() {
        this.lat = -42.188426;
        this.lng = 146.863566;
        this.mapOptions = {
            center: new google.maps.LatLng(this.lat, this.lng),
            zoom: 8
        };
    }
    ngOnInit() {
        this.configureMarkers();
    }
    ngAfterViewInit() {
        this.mapInitializer();
    }
    configureMarkers() {
        const result = [];
        const vicDetailsMapData = RAW_DATA.filter(item => {
            return item.locationType !== "flight" && item.lat && item.lng;
        });
        const group = vicDetailsMapData.reduce((acc, item) => {
            if (!acc[item.lat + item.lng]) {
                acc[item.lat + item.lng] = [];
            }
            acc[item.lat + item.lng].push(item);
            return acc;
        }, {});
        Object.values(group).forEach((arr) => {
            const firstItem = arr[0];
            const tempDict = {};
            tempDict["position"] = new google.maps.LatLng(parseFloat(firstItem.lat), parseFloat(firstItem.lng));
            tempDict["map"] = this.map;
            if (arr.length === 1) {
                tempDict["title"] = this.buildSingleTitle(firstItem);
            }
            else {
                tempDict["title"] = arr.reduce((a, b) => this.buildSingleTitle(a) + "<hr>" + this.buildSingleTitle(b));
            }
            result.push(tempDict);
        });
        this.markers = result;
    }
    buildSingleTitle(item) {
        let info = "";
        if (item.caseNumber) {
            info += `<br/><b>Case No. in TAS: </b>${item.caseNumber}`;
        }
        if (item.dateConfirmed) {
            info += `<br/><b>Date Confirmed: </b>${item.dateConfirmed}`;
        }
        if (item.age) {
            info += `<br/><b>Age: </b>${item.age}`;
        }
        if (item.gender) {
            info += `<br/><b>Gender: </b>${item.gender}`;
        }
        if (item.description) {
            let descriptionList = "";
            item.description.forEach(d => {
                descriptionList += `<li>${d}</li>`;
            });
            info += `<br/><b>Description: </b><ol>${descriptionList}</ol>`;
        }
        if (item.location) {
            info += `<br/><b>Location: </b>${item.location}`;
        }
        if (item.dateAndTime) {
            info += `<br/><b>Time Visited here: </b>${item.dateAndTime}`;
        }
        if (item.onsetOfSymptomsUpTo) {
            info += `<br/><b>Onset of Symptoms up to: </b>${item.onsetOfSymptomsUpTo}`;
        }
        if (item.sourceLink) {
            item.sourceLink.forEach((link, index) => {
                info += `<br/><b>Source: </b><a href="${link}" target="_blank">Link ${index +
                    1}</a>`;
            });
        }
        return info;
    }
    mapInitializer() {
        this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
        this.loadAllMarkers();
        this.removeTooltip();
    }
    loadAllMarkers() {
        this.markers.forEach((markerInfo) => {
            const marker = new google.maps.Marker(Object.assign({}, markerInfo));
            const infoWindow = new google.maps.InfoWindow({
                content: marker.getTitle()
            });
            marker.addListener("click", () => {
                infoWindow.open(marker.getMap(), marker);
                if (this.previousInfoWindow) {
                    this.previousInfoWindow.close();
                }
                this.previousInfoWindow = infoWindow;
            });
            marker.addListener("mouseover", (e) => {
                infoWindow.open(marker.getMap(), marker);
                if (this.previousInfoWindow) {
                    this.previousInfoWindow.close();
                }
                this.previousInfoWindow = infoWindow;
            });
            marker.setMap(this.map);
        });
    }
    removeTooltip() {
        setTimeout(() => {
            document.querySelectorAll('[log="miw"]').forEach(ele => (ele.title = ""));
        }, 4000);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mapContainer")
], VicDetailsMapComponent.prototype, "gmap", void 0);
VicDetailsMapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-vic-details-map",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vic-details-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vic-details-map/vic-details-map.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vic-details-map.component.scss */ "./src/app/vic-details-map/vic-details-map.component.scss")).default]
    })
], VicDetailsMapComponent);

const RAW_DATA = src_assets_public_exposure_data_json__WEBPACK_IMPORTED_MODULE_2__;


/***/ }),

/***/ "./src/app/vic-details-table/vic-details-table.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/vic-details-table/vic-details-table.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n\n.table-header {\n  font-size: 18px;\n  font-weight: 600;\n  text-align: center;\n}\n\n.mat-column-caseNumber {\n  width: 5%;\n  min-width: 50px;\n}\n\n.mat-column-dateConfirmed {\n  width: 7%;\n  min-width: 50px;\n}\n\n.mat-column-age {\n  width: 3%;\n  min-width: 50px;\n}\n\n.mat-column-gender {\n  width: 4%;\n  min-width: 50px;\n}\n\n.mat-column-description {\n  min-width: 300px;\n}\n\n.mat-column-sourceLink {\n  width: 10%;\n  min-width: 50px;\n  word-break: break-all;\n}\n\n.mat-table {\n  overflow-x: scroll;\n  display: block;\n  overflow-x: auto;\n}\n\n.mat-cell,\n.mat-header-cell {\n  padding: 2px 4px;\n}\n\nli {\n  list-style-position: inside;\n}\n\n.description-number {\n  padding-right: 10px;\n  font-weight: 500;\n}\n\ntd.mat-cell:first-of-type,\ntd.mat-footer-cell:first-of-type,\nth.mat-header-cell:first-of-type {\n  padding-left: 0 !important;\n}\n\ntd.mat-cell:last-of-type,\ntd.mat-footer-cell:last-of-type,\nth.mat-header-cell:last-of-type {\n  padding-right: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95aXlpL2dpdGh1Yi9DT1ZJRC0xOS1WSUNfMjAyMDAzMTAvQ09WSUQxOS1WSUMvc3JjL2FwcC92aWMtZGV0YWlscy10YWJsZS92aWMtZGV0YWlscy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmljLWRldGFpbHMtdGFibGUvdmljLWRldGFpbHMtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTs7RUFFRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTs7O0VBR0UsMEJBQUE7QUNDRjs7QURFQTs7O0VBR0UsMkJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpYy1kZXRhaWxzLXRhYmxlL3ZpYy1kZXRhaWxzLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnRhYmxlLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LWNvbHVtbi1jYXNlTnVtYmVyIHtcbiAgd2lkdGg6IDUlO1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG5cbi5tYXQtY29sdW1uLWRhdGVDb25maXJtZWQge1xuICB3aWR0aDogNyU7XG4gIG1pbi13aWR0aDogNTBweDtcbn1cblxuLm1hdC1jb2x1bW4tYWdlIHtcbiAgd2lkdGg6IDMlO1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG5cbi5tYXQtY29sdW1uLWdlbmRlciB7XG4gIHdpZHRoOiA0JTtcbiAgbWluLXdpZHRoOiA1MHB4O1xufVxuXG4ubWF0LWNvbHVtbi1kZXNjcmlwdGlvbiB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbi5tYXQtY29sdW1uLXNvdXJjZUxpbmsge1xuICB3aWR0aDogMTAlO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5tYXQtY2VsbCxcbi5tYXQtaGVhZGVyLWNlbGwge1xuICBwYWRkaW5nOiAycHggNHB4O1xufVxuXG5saSB7XG4gIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcbn1cblxuLmRlc2NyaXB0aW9uLW51bWJlciB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsXG50ZC5tYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSxcbnRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbnRkLm1hdC1jZWxsOmxhc3Qtb2YtdHlwZSxcbnRkLm1hdC1mb290ZXItY2VsbDpsYXN0LW9mLXR5cGUsXG50aC5tYXQtaGVhZGVyLWNlbGw6bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4vLyAubWF0LXBhZ2luYXRvci1yYW5nZS1hY3Rpb25zPmJ1dHRvbixcbi8vIGJ1dHRvbi5tYXQtcGFnaW5hdG9yLW5hdmlnYXRpb24tbGFzdCB7XG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgb3V0bGluZTogbm9uZTtcbi8vICAgYm9yZGVyOiBub25lO1xuLy8gICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4vLyAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIG1hcmdpbjogMDtcbi8vICAgb3ZlcmZsb3c6IHZpc2libGU7XG4vLyAgIHBhZGRpbmc6IDA7XG4vLyAgIG1pbi13aWR0aDogMDtcbi8vICAgd2lkdGg6IDQwcHg7XG4vLyAgIGhlaWdodDogNDBweDtcbi8vICAgZmxleC1zaHJpbms6IDA7XG4vLyAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyB9IiwiLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnRhYmxlLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LWNvbHVtbi1jYXNlTnVtYmVyIHtcbiAgd2lkdGg6IDUlO1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG5cbi5tYXQtY29sdW1uLWRhdGVDb25maXJtZWQge1xuICB3aWR0aDogNyU7XG4gIG1pbi13aWR0aDogNTBweDtcbn1cblxuLm1hdC1jb2x1bW4tYWdlIHtcbiAgd2lkdGg6IDMlO1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG5cbi5tYXQtY29sdW1uLWdlbmRlciB7XG4gIHdpZHRoOiA0JTtcbiAgbWluLXdpZHRoOiA1MHB4O1xufVxuXG4ubWF0LWNvbHVtbi1kZXNjcmlwdGlvbiB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbi5tYXQtY29sdW1uLXNvdXJjZUxpbmsge1xuICB3aWR0aDogMTAlO1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5tYXQtY2VsbCxcbi5tYXQtaGVhZGVyLWNlbGwge1xuICBwYWRkaW5nOiAycHggNHB4O1xufVxuXG5saSB7XG4gIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcbn1cblxuLmRlc2NyaXB0aW9uLW51bWJlciB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsXG50ZC5tYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSxcbnRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbnRkLm1hdC1jZWxsOmxhc3Qtb2YtdHlwZSxcbnRkLm1hdC1mb290ZXItY2VsbDpsYXN0LW9mLXR5cGUsXG50aC5tYXQtaGVhZGVyLWNlbGw6bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/vic-details-table/vic-details-table.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/vic-details-table/vic-details-table.component.ts ***!
  \******************************************************************/
/*! exports provided: VicDetailsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VicDetailsTableComponent", function() { return VicDetailsTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/table.js");
/* harmony import */ var src_assets_vic_details_table_data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/vic-details-table-data.json */ "./src/assets/vic-details-table-data.json");
var src_assets_vic_details_table_data_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/vic-details-table-data.json */ "./src/assets/vic-details-table-data.json", 1);





let VicDetailsTableComponent = class VicDetailsTableComponent {
    constructor() {
        this.displayedColumns = [
            "caseNumber",
            "dateConfirmed",
            "age",
            "gender",
            "description",
            "sourceLink"
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](RAW_DATA);
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }
    ngAfterViewInit() {
        this.setButtonStyle();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    setButtonStyle() {
        const cssText = `box-sizing: border-box;
    position: relative;
    user-select: none;
    cursor: pointer;
    outline: none;
    border: none;
    -webkit-tap-highlight-color: transparent;
    display: inline-block;
    white-space: nowrap;
    text-decoration: none;
    vertical-align: baseline;
    text-align: center;
    margin: 0;
    overflow: visible;
    padding: 0;
    min-width: 0;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    line-height: 40px;
    border-radius: 50%;`;
        const buttonClassNames = [
            "mat-paginator-navigation-first",
            "mat-paginator-navigation-previous",
            "mat-paginator-navigation-next",
            "mat-paginator-navigation-last"
        ];
        buttonClassNames.forEach(className => {
            document.querySelector("." + className).style.cssText = cssText;
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], VicDetailsTableComponent.prototype, "paginator", void 0);
VicDetailsTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-vic-details-table",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vic-details-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vic-details-table/vic-details-table.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vic-details-table.component.scss */ "./src/app/vic-details-table/vic-details-table.component.scss")).default]
    })
], VicDetailsTableComponent);

const RAW_DATA = src_assets_vic_details_table_data_json__WEBPACK_IMPORTED_MODULE_4__;


/***/ }),

/***/ "./src/assets/public-exposure-data.json":
/*!**********************************************!*\
  !*** ./src/assets/public-exposure-data.json ***!
  \**********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, default */
/***/ (function(module) {

module.exports = JSON.parse(
     "[{\"caseNumber\":\"63~66\",   \"dateAndTime\":\"29/03/2020\", \"location\": \" \",\"locationType\":\"venue\",\"lat\":\" \",\"lng\":\" \",\"age\":\" \",\"gender\":\" \",\"description\":[\"Three cases were associated with the cruise ship Ovation of the Seas and one with Voyager of the Seas. All cases were already in quarantine.\"]},\
       {\"caseNumber\":\"60~62\",   \"dateAndTime\":\"28/03/2020\", \"location\": \" \",\"locationType\":\"venue\",\"lat\":\" \",\"lng\":\" \",\"age\":\" \",\"gender\":\" \",\"description\":[\"One of the further cases is from the North West, one from Northern Tasmania and one from Southern Tasmania. Two of the cases are related to recent overseas travel and one is linked to the Voyager of the Seas cruise ship.\"]},\
       {\"caseNumber\":\"59\",      \"dateAndTime\":\"28/03/2020\", \"location\": \"Mersey Community Hospital\",\"locationType\":\"venue\",\"lat\":\"-41.229090\",\"lng\":\"146.421367\",\"age\":\" \",\"gender\":\"\",\"description\":[\" a healthcare worker employed at the Mersey Community Hospital has determined that the person in question spent no more than 30 minutes at work while they were infectious before a decision was made that they go home due to feeling unwell.\"]},\
       {\"caseNumber\":\"48~58\",   \"dateAndTime\":\"27/03/2020\", \"location\": \" \",\"locationType\":\"venue\",\"lat\":\" \",\"lng\":\" \",\"age\":\" \",\"gender\":\" \",\"description\":[\"Five of the cases are from Northern Tasmania, four are from Southern Tasmania and two are from the North West. Two of the cases are aged in their 20s. Two are aged in their 30s, two in their 40s, two are 50s, two in their 60s, and one in their 80s.\"]},\
       {\"caseNumber\":\"43~47\",   \"dateAndTime\":\"26/03/2020\", \"location\": \" \",\"locationType\":\"venue\",\"lat\":\" \",\"lng\":\" \",\"age\":\" \",\"gender\":\" \",\"description\":[\"Three of the cases are from Northern Tasmania, two are from the North West. One of the cases is aged in their 70s. Two are aged in their 30s, and two are children. All of the cases were passengers aboard the Ovation of the Seas, which docked in Sydney on 18 March.\"]},\
       {\"caseNumber\":\"37~42\",   \"dateAndTime\":\"25/03/2020\", \"location\": \" \",\"locationType\":\"venue\",\"lat\":\" \",\"lng\":\" \",\"age\":\" \",\"gender\":\" \",\"description\":[\"Three of the six new cases are from Northern Tasmania, two are from Southern Tasmania and one case is from the north-west.\"]},\
       {\"caseNumber\":\"29~36\",   \"dateAndTime\":\"24/03/2020\", \"location\": \" \",\"locationType\":\"venue\",\"lat\":\" \",\"lng\":\" \",\"age\":\" \",\"gender\":\" \",\"description\":[\"Seven of the cases are from Southern Tasmania. The other case is from Northern Tasmania. Six of the cases had recently been aboard cruise ships that arrived interstate. The remaining two had recently travelled to Tasmania from overseas.\"]},\
       {\"caseNumber\":\"23~28\",   \"dateAndTime\":\"23/03/2020\", \"location\": \" \",\"locationType\":\"venue\",\"lat\":\" \",\"lng\":\" \",\"age\":\" \",\"gender\":\" \",\"description\":[\"Four of these people are from the cruise ship Ruby Princess that arrived in Sydney on 19 March. One is from another cruise ship Celebrity Solstice that arrived in Sydney on 20 March, and one has recently returned from overseas.\"]},\
       {\"caseNumber\":\"17~22\",   \"dateAndTime\":\"22/03/2020\", \"location\": \" \",\"locationType\":\"venue\",\"lat\":\" \",\"lng\":\" \",\"age\":\" \",\"gender\":\" \",\"description\":[\"They are recently returned to Tasmania from overseas.They comprise two persons recently returned from the United States, 2 persons from the Ruby Princess cruise that arrived in Sydney on 19 March, and 1 person from the Ovation of the Seas cruise that arrived in Sydney on 18 March 2020.\"]},\
       {\"caseNumber\":\"12~16\",   \"dateAndTime\":\"21/03/2020\", \"location\": \"Royal Hobart Hospital\",\"locationType\":\"venue\",\"lat\":\"-42.880588\",\"lng\":\"147.330980\",\"age\":\" \",\"gender\":\"2 female and 3 male \",\"description\":[\" These comprise one woman and two men who were on the Ruby Princess cruise, and a woman and a man who recently travelled together in Europe.\"]},\
       {\"caseNumber\":\"11\",      \"dateAndTime\":\"21/03/2020\",  \"location\":\"Royal Hobart Hospital\",\"locationType\":\"venue\",\"lat\":\"-42.880588\",\"lng\":\"147.330980\",\"age\":\" \",\"gender\":\"female\",\"description\":[\"HA woman who arrived in Tasmania on Wednesday after travelling from the United Kingdom was diagnosed on Friday.\"]},\
       {\"caseNumber\":\"8~10\",    \"dateAndTime\":\"18/03/2020\",  \"location\":\"Southern Tasmania\",\"locationType\":\"venue\",\"lat\":\"-42.886803\",\"lng\":\"147.337640\",\"age\":\"40s\",\"gender\":\"1 female and 2 male\",\"description\":[\"The three most recent cases arrived from overseas the day before the 14-day quarantine period was mandated for all overseas arrivals. Two of the three cases had travelled together.\"]},\
       {\"caseNumber\":\"7\",       \"dateAndTime\":\"15/03/2020\",  \"location\":\"Royal Hobart Hospital\",\"locationType\":\"venue\",\"lat\":\"-42.880588\",\"lng\":\"147.330980\",\"age\":\"50s\",\"gender\":\"female\",\"description\":[\"A woman in her 50s has tested positive for coronavirus in Tasmania. This case was identified as a close contact during the public health investigation of a previous Tasmanian case, who had recently travelled overseas.\"]},\
       {\"caseNumber\":\"6\",       \"dateAndTime\":\"15/03/2020\",  \"location\":\"Royal Hobart Hospital \",\"locationType\":\"venue\",\"lat\":\"-42.880588\",\"lng\":\"147.330980\",\"age\":\"60s\",\"gender\":\"female\",\"description\":[\"A woman in her 60s has tested positive for coronavirus in Tasmania. She is in a stable condition and currently in isolation at the Royal Hobart Hospital. It was identified as a close contact during the public health investigation of a previous Tasmanian case, who recently travelled overseas.\"]}, \
       {\"caseNumber\":\"5\",       \"dateAndTime\":\"14/03/2020\",  \"location\":\"Royal Hobart Hospital\",\"locationType\":\"venue\",\"lat\":\"-42.880588\",\"lng\":\"147.330980\",\"age\":\"60s\",\"gender\":\"male\",\"description\":[\"He is currently in a stable condition in the Royal Hobart Hospital.The man travelled to Australia from North America and arrived in Tasmania on Tuesday 10 March.\"]},\
       {\"caseNumber\":\"4\",       \"dateAndTime\":\"13/03/2020\",  \"location\":\"UTAS accommodation facility in Launceston\",\"locationType\":\"venue\",\"lat\":\"-41.400646\",\"lng\":\"147.125503\",\"age\":\"40s\",\"gender\":\"female\",\"description\":[\"She is stable and currently in isolation at a UTAS accommodation facility in Launceston. The woman travelled to Australia from the Philippines on 8 March, and then into Launceston from Melbourne on flight JQ731 which landed about 8.05am on 9 March.\"]},\
       {\"caseNumber\":\"3\",       \"dateAndTime\":\"12/03/2020\",  \"location\":\"Morris Miller Library, University of Tasmania \",\"locationType\":\"venue\",\"lat\":\"-42.903862\",\"lng\":\"147.325997\",\"age\":\"30s\",\"gender\":\"female\",\"description\":[\"The woman also informed PHS that she visited UTAS’ Sandy Bay Campus on Monday 9 March and Tuesday 10 March. She was at the Morris Miller library between 9.30am to 5.30pm on Monday, and between 8.30am and 12.30pm on Tuesday when she also briefly visited Lazenby’s café. The woman travelled to Australia from South America via New Zealand and arrived in Hobart on Sunday 8 March from Sydney aboard Jetstar flight JQ727 which landed about 10.20pm.\"]},\
       {\"caseNumber\":\"2\",       \"dateAndTime\":\"08/03/2020\",  \"location\":\"Royal Hobart Hospital \",\"locationType\":\"venue\",\"lat\":\"-42.880588\",\"lng\":\"147.330980\",\"age\":\"20s\",\"gender\":\"male\",\"description\":[\"A man in his 20s has been confirmed as the second case of coronavirus in Tasmania.The man arrived in Tasmania on 26 February after being in Nepal, transiting through Singapore and Sydney to Hobart.\"]}, \
       {\"caseNumber\":\"1\",       \"dateAndTime\":\"06/03/2020\",  \"location\":\"Launceston General Hospital\",\"locationType\":\"venue\",\"lat\":\"-41.446332\",\"lng\":\"147.142926\",\"age\":\"40s\",\"gender\":\"male\",\"description\":[\"A 40 year-old man has been confirmed as the first case of coronavirus in Tasmania. The man arrived in Tasmania on Saturday from Iran. The man arrived in Launceston on Virgin flight VA-1368 which left Melbourne at 1:10 pm and landed in Launceston at 2:15 pm. The man has been in self-quarantine and was transferred to the Launceston General Hospital\"]}]");

/***/ }),

/***/ "./src/assets/statistics.json":
/*!************************************!*\
  !*** ./src/assets/statistics.json ***!
  \************************************/
/*! exports provided: date_arr, confirmed_vic_arr, confirmed_au_arr, recovered_au_arr, deaths_au_arr, default */
/***/ (function(module) {

module.exports = JSON.parse(
    "{\"date_arr\":         [\"1/2/20\",\"2/2/20\",\"3/2/20\",\"4/2/20\",\"5/2/20\",\"6/2/20\",\"7/2/20\",\"8/2/20\",\"9/2/20\",\"10/2/20\",\"11/2/20\",\"12/2/20\",\"13/2/20\",\"14/2/20\",\"15/2/20\",\"16/2/20\",\"17/2/20\",\"18/2/20\",\"19/2/20\",\"20/2/20\",\"21/2/20\",\"22/2/20\",\"23/2/20\",\"24/2/20\",\"25/2/20\",\"26/2/20\",\"27/2/20\",\"28/2/20\",\"29/2/20\",\"1/3/20\",\"2/3/20\",\"3/3/20\",\"4/3/20\",\"5/3/20\",\"6/3/20\",\"7/3/20\",\"8/3/20\",\"9/3/20\",\"10/3/20\",\"11/3/20\",\"12/3/20\",\"13/3/20\",\"14/3/20\",\"15/3/20\",\"16/3/20\",\"17/3/20\",\"18/3/20\",\"19/3/20\",\"20/3/20\", \"21/3/20\",\"22/3/20\",\"23/3/20\",  \"24/3/20\", \"25/3/20\", \"26/3/20\", \"27/3/20\", \"28/3/20\", \"29/3/20\"],\
     \"confirmed_vic_arr\": [\"0\",     \"0\",     \"0\",     \"0\",     \"0\",      \"0\",    \"0\",      \"0\",     \"0\",     \"0\",      \"0\",      \"0\",      \"0\",      \"0\",      \"0\",      \"0\",      \"0\",      \"0\",      \"0\",      \"0\",     \"0\",       \"0\",     \"0\",       \"0\",      \"0\",      \"0\",      \"0\",      \"0\",      \"0\",      \"0\",    \"0\",      \"0\",     \"0\",     \"0\",    \"1\",      \"1\",     \"2\",    \"2\",      \"2\",      \"2\",     \"3\",       \"4\",     \"4\",       \"7\",      \"7\",      \"7\",      \"10\",     \"10\",     \"11\",     \"16\",      \"22\",     \"28\",      \"36\",      \"42\",      \"47\",      \"58\",      \"62\",      \"66\"],\
     \"confirmed_au_arr\":  [\"10\",     \"12\",    \"12\",   \"13\",    \" 14\",     \"15\",   \"15\",     \"15\",    \"15\",    \"15\",     \"15\",     \"15\",     \"15\",    \"15\",      \"15\",     \"15\",     \"15\",     \"15\",     \"19\",     \"17\",    \"21\",     \"21\",     \"21\",      \"21\",    \"22\",      \"22\",     \"22\",     \"25\",     \"25\",    \"29\",   \"33\",      \"40\",   \"51\",    \"59\",   \"63\",     \"73\",    \"78\",   \"91\",     \"112\",     \"128\",  \"156\",     \"197\",     \"249\",    \"298\",    \"375\",    \"453\",    \"566\",    \"708\",    \"875\",   \"1071\",    \"1348\",    \"1709\",   \"2136\",    \"2423\",    \"2799\",    \"3166\",    \"3638\",    \"3966\"],\
     \"recovered_au_arr\":  [\"\",       \"\",      \"\",     \"\",      \"\",         \"\",    \"\",        \"\",      \"\",       \"\",      \"\",       \"\",      \"\",       \"\",        \"\",        \"\",      \"\",       \"\",       \"\",       \"\",      \"\",       \"\",       \"\",        \"\",      \"\",       \"\",        \"\",       \"\",       \"\",      \"15\",   \"21\",     \"21\",    \"21\",   \"21\",    \"22\",    \"22\",    \"22\",    \"22\",     \"22\",      \"24\",   \"24\",      \"27\",     \"27\",      \"27\",     \"27\",     \"27\",    \"43\",      \"46\",     \"46\",    \"46\",     \"46\",      \"46\",     \"118\",     \"118\",      \"170\",    \"170\",     \"187\",     \"241\"],\
     \"deaths_au_arr\":     [\"\",       \"\",      \"\",     \"\",      \"\",         \"\",    \"\",        \"\",      \"\",       \"\",      \"\",       \"\",      \"\",       \"\",        \"\",        \"\",      \"\",       \"\",       \"\",       \"\",      \"\",       \"\",       \"\",        \"\",      \"\",       \"\",        \"\",       \"\",       \"\",      \"1\",     \"1\",      \"1\",     \"2\",    \"2\",     \"2\",     \"2\",    \"3\",      \"3\",      \"3\",       \"3\",    \"3\",       \"3\",      \"3\",       \"5\",      \"5\",      \"5\",     \"6\",       \"6\",      \"7\",     \"7\",     \"7\",       \"7\",       \"8\",      \"8\",       \"12\",      \"12\",      \"13\",      \"16\"]}");

/***/ }),

/***/ "./src/assets/vic-details-table-data.json":
/*!************************************************!*\
  !*** ./src/assets/vic-details-table-data.json ***!
  \************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, default */
/***/ (function(module) {

module.exports = JSON.parse(

    "[{\"caseNumber\":\"63 ~ 66\", \"dateConfirmed\":\"29/3/20\",\"age\":\"\",\"gender\":\"\",\"description\":[\"Three cases were associated with the cruise ship Ovation of the Seas and one with Voyager of the Seas. All cases were already in quarantine.\"],\"sourceLink\":[\"https://www.dhhs.tas.gov.au/news/2020/coronavirus_update_29_march_2020\"]},\
      {\"caseNumber\":\"60 ~ 62\", \"dateConfirmed\":\"28/3/20\",\"age\":\"\",\"gender\":\"\",\"description\":[\"One of the further cases is from the North West, one from Northern Tasmania and one from Southern Tasmania. Two of the cases are related to recent overseas travel and one is linked to the Voyager of the Seas cruise ship.\"],\"sourceLink\":[\"https://www.dhhs.tas.gov.au/news/2020/coronavirus_update_28_march_2020\"]},\
      {\"caseNumber\":\"59\",      \"dateConfirmed\":\"28/3/20\",\"age\":\"\",\"gender\":\"\",\"description\":[\"a healthcare worker employed at the Mersey Community Hospital has determined that the person in question spent no more than 30 minutes at work while they were infectious before a decision was made that they go home due to feeling unwell.\"],\"sourceLink\":[\"https://www.dhhs.tas.gov.au/news/2020/coronavirus_update_28_march_2020\"]},\
      {\"caseNumber\":\"48 ~ 58\", \"dateConfirmed\":\"27/3/20\",\"age\":\"\",\"gender\":\"\",\"description\":[\"Five of the cases are from Northern Tasmania, four are from Southern Tasmania and two are from the North West. Two of the cases are aged in their 20s. Two are aged in their 30s, two in their 40s, two are 50s, two in their 60s, and one in their 80s.\"],\"sourceLink\":[\"https://www.dhhs.tas.gov.au/news/2020/coronavirus_update_27_march_2020\"]},\
      {\"caseNumber\":\"43 ~ 47\", \"dateConfirmed\":\"26/3/20\",\"age\":\"\",\"gender\":\"\",\"description\":[\"Tasmania has today confirmed five cases of coronavirus. Three of the cases are from Northern Tasmania, two are from the North West. One of the cases is aged in their 70s. Two are aged in their 30s, and two are children.\"],\"sourceLink\":[\"https://www.dhhs.tas.gov.au/news/2020/coronavirus_update_-_26_march_2020\"]},\
      {\"caseNumber\":\"37 ~ 42\", \"dateConfirmed\":\"25/3/20\",\"age\":\"\",\"gender\":\"\",\"description\":[\"Three of the cases are from Northern Tasmania, two are from Southern Tasmania and one case is from the North West. Two of the cases are aged in their 70s. One is aged in their 60s, one in their 50s, one in their 30s, and one is in their 20s.\"],\"sourceLink\":[\"https://www.dhhs.tas.gov.au/news/2020/coronavirus_update_25_march_2020\"]},\
      {\"caseNumber\":\"29 ~ 36\", \"dateConfirmed\":\"24/3/20\",\"age\":\"\",\"gender\":\"\",\"description\":[\"Seven of the cases are from Southern Tasmania. The other case is from Northern Tasmania. Six of the cases had recently been aboard cruise ships that arrived interstate.The remaining two had recently travelled to Tasmania from overseas.\"],\"sourceLink\":[\"https://www.dhhs.tas.gov.au/news/2020/coronavirus_update_24_march_2020\"]},\
      {\"caseNumber\":\"23 ~ 28\", \"dateConfirmed\":\"23/3/20\",\"age\":\"\",\"gender\":\"\",\"description\":[\"Four of these people are from the cruise ship Ruby Princess that arrived in Sydney on 19 March. One is from another cruise ship Celebrity Solstice that arrived in Sydney on 20 March, and one has recently returned from overseas.Three of the people are from Northern Tasmania. Three are from Southern Tasmania.\"],\"sourceLink\":[\"https://www.dhhs.tas.gov.au/news/2020/coronavirus_update_23_march_2020\"]},\
      {\"caseNumber\":\"17 ~ 22\", \"dateConfirmed\":\"22/3/20\",\"age\":\"\",\"gender\":\"\",\"description\":[\"The first case returned from UK recently and another five case returned from overseas as well. They comprise two persons recently returned from the United States, 2 persons from the Ruby Princess cruise that arrived in Sydney on 19 March, and 1 person from the Ovation of the Seas cruise that arrived in Sydney on 18 March 2020.\"],\"sourceLink\":[\"https://www.dhhs.tas.gov.au/news/2020/coronavirus_update_22_march_2020\"]},\
      {\"caseNumber\":\"12 ~ 16\", \"dateConfirmed\":\"21/3/20\",\"age\":\"\",\"gender\":\"\",\"description\":[\"Saturday there have been a further five cases of Coronavirus infection diagnosed in Tasmania.  These comprise one woman and two men who were on the Ruby Princess cruise, and a woman and a man who recently travelled together in Europe. These cases bring the total number of cases diagnosed in Tasmania to 16, with the additional Tasmanian resident diagnosed interstate.\"],\"sourceLink\":[\"https://www.dhhs.tas.gov.au/news/2020/coronavirus_update_21_march_2020\"]},\
      {\"caseNumber\":\"11\",      \"dateConfirmed\":\"20/3/20\",\"age\":\"\",\"gender\":\"\",\"description\":[\"Public Health Services has been advised of 4 cases of coronavirus infection among passengers and crew who disembarked from the Ruby Princess cruise ship yesterday in Sydney after a cruise to New Zealand. One of these cases is a Tasmanian woman who remains in Sydney and is being managed by New South Wales Health.\"],\"sourceLink\":[\"https://www.dhhs.tas.gov.au/news/2020/coronavirus_update_20_march_2020\"]},\
      {\"caseNumber\":\"8 ~ 10\",  \"dateConfirmed\":\"18/3/20\",\"age\":\"\",\"gender\":\"\",\"description\":[\"This brings the state’s number of confirmed cases to 10. The cases are in Southern Tasmania. They are a woman and two men, all aged in their 40s.\"],\"sourceLink\":[\"https://www.dhhs.tas.gov.au/news/2020/coronavirus_update_18_march_2020\"]},\
      {\"caseNumber\":\"7\",       \"dateConfirmed\":\"15/3/20\",\"age\":\"50s\",\"gender\":\"woman\",\"description\":[\"A woman in her 50s has tested positive for coronavirus in Tasmania. She is in a stable condition and is being managed in isolation with appropriate medical care. This case was identified as a close contact during the public health investigation of a previous Tasmanian case, who had recently travelled overseas.\"],\"sourceLink\":[\"https://www.dhhs.tas.gov.au/news/2020/seventh_coronavirus_case_confirmed_-_15_march_2020\"]},\
      {\"caseNumber\":\"6\",       \"dateConfirmed\":\"15/3/20\",\"age\":\"60s\",\"gender\":\"woman\",\"description\":[\"A woman in her 60s has tested positive for coronavirus in Tasmania. She is in a stable condition and currently in isolation at the Royal Hobart Hospital.\"],\"sourceLink\":[\"https://www.dhhs.tas.gov.au/news/2020/sixth_coronavirus_case_confirmed\"]},\
      {\"caseNumber\":\"5\",       \"dateConfirmed\":\"14/3/20\",\"age\":\"60s\",\"gender\":\"man\",\"description\":[\"A man in his 60s has tested positive for coronavirus in Tasmania. He is currently in a stable condition in the Royal Hobart Hospital. \"],\"sourceLink\":[\"https://www.dhhs.tas.gov.au/news/2020/fifth_coronavirus_case_confirmed\"]},\
      {\"caseNumber\":\"4\",       \"dateConfirmed\":\"13/3/20\",\"age\":\"40s\",\"gender\":\"woman\",\"description\":[\"A woman in her 40s has tested positive for coronavirus in Tasmania. She is stable and currently in isolation at a UTAS accommodation facility in Launceston. \"],\"sourceLink\":[\"https://www.dhhs.tas.gov.au/news/2020/fourth_coronavirus_case_confirmed_-_13_march_2020\"]},\
      {\"caseNumber\":\"3\",       \"dateConfirmed\":\"12/3/20\",\"age\":\"30s\",\"gender\":\"woman\",\"description\":[\"A woman in her 30s has tested positive for coronavirus in Tasmania.She is currently in a stable condition in the Royal Hobart Hospital. \"],\"sourceLink\":[\"https://www.dhhs.tas.gov.au/news/2020/third_coronavirus_case_confirmed_-_12_march_2020\"]},\
      {\"caseNumber\":\"2\",       \"dateConfirmed\":\"08/3/20\",\"age\":\"20s\",\"gender\":\"man\",\"description\":[\"A man in his 20s has been confirmed as the second case of coronavirus in Tasmania. The man arrived in Tasmania on 26 February after being in Nepal, transiting through Singapore and Sydney to Hobart. \"],\"sourceLink\":[\"https://www.dhhs.tas.gov.au/news/2020/second_coronavirus_case_confirmed_in_tasmania\"]},\
      {\"caseNumber\":\"1\",       \"dateConfirmed\":\"06/3/20\",\"age\":\"40s\",\"gender\":\"man\",\"description\":[\"A 40 year-old man has been confirmed as the first case of coronavirus in Tasmania.The man arrived in Tasmania on Saturday from Iran. He was experiencing symptoms and contacted the Public Health Hotline where testing was arranged. \"],\"sourceLink\":[\"https://www.dhhs.tas.gov.au/news/2020/coronavirus_case_confirmed_in_tasmania\"]}]");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yiyi/github/COVID-19-VIC_20200310/COVID19-VIC/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
