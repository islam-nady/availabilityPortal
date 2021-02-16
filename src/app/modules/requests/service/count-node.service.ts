import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountNode } from '../model/ICountNode';

@Injectable({
  providedIn: 'root'
})
export class CountNodeService {



  url =  "http://172.29.29.8:8014/api/requests/countNode";
  constructor(private http: HttpClient) { }

  getCountNodes(): Observable<ICountNode[]>{
    return this.http.get<ICountNode[]>(`${this.url}`);
  }

}
