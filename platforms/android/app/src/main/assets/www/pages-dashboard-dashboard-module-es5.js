(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dashboard/dashboard.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons color=\"tertiary\" slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Inicio</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding color=\"light\">\r\n  <div *ngIf=\"user != undefined\">\r\n    Bienvenido {{ user[\"first_name\"]  }} {{ user[\"last_name\"]  }}\r\n  </div>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item color=\"light\">\r\n          <ion-label style=\"font-weight: bold\">Farmacia</ion-label>\r\n          <ion-select interface=\"popover\" [(ngModel)]=\"selected\" name=\"selected\" (ionChange)=\"endStateChange(selected)\">\r\n            <ion-select-option value=\"todas\">Todas</ion-select-option>\r\n            <ion-select-option *ngFor=\"let pharmacy of pharmacies\" value=\"{{ pharmacy }}\">{{ pharmacy }}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div>\r\n          <ion-item *ngFor=\"let item of items\" (click)=\"infoQueue(item.id, item.nombre, item.latitud, item.longitud)\" color=\"light\">\r\n            <ion-avatar slot=\"start\">\r\n              <img style=\"border-color: #989aa2; border-width: 2px\" src= '{{storageUri + item.logo}}'>\r\n            </ion-avatar>\r\n            <ion-label>\r\n              <h3 style=\"font-weight: bold\">\r\n                {{ item.nombre }}\r\n              </h3>\r\n              <p color=\"medium\">\r\n                Personas en Cola: {{ item['0'] }}\r\n              </p>\r\n              <p color=\"medium\">\r\n                Tiempo estimado de espera: {{ item['1'] }} minutos\r\n              </p>\r\n              <p color=\"medium\">\r\n                {{ item.direccion }}\r\n              </p>\r\n            </ion-label>\r\n          </ion-item>\r\n        \r\n          <div *ngIf=\"!items.length > 0\">\r\n            <ion-item *ngFor=\"let item of [1,2,3,4,5,6,7,8,9]\" color=\"light\">\r\n              <ion-avatar slot=\"start\">\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-avatar>\r\n              <ion-label>\r\n                <h3>\r\n                  <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n                </h3>\r\n                <p>\r\n                  <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n                </p>\r\n                <p>\r\n                  <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n                </p>\r\n                <p>\r\n                  <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n                </p>\r\n              </ion-label>\r\n            </ion-item>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/pages/dashboard/dashboard.page.ts");







var routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]
    }
];
var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_pharmacies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/pharmacies.service */ "./src/app/services/pharmacies.service.ts");
/* harmony import */ var src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/queue.service */ "./src/app/services/queue.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");









