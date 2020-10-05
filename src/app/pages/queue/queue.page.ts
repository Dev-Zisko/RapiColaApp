import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { PharmaciesService } from 'src/app/services/pharmacies.service';
import { User } from 'src/app/models/user';
import { QueueService } from 'src/app/services/queue.service';
import { AlertService } from 'src/app/services/alert.service';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.page.html',
  styleUrls: ['./queue.page.scss'],
})
export class QueuePage implements OnInit {

  public nameSub: string;
  public status: string;
  public position: string;
  public time: string;
  public timeUser: string;
  public interval: any;
  public timeout: any;
  public disable: any;
  public seconds: string;
  public latitud: number;
  public longitud: number;
  public distance: number;
  public hourStart: any;
  public minsStart: any;
  public timeStart: any;
  public hourEnd: any;
  public minsEnd: any;
  public timeEnd: any;
  public timer: any;
  public isInQueue: any;
  public atendiendo: any;
  public clientesDisp: any;
  public ident: any;
  public timeoutAlert: any;
  public validacion: any;
  public notYet: any;

  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private authService: AuthService,
    public pharmaciesServices: PharmaciesService,
    public queueServices: QueueService,
    private alertService: AlertService,
    public alertController: AlertController,
    private platform: Platform,
    private geolocation: Geolocation,
    public storage: Storage
  ) {
    this.notYet = false;
    this.timer = 0;
  }

  ngOnInit() {
    try {
      this.clientesDisp = 'Información No Disponible';
      this.atendiendo = 'Información No Disponible';
      this.status = 'No esta en la cola' ;
      this.ident = 'No posee posición';
      this.position = '';
      this.time = 'Información No Disponible';
      this.timeUser = 'Información No Disponible';
      this.storage.get('nameSubsidiary').then((nameSubsidiary) => {
        this.nameSub = nameSubsidiary;
      });
      // console.log(this.nameSub);
      // console.log(this.queueServices.nameSubsidiary);
      this.disable = true;
      this.getQueue();
      //this.getGeolocation(this.queueServices.latitud, this.queueServices.longitud);
    } catch (error) {
      this.alertService.presentToast("Ocurrió un error");
      this.navCtrl.navigateRoot('/dashboard');
    }
  }

  getQueue() {
    try {
      this.storage.get('ticket').then((val) => {
        this.storage.get('email').then((email) => {
          this.storage.get('idQueue').then((idQueue) => {
            console.log(val + ' ' + email + ' ' + idQueue)
            this.queueServices.getQueue(idQueue, email, val).subscribe(
              data => {
                if (data['respuesta'] === 'false') {
                  console.log('No esta en cola');
                } else if (data['respuesta'] === 'not') {
                  this.queueServices.puesto = '';
                  console.log('No esta en la cola aun');
                  this.disable = true;
                  // this.timeUser = data['cliente'] + ' minutos';
                  this.time = 'Información No Disponible';
                  this.timeUser = 'Información No Disponible';
                  this.clearView();
                } else if (data['respuesta'] === 'true') {
                  console.log('Adentro');
                  if (data['status'] === null && data['puesto'] === null && data['tiempo']) {
                    this.disable = true;
                    if (data['cliente'] !== 0) {
                      this.timeUser = parseInt(data['cliente']) + ' minutos';
                    }
                    this.clearView();
                  } else {
                    this.disable = false;
                    if (data['cliente'] !== 0) {
                      this.timeUser = parseInt(data['cliente']) + ' minutos';
                    }
                    this.queueServices.puesto = data['puesto'];
                    this.dataToView(data['status'], data['puesto'], data['tiempo']);
                    this.getPosition();
                  }
                } else if (data['respuesta'] === 'repeat') {
                  this.toastMessage(data['mensaje']);
                }
              },
              error => {
                console.log(error);
              }
            );
          });
        });
      });
    } catch (error) {
      this.alertService.presentToast("Ocurrió un error");
      this.navCtrl.navigateRoot('/queue');
    }
  }

  getPosition() {
    try {
      this.interval = setInterval(() => {
        console.log('Repitiendo');
        this.storage.get('ticket').then((ticket) => {
          this.storage.get('email').then((email) => {
            this.storage.get('idSubsidiary').then((idSubsidiary) => {
              console.log(idSubsidiary);
              this.queueServices.getPosition(
                idSubsidiary,
                email,
                ticket,
                this.queueServices.puesto).subscribe(
                data => {
                  console.log(data['respuesta'])
                  if (data['respuesta'] === 'false') {
                    console.log('Respuesta falsa en GetPosition');
                    console.log('Error' + data['mensaje']);
                    this.stopInterval();
                    this.navCtrl.navigateRoot('/landing');
                  } else if (data['respuesta'] === 'true' && this.validacion != 1) {
                    this.stopInterval();
                    this.validacion = 1;
                    let arrayAtend = data['puestos'];
                    console.log(arrayAtend)
                    if (arrayAtend !== null) {
                      this.atendiendo = arrayAtend;
                    } else {
                      this.atendiendo = 'No hay aún';
                    }
                    // this.clearView();
                    console.log('Es mi turno');
                    let flag = 1;
                    let msg = 'Es tu turno de ser atendido por el cajero, Estás listo para ser atendido?';
                    let cancelButton = 'No, seguir en la cola';
                    let confirmButton = 'Si, estoy listo';
                    this.hourEnd = new Date().getHours();
                    this.minsEnd = new Date().getMinutes();
                    this.verifyMinutes(flag, msg, cancelButton, confirmButton, 5000);
                    let getMinsHour = ((this.hourEnd - this.hourStart) * 60);
                    if (getMinsHour === 0) {
                      this.timeEnd = this.minsEnd - this.minsStart;
                      this.sendMins(this.timeEnd);
                    } else if (getMinsHour != 0) {
                      let getMins = (60-this.minsStart) + this.timeEnd;
                      let diffMins = getMinsHour + getMins;
                      this.sendMins(diffMins);
                    }
                    // this.alertService.presentToast(data['mensaje']);
                  } else if (data['respuesta'] === 'not') {
                    let arrayAtend = data['puestos'];
                    console.log(arrayAtend)
                    this.clientesDisp = data['clientes'];
                    this.atendiendo = arrayAtend;
                    this.disable = false;
                    console.log('No toca');
                    console.log(data);
                  } else if (data['respuesta'] === 'not_queue') {
                    console.log('AQUI EN NOT QUEUE')
                    this.queueServices.puesto = '';
                    // let flag = 1;
                    /*let msg = 'Es tu turno de ser atendido por el cajero, Estás listo para ser atendido?';
                    let cancelButton = 'No, seguir en la cola';
                    let confirmButton = 'Si, estoy listo';
                    this.verifyMinutes(flag, msg, cancelButton, confirmButton, 5000);*/
                    // this.checkUser('', '', '', '', '');
                  }
                  console.log('Ya termine las validaciones de GetPosition');
                },
                error => {
                  console.log(error);
                }
              );
            });
          });
        });
      }, 5000);
      console.log('Fin de GetPosition');
    } catch (error) {
      console.log(error);
    }
  }

  sendMins(mins) {
    try {
      console.log('tiempo' + mins);
      this.storage.get('ticket').then((ticket) => {
        this.storage.get('email').then((email) => {
          this.storage.get('idSubsidiary').then((idSubsidiary) => {
            this.queueServices.sendTime(
              idSubsidiary,
              ticket,
              mins,
              email).subscribe(
              data => {
                if (data['respuesta'] === 'true') {
                  console.log('Si se guardo');
                }
            });
          });
        });
      });
    } catch (error) {
      console.log(error);
    }
  }

  enterQueue() {
    try {
      this.notYet = true;
      this.hourStart = new Date().getHours();
      this.minsStart = new Date().getMinutes();
      this.storage.set('hourStart', this.hourStart);
      this.storage.set('minsStart', this.minsStart);
      this.timeStart = this.hourStart + ':' + this.minsStart;
      console.log(this.timeStart);
      this.storage.get('ticket').then((ticket) => {
        this.storage.get('email').then((email) => {
          this.storage.get('idSubsidiary').then((idSubsidiary) => {
            this.queueServices.enterQueue(idSubsidiary, email, ticket).subscribe(
              data => {
                if (data['respuesta'] === 'false') {
                  this.navCtrl.navigateRoot('/landing');
                } else if (data['respuesta'] === 'true') {
                  console.log(data);
                  this.disable = false;

                  // PREGUNTAR////////////////////////////////////////
                  this.dataToView(data['status'], data['puesto'], data['tiempo']);
                  ////////////////////////////////////////////////////
                  this.queueServices.puesto = data['puesto'];
                  let flag = 0;
                  let msg = "Ha pasado 40 minutos en el establecimiento, sigue en el o no?";
                  let cancelButton = "Salir de la Cola";
                  let confirmButton = "Seguir en la Cola";
                  this.verifyMinutes(flag, msg, cancelButton, confirmButton, 2400000);
                  this.getPosition();
                } else if (data['respuesta'] === 'repeat') {
                  this.toastMessage(data['mensaje']);
                }
              },
              error => {
                console.log(error);
              }
            );
          });
        });
      });
    } catch (error) {
      this.alertService.presentToast("Ocurrió un error, Intente de nuevo");
    }
  }

  verifyMinutes(flag, msg, cancelButton, confirmButton, tiempo) {
    try {
      this.timeout = setTimeout(() => {
        console.log('En VERIFYMINUTES');
        this.presentAlertConfirm(flag, msg, cancelButton, confirmButton);
      }, tiempo);
    } catch (error) {
      console.log(error);
    }
  }

  checkUser(flag, msg, cancelButton, confirmButton, tiempo) {
    try {
      if (this.queueServices.puesto !== '') {
        if (this.timer === 2) {
          this.timer = 0;
          const msgFinal = 'Lo sentimos pero se ha excedido del tiempo de espera para ir al cajero, se le cambio su estado ocupado nuevamente';
          this.presentAlertChangeStatus(msgFinal);
          this.changeStatus(1);
        } else if (this.timer < 2 && this.queueServices.puesto !== '') {
          this.timer = this.timer + 1;
          this.timeoutAlert = setTimeout(() => {
            console.log('Valor del puesto en CHECKUSER: ' + this.queueServices.puesto)
            console.log('En CheckUser');
            this.presentAlertConfirm(flag, msg, cancelButton, confirmButton);
          }, tiempo);
        } else if (this.queueServices.puesto === '') {
          console.log('El puesto esta limpio --- En CheckUser');
          this.stopTimeoutAlert();
          // this.clearView();
        }
      } else if (this.queueServices.puesto === '') {
        console.log('El puesto esta limpio --- En CheckUser');
        // this.stopTimeoutAlert();
        this.clearView();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async presentAlertChangeStatus(msg) {
    try {
      const alert = await this.alertController.create({
        header: 'Alerta',
        message: msg,
        buttons: ['OK']
      });
      await alert.present();
    } catch (error) {
      console.log(error);
    }
  }

  async presentAlertConfirm(flag, msg, cancelButton, confirmButton) {
    try {
      const alert = await this.alertController.create({
        header: 'Confirmar!',
        message: msg,
        buttons: [
          {
            text: cancelButton,
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              switch (flag) {
                case 0:
                  console.log('Sale de la cola por tiempo');
                  this.outQueue();
                  break;
                case 1:
                  console.log('Cambia de Estado');
                  this.changeStatus(1);
                  break;
                default:
                  break;
              }
            }
          }, {
            text: confirmButton,
            handler: () => {
              switch (flag) {
                case 0:
                  this.verifyMinutes(flag, msg, cancelButton, confirmButton, 2400000);
                  break;
                case 1:
                  // Repetir Timeout de 30seg
                  console.log('Valor del puesto: ' + this.queueServices.puesto)
                  this.getQueue();
                  if (this.queueServices.puesto !== '') {
                    this.checkUser(flag, msg, cancelButton, confirmButton, 20000);
                  } else if (this.queueServices.puesto === '') {
                    this.clearView();
                  }
                  break;
                default:
                  break;
              }
            }
          }
        ]
      });
      await alert.present();
    } catch (error) {
      console.log(error);
    }
  }

  stopInterval() {
    try {
      clearInterval(this.interval);
    } catch (error) {
      console.log(error);
    }
  }

  stopTimeout() {
    try {
      clearTimeout(this.timeout);
    } catch (error) {
      console.log(error);
    }
  }

  stopTimeoutAlert() {
    try {
      clearTimeout(this.timeoutAlert);
    } catch (error) {
      console.log(error);
    }
  }

  changeStatus(flag) {
    try {
      this.stopInterval();
      console.log(flag);
      this.storage.get('ticket').then((ticket) => {
        this.storage.get('email').then((email) => {
          this.storage.get('idSubsidiary').then((idSubsidiary) => {
            this.queueServices.changeStatus(
              idSubsidiary,
              email,
              ticket,
              flag
            ).subscribe(
              data => {
                if (data['respuesta'] === 'false') {
                  this.navCtrl.navigateRoot('/landing');
                } else if (data['respuesta'] === 'true') {
                  this.getPosition();
                  console.log('Adentro');
                  this.status = 'Estado: ' + (data['status']);
                }
              },
              error => {
                console.log(error);
              }
            );
          });
        });
      });
    } catch (error) {
      this.alertService.presentToast("Ocurrió un error, Intente de nuevo");
    }
  }

  outQueue() {
    try {
      this.storage.get('ticket').then((ticket) => {
        this.storage.get('email').then((email) => {
          this.storage.get('idSubsidiary').then((idSubsidiary) => {
            this.queueServices.outQueue(idSubsidiary, email, ticket).subscribe(
              data => {
                if (data['respuesta'] === 'false') {
                  this.navCtrl.navigateRoot('/landing');
                } else if (data['respuesta'] === 'true') {
                  this.stopInterval();
                  this.notYet = false;
                  this.storage.set('idSubsidiary', '');
//                  this.storage.set('email', );
                  console.log('Saliendo');
                  this.disable = true;
                  this.clearView();
                }
              },
              error => {
                console.log(error);
              }
            );
          });
        });
      });
    } catch (error) {
      this.alertService.presentToast("Ocurrió un error, Intente de nuevo");
    }
  }

  clearView() {
    try {
      this.status = 'No esta en la cola' ;
      this.ident = 'No posee posición';
      this.position = '';
      this.time = 'Información No Disponible';
      this.clientesDisp = 'Información No Disponible';
      this.atendiendo = 'Información No Disponible';
    } catch (error) {
      console.log(error);
    }
  }

  dataToView(status, position, time) {
    try {
      /* if (time != '' && position != '' && status != '') {
        this.status = 'Estado: ' + status;
        this.position = 'Identificación: ' + position;
        this.time = 'Tiempo estimado en cola: ' + time;
      } else if (time === '' || position === '') {
        this.status = 'Estado: ' + status;
      } */
      this.status = 'Estado: ' + status;
      this.ident = 'Identificación: '
      this.position =  position;
      this.time = time + ' minutos';
    } catch (error) {
      console.log(error);
    }
  }

  toastMessage(msg) {
    try {
      this.alertService.presentToast(msg);
    } catch (error) {
      console.log(error);
    }
  }

  async presentAlertGeolocalitation() {
    try {
      const alert = await this.alertController.create({
        header: 'Alerta!',
        message: 'No se encuentra cerca del establecimiento, para poder ingresar a la cola debe estar menos de 1 Km de distancia',
        buttons: [
          {
            text: 'Regresar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              this.navCtrl.navigateRoot('/dashboard');
            }
          }
        ]
      });
      await alert.present();
    } catch (error) {
      console.log(error);
    }
  }

  getGeolocation(latSub, longSub) {
    try {
      this.platform.ready().then(() => {
        var options = {
           maximumAge: 0,
          timeout: 10000,
          enableHighAccuracy: true
        };
        this.geolocation.getCurrentPosition(options).then((resp) => {
          this.latitud = resp.coords.latitude
          this.longitud = resp.coords.longitude
          let lat = latSub; // AQUI VA LA LATITUD QUE TE PASO DE LA SUCURSAL
          let long = longSub; // AQUI VA LA LONGITUD QUE TE PASO DE LA SUCURSAL
          this.distance = this.calculateDistance(this.longitud, long, this.latitud, lat);
          // Validar
          if (this.distance === 0) {
            console.log('Puede acceder');
            this.notYet = false;
          } else if (this.distance != 0) {
            this.presentAlertGeolocalitation();
          }
        }).catch((error) => {
          alert('code: ' + error.code + '\n' +
          'message: ' + error.message + '\n'); // CAMBIAR LUEGO POR UN MENSAJE NORMAL
        });
      });
    } catch (error) {
      console.log(error);
    }
  }

  calculateDistance(lon1, lon2, lat1, lat2){
    try {
      let p = 0.017453292519943295;
      let c = Math.cos;
      let a = 0.5 - c((lat1-lat2) * p) / 2 + c(lat2 * p) *c((lat1) * p) * (1 - c(((lon1- lon2) * p))) / 2;
      let dis = (12742 * Math.asin(Math.sqrt(a)));
      return Math.trunc(dis);
    } catch (error) {
      console.log(error);
    }
  }

}
