import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INodeAvailability } from '../model/INodeAvailability';

@Injectable({
  providedIn: 'root'
})
export class ViolatedNodesOfMonthService {
  url = "http://172.29.29.8:8014/api/requests/violatedNodesOfMonth";
   constructor(private http: HttpClient) { }

   getviolatedNodes(): Observable<INodeAvailability[]>{
     return this.http.get<INodeAvailability[]>(`${this.url}`);
   }
}
