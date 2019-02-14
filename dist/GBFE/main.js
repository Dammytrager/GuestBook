(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Functions/myfunction.ts":
/*!*****************************************!*\
  !*** ./src/app/Functions/myfunction.ts ***!
  \*****************************************/
/*! exports provided: patternMatch, setDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternMatch", function() { return patternMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDate", function() { return setDate; });
function patternMatch(value) {
    return function (control) {
        var pass = value.test(control.value);
        return pass ? null : { 'patternFail': true };
    };
}
function setDate(value) {
    value = parseInt(value);
    var now = new Date(value);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var date = now.getDate();
    var month = months[now.getMonth()];
    var year = now.getFullYear();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var period;
    if (hour < 12) {
        hour = hour == 0 ? 12 : hour;
        period = 'AM';
    }
    else if (hour >= 12) {
        hour = hour == 12 ? 12 : hour - 12;
        period = 'PM';
    }
    return month + ' ' + date + ', ' + year + ' at ' + hour + ':' + minute + ' ' + period;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, pages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pages", function() { return pages; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/admin/admin.component */ "./src/app/pages/admin/admin.component.ts");





var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'admin', component: _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"] },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'admin/sign-in', component: _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"] },
    { path: 'admin/dashboard', component: _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"] },
    { path: 'admin/dashboard/recent-activities', component: _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"] },
    { path: 'admin/dashboard/view-guests', component: _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"] },
    { path: 'admin/dashboard/settings', component: _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var pages = [
    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"]
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'GBFE';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_form_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/form/form.component */ "./src/app/components/form/form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_rap_rap_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/rap/rap.component */ "./src/app/components/rap/rap.component.ts");
/* harmony import */ var _components_view_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/view/view.component */ "./src/app/components/view/view.component.ts");
/* harmony import */ var _components_change_change_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/change/change.component */ "./src/app/components/change/change.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_recent_recent_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/recent/recent.component */ "./src/app/components/recent/recent.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./service/http.service */ "./src/app/service/http.service.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/table/table.component */ "./src/app/components/table/table.component.ts");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./store/store */ "./src/app/store/store.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../environments/environment.prod */ "./src/environments/environment.prod.ts");

























var AppModule = /** @class */ (function () {
    function AppModule(ngredux, reduxDevTools) {
        this.ngredux = ngredux;
        this.reduxDevTools = reduxDevTools;
        var enhancers = (this.reduxDevTools.isEnabled() && !_environments_environment_prod__WEBPACK_IMPORTED_MODULE_23__["environment"].production)
            ? [this.reduxDevTools.enhancer()] : [];
        ngredux.configureStore(_store_store__WEBPACK_IMPORTED_MODULE_22__["rootReducer"], _store_store__WEBPACK_IMPORTED_MODULE_22__["INITIAL_STATE"], [], enhancers);
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["pages"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_form_form_component__WEBPACK_IMPORTED_MODULE_7__["FormComponent"],
                _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _components_rap_rap_component__WEBPACK_IMPORTED_MODULE_11__["RapComponent"],
                _components_view_view_component__WEBPACK_IMPORTED_MODULE_12__["ViewComponent"],
                _components_change_change_component__WEBPACK_IMPORTED_MODULE_13__["ChangeComponent"],
                _components_recent_recent_component__WEBPACK_IMPORTED_MODULE_15__["RecentComponent"],
                _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_16__["SettingsComponent"],
                _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__["LoaderComponent"],
                _components_table_table_component__WEBPACK_IMPORTED_MODULE_20__["TableComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_redux_store__WEBPACK_IMPORTED_MODULE_21__["NgReduxModule"]
            ],
            providers: [
                _service_http_service__WEBPACK_IMPORTED_MODULE_18__["HttpService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_21__["NgRedux"],
            _angular_redux_store__WEBPACK_IMPORTED_MODULE_21__["DevToolsExtension"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/change/change.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/change/change.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  change works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/change/change.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/change/change.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhbmdlL2NoYW5nZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/change/change.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/change/change.component.ts ***!
  \*******************************************************/
/*! exports provided: ChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeComponent", function() { return ChangeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChangeComponent = /** @class */ (function () {
    function ChangeComponent() {
    }
    ChangeComponent.prototype.ngOnInit = function () {
    };
    ChangeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gb-change',
            template: __webpack_require__(/*! ./change.component.html */ "./src/app/components/change/change.component.html"),
            styles: [__webpack_require__(/*! ./change.component.scss */ "./src/app/components/change/change.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChangeComponent);
    return ChangeComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3 mt-md-4\">\n  <div class=\"header-links\">\n    <ul class=\"nav justify-content-center justify-content-sm-start\">\n      <li class=\"nav-item\" [class.active]='recent'>\n        <a class=\"nav-link\" routerLink='/admin/dashboard/recent-activities'>\n          <fa-icon [icon]='faHistory'></fa-icon> &nbsp; <span class='d-none d-sm-inline-block'>Recent Activity</span>\n        </a>\n      </li>\n      <li class=\"nav-item\" [class.active]='view'>\n        <a class=\"nav-link\" routerLink='/admin/dashboard/view-guests'>\n          <fa-icon [icon]='faList'></fa-icon> &nbsp; <span class='d-none d-sm-inline-block'>View Guests</span>\n        </a>\n      </li>\n      <li class=\"nav-item\" [class.active]='setting'>\n        <a class=\"nav-link\" routerLink='/admin/dashboard/settings'>\n          <fa-icon [icon]='faCog'></fa-icon> &nbsp; <span class='d-none d-sm-inline-block'>Account Settings</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"\" *ngIf='recent'>\n  <gb-recent></gb-recent>\n</div>\n\n<div class=\"\" *ngIf='view'>\n  <gb-view></gb-view>\n</div>\n\n<div class=\"\" *ngIf='setting'>\n  <gb-settings></gb-settings>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .header-links ul {\n  width: 100%;\n  border-bottom: solid 0.1px #dbe2e8; }\n  .container .header-links ul .active {\n    border-bottom: solid 0.1px #F9A602; }\n  .container .header-links ul .active a {\n      color: #F9A602 !important; }\n  .container .header-links ul .nav-item a {\n    color: #525c65;\n    font-size: 15px;\n    font-weight: bold; }\n  @media (max-width: 575px) {\n      .container .header-links ul .nav-item a {\n        font-size: 20px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbW15dHJhZ2VyL0d1ZXN0Qm9vay9zcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIi9ob21lL2RhbW15dHJhZ2VyL0d1ZXN0Qm9vay9zcmMvYXNzZXRzL3Njc3MvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFHTSxZQUFVO0VBQ1YsbUNDRG9CLEVEa0JyQjtFQXJCTDtJQU1RLG1DQ1BVLEVEV1g7RUFWUDtNQVFZLDBCQUEyQixFQUM5QjtFQVRUO0lBYVUsZUNYYztJRFlkLGdCQUFjO0lBQ2Qsa0JBQWlCLEVBSWxCO0VBSEM7TUFoQlY7UUFpQlksZ0JBQWUsRUFFbEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnMuc2Nzc1wiO1xuXG4uY29udGFpbmVyICB7XG4gIC5oZWFkZXItbGlua3Mge1xuICAgIHVsICB7XG4gICAgICB3aWR0aDoxMDAlO1xuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC4xcHggJGJvcmRlcjtcbiAgICAgIC5hY3RpdmUge1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjFweCAkc2Vjb25kYXJ5O1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiRzZWNvbmRhcnkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLm5hdi1pdGVtIHtcbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6JGhlYWRlcjtcbiAgICAgICAgICBmb250LXNpemU6MTVweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRwcmltYXJ5OiMwMDgwODE7XG4kc2Vjb25kYXJ5OiNGOUE2MDI7XG4kYmctbGlnaHQ6I2Y4ZjlmYTtcblxuJGhlYWRlcjpyZ2IoODIsIDkyLCAxMDEpO1xuJGJvcmRlcjpyZ2IoMjE5LCAyMjYsIDIzMik7XG4kZ3JleTE6I2FkYWRhZDtcblxuJHJlZDojZjIzYTM4O1xuJHJlZC0xOiNmMzRkNGI7XG4kcmVkMTojZDkzNDMyO1xuXG4kZ3JlZW46IzJjYzEyZTtcbiRncmVlbi0xOiM1NmNkNTc7XG4kZ3JlZW4xOiMyMzlhMzQ7XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        this.router = router;
        this.faHistory = _node_modules_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHistory"];
        this.faCog = _node_modules_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCog"];
        this.faList = _node_modules_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faList"];
        this.recent = true;
        this.view = false;
        this.setting = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.checkPage();
    };
    DashboardComponent.prototype.setClass = function (value) {
        if (value === 1) {
            this.recent = true;
            this.view = false;
            this.setting = false;
        }
        else if (value === 2) {
            this.recent = false;
            this.view = true;
            this.setting = false;
        }
        else if (value === 3) {
            this.recent = false;
            this.view = false;
            this.setting = true;
        }
    };
    DashboardComponent.prototype.checkPage = function () {
        var page = this.router.url;
        page = page.substr(page.lastIndexOf('/') + 1);
        if (page === 'recent-activities') {
            this.setClass(1);
        }
        else if (page === 'view-guests') {
            this.setClass(2);
        }
        else if (page === 'settings') {
            this.setClass(3);
        }
        else if (page === 'dashboard') {
            this.router.navigate(['/admin/dashboard/recent-activities']);
        }
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gb-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/form/form.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/form/form.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-8 offset-sm-2 col-md-6 offset-md-3 mt-3 mt-md-5\">\n      <div class=\"fill-form p-3 p-md-4\">\n        <div class=\"header mt-3 mb-4\">\n          <h4 class='text-center'>Fill the form to be a guest</h4>\n          <hr>\n        </div>\n\n        <div class=\"feedback my-3 p-3\" [class.error]=\"!isSuccess\" [class.success]=\"isSuccess\" *ngIf='feedback'>\n          {{feedbackMessage}}\n          <a class='close' (click)='closeFeedback()'>&times;</a>\n        </div>\n\n        <form class=\"form\" [formGroup]='gbForm' action=\"index.html\" method=\"post\">\n          <div class=\"form-group\">\n            <input type=\"text\" class='form-control' [class.is-invalid]='lastname.invalid && isSubmit' formControlName='lastname' placeholder='Lastname' name=\"\" value=\"\">\n            <div class=\"\" *ngIf='lastname?.errors'>\n              <small *ngIf='lastname.errors?.required && isSubmit' class='text-danger'>This field is required</small>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class='form-control' [class.is-invalid]='firstname.invalid && isSubmit' formControlName='firstname' placeholder='Firstname' name=\"\" value=\"\">\n            <div class=\"\" *ngIf='firstname?.errors'>\n              <small *ngIf='firstname.errors?.required && isSubmit' class='text-danger'>This field is required</small>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"email\" class='form-control' [class.is-invalid]='email.invalid && isSubmit' formControlName='email' placeholder='Email' name=\"\" value=\"\">\n            <div class=\"\" *ngIf='email?.errors'>\n              <small *ngIf='email.errors?.required && isSubmit' class='text-danger'>This field is required</small>\n              <small *ngIf='!email.errors?.required && isSubmit && email.errors?.patternFail' class='text-danger'>Invalid Email</small>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class='form-control' [class.is-invalid]='location.invalid && isSubmit' formControlName='location' placeholder='Location' name=\"\" value=\"\">\n            <div class=\"\" *ngIf='location?.errors'>\n              <small *ngIf='location.errors?.required && isSubmit' class='text-danger'>This field is required</small>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class='form-control' [class.is-invalid]='mobile_no.invalid && isSubmit' formControlName='mobile_no' placeholder='Mobile Number' name=\"\" value=\"\">\n            <div class=\"\" *ngIf='mobile_no?.errors'>\n              <small *ngIf='mobile_no.errors?.required && isSubmit' class='text-danger'>This field is required</small>\n              <small *ngIf='!mobile_no.errors?.required && isSubmit && mobile_no.errors?.patternFail' class='text-danger'>Invalid Mobile Number</small>\n            </div>\n          </div>\n          <div class=\"buttons row\">\n            <div class=\"col-6\">\n              <button type=\"button\" class='btn btn-block' [disabled]=\"isValid\" name=\"button\" (click)='onSubmit()'>\n                {{submitBtnText}} &nbsp;\n                <div class=\"float-right\"><gb-loader *ngIf=\"isValid\" [data]=\"{type: 3}\"></gb-loader></div>\n              </button>\n            </div>\n            <div class=\"col-6\">\n              <button type=\"button\" class='btn btn-block' [disabled]=\"isValid\" name=\"button\" (click)='gbForm.reset(); isSubmit=false'>Reset</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/form/form.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/form/form.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-form {\n  border: solid 1px #dbe2e8; }\n  .fill-form .btn {\n    min-height: 26px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbW15dHJhZ2VyL0d1ZXN0Qm9vay9zcmMvYXBwL2NvbXBvbmVudHMvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZGFtbXl0cmFnZXIvR3Vlc3RCb29rL3NyYy9hc3NldHMvc2Nzcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDBCQ0V3QixFREV6QjtFQUxEO0lBR0ksNEJBQTJCLEVBQzVCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JzLnNjc3NcIjtcblxuLmZpbGwtZm9ybSAge1xuICBib3JkZXI6c29saWQgMXB4ICRib3JkZXI7XG4gIC5idG4gIHtcbiAgICBtaW4taGVpZ2h0OiAyNnB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsIiRwcmltYXJ5OiMwMDgwODE7XG4kc2Vjb25kYXJ5OiNGOUE2MDI7XG4kYmctbGlnaHQ6I2Y4ZjlmYTtcblxuJGhlYWRlcjpyZ2IoODIsIDkyLCAxMDEpO1xuJGJvcmRlcjpyZ2IoMjE5LCAyMjYsIDIzMik7XG4kZ3JleTE6I2FkYWRhZDtcblxuJHJlZDojZjIzYTM4O1xuJHJlZC0xOiNmMzRkNGI7XG4kcmVkMTojZDkzNDMyO1xuXG4kZ3JlZW46IzJjYzEyZTtcbiRncmVlbi0xOiM1NmNkNTc7XG4kZ3JlZW4xOiMyMzlhMzQ7XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/form/form.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/form/form.component.ts ***!
  \***************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_Functions_myfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Functions/myfunction */ "./src/app/Functions/myfunction.ts");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/http.service */ "./src/app/service/http.service.ts");





var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var num = /^0\d{10}$/;
var FormComponent = /** @class */ (function () {
    function FormComponent(fb, http) {
        this.fb = fb;
        this.http = http;
        this.feedbackMessage = 'feedbackMessage';
        this.feedback = false;
        this.isSubmit = false;
        this.isValid = false;
        this.isSuccess = true;
        this.submitBtnText = 'Submit';
        this._url = 'https://guestbook-be.herokuapp.com?action=register';
        this.gbForm = this.fb.group({
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(src_app_Functions_myfunction__WEBPACK_IMPORTED_MODULE_3__["patternMatch"])(regex)]],
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobile_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(src_app_Functions_myfunction__WEBPACK_IMPORTED_MODULE_3__["patternMatch"])(num)]]
        });
    }
    Object.defineProperty(FormComponent.prototype, "lastname", {
        get: function () {
            return this.gbForm.get('lastname');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "firstname", {
        get: function () {
            return this.gbForm.get('firstname');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "email", {
        get: function () {
            return this.gbForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "location", {
        get: function () {
            return this.gbForm.get('location');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "mobile_no", {
        get: function () {
            return this.gbForm.get('mobile_no');
        },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.closeFeedback = function () {
        this.feedback = false;
    };
    FormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmit = true;
        if (this.gbForm.valid) {
            this.isValid = true;
            this.submitBtnText = 'Submitting';
            var data = this.gbForm.value;
            this.http.post(this._url, data)
                .then(function (res) {
                console.log(res);
                _this.isValid = false;
                _this.submitBtnText = 'Submit';
                if (res.status_code == '200') {
                    _this.isSuccess = true;
                    _this.feedback = true;
                    _this.feedbackMessage = 'You have successfully signed my guestbook, Thank you.';
                }
                else if (res.status_code == '302') {
                    _this.feedback = true;
                    _this.feedbackMessage = 'This Email is already registered';
                    _this.isSuccess = false;
                }
                else if (res.status_code == '402') {
                    _this.feedback = true;
                    _this.feedbackMessage = 'This Email is does not exist';
                    _this.isSuccess = false;
                }
            })
                .catch(function (error) {
                console.log(error);
                _this.isValid = false;
                _this.submitBtnText = 'Submit';
                if (error.status == 0) {
                    _this.feedback = true;
                    _this.feedbackMessage = 'Please Check your connection';
                    _this.isSuccess = false;
                }
            });
        }
    };
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gb-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/components/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/components/form/form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _service_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg justify-content-center navbar-light bg-light py-4\">\n  <a class=\"navbar-brand\" href=\"#\"><span class='primary'>Guest</span><span class='secondary'>Book</span></a>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav .navbar-brand {\n  font-size: 40px;\n  font-weight: bold; }\n  nav .navbar-brand .primary {\n    color: #008081; }\n  nav .navbar-brand .secondary {\n    color: #F9A602; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbW15dHJhZ2VyL0d1ZXN0Qm9vay9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi9ob21lL2RhbW15dHJhZ2VyL0d1ZXN0Qm9vay9zcmMvYXNzZXRzL3Njc3MvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxnQkFBYztFQUNkLGtCQUFnQixFQU9qQjtFQVZIO0lBS00sZUNQVSxFRFFYO0VBTkw7SUFRTSxlQ1RZLEVEVWIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JzLnNjc3NcIjtcblxubmF2IHtcbiAgLm5hdmJhci1icmFuZCB7XG4gICAgZm9udC1zaXplOjQwcHg7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAucHJpbWFyeSAge1xuICAgICAgY29sb3I6JHByaW1hcnk7XG4gICAgfVxuICAgIC5zZWNvbmRhcnkgIHtcbiAgICAgIGNvbG9yOiRzZWNvbmRhcnk7XG4gICAgfVxuICB9XG59XG4iLCIkcHJpbWFyeTojMDA4MDgxO1xuJHNlY29uZGFyeTojRjlBNjAyO1xuJGJnLWxpZ2h0OiNmOGY5ZmE7XG5cbiRoZWFkZXI6cmdiKDgyLCA5MiwgMTAxKTtcbiRib3JkZXI6cmdiKDIxOSwgMjI2LCAyMzIpO1xuJGdyZXkxOiNhZGFkYWQ7XG5cbiRyZWQ6I2YyM2EzODtcbiRyZWQtMTojZjM0ZDRiO1xuJHJlZDE6I2Q5MzQzMjtcblxuJGdyZWVuOiMyY2MxMmU7XG4kZ3JlZW4tMTojNTZjZDU3O1xuJGdyZWVuMTojMjM5YTM0O1xuIl19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gb-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/loader/loader.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/loader/loader.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner spinner-5\" *ngIf=\"data.type == 1\">\n    <span></span>\n    <span></span>\n    <span></span>\n</div>\n\n<div *ngIf=\"data.type == 2\" class=\"spinner spinner-4\"></div>\n\n<div *ngIf=\"data.type == 3\" class=\"spinner spinner-1\"></div>\n"

/***/ }),

/***/ "./src/app/components/loader/loader.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/loader/loader.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background-color: #eee;\n  margin-left: 5px;\n  margin-right: 5px;\n  display: inline-block; }\n\n.spinner-1 {\n  background: transparent !important;\n  width: 16px;\n  height: 16px;\n  padding-top: 2px; }\n\n/*Spinner-1*/\n\n.spinner-1:after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  display: block;\n  border: solid 1.5px transparent;\n  border-top-color: #F9A602;\n  border-bottom-color: #F9A602;\n  -webkit-animation: 1s linear infinite spinny;\n          animation: 1s linear infinite spinny; }\n\n@-webkit-keyframes spinny {\n  0% {\n    -webkit-transform: rotate(0deg) scale(1);\n            transform: rotate(0deg) scale(1); }\n  50% {\n    -webkit-transform: rotate(45deg) scale(1.2);\n            transform: rotate(45deg) scale(1.2); }\n  100% {\n    -webkit-transform: rotate(360deg) scale(1);\n            transform: rotate(360deg) scale(1); } }\n\n@keyframes spinny {\n  0% {\n    -webkit-transform: rotate(0deg) scale(1);\n            transform: rotate(0deg) scale(1); }\n  50% {\n    -webkit-transform: rotate(45deg) scale(1.2);\n            transform: rotate(45deg) scale(1.2); }\n  100% {\n    -webkit-transform: rotate(360deg) scale(1);\n            transform: rotate(360deg) scale(1); } }\n\n/*End of Spinner-1*/\n\n/*Spinner-4*/\n\n.spinner-4::after {\n  content: '';\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  position: relative;\n  top: -100%;\n  left: 0;\n  display: block;\n  background-color: orangered;\n  -webkit-animation: pulse 3s linear 1.5s infinite;\n          animation: pulse 3s linear 1.5s infinite;\n  opacity: 0; }\n\n.spinner-4::before {\n  content: '';\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  display: block;\n  background-color: orangered;\n  -webkit-animation: pulse 3s linear infinite;\n          animation: pulse 3s linear infinite; }\n\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(1.3);\n            transform: scale(1.3);\n    opacity: 0; } }\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(1.3);\n            transform: scale(1.3);\n    opacity: 0; } }\n\n/*End of Spinner-4*/\n\n/*Spinner-5*/\n\n.spinner-5 {\n  width: 60px;\n  height: 20px;\n  background: none; }\n\n.spinner-5 span {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  background-color: #008081;\n  border-radius: 50%;\n  margin-left: 3px;\n  margin-right: 3px; }\n\n.spinner-5 span:nth-child(1) {\n  -webkit-animation: bouncy  1.5s linear infinite;\n          animation: bouncy  1.5s linear infinite; }\n\n.spinner-5 span:nth-child(2) {\n  -webkit-animation: bouncy  1.5s linear 0.495s infinite;\n          animation: bouncy  1.5s linear 0.495s infinite; }\n\n.spinner-5 span:nth-child(3) {\n  -webkit-animation: bouncy  1.5s linear 0.99s infinite;\n          animation: bouncy  1.5s linear 0.99s infinite; }\n\n@-webkit-keyframes bouncy {\n  0%, 100% {\n    opacity: 0; }\n  50% {\n    opacity: 1; } }\n\n@keyframes bouncy {\n  0%, 100% {\n    opacity: 0; }\n  50% {\n    opacity: 1; } }\n\n/*End of Spinner-5*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbW15dHJhZ2VyL0d1ZXN0Qm9vay9zcmMvYXBwL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsIi9ob21lL2RhbW15dHJhZ2VyL0d1ZXN0Qm9vay9zcmMvYXNzZXRzL3Njc3MvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFVO0VBQ1YsYUFBVztFQUNYLG1CQUFpQjtFQUNqQix1QkFBcUI7RUFDckIsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixzQkFBb0IsRUFDckI7O0FBRUQ7RUFDRSxtQ0FBa0M7RUFDbEMsWUFBVTtFQUNWLGFBQVc7RUFDWCxpQkFBZ0IsRUFDakI7O0FBRUQsYUFBYTs7QUFDYjtFQUNFLFlBQVU7RUFDVixZQUFVO0VBQ1YsYUFBVztFQUNYLG1CQUFrQjtFQUNsQixlQUFhO0VBQ2IsZ0NBQThCO0VBQzlCLDBCQzFCZ0I7RUQyQmhCLDZCQzNCZ0I7RUQ0QmhCLDZDQUFvQztVQUFwQyxxQ0FBb0MsRUFDckM7O0FBRUQ7RUFDRTtJQUFNLHlDQUFnQztZQUFoQyxpQ0FBZ0MsRUFBQTtFQUV0QztJQUFLLDRDQUFrQztZQUFsQyxvQ0FBa0MsRUFBQTtFQUV2QztJQUFRLDJDQUFpQztZQUFqQyxtQ0FBaUMsRUFBQSxFQUFBOztBQUwzQztFQUNFO0lBQU0seUNBQWdDO1lBQWhDLGlDQUFnQyxFQUFBO0VBRXRDO0lBQUssNENBQWtDO1lBQWxDLG9DQUFrQyxFQUFBO0VBRXZDO0lBQVEsMkNBQWlDO1lBQWpDLG1DQUFpQyxFQUFBLEVBQUE7O0FBRTNDLG9CQUFvQjs7QUFHcEIsYUFBYTs7QUFFYjtFQUNFLFlBQVU7RUFDVixhQUFXO0VBQ1gsY0FBWTtFQUNaLG1CQUFpQjtFQUNqQixtQkFBaUI7RUFDakIsV0FBUztFQUNULFFBQU07RUFDTixlQUFhO0VBQ2IsNEJBQTJCO0VBQzNCLGlEQUF1QztVQUF2Qyx5Q0FBdUM7RUFDdkMsV0FBUyxFQUNWOztBQUVEO0VBQ0UsWUFBVTtFQUNWLGFBQVc7RUFDWCxjQUFZO0VBQ1osbUJBQWlCO0VBQ2pCLGVBQWE7RUFDYiw0QkFBMkI7RUFDM0IsNENBQWtDO1VBQWxDLG9DQUFrQyxFQUNuQzs7QUFFRDtFQUNFO0lBQUksNEJBQW1CO1lBQW5CLG9CQUFtQjtJQUFFLFdBQVMsRUFBQTtFQUNsQztJQUFRLDhCQUFvQjtZQUFwQixzQkFBb0I7SUFBRSxXQUFTLEVBQUEsRUFBQTs7QUFGekM7RUFDRTtJQUFJLDRCQUFtQjtZQUFuQixvQkFBbUI7SUFBRSxXQUFTLEVBQUE7RUFDbEM7SUFBUSw4QkFBb0I7WUFBcEIsc0JBQW9CO0lBQUUsV0FBUyxFQUFBLEVBQUE7O0FBRXpDLG9CQUFvQjs7QUFJcEIsYUFBYTs7QUFFYjtFQUNFLFlBQVU7RUFDVixhQUFXO0VBQ1gsaUJBQWUsRUFDaEI7O0FBRUQ7RUFDRSxzQkFBb0I7RUFDcEIsWUFBVTtFQUNWLGFBQVc7RUFDWCwwQkN4RmM7RUR5RmQsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxnREFBc0M7VUFBdEMsd0NBQXNDLEVBQ3ZDOztBQUVEO0VBQ0UsdURBQTZDO1VBQTdDLCtDQUE2QyxFQUM5Qzs7QUFFRDtFQUNFLHNEQUE0QztVQUE1Qyw4Q0FBNEMsRUFDN0M7O0FBRUQ7RUFDRTtJQUFVLFdBQVUsRUFBQTtFQUNwQjtJQUFPLFdBQVUsRUFBQSxFQUFBOztBQUZuQjtFQUNFO0lBQVUsV0FBVSxFQUFBO0VBQ3BCO0lBQU8sV0FBVSxFQUFBLEVBQUE7O0FBRW5CLG9CQUFvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnNcIjtcblxuLnNwaW5uZXIgIHtcbiAgd2lkdGg6MjVweDtcbiAgaGVpZ2h0OjI1cHg7XG4gIGJvcmRlci1yYWRpdXM6NTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbn1cblxuLnNwaW5uZXItMSAge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB3aWR0aDoxNnB4O1xuICBoZWlnaHQ6MTZweDtcbiAgcGFkZGluZy10b3A6IDJweDtcbn1cblxuLypTcGlubmVyLTEqL1xuLnNwaW5uZXItMTphZnRlciAge1xuICBjb250ZW50OicnO1xuICB3aWR0aDoxNnB4O1xuICBoZWlnaHQ6MTZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OmJsb2NrO1xuICBib3JkZXI6c29saWQgMS41cHggdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3AtY29sb3I6ICRzZWNvbmRhcnk7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRzZWNvbmRhcnk7XG4gIGFuaW1hdGlvbjogMXMgbGluZWFyIGluZmluaXRlIHNwaW5ueTtcbn1cblxuQGtleWZyYW1lcyBzcGlubnkge1xuICAwJSAgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgxKTt9XG5cbiAgNTAlIHt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKSBzY2FsZSgxLjIpO31cblxuICAxMDAlICB7IHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKSBzY2FsZSgxKTt9XG59XG4vKkVuZCBvZiBTcGlubmVyLTEqL1xuXG5cbi8qU3Bpbm5lci00Ki9cblxuLnNwaW5uZXItNDo6YWZ0ZXJ7XG4gIGNvbnRlbnQ6Jyc7XG4gIHdpZHRoOjEwMHB4O1xuICBoZWlnaHQ6MTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6NTAlO1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgdG9wOi0xMDAlO1xuICBsZWZ0OjA7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcbiAgYW5pbWF0aW9uOnB1bHNlIDNzIGxpbmVhciAxLjVzIGluZmluaXRlO1xuICBvcGFjaXR5OjA7XG59XG5cbi5zcGlubmVyLTQ6OmJlZm9yZXtcbiAgY29udGVudDonJztcbiAgd2lkdGg6MTAwcHg7XG4gIGhlaWdodDoxMDBweDtcbiAgYm9yZGVyLXJhZGl1czo1MCU7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcbiAgYW5pbWF0aW9uOnB1bHNlIDNzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAleyB0cmFuc2Zvcm06IHNjYWxlKDApOyBvcGFjaXR5OjF9XG4gIDEwMCUgIHsgdHJhbnNmb3JtOnNjYWxlKDEuMyk7IG9wYWNpdHk6MH1cbn1cbi8qRW5kIG9mIFNwaW5uZXItNCovXG5cblxuXG4vKlNwaW5uZXItNSovXG5cbi5zcGlubmVyLTV7XG4gIHdpZHRoOjYwcHg7XG4gIGhlaWdodDoyMHB4O1xuICBiYWNrZ3JvdW5kOm5vbmU7XG59XG5cbi5zcGlubmVyLTUgc3BhbiAge1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgd2lkdGg6MTBweDtcbiAgaGVpZ2h0OjEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG4uc3Bpbm5lci01IHNwYW46bnRoLWNoaWxkKDEpICB7XG4gIGFuaW1hdGlvbjpib3VuY3kgIDEuNXMgbGluZWFyIGluZmluaXRlO1xufVxuXG4uc3Bpbm5lci01IHNwYW46bnRoLWNoaWxkKDIpICB7XG4gIGFuaW1hdGlvbjpib3VuY3kgIDEuNXMgbGluZWFyIDAuNDk1cyBpbmZpbml0ZTtcbn1cblxuLnNwaW5uZXItNSBzcGFuOm50aC1jaGlsZCgzKSAge1xuICBhbmltYXRpb246Ym91bmN5ICAxLjVzIGxpbmVhciAwLjk5cyBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBib3VuY3kge1xuICAwJSwgMTAwJXsgb3BhY2l0eTogMDt9XG4gIDUwJSAgeyBvcGFjaXR5OiAxO31cbn1cbi8qRW5kIG9mIFNwaW5uZXItNSovXG4iLCIkcHJpbWFyeTojMDA4MDgxO1xuJHNlY29uZGFyeTojRjlBNjAyO1xuJGJnLWxpZ2h0OiNmOGY5ZmE7XG5cbiRoZWFkZXI6cmdiKDgyLCA5MiwgMTAxKTtcbiRib3JkZXI6cmdiKDIxOSwgMjI2LCAyMzIpO1xuJGdyZXkxOiNhZGFkYWQ7XG5cbiRyZWQ6I2YyM2EzODtcbiRyZWQtMTojZjM0ZDRiO1xuJHJlZDE6I2Q5MzQzMjtcblxuJGdyZWVuOiMyY2MxMmU7XG4kZ3JlZW4tMTojNTZjZDU3O1xuJGdyZWVuMTojMjM5YTM0O1xuIl19 */"

/***/ }),

/***/ "./src/app/components/loader/loader.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
        this._dataDefaults = {
            type: 1
        };
    }
    LoaderComponent.prototype.ngOnInit = function () {
        this.data = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this._dataDefaults, this.data);
    };
    LoaderComponent.prototype.ngOnDestroy = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoaderComponent.prototype, "data", void 0);
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gb-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/components/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/components/loader/loader.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/components/rap/rap.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/rap/rap.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  rap works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/rap/rap.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/rap/rap.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmFwL3JhcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/rap/rap.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/rap/rap.component.ts ***!
  \*************************************************/
/*! exports provided: RapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RapComponent", function() { return RapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RapComponent = /** @class */ (function () {
    function RapComponent() {
    }
    RapComponent.prototype.ngOnInit = function () {
    };
    RapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gb-rap',
            template: __webpack_require__(/*! ./rap.component.html */ "./src/app/components/rap/rap.component.html"),
            styles: [__webpack_require__(/*! ./rap.component.scss */ "./src/app/components/rap/rap.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RapComponent);
    return RapComponent;
}());



/***/ }),

/***/ "./src/app/components/recent/recent.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/recent/recent.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container gb-recent\">\n  <p class='feeds'>Activity Feeds</p>\n  <div class=\"d-flex justify-content-center\">\n    <gb-loader *ngIf=\"showLoader\"></gb-loader>\n  </div>\n  <div class=\"d-flex cont\" *ngFor='let recent of recentActivities'>\n    <div class=\"icon\">\n      <fa-icon [icon]=\"faHistory\"></fa-icon>\n    </div>\n    <div class=\"details\">\n\n      <div class=\"who\">\n        <b>{{recent.lastname}} {{recent.firstname}}</b> signed your GuestBook\n      </div>\n      <div class=\"time\">\n        {{setDate(recent.date)}}\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/recent/recent.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/recent/recent.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gb-recent {\n  margin-top: 30px; }\n  .gb-recent .feeds {\n    color: #008081;\n    margin-bottom: 30px; }\n  .gb-recent .cont {\n    border-bottom: solid 1px #dbe2e8; }\n  .gb-recent .cont:hover {\n      background-color: #f8f9fa; }\n  .gb-recent .icon {\n    margin-top: 10px;\n    margin-left: 5px;\n    color: #008081;\n    height: 30px; }\n  .gb-recent .details {\n    padding: 10px; }\n  .gb-recent .details .who {\n      margin-bottom: 4px; }\n  .gb-recent .details .time {\n      font-size: 90%;\n      color: #adadad; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbW15dHJhZ2VyL0d1ZXN0Qm9vay9zcmMvYXBwL2NvbXBvbmVudHMvcmVjZW50L3JlY2VudC5jb21wb25lbnQuc2NzcyIsIi9ob21lL2RhbW15dHJhZ2VyL0d1ZXN0Qm9vay9zcmMvYXNzZXRzL3Njc3MvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkFBZ0IsRUEyQmpCO0VBNUJEO0lBR0ksZUNMWTtJRE1aLG9CQUFtQixFQUNwQjtFQUxIO0lBT0ksaUNDSnNCLEVEUXZCO0VBWEg7TUFTTSwwQkNUVyxFRFVaO0VBVkw7SUFhSSxpQkFBZ0I7SUFDaEIsaUJBQWU7SUFDZixlQ2pCWTtJRGtCWixhQUFXLEVBQ1o7RUFqQkg7SUFtQkksY0FBWSxFQVFiO0VBM0JIO01BcUJNLG1CQUFpQixFQUNsQjtFQXRCTDtNQXdCUSxlQUFjO01BQ2QsZUNyQk0sRURzQlAiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlY2VudC9yZWNlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JzLnNjc3NcIjtcblxuLmdiLXJlY2VudCAge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICAuZmVlZHMgIHtcbiAgICBjb2xvcjokcHJpbWFyeTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG4gIC5jb250IHtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggJGJvcmRlcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1saWdodDtcbiAgICB9XG4gIH1cbiAgLmljb24ge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xuICAgIGNvbG9yOiRwcmltYXJ5O1xuICAgIGhlaWdodDozMHB4O1xuICB9XG4gIC5kZXRhaWxzICB7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIC53aG8gIHtcbiAgICAgIG1hcmdpbi1ib3R0b206NHB4O1xuICAgIH1cbiAgICAgIC50aW1lIHtcbiAgICAgICAgZm9udC1zaXplOiA5MCU7XG4gICAgICAgIGNvbG9yOiRncmV5MTtcbiAgICAgIH1cbiAgfVxufVxuIiwiJHByaW1hcnk6IzAwODA4MTtcbiRzZWNvbmRhcnk6I0Y5QTYwMjtcbiRiZy1saWdodDojZjhmOWZhO1xuXG4kaGVhZGVyOnJnYig4MiwgOTIsIDEwMSk7XG4kYm9yZGVyOnJnYigyMTksIDIyNiwgMjMyKTtcbiRncmV5MTojYWRhZGFkO1xuXG4kcmVkOiNmMjNhMzg7XG4kcmVkLTE6I2YzNGQ0YjtcbiRyZWQxOiNkOTM0MzI7XG5cbiRncmVlbjojMmNjMTJlO1xuJGdyZWVuLTE6IzU2Y2Q1NztcbiRncmVlbjE6IzIzOWEzNDtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/recent/recent.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/recent/recent.component.ts ***!
  \*******************************************************/
/*! exports provided: RecentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentComponent", function() { return RecentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/http.service */ "./src/app/service/http.service.ts");
/* harmony import */ var _node_modules_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _Functions_myfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Functions/myfunction */ "./src/app/Functions/myfunction.ts");





var RecentComponent = /** @class */ (function () {
    function RecentComponent(http) {
        var _this = this;
        this.http = http;
        this.faHistory = _node_modules_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faHistory"];
        this.showLoader = true;
        this.url = 'https://guestbook-be.herokuapp.com?action=guests';
        this.recentActivities = [];
        this.setDate = _Functions_myfunction__WEBPACK_IMPORTED_MODULE_4__["setDate"];
        setInterval(function () {
            _this.getRecentActivity(_this.url);
        }, 1000);
    }
    RecentComponent.prototype.ngOnInit = function () {
        this.getRecentActivity(this.url);
        this.setDate(1548270618410);
    };
    RecentComponent.prototype.getRecentActivity = function (url) {
        var _this = this;
        this.http.get(url)
            .then(function (data) {
            console.log(data);
            _this.recentActivities = data.data;
            _this.showLoader = false;
        });
    };
    RecentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gb-recent',
            template: __webpack_require__(/*! ./recent.component.html */ "./src/app/components/recent/recent.component.html"),
            styles: [__webpack_require__(/*! ./recent.component.scss */ "./src/app/components/recent/recent.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], RecentComponent);
    return RecentComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h5>This feature is not available</h5>\n</div>\n"

/***/ }),

/***/ "./src/app/components/settings/settings.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 30px; }\n  .container h5 {\n    color: #008081; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbW15dHJhZ2VyL0d1ZXN0Qm9vay9zcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9kYW1teXRyYWdlci9HdWVzdEJvb2svc3JjL2Fzc2V0cy9zY3NzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQWdCLEVBSWpCO0VBTEQ7SUFHSSxlQ0xZLEVETWIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yc1wiO1xuXG4uY29udGFpbmVyICB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGg1IHtcbiAgICBjb2xvcjokcHJpbWFyeTtcbiAgfVxufVxuIiwiJHByaW1hcnk6IzAwODA4MTtcbiRzZWNvbmRhcnk6I0Y5QTYwMjtcbiRiZy1saWdodDojZjhmOWZhO1xuXG4kaGVhZGVyOnJnYig4MiwgOTIsIDEwMSk7XG4kYm9yZGVyOnJnYigyMTksIDIyNiwgMjMyKTtcbiRncmV5MTojYWRhZGFkO1xuXG4kcmVkOiNmMjNhMzg7XG4kcmVkLTE6I2YzNGQ0YjtcbiRyZWQxOiNkOTM0MzI7XG5cbiRncmVlbjojMmNjMTJlO1xuJGdyZWVuLTE6IzU2Y2Q1NztcbiRncmVlbjE6IzIzOWEzNDtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gb-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/components/settings/settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-8 offset-sm-2 col-md-6 offset-md-3 mt-3 mt-md-5\">\n      <div class=\"signinForm p-3 p-md-4\">\n        <div class=\"header\">\n          <h4><fa-icon [icon]='faUser'></fa-icon> &nbsp; Admin Sign In</h4>\n          <hr>\n        </div>\n        <div class=\"feedback my-3 p-3 error\" *ngIf='feedback'>\n          {{feedbackMessage}}\n          <a class='close' (click)='closeFeedback()'>&times;</a>\n        </div>\n        <form class=\"form\" [formGroup]='signinForm' action=\"index.html\" method=\"post\">\n          <div class=\"form-group\">\n            <input type=\"text\" class='form-control' formControlName='username' [class.is-invalid]='username.invalid && isSubmit'  placeholder=\"Username\" name=\"\" value=\"\">\n            <small class='text-danger' *ngIf='username.errors?.required && isSubmit'>This field is required</small>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"password\" class='form-control' formControlName='password' [class.is-invalid]='password.invalid && isSubmit' placeholder=\"Password\" name=\"\" value=\"\">\n            <small class='text-danger' *ngIf='password.errors?.required && isSubmit'>This field is required</small>\n          </div>\n          <button type=\"button\" [disabled]=\"isValid\" class='btn btn-block' name=\"button\" (click)='onSubmit()'>\n            {{signInBtnText}}\n            <div class=\"float-right\"><gb-loader *ngIf=\"isValid\" [data]=\"{type: 3}\"></gb-loader></div>\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signinForm {\n  border: solid 1px #dbe2e8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbW15dHJhZ2VyL0d1ZXN0Qm9vay9zcmMvYXBwL2NvbXBvbmVudHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZGFtbXl0cmFnZXIvR3Vlc3RCb29rL3NyYy9hc3NldHMvc2Nzcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDBCQ0V3QixFRER6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9ycy5zY3NzXCI7XG5cbi5zaWduaW5Gb3JtIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggJGJvcmRlcjtcbn1cbiIsIiRwcmltYXJ5OiMwMDgwODE7XG4kc2Vjb25kYXJ5OiNGOUE2MDI7XG4kYmctbGlnaHQ6I2Y4ZjlmYTtcblxuJGhlYWRlcjpyZ2IoODIsIDkyLCAxMDEpO1xuJGJvcmRlcjpyZ2IoMjE5LCAyMjYsIDIzMik7XG4kZ3JleTE6I2FkYWRhZDtcblxuJHJlZDojZjIzYTM4O1xuJHJlZC0xOiNmMzRkNGI7XG4kcmVkMTojZDkzNDMyO1xuXG4kZ3JlZW46IzJjYzEyZTtcbiRncmVlbi0xOiM1NmNkNTc7XG4kZ3JlZW4xOiMyMzlhMzQ7XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.ts ***!
  \*********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/http.service */ "./src/app/service/http.service.ts");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/store */ "./src/app/store/store.ts");







var SignInComponent = /** @class */ (function () {
    function SignInComponent(fb, http, ngRedux) {
        this.fb = fb;
        this.http = http;
        this.ngRedux = ngRedux;
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUser"];
        this.isSubmit = false;
        this.feedback = false;
        this.isValid = false;
        this.signInBtnText = 'Sign In';
        this.feedbackMessage = 'feedbackMessage';
        this._url = 'https://guestbook-be.herokuapp.com?action=login';
        this.signinForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    Object.defineProperty(SignInComponent.prototype, "username", {
        get: function () {
            return this.signinForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignInComponent.prototype, "password", {
        get: function () {
            return this.signinForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmit = true;
        if (this.signinForm.valid) {
            this.isValid = true;
            this.signInBtnText = 'Signing In';
            var data = this.signinForm.value;
            this.http.post(this._url, data)
                .then(function (res) {
                _this.isValid = false;
                _this.signInBtnText = 'Sign In';
                console.log(res);
                if (res.status_code === 200) {
                    _this.ngRedux.dispatch({ type: _store_store__WEBPACK_IMPORTED_MODULE_6__["CHANGE_SIGN_IN"], signedIn: true });
                }
                if (res.status_code === 401) {
                    _this.feedback = true;
                    _this.feedbackMessage = 'Email or Password not correct';
                }
            })
                .catch(function (error) {
                console.log(error);
                if (error.status === 0) {
                    _this.feedback = true;
                    _this.feedbackMessage = 'Check your connections';
                }
            });
        }
    };
    SignInComponent.prototype.closeFeedback = function () {
        this.feedback = false;
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gb-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/components/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/components/sign-in/sign-in.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _service_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["NgRedux"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/components/table/table.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/table/table.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  table works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/table/table.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/table/table.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/table/table.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/table/table.component.ts ***!
  \*****************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TableComponent = /** @class */ (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gb-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/components/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/components/table/table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/components/view/view.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/view/view.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container gb-view\">\n  <div class=\"card\">\n    <div class=\"card-header d-flex justify-content-between\">\n      <div class=\"header-text\"><fa-icon [icon]=\"faUsers\" ></fa-icon> &nbsp; Guests</div>\n      <div>Total <span class=\"length\">{{Guests?.length}}</span></div>\n    </div>\n    <div class=\"card-body\">\n      <table id=\"guestsTable\" [class.guestsTable]=\"Guests\" class=\"table borderless table-hover table-responsive-lg\">\n        <thead class=\"\">\n        <tr>\n          <th class=\"th-sm\">Lastname</th>\n          <th class=\"th-sm\">Firstname</th>\n          <th class=\"th-sm\">Email</th>\n          <th class=\"th-sm\">Tel</th>\n          <th class=\"th-sm\">Location</th>\n          <th class=\"th-sm\">Registered on</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngIf=\"showLoader\">\n          <td class=\"text-center\" colspan=\"6\">\n            <gb-loader></gb-loader>\n          </td>\n        </tr>\n        <tr *ngFor=\"let guest of Guests\" class=\"guests\" (click)=\"onSelect(guest)\">\n          <td>{{guest.lastname}}</td>\n          <td>{{guest.firstname}}</td>\n          <td>{{guest.email}}</td>\n          <td>{{guest.mobile_no}}</td>\n          <td>{{guest.location}}</td>\n          <td>{{setDate(guest.date)}}</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"guestModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">{{Guest?.lastname}} {{Guest?.firstname}}</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"feedback my-3 p-3 error\" *ngIf='feedback'>\n            {{feedbackMessage}}\n            <a class='close' (click)='closeFeedback()'>&times;</a>\n          </div>\n          <div *ngIf=\"!isDelete\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <b>Lastname</b>\n              </div>\n              <div class=\"col-6\">\n                {{Guest?.lastname}}\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <b>Firstname</b>\n              </div>\n              <div class=\"col-6\">\n                {{Guest?.firstname}}\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <b>Email</b>\n              </div>\n              <div class=\"col-6\">\n                {{Guest?.email}}\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <b>Telephone</b>\n              </div>\n              <div class=\"col-6\">\n                {{Guest?.mobile_no}}\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <b>Location</b>\n              </div>\n              <div class=\"col-6\">\n                {{Guest?.location}}\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <b>Registered on</b>\n              </div>\n              <div class=\"col-6\">\n                {{setDate(Guest?.date)}}\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"isDelete\">\n            This guest has been removed\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" *ngIf=\"!quest\" class=\"btn btn-danger\" (click)=\"quest=true\">\n            {{deleteBtnText}}\n            <div class=\"float-right\"><gb-loader *ngIf=\"showDeleteLoader\" [data]=\"{type: 3}\"></gb-loader></div>\n          </button>\n          <div class=\"delete\" *ngIf=\"quest\">\n            Are you sure you want to delete this guest?\n            <button type=\"button\" class=\"btn btn-danger mx-2\" (click)=\"deleteGuest(Guest?.id)\">Yes</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"quest=false\">No</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/view/view.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/view/view.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gb-view {\n  margin-top: 30px;\n  margin-bottom: 30px; }\n  .gb-view .card-body {\n    padding-bottom: 0px; }\n  .gb-view .card-header {\n    background-color: white; }\n  .gb-view .length {\n    background-color: #008081;\n    padding: 4px 8px;\n    color: white;\n    border-radius: 5px;\n    height: 32px; }\n  .gb-view .borderless thead {\n    background-color: #008081 !important; }\n  .gb-view .borderless th, .gb-view .borderless td, .gb-view .borderless tr {\n    border: none !important; }\n  .gb-view .borderless th {\n    color: white;\n    font-weight: 600 !important;\n    padding: 11px 20px; }\n  .gb-view .borderless td {\n    padding: 11px 20px; }\n  .gb-view .borderless tr:hover {\n    cursor: pointer; }\n  @media (min-width: 992px) {\n    .gb-view .modal .modal-dialog {\n      max-width: 700px; } }\n  .gb-view .modal .modal-dialog .modal-content {\n    border-radius: 0px; }\n  .gb-view .modal .modal-dialog .modal-content button.close:focus {\n      outline: none; }\n  .gb-view .modal .modal-dialog .modal-content .row {\n      padding: 5px 10px; }\n  .gb-view .modal .modal-dialog .modal-content b {\n      color: #008081;\n      text-align: right; }\n  .gb-view .modal .modal-dialog .modal-content button {\n      border-radius: 0px !important; }\n  .gb-view .modal .modal-dialog .modal-content button:focus {\n        outline: none !important;\n        box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbW15dHJhZ2VyL0d1ZXN0Qm9vay9zcmMvYXBwL2NvbXBvbmVudHMvdmlldy92aWV3LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZGFtbXl0cmFnZXIvR3Vlc3RCb29rL3NyYy9hc3NldHMvc2Nzcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFnRXBCO0VBbEVEO0lBSUksb0JBQW1CLEVBQ3BCO0VBTEg7SUFPSSx3QkFBdUIsRUFDeEI7RUFSSDtJQVVJLDBCQ1pZO0lEYVosaUJBQWdCO0lBQ2hCLGFBQVc7SUFDWCxtQkFBa0I7SUFDbEIsYUFBWSxFQUNiO0VBZkg7SUFrQk0scUNBQXFDLEVBQ3RDO0VBbkJMO0lBcUJNLHdCQUFzQixFQUN2QjtFQXRCTDtJQXdCTSxhQUFZO0lBQ1osNEJBQTJCO0lBQzNCLG1CQUFrQixFQUNuQjtFQTNCTDtJQTZCTSxtQkFBaUIsRUFDbEI7RUE5Qkw7SUFpQ1EsZ0JBQWUsRUFDaEI7RUFLRDtJQXZDTjtNQXdDUSxpQkFDRixFQXVCRCxFQUFBO0VBaEVMO0lBMkNRLG1CQUFrQixFQW9CbkI7RUEvRFA7TUE4Q1ksY0FBWSxFQUNiO0VBL0NYO01Ba0RVLGtCQUFnQixFQUNqQjtFQW5EVDtNQXFEVSxlQ3ZETTtNRHdETixrQkFBaUIsRUFDbEI7RUF2RFQ7TUF5RFUsOEJBQTZCLEVBSzlCO0VBOURUO1FBMkRZLHlCQUF3QjtRQUN4QixpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZpZXcvdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnMuc2Nzc1wiO1xuXG4uZ2ItdmlldyAge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAuY2FyZC1ib2R5ICB7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgfVxuICAuY2FyZC1oZWFkZXIgIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICAubGVuZ3RoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gIH1cbiAgLmJvcmRlcmxlc3Mge1xuICAgIHRoZWFkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIHRoLHRkLHRyIHtcbiAgICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIHRoIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmc6IDExcHggMjBweDtcbiAgICB9XG4gICAgdGQge1xuICAgICAgcGFkZGluZzoxMXB4IDIwcHg7XG4gICAgfVxuICAgIHRyIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5tb2RhbCAge1xuICAgIC5tb2RhbC1kaWFsb2d7XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpe1xuICAgICAgICBtYXgtd2lkdGg6NzAwcHhcbiAgICAgIH1cbiAgICAgIC5tb2RhbC1jb250ZW50IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICBidXR0b24uY2xvc2UgIHtcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6bm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgcGFkZGluZzo1cHggMTBweDtcbiAgICAgICAgfVxuICAgICAgICBiIHtcbiAgICAgICAgICBjb2xvcjokcHJpbWFyeTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24gIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIkcHJpbWFyeTojMDA4MDgxO1xuJHNlY29uZGFyeTojRjlBNjAyO1xuJGJnLWxpZ2h0OiNmOGY5ZmE7XG5cbiRoZWFkZXI6cmdiKDgyLCA5MiwgMTAxKTtcbiRib3JkZXI6cmdiKDIxOSwgMjI2LCAyMzIpO1xuJGdyZXkxOiNhZGFkYWQ7XG5cbiRyZWQ6I2YyM2EzODtcbiRyZWQtMTojZjM0ZDRiO1xuJHJlZDE6I2Q5MzQzMjtcblxuJGdyZWVuOiMyY2MxMmU7XG4kZ3JlZW4tMTojNTZjZDU3O1xuJGdyZWVuMTojMjM5YTM0O1xuIl19 */"

/***/ }),

/***/ "./src/app/components/view/view.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/view/view.component.ts ***!
  \***************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/http.service */ "./src/app/service/http.service.ts");
/* harmony import */ var _Functions_myfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Functions/myfunction */ "./src/app/Functions/myfunction.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");





var ViewComponent = /** @class */ (function () {
    function ViewComponent(http) {
        var _this = this;
        this.http = http;
        this.faUsers = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUsers"];
        this.quest = false;
        this.setDate = _Functions_myfunction__WEBPACK_IMPORTED_MODULE_3__["setDate"];
        this.url = 'https://guestbook-be.herokuapp.com?action=guests';
        this.showLoader = true;
        this.deleteBtnText = 'Delete Guest';
        this.showDeleteLoader = false;
        this.isDelete = false;
        this.feedback = false;
        this.feedbackMessage = 'Please check your connection';
        this.getGuests(this.url);
        setInterval(function () {
            _this.getGuests(_this.url);
        }, 1000);
    }
    ViewComponent.prototype.ngOnInit = function () {
    };
    ViewComponent.prototype.ngAfterViewInit = function () {
    };
    ViewComponent.prototype.ngAfterContentInit = function () {
    };
    ViewComponent.prototype.getGuests = function (url) {
        var _this = this;
        this.http.get(url)
            .then(function (data) {
            _this.Guests = data.data;
            _this.initGuests();
            _this.showLoader = false;
            return true;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ViewComponent.prototype.onSelect = function (guest) {
        this.quest = false;
        this.Guest = guest;
    };
    ViewComponent.prototype.initGuests = function () {
        $(document).ready(function () {
            $('.guestsTable').dataTable();
            $('.dataTables_length').addClass('bs-select');
            $('.guests').click(function () {
                $('#guestModal').modal('show');
            });
        });
    };
    ViewComponent.prototype.deleteGuest = function (id) {
        var _this = this;
        this.deleteBtnText = 'Deleting';
        this.showDeleteLoader = true;
        this.quest = false;
        this.http.delete('https://guestbook-be.herokuapp.com?action=delete&id=' + id)
            .then(function (data) {
            if (data.status === 200) {
                console.log(data);
                _this.deleteBtnText = 'Delete Guest';
                _this.quest = false;
                _this.isDelete = true;
                _this.showDeleteLoader = false;
            }
        }).catch(function (err) {
            if (err.status === 0) {
                _this.feedback = true;
            }
        });
    };
    ViewComponent.prototype.closeFeedback = function () {
        this.feedback = false;
    };
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gb-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/components/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.scss */ "./src/app/components/view/view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/admin.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/admin/admin.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gb-header></gb-header>\n\n<gb-sign-in  *ngIf='!(signedIn | async)'></gb-sign-in>\n\n<gb-dashboard *ngIf='(signedIn | async)'></gb-dashboard>\n\n"

/***/ }),

/***/ "./src/app/pages/admin/admin.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/admin/admin.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/admin/admin.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var AdminComponent = /** @class */ (function () {
    function AdminComponent(router) {
        this.router = router;
        this.setState();
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.signedIn.subscribe(function (data) {
            _this.$signedIn$ = data;
        });
    };
    AdminComponent.prototype.setState = function () {
        var _this = this;
        this.signedIn.subscribe(function (data) {
            if (!data) {
                _this.router.navigate(['/admin/sign-in']);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["select"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], AdminComponent.prototype, "signedIn", void 0);
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gb-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/pages/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/pages/admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gb-header></gb-header>\n<gb-form></gb-form>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gb-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/service/http.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/http.service.ts ***!
  \*****************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var HttpService = /** @class */ (function () {
    /**
     * Http Service Constructor
     * @param {HttpClient} http
     */
    function HttpService(http) {
        this.http = http;
        this._headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
    }
    /**
     * GET | Sends Http GET request
     * @param url
     * @returns {Promise<HttpResponse<any>>}
     */
    HttpService.prototype.get = function (url) {
        return this.http.get(url, {
            headers: this.Headers
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; })).toPromise();
    };
    /**
     * download | Sends Http GET request to download a file
     * @param {string} url
     * @param {{}} options
     * @returns {Promise<Object>}
     */
    HttpService.prototype.download = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.http.get(url, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ headers: this.Headers }, options)).toPromise();
    };
    /**
     * POST | Sends Http POST request
     * @param {string} url
     * @param {object} data
     * @param headers
     * @returns {Promise<HttpResponse<any>>}
     */
    HttpService.prototype.post = function (url, data, headers) {
        return this.http.post(url, data, {
            headers: headers || this.Headers
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; })).toPromise();
    };
    /**
     * PUT | Sends Http PUT request
     * @param {string} url
     * @param {object} data
     * @returns {Promise<HttpResponse<any>>}
     */
    HttpService.prototype.put = function (url, data) {
        return this.http.put(url, data, {
            headers: this.Headers
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; })).toPromise();
    };
    /**
     * DELETE | Sends Http DELETE request
     * @param {string} url
     * @param {object} data
     * @returns {Promise<HttpResponse<any>>}
     */
    HttpService.prototype.delete = function (url) {
        return this.http.delete(url, {
            headers: this.Headers
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; })).toPromise();
    };
    /**
     * Set Headers | Set appropriate custom headers
     * @param {{token: string}} data
     */
    HttpService.prototype.setHeaders = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('Content-Type', 'application/json');
        if (data && data.token) {
            headers = headers.append('Authorization', "Bearer " + data.token);
        }
        this._headers = headers;
    };
    Object.defineProperty(HttpService.prototype, "Headers", {
        /**
         * Get Headers | Return custom request headers
         * @returns {HttpHeaders}
         * @constructor
         */
        get: function () {
            return this._headers;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Custom Headers | Add Custom Header to Request
     * @param {{name: string; value: string}[]} options
     * @returns {HttpHeaders}
     */
    HttpService.prototype.customHeaders = function (options) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        options.forEach(function (header) {
            headers = headers.append(header.name, header.value);
        });
        return headers;
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/store/store.ts":
/*!********************************!*\
  !*** ./src/app/store/store.ts ***!
  \********************************/
/*! exports provided: CHANGE_SIGN_IN, INITIAL_STATE, rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_SIGN_IN", function() { return CHANGE_SIGN_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
var CHANGE_SIGN_IN = 'CHANGE_SIGN_IN';
var INITIAL_STATE = {
    signedIn: null
};
function rootReducer(state, action) {
    switch (action.type) {
        case CHANGE_SIGN_IN: return Object.assign({}, state, {
            signedIn: action.signedIn
        });
    }
    return state;
}


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true
};


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dammytrager/GuestBook/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map