import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  ////API_URL = 'http://192.168.43.147:80/rapicolaTesis/public/api/';
  //API_URL = 'http://192.168.43.147:80/rapicolaTesis/public/api/';
  API_URL = 'http://localhost:8000/api/';
  //API_STORAGE = 'http://192.168.43.147:80/rapicolaTesis/public/storage/';
  API_STORAGE = 'http://localhost:8000/storage/';
  constructor() { }
}
