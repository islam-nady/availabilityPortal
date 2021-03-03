import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallSupportCenterService {

  url =  "http://172.29.29.8:8014/api/requests/getRequstsFromSupport";
  constructor(private http: HttpClient) { }

  getTicketFromSupport(){
    //console.log("call suport from service ");
    //debugger;
     return this.http.get(`${this.url}`);
  }

}
