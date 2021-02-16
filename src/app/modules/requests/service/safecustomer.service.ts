import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { INodeAvailability } from '../model/INodeAvailability';

@Injectable({
  providedIn: 'root'
})
export class SafecustomerService {

  url =  "http://172.29.29.8:8014/api/" + "customer";
   constructor(private http: HttpClient) { }

   getRequests(name:string,kind : string): Observable<INodeAvailability[]>{
     return this.http.get<INodeAvailability[]>(`${this.url}/`+name+`/`+kind);
   }

}
