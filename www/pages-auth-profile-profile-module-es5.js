(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/auth/profile/profile.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/auth/profile/profile.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons color=\"tertiary\" slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Perfil</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"light\">\r\n  <div *ngIf=\"user != undefined\">\r\n    Bienvenido {{ user[\"first_name\"]  }} {{ user[\"last_name\"]  }}\r\n  </div>\r\n  <div style=\"box-shadow: 0 4px 8px 0 rgba(248, 234, 234, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); margin-left: auto; margin-right: auto; margin-top: 5%; display: block; padding: 5%; width: 90%; height: 700; background-color: #ffffff; border-style: solid; border-width: 0.5%; border-color: #d9d8d8; border-radius: 3%\">\r\n    <div style=\"display: flex; justify-content: space-between\">\r\n      <h3 style=\"font-weight: bold\">Datos Personales:</h3>\r\n      <ion-icon name=\"create\" style=\"margin-top: 7%\" routerLink=\"/edit-profile\"></ion-icon>\r\n    </div>\r\n    <ion-item>\r\n      <ion-icon name=\"contact\"></ion-icon>\r\n      <ion-text color=\"primary\" style=\"margin-left: 5%\">Nombre y Apellido: \r\n        <ion-label >{{ nombre }} {{ apellido }}</ion-label>\r\n      </ion-text>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"finger-print\"></ion-icon>\r\n      <ion-text color=\"primary\" style=\"margin-left: 5%\">Cédula: \r\n        <ion-label >{{ cedula }}</ion-label>\r\n      </ion-text>\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-icon name=\"call\"></ion-icon>\r\n        <ion-text color=\"primary\" style=\"margin-left: 5%\">Número de Teléfono: \r\n          <ion-label >{{ telefono }}</ion-label>\r\n        </ion-text>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"mail\"></ion-icon>\r\n      <ion-text color=\"primary\" style=\"margin-left: 5%\">Email: \r\n        <ion-label >{{ email }}</ion-label>\r\n      </ion-text>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-icon name=\"home\"></ion-icon>\r\n      <ion-text color=\"primary\" style=\"margin-left: 5%\">Dirección: \r\n        <ion-label >{{ direccion }}</ion-label>\r\n      </ion-text>\r\n    </ion-item>\r\n\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/auth/profile/profile.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/auth/profile/profile.module.ts ***!
  \******************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/auth/profile/profile.page.ts");







var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/profile/profile.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/auth/profile/profile.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/auth/profile/profile.page.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/auth/profile/profile.page.ts ***!
  \****************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");







var ProfilePage = /** @class */ (function () {
    function ProfilePage(menu, navCtrl, authService, alertService, profileServices, storage) {
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.alertService = alertService;
        this.profileServices = profileServices;
        this.storage = storage;
        this.items = [];
    }
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        try {
            this.storage.get('ticket').then(function (ticket) {
                _this.storage.get('email').then(function (email) {
                    _this.profileServices.sendEmail(email, ticket).subscribe(function (data) {
                        if (data['respuesta'] === 'false') {
                            _this.navCtrl.navigateRoot('/landing');
                        }
                        else {
                            _this.items = [];
                            setTimeout(function () {
                                _this.nombre = data['customer'].nombre;
                                _this.apellido = data['customer'].apellido;
                                _this.email = data['customer'].email;
                                // this.contraseña = data['customer'].contraseña;
                                _this.cedula = data['customer'].cedula;
                                _this.telefono = data['customer'].telefono;
                                _this.direccion = data['customer'].direccion;
                                _this.items.push(_this.nombre);
                                _this.items.push(_this.apellido);
                                _this.items.push(_this.email);
                                _this.items.push(_this.cedula);
                                _this.items.push(_this.telefono);
                                _this.items.push(_this.direccion);
                            });
                        }
                    }, function (error) {
                        console.log(error);
                    });
                });
            });
        }
        catch (error) {
            this.alertService.presentToast("Ocurrió un error");
            this.navCtrl.navigateRoot('/dashboard');
        }
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/auth/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/auth/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-profile-profile-module-es5.js.map