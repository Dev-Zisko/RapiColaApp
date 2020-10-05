(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-edit-profile-edit-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/auth/edit-profile/edit-profile.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/auth/edit-profile/edit-profile.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons color=\"tertiary\" slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Editar Perfil</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"secondary\">\r\n  <div style=\"box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); margin-left: auto; margin-right: auto; margin-top: 5%; margin-bottom: 5%; display: block; padding: 5%; width: 90%; height: 700; background-color: #ffffff; border-style: solid; border-width: 0.5%; border-color: #d9d8d8; border-radius: 1.5%\">\r\n    <form #form=\"ngForm\" (ngSubmit)=\"updateInfo(form)\" method=\"post\">\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Nombre <ion-text color=\"danger\">*</ion-text>\r\n          </ion-label>\r\n          <ion-input required ngModel name=\"nombre\" type=\"text\" value=\"{{ nombre }}\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Apellido <ion-text color=\"danger\">*</ion-text>\r\n          </ion-label>\r\n          <ion-input required ngModel name=\"apellido\" type=\"text\" value=\"{{ apellido }}\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Email <ion-text color=\"danger\">*</ion-text>\r\n          </ion-label>\r\n          <ion-input required ngModel name=\"email\" type=\"email\" value=\"{{ email }}\" disabled></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Contraseña <ion-text color=\"danger\">*</ion-text>\r\n          </ion-label>\r\n          <ion-input required ngModel name=\"password\" type=\"password\" placeholder=\"Contraseña\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Repetir Contraseña <ion-text color=\"danger\">*</ion-text>\r\n          </ion-label>\r\n          <ion-input required ngModel name=\"password2\" type=\"password\" placeholder=\"Repita Contraseña\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Cédula <ion-text color=\"danger\">*</ion-text>\r\n          </ion-label>\r\n          <ion-input required ngModel name=\"cedula\" type=\"number\" value=\"{{ cedula }}\" disabled></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Número Telefónico <ion-text color=\"danger\">*</ion-text>\r\n          </ion-label>\r\n          <ion-input required type=\"telefono\" value=\"{{ telefono }}\" disabled></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Dirección </ion-label>\r\n          <ion-textarea ngModel name=\"direccion\" value=\"{{ direccion }}\"></ion-textarea>\r\n        </ion-item>\r\n        <div class=\"ion-padding\">\r\n          <ion-button color=\"primary\" style=\"display: block\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">Guardar Cambios</ion-button>\r\n        </div>\r\n      </form>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/auth/edit-profile/edit-profile.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/edit-profile/edit-profile.module.ts ***!
  \****************************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/pages/auth/edit-profile/edit-profile.page.ts");







const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]
    }
];
let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
    })
], EditProfilePageModule);



/***/ }),

/***/ "./src/app/pages/auth/edit-profile/edit-profile.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/edit-profile/edit-profile.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/auth/edit-profile/edit-profile.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/auth/edit-profile/edit-profile.page.ts ***!
  \**************************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");







let EditProfilePage = class EditProfilePage {
    constructor(menu, navCtrl, authService, profileServices, alertService, storage) {
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.profileServices = profileServices;
        this.alertService = alertService;
        this.storage = storage;
    }
    ngOnInit() {
        try {
            this.storage.get('ticket').then((ticket) => {
                this.storage.get('email').then((email) => {
                    this.profileServices.sendEmail(email, ticket).subscribe(data => {
                        console.log(data);
                        if (data['respuesta'] === 'false') {
                            this.navCtrl.navigateRoot('/landing');
                        }
                        else {
                            this.nombre = data['customer'].nombre;
                            this.apellido = data['customer'].apellido;
                            this.email = data['customer'].email;
                            // this.contraseña = data['customer'].contraseña;
                            this.cedula = data['customer'].cedula;
                            this.telefono = data['customer'].telefono;
                            this.direccion = data['customer'].direccion;
                        }
                    }, error => {
                        console.log(error);
                    });
                });
            });
        }
        catch (error) {
            this.alertService.presentToast("Ocurrió un error");
            this.navCtrl.navigateRoot('/dashboard');
        }
    }
    updateInfo(form) {
        try {
            if (form.value.password == '' || form.value.password2 == '') {
                this.alertService.presentToast('Debe ingresar la contraseña');
            }
            else if (form.value.password != form.value.password2) {
                this.alertService.presentToast('La contraseña y su confirmación no coinciden');
            }
            else {
                // console.log(this.authService.ticketLogged);
                this.storage.get('ticket').then((ticket) => {
                    this.storage.get('email').then((email) => {
                        this.profileServices.editProfile(email, form.value.nombre, form.value.apellido, form.value.password, form.value.direccion, ticket).subscribe(data => {
                            console.log(data['respuesta']);
                            if (data['respuesta'] === 'true') {
                                this.alertService.presentToast('La información fue editada exitosamente');
                            }
                            else if (data['respuesta'] === 'false') {
                                if (data['ticket'] === ticket) {
                                    this.alertService.presentToast('Error, intente nuevamente');
                                }
                                this.navCtrl.navigateRoot('/landing');
                            }
                        }, error => {
                            console.log(error);
                        });
                    });
                });
            }
        }
        catch (error) {
            this.alertService.presentToast("Ocurrió un error, Intente nuevamente");
        }
    }
};
EditProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile',
        template: __webpack_require__(/*! raw-loader!./edit-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/auth/edit-profile/edit-profile.page.html"),
        styles: [__webpack_require__(/*! ./edit-profile.page.scss */ "./src/app/pages/auth/edit-profile/edit-profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
], EditProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-auth-edit-profile-edit-profile-module-es2015.js.map