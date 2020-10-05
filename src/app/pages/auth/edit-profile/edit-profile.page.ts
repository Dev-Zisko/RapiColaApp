import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  nombre: string;
  apellido: string;
  email: string;
  contraseña: string;
  contraseña_2: string;
  cedula: string;
  telefono: string;
  direccion: string;

  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private authService: AuthService,
    public profileServices: ProfileService,
    private alertService: AlertService,
    public storage: Storage) { }

  ngOnInit() {
    try {
      this.storage.get('ticket').then((ticket) => {
        this.storage.get('email').then((email) => {
          this.profileServices.sendEmail(email, ticket).subscribe(
            data => {
              console.log(data);
              if (data['respuesta'] === 'false') {
                this.navCtrl.navigateRoot('/landing');
              } else {
                this.nombre = data['customer'].nombre;
                this.apellido = data['customer'].apellido;
                this.email = data['customer'].email;
                // this.contraseña = data['customer'].contraseña;
                this.cedula = data['customer'].cedula;
                this.telefono = data['customer'].telefono;
                this.direccion = data['customer'].direccion;
              }
            },
            error => {
              console.log(error);
            }
          );
        });
      });
    } catch (error) {
      this.alertService.presentToast("Ocurrió un error");
      this.navCtrl.navigateRoot('/dashboard');
    }
  }

  updateInfo(form: NgForm) {
    try {
      if (form.value.password == '' || form.value.password2 == '') {
        this.alertService.presentToast('Debe ingresar la contraseña');
      } else if (form.value.password != form.value.password2) {
        this.alertService.presentToast('La contraseña y su confirmación no coinciden');
      } else {
        // console.log(this.authService.ticketLogged);
        this.storage.get('ticket').then((ticket) => {
          this.storage.get('email').then((email) => {
            this.profileServices.editProfile(
              email,
              form.value.nombre,
              form.value.apellido,
              form.value.password,
              form.value.direccion,
              ticket).subscribe(
                data => {
                  console.log(data['respuesta']);
                  if (data['respuesta'] === 'true') {
                    this.alertService.presentToast('La información fue editada exitosamente');
                  } else if (data['respuesta'] === 'false') {
                    if (data['ticket'] === ticket) {
                      this.alertService.presentToast('Error, intente nuevamente');
                    }
                    this.navCtrl.navigateRoot('/landing');
                  }
                },
                error => {
                  console.log(error);
                }
              );
          });
        });
      }
    } catch (error) {
      this.alertService.presentToast("Ocurrió un error, Intente nuevamente");
    }
  }

}