var DashboardPage = /** @class */ (function () {
    function DashboardPage(menu, navCtrl, authService, env, pharmaciesServices, queueServices, alertService, storage) {
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.env = env;
        this.pharmaciesServices = pharmaciesServices;
        this.queueServices = queueServices;
        this.alertService = alertService;
        this.storage = storage;
        this.subsidiaries = [];
        this.items = [];
        this.pharmacies = [];
        this.subsidiariesSelected = [];
        this.menu.enable(true);
        this.storageUri = this.env.API_STORAGE;
        // this.storageUri = "http://192.168.1.7:80/rapicolaTesis/public/storage/";
    }
    DashboardPage.prototype.ngOnInit = function () {
        var _this = this;
        try {
            this.getData();
            // set a key/value
            this.storage.set('ticket', this.authService.ticketLogged);
            this.storage.set('email', this.authService.emailLogged);
            // Or to get a key/value pair
            this.storage.get('ticket').then(function (ticket) {
                console.log('Your ticket is', ticket);
            });
            // Or to get a key/value pair
            this.storage.get('email').then(function (email) {
                console.log('Your email is', email);
            });
            this.myVar = setInterval(function () {
                _this.getData();
            }, 10000);
        }
        catch (error) {
            console.log(error);
        }
    };
    DashboardPage.prototype.getData = function () {
        var _this = this;
        try {
            console.log('Preguntando por farmacias');
            this.storage.get('ticket').then(function (ticket) {
                // Or to get a key/value pair
                _this.storage.get('email').then(function (email) {
                    _this.pharmaciesServices.getData(ticket, email).subscribe(function (data) {
                        if (data['respuesta'] === 'false') {
                            _this.navCtrl.navigateRoot('/landing');
                        }
                        else {
                            console.log(data);
                            _this.subsidiaries = data['subsidiaries'];
                            _this.business = data['business'];
                            _this.queues = data['queues'];
                            setTimeout(function () {
                                _this.pharmacies = [];
                                _this.business.forEach(function (element) {
                                    _this.pharmacies.push(element.nombre);
                                });
                            }, 5000);
                            setTimeout(function () {
                                _this.items = [];
                                _this.subsidiaries.forEach(function (element) {
                                    console.log(element['0']);
                                    _this.items.push(element);
                                });
                            }, 5000);
                        }
                    }, function (error) {
                        console.log(error);
                    });
                });
            });
        }
        catch (error) {
            this.alertService.presentToast("Ocurrió un error, pruebe más tarde");
            this.storage.set('ticket', '');
            this.storage.set('email', '');
            this.storage.set('email', '');
            this.storage.set('password', '');
            this.navCtrl.navigateRoot('/landing');
        }
    };
    DashboardPage.prototype.endStateChange = function (pharmacy) {
        var _this = this;
        try {
            this.items = [];
            this.subsidiariesSelected = [];
            if (pharmacy === 'todas') {
                this.subsidiaries.forEach(function (element) {
                    _this.items.push(element);
                });
            }
            else {
                this.business.forEach(function (element) {
                    if (pharmacy === element.nombre) {
                        _this.pharmacySelected = element;
                    }
                });
                this.subsidiaries.forEach(function (element) {
                    if (_this.pharmacySelected.id === element['id_business']) {
                        console.log(element['nombre']);
                        _this.subsidiariesSelected.push(element);
                    }
                });
                this.items = [];
                this.subsidiariesSelected.forEach(function (element) {
                    _this.items.push(element);
                });
            }
        }
        catch (error) {
            this.alertService.presentToast("Ocurrió un error, pruebe más tarde");
            this.storage.set('ticket', '');
            this.storage.set('email', '');
            this.storage.set('email', '');
            this.storage.set('password', '');
            this.navCtrl.navigateRoot('/landing');
        }
    };
    DashboardPage.prototype.clickDropDown = function () {
        console.log(this.selected);
    };
    DashboardPage.prototype.infoQueue = function (id, nombre, latitud, longitud) {
        var _this = this;
        try {
            // stop();
            this.queues.forEach(function (element) {
                if (element.id_subsidiary === id) {
                    _this.storage.set('idQueue', element.id);
                    _this.queueServices.idQueue = element.id;
                }
            });
            this.storage.set('idSubsidiary', id);
            this.storage.set('nameSubsidiary', nombre);
            this.queueServices.idSubsidiary = id;
            this.queueServices.nameSubsidiary = nombre;
            this.queueServices.latitud = latitud;
            this.queueServices.longitud = longitud;
            this.navCtrl.navigateRoot('/queue');
        }
        catch (error) {
            this.alertService.presentToast("Ocurrió un error, seleccione nuevamente la sucursal");
        }
    };
    DashboardPage.prototype.ionViewDidLeave = function () {
        this.stop();
    };
    DashboardPage.prototype.stop = function () {
        try {
            clearInterval(this.myVar);
            console.log('Se paro el intervalo');
        }
        catch (error) {
            console.log(error);
        }
    };
    DashboardPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"] },
        { type: src_app_services_pharmacies_service__WEBPACK_IMPORTED_MODULE_6__["PharmaciesService"] },
        { type: src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_7__["QueueService"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] }
    ]; };
    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.page.html"),
            styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/pages/dashboard/dashboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_services_env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"],
            src_app_services_pharmacies_service__WEBPACK_IMPORTED_MODULE_6__["PharmaciesService"],
            src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_7__["QueueService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]])
    ], DashboardPage);
    return DashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module-es5.js.map