import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { User } from '../models/user';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn = false;
  token: any;
  usuario: any;
  registerAnswer: any;
  loginAnswer: any;
  public emailLogged: string;
  public ticketLogged: string;
  public ticketStorage: any;

  constructor(
    private storage: Storage,
    private http: HttpClient,
    private natStorage: NativeStorage,
    private env: EnvService,
  ) { }

  login(email: String, password: String) {
    try {
      console.log('durante');
      /*this.http.post(this.env.API_URL + 'apilogin',
        { email: email, password: password }
      ).pipe(map(resp => resp)).subscribe(data => {
        this.loginAnswer = data['respuesta'];
      });*/
      return this.http.post(this.env.API_URL + 'apilogin',
        { email: email, password: password }
      ).pipe(
        tap(token => {
          this.natStorage.setItem('token', token)
          .then(
            () => {
              console.log('Token Stored');
            },
            error => console.log('Error storing item')
          );
          this.token = token;
          this.isLoggedIn = true; 
          return token;
        }),
      );
    } catch (error) {
      console.log(error);
    } 
  }

/*delete_user(user_id:string) {
  return this.http.get(this.apiUrl_delete_user + user_id);
}*/

checkStorage(ticket, email) {
  try {
    return  this.http.post(this.env.API_URL + 'apicheckstorage',
      { ticket: ticket, email: email }
    );
  } catch (error) {
    console.log(error);
  }
}

  register(cedula: String ,nombre: String, apellido: String, telefono: String, email: String, password: String, direccion: String) {
    // return
    /*this.http.post(this.env.API_URL + 'apiregister',
      { cedula: cedula, nombre: nombre, apellido: apellido, telefono: telefono, email: email, password: password, direccion: direccion }
    ).pipe(map(resp => resp)).subscribe(data => {
      this.registerAnswer = data['respuesta'];
    });*/
    try {
      return this.http.post(this.env.API_URL + 'apiregister',
        { cedula: cedula, nombre: nombre, apellido: apellido, telefono: telefono, email: email, password: password, direccion: direccion }
      );
    } catch (error) {
      console.log(error);
    }
  }

  logout() {
    /*const headers = new HttpHeaders({
      'Authorization': this.token["token_type"] + " " + this.token["access_token"]
    });
    return this.http.get(this.env.API_URL + 'auth/logout', { headers: headers })
      .pipe(
        tap(data => {
          this.natStorage.remove("token");
          this.isLoggedIn = false;
          delete this.token;
          return data;
        })
      );*/
    try {
      return this.http.post(this.env.API_URL + 'apilogout', { ticket: this.ticketLogged });
    } catch (error) {
      console.log(error);
    }
  }

  user() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"] + " " + this.token["access_token"]
    });
    return this.http.get<User>(this.env.API_URL + 'auth/user', { headers: headers })
      .pipe(
        tap(user => {
          return user;
        })
      );
  }

  getToken() {
    try {
      return this.natStorage.getItem('token').then(
        data => {
          this.token = data;
          if (this.token != null) {
            this.isLoggedIn = true;
          } else {
            this.isLoggedIn = false;
          }
        },
        error => {
          this.token = null;
          this.isLoggedIn = false;
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  postTicket(ticket) {
    try {
      return this.http.post(this.env.API_URL + 'apicheckticket', { ticket: this.ticketLogged });
    } catch (error) {
      console.log(error);
    }
  }
}
