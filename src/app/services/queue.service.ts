import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map, min } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class QueueService {
  public idSubsidiary: any;
  public nameSubsidiary: any;
  public idQueue: any;
  public puesto: any;
  public latitud: any;
  public longitud: any;

  constructor(
    private http: HttpClient,
    private natStorage: NativeStorage,
    private env: EnvService
  ) { }

  enterQueue(id, email, ticket) {
    try {
      return this.http.post(this.env.API_URL + 'apienterqueue', { id: id, email: email, ticket: ticket });
    } catch (error) {
      console.log(error);
    }
  }

  changeStatus(id, email, ticket, flag) {
    try {
      return this.http.post(this.env.API_URL + 'apichangestatus', { id: id, email: email, ticket: ticket, flag: flag });
    } catch (error) {
      console.log(error);
    }
  }

  outQueue(id, email, ticket) {
    try {
      return this.http.post(this.env.API_URL + 'apiexitqueue', { id: id, email: email, ticket: ticket });
    } catch (error) {
      console.log(error)
    }
  }

  getQueue(id, email, ticket) {
    try {
      return this.http.post(this.env.API_URL + 'apigetqueue', { id: id, email: email, ticket: ticket });
    } catch (error) {
      console.log(error)
    }
    
  }

  getPosition(id, email, ticket, puesto) {
    try {
      return this.http.post(this.env.API_URL + 'apigetposition', { id: id, email: email, ticket: ticket, puesto: puesto });
    } catch (error) {
      console.log(error);
    }
    
  }

  sendTime(id, ticket, mins, email) {
    try {
      console.log(id + ticket + mins + email);
      return this.http.post(this.env.API_URL + 'apitimes', { id: id, ticket: ticket, tiempo: mins, email: email });
    } catch (error) {
      console.log(error);
    }
    
  }

  getLocation(id, ticket) {
    try {
      return this.http.post(this.env.API_URL + 'apilocation', { id: id, ticket: ticket });
    } catch (error) {
      console.log(error);
    }
    
  }
}
