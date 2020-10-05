import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    //private storage: Storage,
    private http: HttpClient,
    private natStorage: NativeStorage,
    private env: EnvService
    ) { }

  sendEmail(email, ticket) {
    try {
      return this.http.post(this.env.API_URL + 'apisearch',
        { email: email, ticket: ticket }
      );
    } catch (error) {
      console.log(error);
    }
  }

  editProfile(email, nombre, apellido, password, direccion, ticket) {
    try {
      console.log(email + nombre + apellido + password + direccion);
      return this.http.post(this.env.API_URL + 'apiprofile',
        { email: email, nombre: nombre, apellido: apellido, password: password, direccion: direccion, ticket: ticket }
      );
    } catch (error) {
      console.log(error);
    }
  }
}
