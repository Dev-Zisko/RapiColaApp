import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    public storage: Storage
  ) { }
  ngOnInit() {
  }
  // Dismiss Login Modal
  dismissLogin() {
    try {
      this.modalController.dismiss();
    } catch (error) {
      console.log(error);
    }
    
  }
  // On Register button tap, dismiss login modal and open register modal
  async registerModal() {
    try {
      this.dismissLogin();
      const registerModal = await this.modalController.create({
        component: RegisterPage
      });
      return await registerModal.present();
    } catch (error) {
      console.log(error);
    }
  }
  login(form: NgForm) {
    try {
      if(form.value.email == "" || form.value.password == "") {
        this.alertService.presentToast("Existen campos vacíos");
      } else if (form.value.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) == null) {
        this.alertService.presentToast("Ingrese de forma correcta su correo");
      } else if (form.value.password.length < 8) {
        this.alertService.presentToast("La clave debe contener un mínimo de 8 caracteres");
      } else {
        this.authService.login(form.value.email, form.value.password).subscribe(
          data => {
            if(data['respuesta'] == "true"){
              this.authService.emailLogged = form.value.email;
              console.log(this.authService.emailLogged);
              this.authService.ticketLogged = data['ticket'];
              console.log(this.authService.ticketLogged);
              this.alertService.presentToast("Logueado Exitosamente");
              this.dismissLogin();
              this.storage.set('ticket', data['ticket']);
              this.storage.set('email', form.value.email);
              this.storage.set('password', form.value.password);
              this.navCtrl.navigateRoot('/dashboard');
              console.log('Aqui')
            } else if(data['respuesta'] == "false") {
              this.alertService.presentToast("Usuario o contraseña incorrecta");
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
    } catch (error) {
      this.alertService.presentToast("Ocurrió un error Iniciando sesión, por favor intente más tarde");
    }
  }

    /*if(form.value.email == "" || form.value.password == "") {
      this.alertService.presentToast("Some Inputs are in blank");
    } else {
      this.authService.login(form.value.email, form.value.password);
      if(this.authService.registerAnswer == true){
        this.alertService.presentToast("User is Logged Succesfully");
        this.dismissLogin();
        this.navCtrl.navigateRoot('/dashboard');
      } else if(this.authService.registerAnswer == false) {
        this.alertService.presentToast("You're not Registered or You're Password is wrong");
      }
    }
  }*/

    /*this.authService.login(form.value.email, form.value.password).subscribe(
      data => {
        this.alertService.presentToast("Logged In");
      },
      error => {
        console.log(error);
      },
      () => {
        this.dismissLogin();
        this.navCtrl.navigateRoot('/dashboard');
      }
    );
  }*/
}
