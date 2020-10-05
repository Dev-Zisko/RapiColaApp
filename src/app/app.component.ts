import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';
import { AlertController } from '@ionic/angular';
import { QueueService } from 'src/app/services/queue.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  showSplash = true;

  public appPages = [
    {
      title: 'Inicio',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'Perfil',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'Editar Perfil',
      url: '/edit-profile',
      icon: 'create'
    }
    /*{
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }*/
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    public alertController: AlertController,
    public queueServices: QueueService,
    public storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // Commenting splashScreen Hide, so it won't hide splashScreen before auth check
      this.splashScreen.hide();
      setTimeout(() => {
        this.showSplash = false
      }, 1500);
      this.authService.getToken();
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: 'Usted se encuentra en una cola, si decide salir sera expulsado de la cola. ¿Desea salir igualmente?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            this.queueServices.outQueue(this.queueServices.idSubsidiary, this.authService.emailLogged, this.authService.ticketLogged).subscribe(
              data => {
                if (data['respuesta'] === 'false') {
                  this.navCtrl.navigateRoot('/landing');
                } else if (data['respuesta'] === 'true') {
                  this.makeLogout();
                }
              },
              error => {
                console.log(error);
              }
            );
          }
        }
      ]
    });

    await alert.present();
  }

  // When Logout Button is pressed
  logout() {
    try {
      this.queueServices.getQueue(this.queueServices.idQueue, this.authService.emailLogged, this.authService.ticketLogged).subscribe(
        data => {
          if (data['respuesta'] === 'false') {
            console.log('No esta en cola');
          } else if (data['respuesta'] === 'not') {
            this.makeLogout()
          } else if (data['respuesta'] === 'true') {
            console.log('Adentro');
            this.presentAlertConfirm();
          }
        },
        error => {
          console.log(error);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  makeLogout() {
    try {
      this.authService.logout().subscribe(
        data => {
          // this.alertService.presentToast(data['message']);
          if (data['respuesta'] == 'true') {
            this.storage.set('ticket', '');
            this.storage.set('email', '');
            this.storage.set('password', '');
            this.storage.set('hourStart', '');
            this.storage.set('minsStart', '');
            this.authService.ticketLogged = '';
          }
        },
        error => {
          console.log(error);
        },
        () => {
          this.navCtrl.navigateRoot('/landing');
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
}
