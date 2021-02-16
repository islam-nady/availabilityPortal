import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomerInfo } from '../model/ICustomerInfo';

@Injectable({
  providedIn: 'root'
})
export class CustomerinfoPerYearService {

  url =  "http://172.29.29.8:8014/api/requests/customerInfoPerYear";
  url2="http://172.29.29.8:8014/api/requests/customerInfoPerMonth";
  constructor(private http: HttpClient) { }

  getCustomerInfoPerYear(): Observable<ICustomerInfo[]>{
    return this.http.get<ICustomerInfo[]>(`${this.url}`);
  }

  getCustomerInfoPerMonth(): Observable<ICustomerInfo[]>{
    return this.http.get<ICustomerInfo[]>(`${this.url2}`);
  }

}
