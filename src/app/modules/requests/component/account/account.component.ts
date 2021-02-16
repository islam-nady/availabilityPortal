import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ILoginview } from '../../model/loginview';
import { AccountService } from '../../service/account.service';

import { FormGroup, Validators,FormControl } from '@angular/forms';
import { IUser } from '../../model/IUser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  // form: FormGroup=new FormGroup({
  //   userName: new FormControl('',Validators.required),
  //   passWord: new FormControl('',Validators.required)
    
  // });


  constructor( public accountService:AccountService,
    private router:Router,
    private titleService :Title, private _router:Router) {
    this.titleService.setTitle("Availability | Login"); 

    let token = localStorage.getItem("token");

     if (token != "undefined" || token != null || token != "") 
     {
         this._router.navigateByUrl('')
       
     }  
      

   }

  ngOnInit(): void {
// this.accountService.loginview={
//   userName:'',
//   passWord:''
// }



  }
    // user : IUser={status:false,token:""};
    user = <IUser>{}
    error:any;
    onSubmit(){
    if(this.accountService.form.valid)
    {
      
      let x = this.accountService.form.value;
       let loginview :ILoginview =
       {
        userName: this.accountService.form.controls.userName.value,
        passWord : this.accountService.form.controls.passWord.value,
      }
      this.accountService.login(loginview).subscribe(res=>{
       // this. = res as INodeAvailability[];
       
       this.user=res;
      //  this.error=this.user.error;
      //  console.log(this.error);
       if(this.user.token!= "undefined" || this.user.token != null ||this.user.token != "")
       
      {
         localStorage.setItem('token',this.user.token);
         localStorage.setItem('userName',this.user.userName);
        this.router.navigateByUrl('');
      
      }


        
              
  
        
      });

      
    //   this.accountService.form.reset();
    // this.accountService.initializeFormGroup();
    // this.notificationService.success(':: Submitted successfully');
    // this.onClose();
    

    }

  }

  
 
  
 

}
