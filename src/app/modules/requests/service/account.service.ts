import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { IUser } from '../model/IUser';
import {  ILoginview } from '../model/loginview';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

 
  //loginview = <ILoginview>{ };


  url =  "http://172.29.29.8:8014/api/"+ "account/login";
   constructor(private http: HttpClient ) { }

   login(data:ILoginview ):Observable<IUser>
   {
     
     
     return this.http.post<IUser>(this.url,data);
     
   }


  form: FormGroup = new FormGroup({
  
    userName: new FormControl('', Validators.required),
    passWord: new FormControl('', Validators.required),

  });

  initializeFormGroup(){
    this.form.setValue({
      
      userName: '',
      passWord: '',
    

    })
  }

}
