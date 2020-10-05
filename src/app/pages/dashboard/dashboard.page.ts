import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { EnvService } from 'src/app/services/env.service';
import { AlertService } from 'src/app/services/alert.service';
import { PharmaciesService } from 'src/app/services/pharmacies.service';
import { User } from 'src/app/models/user';
import { QueueService } from 'src/app/services/queue.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  user: User;
  public subsidiaries: string[] = [];
  public business: any;
  public queues: any;
  public first_queue: any;
  public last_queue: any;
  public totalqueue: any;
  selected: any;
  public items: string[] = [];
  public pharmacies: string[] = [];
  public pharmacySelected;
  public subsidiariesSelected: string[] = [];
  public myVar: any;
  public variable: any;
  public storageUri: any;

  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private authService: AuthService,
    private env: EnvService,
    public pharmaciesServices: PharmaciesService,
    public queueServices: QueueService,
    private alertService: AlertService,
    public storage: Storage) {
    this.menu.enable(true);
    this.storageUri = this.env.API_STORAGE;
    // this.storageUri = "http://192.168.1.7:80/rapicolaTesis/public/storage/";
  }

  ngOnInit() {
    try {
      this.getData();
      // set a key/value
      this.storage.set('ticket', this.authService.ticketLogged);
      this.storage.set('email', this.authService.emailLogged);

      // Or to get a key/value pair
      this.storage.get('ticket').then((ticket) => {
        console.log('Your ticket is', ticket);
      });
      // Or to get a key/value pair
      this.storage.get('email').then((email) => {
        console.log('Your email is', email);
      });

      this.myVar = setInterval(() => {
        this.getData();
      }, 10000);
    } catch (error) {
      console.log(error);
    }
  }



  getData() {
    try {
      console.log('Preguntando por farmacias');
      this.storage.get('ticket').then((ticket) => {
        // Or to get a key/value pair
        this.storage.get('email').then((email) => {
          this.pharmaciesServices.getData(ticket, email).subscribe(
            data => {
              if (data['respuesta'] === 'false') {
                this.navCtrl.navigateRoot('/landing');
              } else {
                console.log(data);
                this.subsidiaries = data['subsidiaries'];
                this.business = data['business'];
                this.queues = data['queues'];
                setTimeout(() => {
                  this.pharmacies = [];
                  this.business.forEach(element => {
                    this.pharmacies.push(element.nombre);
                  });
                }, 5000);
                setTimeout(() => {
                  this.items = [];
                  this.subsidiaries.forEach(element => {
                    console.log(element['0']);
                    this.items.push(element);
                  });
                }, 5000);
              }
            },
            error => {
              console.log(error);
            }
          );
        });
      });
    } catch (error) {
      this.alertService.presentToast("Ocurrió un error, pruebe más tarde");
      this.storage.set('ticket', '');
      this.storage.set('email', '');
      this.storage.set('email', '');
      this.storage.set('password', '');
      this.navCtrl.navigateRoot('/landing');
    }
  }

  endStateChange(pharmacy: any) {
    try {
      this.items = [];
      this.subsidiariesSelected = [];
      if (pharmacy === 'todas') {
        this.subsidiaries.forEach(element => {
          this.items.push(element);
        });
      } else {
        this.business.forEach(element => {
          if (pharmacy === element.nombre) {
            this.pharmacySelected = element;
          }
        });
        this.subsidiaries.forEach(element => {
          if (this.pharmacySelected.id === element['id_business']) {
            console.log(element['nombre']);
            this.subsidiariesSelected.push(element);
          }
        });
        this.items = [];
        this.subsidiariesSelected.forEach(element => {
          this.items.push(element);
        });
      }
    } catch (error) {
      this.alertService.presentToast("Ocurrió un error, pruebe más tarde");
      this.storage.set('ticket', '');
      this.storage.set('email', '');
      this.storage.set('email', '');
      this.storage.set('password', '');
      this.navCtrl.navigateRoot('/landing');
    }
  }

  clickDropDown() {
    console.log(this.selected);
  }

  infoQueue(id, nombre, latitud, longitud) {
    try {
      // stop();
      this.queues.forEach(element => {
        if (element.id_subsidiary === id) {
          this.storage.set('idQueue', element.id);
          this.queueServices.idQueue = element.id;
        }
      });
      this.storage.set('idSubsidiary', id);
      this.storage.set('nameSubsidiary', nombre);
      this.queueServices.idSubsidiary = id;
      this.queueServices.nameSubsidiary = nombre;
      this.queueServices.latitud = latitud;
      this.queueServices.longitud = longitud; 
      this.navCtrl.navigateRoot('/queue');
    } catch (error) {
      this.alertService.presentToast("Ocurrió un error, seleccione nuevamente la sucursal");
    }
  }

  ionViewDidLeave() {
    this.stop();
  }

  stop() {
    try {
      clearInterval(this.myVar);
      console.log('Se paro el intervalo');
    } catch (error) {
     console.log(error);
    }
  }

  /*ionViewWillEnter() {
    /*this.authService.user().subscribe(
      user => {
        this.user = user;
      }
    );*/
    /*console.log("Se esta evaluando");
}*/

}
