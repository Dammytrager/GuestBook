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
/*! exports provided: patternMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternMatch", function() { return patternMatch; });
function patternMatch(value) {
    return function (control) {
        var pass = value.test(control.value);
        return pass ? null : { 'patternFail': true };
    };
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
    { path: 'admin/dashboard', component: _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"] }
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
















var AppModule = /** @class */ (function () {
    function AppModule() {
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
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
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

module.exports = "<div class=\"container mt-3 mt-md-4\">\n  <div class=\"header-links\">\n    <ul class=\"nav justify-content-center justify-content-sm-start\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=''>\n          <fa-icon [icon]='faHistory'></fa-icon> &nbsp; <span class='d-none d-sm-inline-block'>Recent Activity</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=''>\n          <fa-icon [icon]='faList'></fa-icon> &nbsp; <span class='d-none d-sm-inline-block'>View Guests</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=''>\n          <fa-icon [icon]='faCog'></fa-icon> &nbsp; <span class='d-none d-sm-inline-block'>Account Settings</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .header-links ul {\n  width: 100%;\n  border-bottom: solid 0.1px #dbe2e8; }\n  .container .header-links ul .nav-item a {\n    color: #525c65;\n    font-size: 15px; }\n  @media (max-width: 575px) {\n      .container .header-links ul .nav-item a {\n        font-size: 20px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbW15dHJhZ2VyL1Byb2plY3RzL0d1ZXN0Qm9vay9HQkZFL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZGFtbXl0cmFnZXIvUHJvamVjdHMvR3Vlc3RCb29rL0dCRkUvc3JjL2Fzc2V0cy9zY3NzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBR00sWUFBVTtFQUNWLG1DQ0ZvQixFRFlyQjtFQWRMO0lBT1UsZUNOYztJRE9kLGdCQUFjLEVBSWY7RUFIQztNQVRWO1FBVVksZ0JBQWUsRUFFbEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnMuc2Nzc1wiO1xuXG4uY29udGFpbmVyICB7XG4gIC5oZWFkZXItbGlua3Mge1xuICAgIHVsICB7XG4gICAgICB3aWR0aDoxMDAlO1xuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC4xcHggJGJvcmRlcjtcbiAgICAgIC5uYXYtaXRlbSB7XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiRoZWFkZXI7XG4gICAgICAgICAgZm9udC1zaXplOjE1cHg7XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIkcHJpbWFyeTojMDA4MDgxO1xuJHNlY29uZGFyeTojRjlBNjAyO1xuXG4kaGVhZGVyOnJnYig4MiwgOTIsIDEwMSk7XG4kYm9yZGVyOnJnYigyMTksIDIyNiwgMjMyKTtcbiRncmV5MTojYWRhZGFkO1xuXG4kcmVkOiNmMjNhMzg7XG4kcmVkLTE6I2YzNGQ0YjtcbiRyZWQxOiNkOTM0MzI7XG5cbiRncmVlbjojMmNjMTJlO1xuJGdyZWVuLTE6IzU2Y2Q1NztcbiRncmVlbjE6IzIzOWEzNDtcbiJdfQ== */"

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



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.faHistory = _node_modules_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHistory"];
        this.faCog = _node_modules_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCog"];
        this.faList = _node_modules_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faList"];
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gb-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-8 offset-sm-2 col-md-6 offset-md-3 mt-3 mt-md-5\">\n      <div class=\"fill-form p-3 p-md-4\">\n        <div class=\"header mt-3 mb-4\">\n          <h4 class='text-center'>Fill the form to be a guest</h4>\n          <hr>\n        </div>\n\n        <div class=\"feedback my-3 p-3 error\" *ngIf='feedback'>\n          {{feedbackMessage}}\n          <a class='close' (click)='closeFeedback()'>&times;</a>\n        </div>\n\n        <form class=\"form\" [formGroup]='gbForm' action=\"index.html\" method=\"post\">\n          <div class=\"form-group\">\n            <input type=\"text\" class='form-control' [class.is-invalid]='lastname.invalid && isSubmit' formControlName='lastname' placeholder='Lastname' name=\"\" value=\"\">\n            <div class=\"\" *ngIf='lastname?.errors'>\n              <small *ngIf='lastname.errors?.required && isSubmit' class='text-danger'>This field is required</small>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class='form-control' [class.is-invalid]='firstname.invalid && isSubmit' formControlName='firstname' placeholder='Firstname' name=\"\" value=\"\">\n            <div class=\"\" *ngIf='firstname?.errors'>\n              <small *ngIf='firstname.errors?.required && isSubmit' class='text-danger'>This field is required</small>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"email\" class='form-control' [class.is-invalid]='email.invalid && isSubmit' formControlName='email' placeholder='Email' name=\"\" value=\"\">\n            <div class=\"\" *ngIf='email?.errors'>\n              <small *ngIf='email.errors?.required && isSubmit' class='text-danger'>This field is required</small>\n              <small *ngIf='!email.errors?.required && isSubmit && email.errors?.patternFail' class='text-danger'>Invalid Email</small>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class='form-control' [class.is-invalid]='location.invalid && isSubmit' formControlName='location' placeholder='Location' name=\"\" value=\"\">\n            <div class=\"\" *ngIf='location?.errors'>\n              <small *ngIf='location.errors?.required && isSubmit' class='text-danger'>This field is required</small>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class='form-control' [class.is-invalid]='mobile_no.invalid && isSubmit' formControlName='mobile_no' placeholder='Mobile Number' name=\"\" value=\"\">\n            <div class=\"\" *ngIf='mobile_no?.errors'>\n              <small *ngIf='mobile_no.errors?.required && isSubmit' class='text-danger'>This field is required</small>\n              <small *ngIf='!mobile_no.errors?.required && isSubmit && mobile_no.errors?.patternFail' class='text-danger'>Invalid Mobile Number</small>\n            </div>\n          </div>\n          <div class=\"buttons row\">\n            <div class=\"col-6\">\n              <button type=\"button\" class='btn btn-block' name=\"button\" (click)='onSubmit()'>Submit</button>\n            </div>\n            <div class=\"col-6\">\n              <button type=\"button\" class='btn btn-block' name=\"button\" (click)='gbForm.reset(); isSubmit=false'>Reset</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/form/form.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/form/form.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-form {\n  border: solid 1px #dbe2e8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbW15dHJhZ2VyL1Byb2plY3RzL0d1ZXN0Qm9vay9HQkZFL3NyYy9hcHAvY29tcG9uZW50cy9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiLCIvaG9tZS9kYW1teXRyYWdlci9Qcm9qZWN0cy9HdWVzdEJvb2svR0JGRS9zcmMvYXNzZXRzL3Njc3MvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSwwQkNDd0IsRURBekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnMuc2Nzc1wiO1xuXG4uZmlsbC1mb3JtICB7XG4gIGJvcmRlcjpzb2xpZCAxcHggJGJvcmRlcjtcbn1cbiIsIiRwcmltYXJ5OiMwMDgwODE7XG4kc2Vjb25kYXJ5OiNGOUE2MDI7XG5cbiRoZWFkZXI6cmdiKDgyLCA5MiwgMTAxKTtcbiRib3JkZXI6cmdiKDIxOSwgMjI2LCAyMzIpO1xuJGdyZXkxOiNhZGFkYWQ7XG5cbiRyZWQ6I2YyM2EzODtcbiRyZWQtMTojZjM0ZDRiO1xuJHJlZDE6I2Q5MzQzMjtcblxuJGdyZWVuOiMyY2MxMmU7XG4kZ3JlZW4tMTojNTZjZDU3O1xuJGdyZWVuMTojMjM5YTM0O1xuIl19 */"

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




var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var num = /^0\d{10}$/;
var FormComponent = /** @class */ (function () {
    function FormComponent(fb) {
        this.fb = fb;
        this.feedbackMessage = 'feedbackMessage';
        this.feedback = false;
        this.isSubmit = false;
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
        this.isSubmit = true;
    };
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gb-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/components/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/components/form/form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
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

module.exports = "nav .navbar-brand {\n  font-size: 40px;\n  font-weight: bold; }\n  nav .navbar-brand .primary {\n    color: #008081; }\n  nav .navbar-brand .secondary {\n    color: #F9A602; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbW15dHJhZ2VyL1Byb2plY3RzL0d1ZXN0Qm9vay9HQkZFL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZGFtbXl0cmFnZXIvUHJvamVjdHMvR3Vlc3RCb29rL0dCRkUvc3JjL2Fzc2V0cy9zY3NzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksZ0JBQWM7RUFDZCxrQkFBZ0IsRUFPakI7RUFWSDtJQUtNLGVDUFUsRURRWDtFQU5MO0lBUU0sZUNUWSxFRFViIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9ycy5zY3NzXCI7XG5cbm5hdiB7XG4gIC5uYXZiYXItYnJhbmQge1xuICAgIGZvbnQtc2l6ZTo0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgLnByaW1hcnkgIHtcbiAgICAgIGNvbG9yOiRwcmltYXJ5O1xuICAgIH1cbiAgICAuc2Vjb25kYXJ5ICB7XG4gICAgICBjb2xvcjokc2Vjb25kYXJ5O1xuICAgIH1cbiAgfVxufVxuIiwiJHByaW1hcnk6IzAwODA4MTtcbiRzZWNvbmRhcnk6I0Y5QTYwMjtcblxuJGhlYWRlcjpyZ2IoODIsIDkyLCAxMDEpO1xuJGJvcmRlcjpyZ2IoMjE5LCAyMjYsIDIzMik7XG4kZ3JleTE6I2FkYWRhZDtcblxuJHJlZDojZjIzYTM4O1xuJHJlZC0xOiNmMzRkNGI7XG4kcmVkMTojZDkzNDMyO1xuXG4kZ3JlZW46IzJjYzEyZTtcbiRncmVlbi0xOiM1NmNkNTc7XG4kZ3JlZW4xOiMyMzlhMzQ7XG4iXX0= */"

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

/***/ "./src/app/components/sign-in/sign-in.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-8 offset-sm-2 col-md-6 offset-md-3 mt-3 mt-md-5\">\n      <div class=\"signinForm p-3 p-md-4\">\n        <div class=\"header\">\n          <h4><fa-icon [icon]='faUser'></fa-icon> &nbsp; Admin Sign In</h4>\n          <hr>\n        </div>\n        <div class=\"feedback my-3 p-3 error\" *ngIf='feedback'>\n          {{feedbackMessage}}\n          <a class='close' (click)='closeFeedback()'>&times;</a>\n        </div>\n        <form class=\"form\" [formGroup]='signinForm' action=\"index.html\" method=\"post\">\n          <div class=\"form-group\">\n            <input type=\"text\" class='form-control' formControlName='username' [class.is-invalid]='username.invalid && isSubmit'  placeholder=\"Username\" name=\"\" value=\"\">\n            <small class='text-danger' *ngIf='username.errors?.required && isSubmit'>This field is required</small>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"password\" class='form-control' formControlName='password' [class.is-invalid]='password.invalid && isSubmit' placeholder=\"Password\" name=\"\" value=\"\">\n            <small class='text-danger' *ngIf='password.errors?.required && isSubmit'>This field is required</small>\n          </div>\n          <button type=\"button\" class='btn btn-block' name=\"button\" (click)='onSubmit()'>Sign In</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signinForm {\n  border: solid 1px #dbe2e8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbW15dHJhZ2VyL1Byb2plY3RzL0d1ZXN0Qm9vay9HQkZFL3NyYy9hcHAvY29tcG9uZW50cy9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LnNjc3MiLCIvaG9tZS9kYW1teXRyYWdlci9Qcm9qZWN0cy9HdWVzdEJvb2svR0JGRS9zcmMvYXNzZXRzL3Njc3MvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSwwQkNDd0IsRURBekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnMuc2Nzc1wiO1xuXG4uc2lnbmluRm9ybSB7XG4gIGJvcmRlcjogc29saWQgMXB4ICRib3JkZXI7XG59XG4iLCIkcHJpbWFyeTojMDA4MDgxO1xuJHNlY29uZGFyeTojRjlBNjAyO1xuXG4kaGVhZGVyOnJnYig4MiwgOTIsIDEwMSk7XG4kYm9yZGVyOnJnYigyMTksIDIyNiwgMjMyKTtcbiRncmV5MTojYWRhZGFkO1xuXG4kcmVkOiNmMjNhMzg7XG4kcmVkLTE6I2YzNGQ0YjtcbiRyZWQxOiNkOTM0MzI7XG5cbiRncmVlbjojMmNjMTJlO1xuJGdyZWVuLTE6IzU2Y2Q1NztcbiRncmVlbjE6IzIzOWEzNDtcbiJdfQ== */"

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




var SignInComponent = /** @class */ (function () {
    function SignInComponent(fb) {
        this.fb = fb;
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUser"];
        this.isSubmit = false;
        this.feedback = false;
        this.feedbackMessage = 'feedbackMessage';
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
        this.isSubmit = true;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/components/view/view.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/view/view.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  view works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/view/view.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/view/view.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlldy92aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

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


var ViewComponent = /** @class */ (function () {
    function ViewComponent() {
    }
    ViewComponent.prototype.ngOnInit = function () {
    };
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gb-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/components/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.scss */ "./src/app/components/view/view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "<gb-header></gb-header>\n\n<gb-sign-in *ngIf='signIn'></gb-sign-in>\n\n<gb-dashboard *ngIf='!signIn'></gb-dashboard>\n"

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



var AdminComponent = /** @class */ (function () {
    function AdminComponent(router) {
        this.router = router;
        this.signIn = false;
        this.setState();
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.setState = function () {
        if (this.signIn) {
            this.router.navigate(['/admin/sign-in']);
        }
        else {
            this.router.navigate(['/admin/dashboard']);
        }
    };
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

module.exports = __webpack_require__(/*! /home/dammytrager/Projects/GuestBook/GBFE/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map