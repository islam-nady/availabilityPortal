import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INodeDetails } from '../model/nodeDetails';
//import { IRequest } from '../model/IRequest';

@Injectable({
  providedIn: 'root'
})
export class NodeTicketsService {

  url =  "http://172.29.29.8:8014/api/customer/nodedetails";
   constructor(private http: HttpClient) { }

   getRequests(nodeId:string,orderId:number): Observable<INodeDetails>{
     
     
     debugger;
     return this.http.get<INodeDetails>(`${this.url}/`+nodeId+'/'+orderId);
   }
}
