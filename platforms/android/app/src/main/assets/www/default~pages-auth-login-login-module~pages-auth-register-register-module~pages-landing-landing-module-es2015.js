(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-auth-login-login-module~pages-auth-register-register-module~pages-landing-landing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/auth/login/login.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/auth/login/login.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-button color=\"tertiary\" (click)=\"dismissLogin()\">Close</ion-button>\r\n    <ion-title style=\"text-align: center\">Login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content color=\"light\">\r\n  \r\n  <div style=\"box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); margin-left: auto; margin-right: auto; margin-top: 5%; display: block; padding: 5%; width: 90%; height: 700; background-color: #ffffff; border-style: solid; border-width: 0.5%; border-color: #d9d8d8; border-radius: 3%\">\r\n      <form #form=\"ngForm\" (ngSubmit)=\"login(form)\" method=\"post\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Email <ion-text color=\"danger\">*</ion-text></ion-label>\r\n            <ion-input ngModel type=\"email\" name=\"email\"></ion-input>\r\n          </ion-item>\r\n      \r\n          <ion-item>\r\n            <ion-label position=\"floating\">Password <ion-text color=\"danger\">*</ion-text></ion-label>\r\n            <ion-input ngModel type=\"password\" name=\"password\"></ion-input>\r\n          </ion-item>\r\n      \r\n          <!--<p text-right (click)=\"dismissLogin()\" routerLink=\"/forgot-password\">Forgot Password?</p>-->\r\n      \r\n          <ion-button type=\"submit\" expand=\"full\" color=\"primary\">Login</ion-button>\r\n        </form>\r\n        <p text-center>¿No tienes cuenta aún?</p>\r\n        <ion-button expand=\"full\" color=\"danger\" (click)=\"registerModal()\">Registro</ion-button>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/auth/register/register.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/auth/register/register.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-button color=\"tertiary\" (click)=\"dismissRegister()\">Cerrar</ion-button>\r\n    <ion-title style=\"text-align: center\">Registro</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding color=\"light\">\r\n  <div style=\"box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); margin-left: auto; margin-right: auto; margin-top: 5%; display: block; padding: 5%; width: 90%; height: 700; background-color: #ffffff; border-style: solid; border-width: 0.5%; border-color: #d9d8d8; border-radius: 1%\">\r\n    <form #form=\"ngForm\" (ngSubmit)=\"register(form)\" method=\"post\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Número de Cédula <ion-text color=\"danger\">*</ion-text></ion-label>\r\n          <ion-input type=\"number\" ngModel name=\"cedula\"></ion-input>\r\n        </ion-item>\r\n        \r\n        <ion-item>\r\n          <ion-label position=\"floating\">Nombre <ion-text color=\"danger\">*</ion-text></ion-label>\r\n          <ion-input type=\"text\" ngModel name=\"nombre\"></ion-input>\r\n        </ion-item>\r\n    \r\n        <ion-item>\r\n          <ion-label position=\"floating\">Apellido <ion-text color=\"danger\">*</ion-text></ion-label>\r\n          <ion-input type=\"text\" ngModel name=\"apellido\"></ion-input>\r\n        </ion-item>\r\n    \r\n        <ion-item>\r\n          <ion-label position=\"floating\">Número de teléfono <ion-text color=\"danger\">*</ion-text></ion-label>\r\n          <ion-input type=\"number\" ngModel name=\"telefono\"></ion-input>\r\n        </ion-item>\r\n    \r\n        <ion-item>\r\n          <ion-label position=\"floating\">Email <ion-text color=\"danger\">*</ion-text></ion-label>\r\n          <ion-input type=\"email\" type=\"email\" ngModel name=\"email\"></ion-input>\r\n        </ion-item>\r\n    \r\n        <ion-item>\r\n          <ion-label position=\"floating\">Contraseña <ion-text color=\"danger\">*</ion-text></ion-label>\r\n          <ion-input type=\"password\" ngModel name=\"password\"></ion-input>\r\n        </ion-item>\r\n    \r\n        <ion-item>\r\n          <ion-label position=\"floating\">Repetir Contraseña <ion-text color=\"danger\">*</ion-text></ion-label>\r\n          <ion-input type=\"password\" ngModel name=\"password2\"></ion-input>\r\n        </ion-item>\r\n    \r\n        <ion-item>\r\n          <ion-label position=\"floating\">Dirección <ion-text color=\"danger\">*</ion-text></ion-label>\r\n          <ion-textarea type=\"text\" ngModel name=\"direccion\"></ion-textarea>\r\n        </ion-item>\r\n    \r\n        <ion-button type=\"submit\" style=\"margin-top: 5%\" expand=\"full\" color=\"danger\">Registrar</ion-button>\r\n      </form>\r\n      <p text-center>¿Ya posees una cuenta?</p>\r\n      <ion-button expand=\"full\" color=\"tertiary\" (click)=\"loginModal()\">Login</ion-button>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/login/login.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/auth/login/login.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../register/register.page */ "./src/app/pages/auth/register/register.page.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");







let LoginPage = class LoginPage {
    constructor(modalController, authService, navCtrl, alertService, storage) {
        this.modalController = modalController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.storage = storage;
    }
    ngOnInit() {
    }
    // Dismiss Login Modal
    dismissLogin() {
        try {
            this.modalController.dismiss();
        }
        catch (error) {
            console.log(error);
        }
    }
    // On Register button tap, dismiss login modal and open register modal
    registerModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.dismissLogin();
                const registerModal = yield this.modalController.create({
                    component: _register_register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
                });
                return yield registerModal.present();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    login(form) {
        try {
            if (form.value.email == "" || form.value.password == "") {
                this.alertService.presentToast("Existen campos vacíos");
            }
            else if (form.value.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) == null) {
                this.alertService.presentToast("Ingrese de forma correcta su correo");
            }
            else if (form.value.password.length < 8) {
                this.alertService.presentToast("La clave debe contener un mínimo de 8 caracteres");
            }
            else {
                this.authService.login(form.value.email, form.value.password).subscribe(data => {
                    if (data['respuesta'] == "true") {
                        this.authService.emailLogged = form.value.email;
                        console.log(this.authService.emailLogged);
                        this.authService.ticketLogged = data['ticket'];
                        console.log(this.authService.ticketLogged);
                        this.alertService.presentToast("Logged In");
                        this.dismissLogin();
                        this.storage.set('ticket', data['ticket']);
                        this.storage.set('email', form.value.email);
                        this.storage.set('password', form.value.password);
                        this.navCtrl.navigateRoot('/dashboard');
                        console.log('Aqui');
                    }
                    else if (data['respuesta'] == "false") {
                        this.alertService.presentToast("User doesn´t exit or Wrong Password");
                    }
                }, error => {
                    console.log(error);
                } /*,
                () => {
                  this.dismissLogin();
                  this.navCtrl.navigateRoot('/dashboard');
                }*/);
            }
        }
        catch (error) {
            this.alertService.presentToast("Ocurrió un error Iniciando sesión, por favor intente más tarde");
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/auth/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/auth/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
], LoginPage);



/***/ }),

