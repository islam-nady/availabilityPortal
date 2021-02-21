import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRequest } from '../model/IRequest';

@Injectable({
  providedIn: 'root'
})
export class NodeTicketsService {

  url =  "http://172.29.29.8:8014/api/customer/node";
   constructor(private http: HttpClient) { }

   getRequests(nodeId:string): Observable<IRequest[]>{
     return this.http.get<IRequest[]>(`${this.url}/`+nodeId);
   }
}
