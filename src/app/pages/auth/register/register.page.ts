import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private modalController: ModalController,
    public authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  // Dismiss Register Modal
  dismissRegister() {
    try {
      this.modalController.dismiss();
    } catch (error) {
      console.log(error);
    }
  }

  // On Login button tap, dismiss Register modal and open login Modal
  async loginModal() {
    try {
      this.dismissRegister();
      const loginModal = await this.modalController.create({
        component: LoginPage,
      });
      return await loginModal.present();
    } catch (error) {
      console.log(error);
    }
  }

  register(form: NgForm) {
    try {
      if(form.value.cedula == "" || form.value.nombre == "" || form.value.apellido == "" || form.value.telefono == "" ||
      form.value.email == "" || form.value.password == "" || form.value.direccion == "" || form.value.password2 == "") {
        this.alertService.presentToast("Existen campos vacíos, por favor rellenarlos");
      } else if (form.value.password != form.value.password2) {
        this.alertService.presentToast("La contraseña y su confirmación no coinciden");
      } else if (form.value.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) == null) {
        this.alertService.presentToast("Ingrese de forma correcta su correo");
      } else if (form.value.password.length < 8) {
        this.alertService.presentToast("La clave debe contener un mínimo de 8 caracteres");
      } else {
        this.authService.register(form.value.cedula, form.value.nombre, form.value.apellido, form.value.telefono,
          form.value.email, form.value.password, form.value.direccion).subscribe(
          data => {
            console.log(data["respuesta"]);
            if(data["respuesta"] == "true"){
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
            else if(data["respuesta"] == "false"){
              this.alertService.presentToast('The User Already exist');
            }
        },
          error => {
            console.log(error);
          },
          () => {

          }
        );
      }
    } catch (error) {
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
  
}
