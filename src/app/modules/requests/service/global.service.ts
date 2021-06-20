import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRequest } from '../model/IRequest';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  url = "http://172.29.29.8:8014/api/requests/TicketsOfMonthByPsdNumber";
  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({
    'Accept': 'application/json',
    'zumo-api-version': '2.0.0',
});

getRequests(psdNumber:string): Observable<IRequest[]>{
 
   return this.http.get<IRequest[]>(`${this.url}`+'/'+psdNumber);
 }

}
