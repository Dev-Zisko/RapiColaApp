import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import { AlertService } from 'src/app/services/alert.service';
import { Storage } from '@ionic/storage';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  nombre: string;
  apellido: string;
  email: string;
  contraseña: string;
  contraseña_2: string;
  cedula: string;
  telefono: string;
  direccion: string;
  public items: string[] = [];

  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private authService: AuthService,
    private alertService: AlertService,
    public profileServices: ProfileService,
    public storage: Storage) { }

  ngOnInit() {
    try {
      this.storage.get('ticket').then((ticket) => {
        this.storage.get('email').then((email) => {
          this.profileServices.sendEmail(email, ticket).subscribe(
            data => {
              if (data['respuesta'] === 'false') {
                this.navCtrl.navigateRoot('/landing');
              } else {
                this.items = [];
                setTimeout(() => {
                  this.nombre = data['customer'].nombre;
                  this.apellido = data['customer'].apellido;
                  this.email = data['customer'].email;
                  // this.contraseña = data['customer'].contraseña;
                  this.cedula = data['customer'].cedula;
                  this.telefono = data['customer'].telefono;
                  this.direccion = data['customer'].direccion;
                  this.items.push(this.nombre);
                  this.items.push(this.apellido);
                  this.items.push(this.email);
                  this.items.push(this.cedula);
                  this.items.push(this.telefono);
                  this.items.push(this.direccion);
                })
                
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

}
