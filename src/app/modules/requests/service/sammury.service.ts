import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAvailabilitySammury } from '../model/IAvailabilitySammury';

@Injectable({
  providedIn: 'root'
})
export class SammuryService {

  url =  "http://172.29.29.8:8014/api/requests/AvailabilitySammury";
  constructor(private http: HttpClient) { }

  getSammuryAvailability(): Observable<IAvailabilitySammury>{
    return this.http.get<IAvailabilitySammury>(`${this.url}`);
  }

}
