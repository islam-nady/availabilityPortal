import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { ICustomer } from '../model/ICustomer';

@Injectable({
  providedIn: 'root'
})
export class SafeService {

  


  url =  "http://172.29.29.8:8014/api/" + "Customer";
  constructor(private http: HttpClient) { }

  getRequests(): Observable<ICustomer[]>{
    return this.http.get<ICustomer[]>(`${this.url}`);
  }

}
