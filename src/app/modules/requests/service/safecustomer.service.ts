import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { INodeAvailability } from '../model/INodeAvailability';

@Injectable({
  providedIn: 'root'
})
export class SafecustomerService {

  url =  "http://172.29.29.8:8014/api/customer/Account";
   constructor(private http: HttpClient) { }

   getRequests(name:string,accountNumber:string,kind : string): Observable<INodeAvailability[]>{
    //  console.log(name+"in service");
    //  console.log(kind+"in service ");
    //  console.log(accountNumber+"in service");
//debugger;
     return this.http.get<INodeAvailability[]>(`${this.url}/`+name+`/`+accountNumber+`/`+kind);
   }

}
