
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { INodeAvailability } from '../model/INodeAvailability';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

   url = "http://172.29.29.8:8014/api/" + "requests";
   constructor(private http: HttpClient) { }

   getRequests(kind : string): Observable<INodeAvailability[]>{
     return this.http.get<INodeAvailability[]>(`${this.url}/`+kind);
   }

  //  addData(data : IRequest){
  //   return this.http.post(this.url,data);
  // }
 
   form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(11)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false)
  });
  initializeFormGroup(){
    this.form.setValue({
      $key:null,
      fullName: '',
      email: '',
      mobile:'',
      city: '',
      gender: 1,
      department: 0,
      hireDate:'',
      isPermanent: false

    })
  }
}