/***/ "./src/app/pages/auth/register/register.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/auth/register/register.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.ts ***!
  \******************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.page */ "./src/app/pages/auth/login/login.page.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");






let RegisterPage = class RegisterPage {
    constructor(modalController, authService, navCtrl, alertService) {
        this.modalController = modalController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
    }
    ngOnInit() {
    }
    // Dismiss Register Modal
    dismissRegister() {
        try {
            this.modalController.dismiss();
        }
        catch (error) {
            console.log(error);
        }
    }
    // On Login button tap, dismiss Register modal and open login Modal
    loginModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.dismissRegister();
                const loginModal = yield this.modalController.create({
                    component: _login_login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"],
                });
                return yield loginModal.present();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    register(form) {
        try {
            if (form.value.cedula == "" || form.value.nombre == "" || form.value.apellido == "" || form.value.telefono == "" ||
                form.value.email == "" || form.value.password == "" || form.value.direccion == "" || form.value.password2 == "") {
                this.alertService.presentToast("Existen campos vacíos, por favor rellenarlos");
            }
            else if (form.value.password != form.value.password2) {
                this.alertService.presentToast("La contraseña y su confirmación no coinciden");
            }
            else if (form.value.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) == null) {
                this.alertService.presentToast("Ingrese de forma correcta su correo");
            }
            else if (form.value.password.length < 8) {
                this.alertService.presentToast("La clave debe contener un mínimo de 8 caracteres");
            }
            else {
                this.authService.register(form.value.cedula, form.value.nombre, form.value.apellido, form.value.telefono, form.value.email, form.value.password, form.value.direccion).subscribe(data => {
                    console.log(data["respuesta"]);
                    if (data["respuesta"] == "true") {
                        this.dismissRegister();
                        this.navCtrl.navigateRoot('/landing');
                        /*this.authService.login(form.value.email, form.value.password).subscribe(
                          data => {
                            if(data['respuesta'] == "true"){
                              this.authService.emailLogged = form.value.email;
                              this.alertService.presentToast("Logged In");
                              this.dismissRegister();
                              this.navCtrl.navigateRoot('/dashboard');
                            } else if(data['respuesta'] == "false") {
                              this.alertService.presentToast("User doesn´t exit or Wrong Password");
                            }
                
                          },
                          error => {
                            console.log(error);
                          },
                          () => {
                            this.dismissRegister();
                            this.navCtrl.navigateRoot('/dashboard');
                          }
                        );
                        this.alertService.presentToast('User is Registered Succesfully');*/
                    }
                    else if (data["respuesta"] == "false") {
                        this.alertService.presentToast('The User Already exist');
                    }
                }, error => {
                    console.log(error);
                }, () => {
                });
            }
        }
        catch (error) {
            this.alertService.presentToast("Ocurrió un error en el Registro, por favor intente más tarde");
        }
        /*this.authService.login(form.value.email, form.value.password).subscribe(
          data => {
            console.log(data['resp']);
            if(data == "true") {
              console.log("Habla mamaguevo");
            } else if(data == "false") {
              console.log("Cabeza de pija");
            }

          },
          error => {
            console.log(error);
          },
          () => {
            this.dismissRegister();
            this.navCtrl.navigateRoot('/dashboard');
          }
        );*/
        /*if(form.value.cedula == "" || form.value.nombre == "" || form.value.apellido == "" || form.value.telefono == "" ||
          form.value.email == "" || form.value.password == "" || form.value.direccion == "") {
            this.alertService.presentToast("Some Inputs are in blank");
        } else {
          this.authService.register(form.value.cedula, form.value.nombre, form.value.apellido, form.value.telefono,
            form.value.email, form.value.password, form.value.direccion);
            console.log(JSON.stringify(this.authService.registerAnswer));
          if(JSON.stringify(this.authService.registerAnswer) == "true"){
            this.alertService.presentToast("User is Registered Succesfully");
            this.dismissRegister();
            this.navCtrl.navigateRoot('/dashboard');
          } else if(JSON.stringify(this.authService.registerAnswer) == "false") {
            this.alertService.presentToast("The User is Already Registered");
          }
        }*/
        /*this.authService.register(form.value.cedula, form.value.nombre, form.value.apellido, form.value.telefono,
          form.value.email, form.value.password, form.value.direccion);
        if(this.authService.registerAnswer == true){
          this.alertService.presentToast("User is Registered Succesfully");
          this.dismissRegister();
          this.navCtrl.navigateRoot('/dashboard');
        } else if(this.authService.registerAnswer == false) {
          this.alertService.presentToast("The User is Already Registered");
        }*/
        /*this.authService.register(form.value.cedula, form.value.nombre, form.value.apellido, form.value.telefono,
          form.value.email, form.value.password, form.value.direccion).subscribe(
          data => {
            this.authService.login(form.value.email, form.value.password).subscribe(
              data => {
                console.log(data['resp']);
                if(data == "true") {
                  console.log("Habla mamaguevo");
                } else if(data == "false") {
                  console.log("Cabeza de pija");
                }
    
              },
              error => {
                console.log(error);
              },
              () => {
                this.dismissRegister();
                this.navCtrl.navigateRoot('/dashboard');
              }
            );
            this.alertService.presentToast(data['message']);
          },
          error => {
            console.log(error);
          },
          () => {
    
          }
        );*/
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/auth/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/auth/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=default~pages-auth-login-login-module~pages-auth-register-register-module~pages-landing-landing-module-es2015.js.map