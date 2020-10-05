import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class PharmaciesService {

  constructor(
    //private storage: Storage,
    private http: HttpClient,
    private natStorage: NativeStorage,
    private env: EnvService
    ) { }

  getData(ticket, email) {
    try {
      return this.http.post(this.env.API_URL + 'apidata', { ticket: ticket, email: email});
    } catch (error) {
      console.log(error);
    }
  }
}
