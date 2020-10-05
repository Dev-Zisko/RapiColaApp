import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { RegisterPage } from '../auth/register/register.page';
import { LoginPage } from '../auth/login/login.page';
import { EnvService } from 'src/app/services/env.service';
import { AuthService } from 'src/app/services/auth.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  public storageUri: any;
  public logo: any;

  constructor(
    private modalController: ModalController,
    private menu: MenuController,
    private env: EnvService,
    private authService: AuthService,
    private navCtrl: NavController,
    public storage: Storage
  ) {
    this.storageUri = this.env.API_STORAGE;
    this.logo = "QXErGB4FZBu8aOMEu6z85bcAYkFDqYeqgjw61dlL.png";
    this.menu.enable(false);
  }

  ionViewWillEnter() {
    try {
      this.storage.get('ticket').then((val) => {
        this.authService.ticketLogged = val;
        this.storage.get('email').then((email) => {
          this.storage.get('password').then((pass) => {
            console.log(email);
            console.log(pass);
            this.loginCheck(email, pass);
          })
        });
      });
    } catch (e) {
      console.log(e);
    }
    /*this.storage.get('ticket').then((ticket) => {
      this.authService.ticketLogged = ticket;
    });
    this.authService.postTicket(this.authService.ticketLogged).subscribe(
      data => {
        if (data['respuesta'] === 'false') {
          this.navCtrl.navigateRoot('/landing');
        } else if (data['respuesta'] === 'true') {
          console.log('Si esta logeado');
          this.navCtrl.navigateRoot('/dashboard');
        }
      },
      error => {
        console.log(error);
      }
    );*/
    /*this.authService.getToken().then(() => {
      if (this.authService.isLoggedIn) {
        this.navCtrl.navigateRoot('/dashboard');
      }
    });*/
  }

  ngOnInit() {
    // Or to get a key/value pair
  }

  loginCheck(email, pass) {
    try {
      console.log('En loginCheck' + ' ' + email + ' ' + pass)
      if(email == "" || pass == "") {
        //this.alertService.presentToast("Some Inputs are in blank");
        console.log('estan blancos');
      } else {
        console.log('antes');
        this.authService.login(email, pass).subscribe(
          data => {
            if(data['respuesta'] == "true"){
              this.authService.emailLogged = email;
              console.log(this.authService.emailLogged);
              this.authService.ticketLogged = data['ticket'];
              console.log(this.authService.ticketLogged);
              //this.alertService.presentToast("Logged In");
              //this.dismissLogin();
              this.storage.set('ticket', data['ticket']);
              this.storage.set('email', email);
              this.storage.set('password', pass);
              console.log('despues');
              this.navCtrl.navigateRoot('/dashboard');
            } else if(data['respuesta'] == "false") {
              //this.alertService.presentToast("User doesn´t exit or Wrong Password");
              console.log('no logeado');
            }
          },
          error => {
            console.log(error);
          }/*,
          () => {
            this.dismissLogin();
            this.navCtrl.navigateRoot('/dashboard');
          }*/
        );
      }
    } catch (e) {
      console.log(e);
    }
  }

  async register() {
    try {
      const registerModal = await this.modalController.create({
        component: RegisterPage
      });
      return await registerModal.present();
    } catch (error) {
      console.log(error);
    }
  }

  async login() {
    try {
      const loginModal = await this.modalController.create({
        component: LoginPage,
      });
      return await loginModal.present();
    } catch (error) {
      console.log(error);
    }
    
  }

}
