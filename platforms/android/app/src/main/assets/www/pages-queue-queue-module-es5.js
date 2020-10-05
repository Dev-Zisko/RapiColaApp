(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-queue-queue-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/queue/queue.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/queue/queue.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons color=\"tertiary\" slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title> {{ nameSub }} </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding class=\"has-header\" color=\"light\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <div style=\"box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); margin-left: auto; margin-right: auto; margin-top: 5%; display: block; padding: 5%; width: 90%; height: 300; background-color: #ffffff; border-style: solid; border-width: 0.5%; border-color: #d9d8d8; border-radius: 3%\">\r\n          <ion-text>\r\n            <div id=\"page-markdown2\" style=\"text-align:center;\" class=\"show-list-numbers-and-dots\">\r\n              <h1 style=\"color:#000000; font-size: 1.5em; font-weight: bold\">{{ ident }}</h1>\r\n              <h1 style=\"color:#000000; font-size: 1.5em; font-weight: bold\">{{ position }}</h1>\r\n            </div>\r\n          </ion-text>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n\r\n        <div style=\"box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); margin-left: auto; margin-right: auto; margin-top: 5%; display: block; padding: 5%; width: 90%; height: 300; background-color: #ffffff; border-style: solid; border-width: 0.5%; border-color: #d9d8d8; border-radius: 3%\">\r\n          <ion-text>\r\n            <div id=\"page-markdown2\" style=\"text-align:center;\" class=\"show-list-numbers-and-dots\">\r\n              <h3 style=\"color:#3BACF0; font-size: 110%; font-weight: bold\">Personas Disponibles: </h3>\r\n            </div>\r\n          </ion-text>\r\n          <ion-text>\r\n            <div id=\"page-markdown2\" style=\"text-align:center;\" class=\"show-list-numbers-and-dots\">\r\n              <p style=\"color:#000000; font-size: 110%; font-weight: bold\">{{ clientesDisp }}</p>\r\n            </div>\r\n          </ion-text>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div style=\"box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); margin-left: auto; margin-right: auto; margin-top: 5%; display: block; padding: 5%; width: 90%; height: 300; background-color: #ffffff; border-style: solid; border-width: 0.5%; border-color: #d9d8d8; border-radius: 3%\">\r\n          <ion-text>\r\n            <div id=\"page-markdown2\" style=\"text-align:center;\" class=\"show-list-numbers-and-dots\">\r\n              <h3 style=\"color:#3BACF0; font-size: 110%; font-weight: bold\">Las Personas en caja: </h3>\r\n            </div>\r\n          </ion-text>\r\n          <ion-text>\r\n            <div id=\"page-markdown2\" style=\"text-align:center;\" class=\"show-list-numbers-and-dots\">\r\n              <p style=\"color:#000000; font-size: 110%; font-weight: bold\">{{ atendiendo }}</p>\r\n            </div>\r\n          </ion-text>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  <div style=\"box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); margin-left: auto; margin-right: auto; margin-top: 5%; display: block; padding: 5%; width: 90%; height: 700; background-color: #ffffff; border-style: solid; border-width: 0.5%; border-color: #d9d8d8; border-radius: 3%\">\r\n    <ion-row>\r\n        <ion-col>\r\n          <div class=\"ion-padding\">\r\n            <ion-button color=\"primary\" expand=\"block\" type=\"submit\" [disabled]=\"notYet\" (click)=\"enterQueue()\" class=\"ion-no-margin\">Ingresar a la Cola</ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div class=\"ion-padding\">\r\n            <ion-button color=\"primary\" [disabled]=\"disable\" expand=\"block\"\r\n              style=\"background: -webkit-linear-gradient(to right, #333333, #dd1818);\" (click)=\"changeStatus(0)\" type=\"submit\" class=\"ion-no-margin\">\r\n              Cambiar Status</ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div class=\"ion-padding\">\r\n            <ion-button color=\"primary\" expand=\"block\" (click)=\"outQueue()\" [disabled]=\"disable\" style=\"background: -webkit-linear-gradient(to right, #333333, #dd1818);\" type=\"submit\" class=\"ion-no-margin\">Salir de la Cola</ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n  </div>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div style=\"box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); margin-left: auto; margin-right: auto; margin-top: 5%; display: block; padding: 5%; width: 90%; height: 700; background-color: #ffffff; border-style: solid; border-width: 0.5%; border-color: #d9d8d8; border-radius: 3%\">\r\n          <ion-text>\r\n            <div id=\"page-markdown3\" style=\"text-align:center;\" class=\"show-list-numbers-and-dots\">\r\n              <h1 style=\"color:#000000; font-size: 1.5em\">{{ status }}</h1>\r\n            </div>\r\n          </ion-text>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div style=\"box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); margin-left: auto; margin-right: auto; margin-top: 5%; display: block; padding: 5%; width: 90%; height: 700; background-color: #ffffff; border-style: solid; border-width: 0.5%; border-color: #d9d8d8; border-radius: 3%\">\r\n          <ion-text>\r\n            <div id=\"page-markdown3\" style=\"text-align:center;\" class=\"show-list-numbers-and-dots\">\r\n              <h3 style=\"color:#000000;\">Tiempo estimado en cola: </h3>\r\n              <p style=\"color:#000000; font-weight: bold\">{{ time }}</p>\r\n            </div>\r\n          </ion-text>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div style=\"box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); margin-left: auto; margin-right: auto; margin-top: 5%; display: block; padding: 5%; width: 90%; height: 700; background-color: #ffffff; border-style: solid; border-width: 0.5%; border-color: #d9d8d8; border-radius: 3%\">\r\n          <ion-text>\r\n            <div id=\"page-markdown3\" style=\"text-align:center;\" class=\"show-list-numbers-and-dots\">\r\n              <h3 style=\"color:#000000;\">Su tiempo que suele tardar: </h3>\r\n              <p style=\"color:#000000; font-weight: bold\">{{ timeUser }}</p>\r\n            </div>\r\n          </ion-text>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/queue/queue.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/queue/queue.module.ts ***!
  \*********************************************/
/*! exports provided: QueuePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueuePageModule", function() { return QueuePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _queue_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./queue.page */ "./src/app/pages/queue/queue.page.ts");







