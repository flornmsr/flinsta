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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");



class AppComponent {
    constructor() {
        this.title = 'flinsta';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-feed");
    } }, directives: [_feed_feed_component__WEBPACK_IMPORTED_MODULE_1__["FeedComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _service_unsplash_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/unsplash.service */ "./src/app/service/unsplash.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_service_unsplash_service__WEBPACK_IMPORTED_MODULE_9__["UnsplashService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _feed_feed_component__WEBPACK_IMPORTED_MODULE_4__["FeedComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_11__["CardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _feed_feed_component__WEBPACK_IMPORTED_MODULE_4__["FeedComponent"],
                    _card_card_component__WEBPACK_IMPORTED_MODULE_11__["CardComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
                ],
                providers: [_service_unsplash_service__WEBPACK_IMPORTED_MODULE_9__["UnsplashService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






class CardComponent {
    constructor() {
        this.favClicked = false;
    }
    ngOnInit() {
    }
    goToLink(url) {
        window.open(url, "_blank");
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { photo: "photo" }, decls: 26, vars: 11, consts: [[1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image", 3, "click"], ["mat-card-image", "", 2, "margin-bottom", "0", 3, "src", "click"], [2, "padding", "0"], ["mat-icon-button", "", 3, "click"], ["mat-icon-button", ""], [1, "date"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_div_click_2_listener() { return ctx.goToLink(ctx.photo.user.links.html); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_img_click_7_listener() { return ctx.goToLink(ctx.photo.links.html); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_button_click_9_listener() { return ctx.favClicked = !ctx.favClicked; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "chat_bubble_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.photo.user.profile_image.medium + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.photo.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.photo.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.photo.urls.regular, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.favClicked ? "favorite" : "favorite_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.photo.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.photo.alt_description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 9, ctx.photo.created_at));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 0 auto;\n  margin-top: 1em;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVFO0VBRUUsc0JBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss']
            }]
    }], function () { return []; }, { photo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/feed/feed.component.ts":
/*!****************************************!*\
  !*** ./src/app/feed/feed.component.ts ***!
  \****************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_unsplash_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/unsplash.service */ "./src/app/service/unsplash.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card/card.component */ "./src/app/card/card.component.ts");






function FeedComponent_app_card_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 9);
} if (rf & 2) {
    const photo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("photo", photo_r1);
} }
class FeedComponent {
    constructor(unsplashService) {
        this.unsplashService = unsplashService;
    }
    ngOnInit() {
        this.firstLoading();
    }
    firstLoading() {
        let home = this.getLocalStorage().switzerland;
        this.unsplashService.getImage(home.current, "Switzerland").subscribe(photos => {
            this.photos = photos['results'];
            home.max = photos['total_pages'];
            home.current = (home.current + 1) % home.max;
            let save = this.getLocalStorage();
            save.switzerland = home;
            this.setLocaleStorage(save);
            console.log(photos);
        });
    }
    getPhotos(query) {
        let obj = this.getLocalStorage()[query];
        console.log(obj);
        this.unsplashService.getImage(obj.current, query).subscribe(photos => {
            this.photos.push(...photos['results']);
            obj.max = photos['total_pages'];
            obj.current = (obj.current + 1) % obj.max;
            let save = this.getLocalStorage();
            save[query] = obj;
            this.setLocaleStorage(save);
        });
    }
    getLocalStorage() {
        let item = JSON.parse(localStorage.getItem('flinsta_pages'));
        if (item) {
            return item;
        }
        else {
            return {
                switzerland: {
                    current: 1,
                    max: null
                },
                kitten: {
                    current: 1,
                    max: null
                }
            };
        }
    }
    setLocaleStorage(item) {
        localStorage.setItem('flinsta_pages', JSON.stringify(item));
    }
}
FeedComponent.ɵfac = function FeedComponent_Factory(t) { return new (t || FeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_unsplash_service__WEBPACK_IMPORTED_MODULE_1__["UnsplashService"])); };
FeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedComponent, selectors: [["app-feed"]], decls: 19, vars: 1, consts: [[1, "content"], [1, "test"], [1, "header"], [1, "icons"], [1, "material-icons", "my-icon"], [2, "margin-bottom", "6em"], [3, "photo", 4, "ngFor", "ngForOf"], [1, "d-flex", "button-row"], ["mat-flat-button", "", 3, "click"], [3, "photo"]], template: function FeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "flinsta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " add_box ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " favorite_border ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FeedComponent_app_card_13_Template, 1, 1, "app-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedComponent_Template_button_click_15_listener() { return ctx.getPhotos("switzerland"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "more home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedComponent_Template_button_click_17_listener() { return ctx.getPhotos("kitten"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "more kitten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.photos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap\");\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60px;\n  background-color: #111111;\n  color: white;\n  display: flex;\n  align-items: center;\n}\n.header[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  margin-right: 1em;\n  margin-left: auto;\n}\n.header[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .my-icon[_ngcontent-%COMP%] {\n  margin: 0.25em 0.3em;\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Dancing Script\", cursive;\n  font-size: 2.5em;\n  padding-left: 0.5em;\n  margin: 0;\n}\n.d-flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.button-row[_ngcontent-%COMP%] {\n  margin: 2em 0;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9mZWVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG1GQUFBO0FBS1I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUhKO0FBS0k7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBSFI7QUFJUTtFQUNJLG9CQUFBO0FBRlo7QUFLSTtFQUNJLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFIUjtBQVFFO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBTE47QUFRRTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtBQUxOIiwiZmlsZSI6InNyYy9hcHAvZmVlZC9mZWVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5cclxuXHJcblxyXG4uaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC5pY29ucyB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgLm15LWljb24ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAuMjVlbSAwLjNlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcclxuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMC41ZW07XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuICAuZC1mbGV4e1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1yb3d7XHJcbiAgICAgIG1hcmdpbjogMmVtIDA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feed',
                templateUrl: './feed.component.html',
                styleUrls: ['./feed.component.scss']
            }]
    }], function () { return [{ type: _service_unsplash_service__WEBPACK_IMPORTED_MODULE_1__["UnsplashService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/unsplash.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/unsplash.service.ts ***!
  \*********************************************/
/*! exports provided: UnsplashService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsplashService", function() { return UnsplashService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class UnsplashService {
    constructor(http) {
        this.http = http;
    }
    getImage(page, query) {
        return this.http.get(`https://api.unsplash.com/search/photos?client_id=${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].accessKey}&query=${query}&page=${page}`);
        // return new Observable(observer => observer.next(JSON.parse('{"total":10000,"total_pages":1000,"results":[{"id":"BYPMtjYMEyk","created_at":"2018-06-27T13:56:07-04:00","updated_at":"2021-09-16T17:04:54-04:00","promoted_at":null,"width":5472,"height":3648,"color":"#404040","blur_hash":"LREfsT?broV?O_bxRNRiyEf,t6tR","description":"lauterbrunnen","alt_description":"houses near valley with trees","urls":{"raw":"https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwyNjEyMTR8MHwxfHNlYXJjaHwxfHxTd2l0emVybGFuZHxlbnwwfHx8fDE2MzE4MjY4MjI\u0026ixlib=rb-1.2.1","full":"https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwyNjEyMTR8MHwxfHNlYXJjaHwxfHxTd2l0emVybGFuZHxlbnwwfHx8fDE2MzE4MjY4MjI\u0026ixlib=rb-1.2.1\u0026q=85","regular":"https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyNjEyMTR8MHwxfHNlYXJjaHwxfHxTd2l0emVybGFuZHxlbnwwfHx8fDE2MzE4MjY4MjI\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080","small":"https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyNjEyMTR8MHwxfHNlYXJjaHwxfHxTd2l0emVybGFuZHxlbnwwfHx8fDE2MzE4MjY4MjI\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400","thumb":"https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwyNjEyMTR8MHwxfHNlYXJjaHwxfHxTd2l0emVybGFuZHxlbnwwfHx8fDE2MzE4MjY4MjI\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200"},"links":{"self":"https://api.unsplash.com/photos/BYPMtjYMEyk","html":"https://unsplash.com/photos/BYPMtjYMEyk","download":"https://unsplash.com/photos/BYPMtjYMEyk/download","download_location":"https://api.unsplash.com/photos/BYPMtjYMEyk/download?ixid=MnwyNjEyMTR8MHwxfHNlYXJjaHwxfHxTd2l0emVybGFuZHxlbnwwfHx8fDE2MzE4MjY4MjI"},"categories":[],"likes":494,"liked_by_user":false,"current_user_collections":[],"sponsorship":null,"topic_submissions":{},"user":{"id":"jAMvJ5oenpk","updated_at":"2021-09-16T05:01:04-04:00","username":"timtrad","name":"Tim Trad","first_name":"Tim","last_name":"Trad","twitter_username":"TimTrad","portfolio_url":"http://www.instagram.com/timtrad","bio":"Travel Photographer - @TimTrad","location":"Columbus Ohio","links":{"self":"https://api.unsplash.com/users/timtrad","html":"https://unsplash.com/@timtrad","photos":"https://api.unsplash.com/users/timtrad/photos","likes":"https://api.unsplash.com/users/timtrad/likes","portfolio":"https://api.unsplash.com/users/timtrad/portfolio","following":"https://api.unsplash.com/users/timtrad/following","followers":"https://api.unsplash.com/users/timtrad/followers"},"profile_image":{"small":"https://images.unsplash.com/profile-1484405698908-28d06b8bebbc?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32","medium":"https://images.unsplash.com/profile-1484405698908-28d06b8bebbc?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64","large":"https://images.unsplash.com/profile-1484405698908-28d06b8bebbc?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128"},"instagram_username":"TimTrad","total_collections":31,"total_likes":132,"total_photos":87,"accepted_tos":true,"for_hire":true,"social":{"instagram_username":"TimTrad","portfolio_url":"http://www.instagram.com/timtrad","twitter_username":"TimTrad","paypal_email":null}},"tags":[{"type":"search","title":"switzerland"},{"type":"search","title":"lauterbrunnen"},{"type":"landing_page","title":"mountain","source":{"ancestry":{"type":{"slug":"images","pretty_slug":"Images"},"category":{"slug":"nature","pretty_slug":"Nature"},"subcategory":{"slug":"mountain","pretty_slug":"Mountain"}},"title":"Mountain Images \u0026 Pictures","subtitle":"Download free mountain images","description":"Choose from a curated selection of mountain photos. Always free on Unsplash.","meta_title":"Mountain Pictures | Download Free Images \u0026 Stock Photos on Unsplash","meta_description":"Choose from hundreds of free mountain pictures. Download HD mountain photos for free on Unsplash.","cover_photo":{"id":"YFFGkE3y4F8","created_at":"2016-11-30T04:21:54-05:00","updated_at":"2021-09-01T05:01:46-04:00","promoted_at":"2016-11-30T04:21:54-05:00","width":2500,"height":1670,"color":"#d9d9d9","blur_hash":"LVFGF9xa4mR%-URiR*ay-;%MjbWB","description":"We did a short road trip to the Dolomites (5hrs driving). We stopped the car almost every 5 meters because of the beautiful landscape. \r\nIt reminded me to take the time and appreciate what is around you.","alt_description":"body of water and snow-covered mountains during daytime","urls":{"raw":"https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-1.2.1","full":"https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-1.2.1\u0026q=85\u0026fm=jpg\u0026crop=entropy\u0026cs=srgb","regular":"https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=1080\u0026fit=max","small":"https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=400\u0026fit=max","thumb":"https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=entropy\u0026cs=tinysrgb\u0026w=200\u0026fit=max"},"links":{"self":"https://api.unsplash.com/photos/YFFGkE3y4F8","html":"https://unsplash.com/photos/YFFGkE3y4F8","download":"https://unsplash.com/photos/YFFGkE3y4F8/download","download_location":"https://api.unsplash.com/photos/YFFGkE3y4F8/download"},"categories":[],"likes":2221,"liked_by_user":false,"current_user_collections":[],"sponsorship":null,"topic_submissions":{},"user":{"id":"wk-b071tZ0o","updated_at":"2021-09-01T07:39:19-04:00","username":"timstief","name":"Tim Stief","first_name":"Tim","last_name":"Stief","twitter_username":null,"portfolio_url":"http://timstief.ch/","bio":null,"location":"Zurich","links":{"self":"https://api.unsplash.com/users/timstief","html":"https://unsplash.com/@timstief","photos":"https://api.unsplash.com/users/timstief/photos","likes":"https://api.unsplash.com/users/timstief/likes","portfolio":"https://api.unsplash.com/users/timstief/portfolio","following":"https://api.unsplash.com/users/timstief/following","followers":"https://api.unsplash.com/users/timstief/followers"},"profile_image":{"small":"https://images.unsplash.com/profile-1455099105651-9aa69818b001?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32","medium":"https://images.unsplash.com/profile-1455099105651-9aa69818b001?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64","large":"https://images.unsplash.com/profile-1455099105651-9aa69818b001?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128"},"instagram_username":"timstief","total_collections":0,"total_likes":101,"total_photos":26,"accepted_tos":true,"for_hire":false,"social":{"instagram_username":"timstief","portfolio_url":"http://timstief.ch/","twitter_username":null,"paypal_email":null}}}}}]}')));
    }
}
UnsplashService.ɵfac = function UnsplashService_Factory(t) { return new (t || UnsplashService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UnsplashService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UnsplashService, factory: UnsplashService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnsplashService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
const environment = {
    production: false,
    accessKey: "MbsxsvqvyDgk3MpIzN7j8vy1xqLdzOc_pQ3Om5ZkizQ"
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Florian\IdeaProjects\flinsta\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map