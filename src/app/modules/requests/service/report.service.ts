import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  url = "http://172.29.29.8:8014/api/requests";
  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({
    'Accept': 'application/json',
    'zumo-api-version': '2.0.0',
});




ExportExcelForNodeAvailability(mon:number,year:number ):Observable<Blob>{
  return this.http.get(`${this.url}/ReportAvailabilityNodesOfMonth/`+mon+'/'+year,{responseType: 'blob',headers: this.headers});
  
}

ExportExcelTicketdata(mon:number,year:number ):Observable<Blob>{
  return this.http.get(`${this.url}/ReportTicketsOfMonth/`+mon+'/'+year,{responseType: 'blob',headers: this.headers});
  
}


ExportExcelAvailabilitydata(mon:number,year:number ):Observable<Blob>{

  return this.http.get(`${this.url}/ReportAvailabilityForSelectedMonth/`+mon+'/'+year,{responseType: 'blob',headers: this.headers});
  
}


}