var routes = [
    {
        path: '',
        component: _queue_page__WEBPACK_IMPORTED_MODULE_6__["QueuePage"]
    }
];
var QueuePageModule = /** @class */ (function () {
    function QueuePageModule() {
    }
    QueuePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_queue_page__WEBPACK_IMPORTED_MODULE_6__["QueuePage"]]
        })
    ], QueuePageModule);
    return QueuePageModule;
}());



/***/ }),

/***/ "./src/app/pages/queue/queue.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/queue/queue.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1ZXVlL3F1ZXVlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/queue/queue.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/queue/queue.page.ts ***!
  \*******************************************/
/*! exports provided: QueuePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueuePage", function() { return QueuePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_pharmacies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/pharmacies.service */ "./src/app/services/pharmacies.service.ts");
/* harmony import */ var src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/queue.service */ "./src/app/services/queue.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");











var QueuePage = /** @class */ (function () {
    function QueuePage(menu, navCtrl, authService, pharmaciesServices, queueServices, alertService, alertController, platform, geolocation, storage) {
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.pharmaciesServices = pharmaciesServices;
        this.queueServices = queueServices;
        this.alertService = alertService;
        this.alertController = alertController;
        this.platform = platform;
        this.geolocation = geolocation;
        this.storage = storage;
        this.notYet = false;
        this.timer = 0;
    }
    QueuePage.prototype.ngOnInit = function () {
        var _this = this;
        try {
            this.clientesDisp = 'Información No Disponible';
            this.atendiendo = 'Información No Disponible';
            this.status = 'No esta en la cola';
            this.ident = 'No posee posición';
            this.position = '';
            this.time = 'Información No Disponible';
            this.timeUser = 'Información No Disponible';
            this.storage.get('nameSubsidiary').then(function (nameSubsidiary) {
                _this.nameSub = nameSubsidiary;
            });
            // console.log(this.nameSub);
            // console.log(this.queueServices.nameSubsidiary);
            this.disable = true;
            this.getQueue();
            this.getGeolocation(this.queueServices.latitud, this.queueServices.longitud);
        }
        catch (error) {
            this.alertService.presentToast("Ocurrió un error");
            this.navCtrl.navigateRoot('/dashboard');
        }
    };
    QueuePage.prototype.getQueue = function () {
        var _this = this;
        try {
            this.storage.get('ticket').then(function (val) {
                _this.storage.get('email').then(function (email) {
                    _this.storage.get('idQueue').then(function (idQueue) {
                        console.log(val + ' ' + email + ' ' + idQueue);
                        _this.queueServices.getQueue(idQueue, email, val).subscribe(function (data) {
                            if (data['respuesta'] === 'false') {
                                console.log('No esta en cola');
                            }
                            else if (data['respuesta'] === 'not') {
                                _this.queueServices.puesto = '';
                                console.log('No esta en la cola aun');
                                _this.disable = true;
                                // this.timeUser = data['cliente'] + ' minutos';
                                _this.time = 'Información No Disponible';
                                _this.timeUser = 'Información No Disponible';
                                _this.clearView();
                            }
                            else if (data['respuesta'] === 'true') {
                                console.log('Adentro');
                                if (data['status'] === null && data['puesto'] === null && data['tiempo']) {
                                    _this.disable = true;
                                    if (data['cliente'] !== 0) {
                                        _this.timeUser = parseInt(data['cliente']) + ' minutos';
                                    }
                                    _this.clearView();
                                }
                                else {
                                    _this.disable = false;
                                    if (data['cliente'] !== 0) {
                                        _this.timeUser = parseInt(data['cliente']) + ' minutos';
                                    }
                                    _this.queueServices.puesto = data['puesto'];
                                    _this.dataToView(data['status'], data['puesto'], data['tiempo']);
                                    _this.getPosition();
                                }
                            }
                            else if (data['respuesta'] === 'repeat') {
                                _this.toastMessage(data['mensaje']);
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    });
                });
            });
        }
        catch (error) {
            this.alertService.presentToast("Ocurrió un error");
            this.navCtrl.navigateRoot('/queue');
        }
    };
    QueuePage.prototype.getPosition = function () {
        var _this = this;
        try {
            this.interval = setInterval(function () {
                console.log('Repitiendo');
                _this.storage.get('ticket').then(function (ticket) {
                    _this.storage.get('email').then(function (email) {
                        _this.storage.get('idSubsidiary').then(function (idSubsidiary) {
                            console.log(idSubsidiary);
                            _this.queueServices.getPosition(idSubsidiary, email, ticket, _this.queueServices.puesto).subscribe(function (data) {
                                console.log(data['respuesta']);
                                if (data['respuesta'] === 'false') {
                                    console.log('Respuesta falsa en GetPosition');
                                    console.log('Error' + data['mensaje']);
                                    _this.stopInterval();
                                    _this.navCtrl.navigateRoot('/landing');
                                }
                                else if (data['respuesta'] === 'true' && _this.validacion != 1) {
                                    _this.stopInterval();
                                    _this.validacion = 1;
                                    var arrayAtend = data['puestos'];
                                    console.log(arrayAtend);
                                    if (arrayAtend !== null) {
                                        _this.atendiendo = arrayAtend;
                                    }
                                    else {
                                        _this.atendiendo = 'No hay aún';
                                    }
                                    // this.clearView();
                                    console.log('Es mi turno');
                                    var flag = 1;
                                    var msg = 'Es tu turno de ser atendido por el cajero, Estás listo para ser atendido?';
                                    var cancelButton = 'No, seguir en la cola';
                                    var confirmButton = 'Si, estoy listo';
                                    _this.hourEnd = new Date().getHours();
                                    _this.minsEnd = new Date().getMinutes();
                                    _this.verifyMinutes(flag, msg, cancelButton, confirmButton, 5000);
                                    var getMinsHour = ((_this.hourEnd - _this.hourStart) * 60);
                                    if (getMinsHour === 0) {
                                        _this.timeEnd = _this.minsEnd - _this.minsStart;
                                        _this.sendMins(_this.timeEnd);
                                    }
                                    else if (getMinsHour != 0) {
                                        var getMins = (60 - _this.minsStart) + _this.timeEnd;
                                        var diffMins = getMinsHour + getMins;
                                        _this.sendMins(diffMins);
                                    }
                                    // this.alertService.presentToast(data['mensaje']);
                                }
                                else if (data['respuesta'] === 'not') {
                                    var arrayAtend = data['puestos'];
                                    console.log(arrayAtend);
                                    _this.clientesDisp = data['clientes'];
                                    _this.atendiendo = arrayAtend;
                                    _this.disable = false;
                                    console.log('No toca');
                                    console.log(data);
                                }
                                else if (data['respuesta'] === 'not_queue') {
                                    console.log('AQUI EN NOT QUEUE');
                                    _this.queueServices.puesto = '';
                                    // let flag = 1;
                                    /*let msg = 'Es tu turno de ser atendido por el cajero, Estás listo para ser atendido?';
                                    let cancelButton = 'No, seguir en la cola';
                                    let confirmButton = 'Si, estoy listo';
                                    this.verifyMinutes(flag, msg, cancelButton, confirmButton, 5000);*/
                                    // this.checkUser('', '', '', '', '');
                                }
                                console.log('Ya termine las validaciones de GetPosition');
                            }, function (error) {
                                console.log(error);
                            });
                        });
                    });
                });
            }, 5000);
            console.log('Fin de GetPosition');
        }
        catch (error) {
            console.log(error);
        }
    };
    QueuePage.prototype.sendMins = function (mins) {
        var _this = this;
        try {
            console.log('tiempo' + mins);
            this.storage.get('ticket').then(function (ticket) {
                _this.storage.get('email').then(function (email) {
                    _this.storage.get('idSubsidiary').then(function (idSubsidiary) {
                        _this.queueServices.sendTime(idSubsidiary, ticket, mins, email).subscribe(function (data) {
                            if (data['respuesta'] === 'true') {
                                console.log('Si se guardo');
                            }
                        });
                    });
                });
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    QueuePage.prototype.enterQueue = function () {
        var _this = this;
        try {
            this.notYet = true;
            this.hourStart = new Date().getHours();
            this.minsStart = new Date().getMinutes();
            this.storage.set('hourStart', this.hourStart);
            this.storage.set('minsStart', this.minsStart);
            this.timeStart = this.hourStart + ':' + this.minsStart;
            console.log(this.timeStart);
            this.storage.get('ticket').then(function (ticket) {
                _this.storage.get('email').then(function (email) {
                    _this.storage.get('idSubsidiary').then(function (idSubsidiary) {
                        _this.queueServices.enterQueue(idSubsidiary, email, ticket).subscribe(function (data) {
                            if (data['respuesta'] === 'false') {
                                _this.navCtrl.navigateRoot('/landing');
                            }
                            else if (data['respuesta'] === 'true') {
                                console.log(data);
                                _this.disable = false;
                                // PREGUNTAR////////////////////////////////////////
                                _this.dataToView(data['status'], data['puesto'], data['tiempo']);
                                ////////////////////////////////////////////////////
                                _this.queueServices.puesto = data['puesto'];
                                var flag = 0;
                                var msg = "Ha pasado 40 minutos en el establecimiento, sigue en el o no?";
                                var cancelButton = "Salir de la Cola";
                                var confirmButton = "Seguir en la Cola";
                                _this.verifyMinutes(flag, msg, cancelButton, confirmButton, 2400000);
                                _this.getPosition();
                            }
                            else if (data['respuesta'] === 'repeat') {
                                _this.toastMessage(data['mensaje']);
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    });
                });
            });
        }
        catch (error) {
            this.alertService.presentToast("Ocurrió un error, Intente de nuevo");
        }
    };
    QueuePage.prototype.verifyMinutes = function (flag, msg, cancelButton, confirmButton, tiempo) {
        var _this = this;
        try {
            this.timeout = setTimeout(function () {
                console.log('En VERIFYMINUTES');
                _this.presentAlertConfirm(flag, msg, cancelButton, confirmButton);
            }, tiempo);
        }
        catch (error) {
            console.log(error);
        }
    };
    QueuePage.prototype.checkUser = function (flag, msg, cancelButton, confirmButton, tiempo) {
        var _this = this;
        try {
            if (this.queueServices.puesto !== '') {
                if (this.timer === 2) {
                    this.timer = 0;
                    var msgFinal = 'Lo sentimos pero se ha excedido del tiempo de espera para ir al cajero, se le cambio su estado ocupado nuevamente';
                    this.presentAlertChangeStatus(msgFinal);
                    this.changeStatus(1);
                }
                else if (this.timer < 2 && this.queueServices.puesto !== '') {
                    this.timer = this.timer + 1;
                    this.timeoutAlert = setTimeout(function () {
                        console.log('Valor del puesto en CHECKUSER: ' + _this.queueServices.puesto);
                        console.log('En CheckUser');
                        _this.presentAlertConfirm(flag, msg, cancelButton, confirmButton);
                    }, tiempo);
                }
                else if (this.queueServices.puesto === '') {
                    console.log('El puesto esta limpio --- En CheckUser');
                    this.stopTimeoutAlert();
                    // this.clearView();
                }
            }
            else if (this.queueServices.puesto === '') {
                console.log('El puesto esta limpio --- En CheckUser');
                // this.stopTimeoutAlert();
                this.clearView();
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    QueuePage.prototype.presentAlertChangeStatus = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Alerta',
                                message: msg,
                                buttons: ['OK']
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    QueuePage.prototype.presentAlertConfirm = function (flag, msg, cancelButton, confirmButton) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_2, error_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Confirmar!',
                                message: msg,
                                buttons: [
                                    {
                                        text: cancelButton,
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                            switch (flag) {
                                                case 0:
                                                    console.log('Sale de la cola por tiempo');
                                                    _this.outQueue();
                                                    break;
                                                case 1:
                                                    console.log('Cambia de Estado');
                                                    _this.changeStatus(1);
                                                    break;
                                                default:
                                                    break;
                                            }
                                        }
                                    }, {
                                        text: confirmButton,
                                        handler: function () {
                                            switch (flag) {
                                                case 0:
                                                    _this.verifyMinutes(flag, msg, cancelButton, confirmButton, 2400000);
                                                    break;
                                                case 1:
                                                    // Repetir Timeout de 30seg
                                                    console.log('Valor del puesto: ' + _this.queueServices.puesto);
                                                    _this.getQueue();
                                                    if (_this.queueServices.puesto !== '') {
                                                        _this.checkUser(flag, msg, cancelButton, confirmButton, 20000);
                                                    }
                                                    else if (_this.queueServices.puesto === '') {
                                                        _this.clearView();
                                                    }
                                                    break;
                                                default:
                                                    break;
                                            }
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert_2 = _a.sent();
                        return [4 /*yield*/, alert_2.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    QueuePage.prototype.stopInterval = function () {
        try {
            clearInterval(this.interval);
        }
        catch (error) {
            console.log(error);
        }
    };
    QueuePage.prototype.stopTimeout = function () {
        try {
            clearTimeout(this.timeout);
        }
        catch (error) {
            console.log(error);
        }
    };
    QueuePage.prototype.stopTimeoutAlert = function () {
        try {
            clearTimeout(this.timeoutAlert);
        }
        catch (error) {
            console.log(error);
        }
    };
    QueuePage.prototype.changeStatus = function (flag) {
        var _this = this;
        try {
            this.stopInterval();
            console.log(flag);
            this.storage.get('ticket').then(function (ticket) {
                _this.storage.get('email').then(function (email) {
                    _this.storage.get('idSubsidiary').then(function (idSubsidiary) {
                        _this.queueServices.changeStatus(idSubsidiary, email, ticket, flag).subscribe(function (data) {
                            if (data['respuesta'] === 'false') {
                                _this.navCtrl.navigateRoot('/landing');
                            }
                            else if (data['respuesta'] === 'true') {
                                _this.getPosition();
                                console.log('Adentro');
                                _this.status = 'Estado: ' + (data['status']);
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    });
                });
            });
        }
        catch (error) {
            this.alertService.presentToast("Ocurrió un error, Intente de nuevo");
        }
    };
    QueuePage.prototype.outQueue = function () {
        var _this = this;
        try {
            this.storage.get('ticket').then(function (ticket) {
                _this.storage.get('email').then(function (email) {
                    _this.storage.get('idSubsidiary').then(function (idSubsidiary) {
                        _this.queueServices.outQueue(idSubsidiary, email, ticket).subscribe(function (data) {
                            if (data['respuesta'] === 'false') {
                                _this.navCtrl.navigateRoot('/landing');
                            }
                            else if (data['respuesta'] === 'true') {
                                _this.stopInterval();
                                _this.notYet = false;
                                _this.storage.set('idSubsidiary', '');
                                //                  this.storage.set('email', );
                                console.log('Saliendo');
                                _this.disable = true;
                                _this.clearView();
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    });
                });
            });
        }
        catch (error) {
            this.alertService.presentToast("Ocurrió un error, Intente de nuevo");
        }
    };
    QueuePage.prototype.clearView = function () {
        try {
            this.status = 'No esta en la cola';
            this.ident = 'No posee posición';
            this.position = '';
            this.time = 'Información No Disponible';
            this.clientesDisp = 'Información No Disponible';
            this.atendiendo = 'Información No Disponible';
        }
        catch (error) {
            console.log(error);
        }
    };
    QueuePage.prototype.dataToView = function (status, position, time) {
        try {
            /* if (time != '' && position != '' && status != '') {
              this.status = 'Estado: ' + status;
              this.position = 'Identificación: ' + position;
              this.time = 'Tiempo estimado en cola: ' + time;
            } else if (time === '' || position === '') {
              this.status = 'Estado: ' + status;
            } */
            this.status = 'Estado: ' + status;
            this.ident = 'Identificación: ';
            this.position = position;
            this.time = time + ' minutos';
        }
        catch (error) {
            console.log(error);
        }
    };
    QueuePage.prototype.toastMessage = function (msg) {
        try {
            this.alertService.presentToast(msg);
        }
        catch (error) {
            console.log(error);
        }
    };
    QueuePage.prototype.presentAlertGeolocalitation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_3, error_3;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Alerta!',
                                message: 'No se encuentra cerca del establecimiento, para poder ingresar a la cola debe estar menos de 1 Km de distancia',
                                buttons: [
                                    {
                                        text: 'Regresar',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                            _this.navCtrl.navigateRoot('/dashboard');
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert_3 = _a.sent();
                        return [4 /*yield*/, alert_3.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    QueuePage.prototype.getGeolocation = function (latSub, longSub) {
        var _this = this;
        try {
            this.platform.ready().then(function () {
                var options = {
                    maximumAge: 0,
                    timeout: 10000,
                    enableHighAccuracy: true
                };
                _this.geolocation.getCurrentPosition(options).then(function (resp) {
                    _this.latitud = resp.coords.latitude;
                    _this.longitud = resp.coords.longitude;
                    var lat = latSub; // AQUI VA LA LATITUD QUE TE PASO DE LA SUCURSAL
                    var long = longSub; // AQUI VA LA LONGITUD QUE TE PASO DE LA SUCURSAL
                    _this.distance = _this.calculateDistance(_this.longitud, long, _this.latitud, lat);
                    // Validar
                    if (_this.distance === 0) {
                        console.log('Puede acceder');
                        _this.notYet = false;
                    }
                    else if (_this.distance != 0) {
                        _this.presentAlertGeolocalitation();
                    }
                }).catch(function (error) {
                    alert('code: ' + error.code + '\n' +
                        'message: ' + error.message + '\n'); // CAMBIAR LUEGO POR UN MENSAJE NORMAL
                });
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    QueuePage.prototype.calculateDistance = function (lon1, lon2, lat1, lat2) {
        try {
            var p = 0.017453292519943295;
            var c = Math.cos;
            var a = 0.5 - c((lat1 - lat2) * p) / 2 + c(lat2 * p) * c((lat1) * p) * (1 - c(((lon1 - lon2) * p))) / 2;
            var dis = (12742 * Math.asin(Math.sqrt(a)));
            return Math.trunc(dis);
        }
        catch (error) {
            console.log(error);
        }
    };
    QueuePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: src_app_services_pharmacies_service__WEBPACK_IMPORTED_MODULE_4__["PharmaciesService"] },
        { type: src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_5__["QueueService"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] }
    ]; };
    QueuePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-queue',
            template: __webpack_require__(/*! raw-loader!./queue.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/queue/queue.page.html"),
            styles: [__webpack_require__(/*! ./queue.page.scss */ "./src/app/pages/queue/queue.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_services_pharmacies_service__WEBPACK_IMPORTED_MODULE_4__["PharmaciesService"],
            src_app_services_queue_service__WEBPACK_IMPORTED_MODULE_5__["QueueService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]])
    ], QueuePage);
    return QueuePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-queue-queue-module-es5.js.map