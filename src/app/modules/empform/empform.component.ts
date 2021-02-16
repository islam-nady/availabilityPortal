import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EmpService } from 'src/app/shared/services/emp.service';
import {NotificationService}from 'src/app/shared/services/notification.service';
import { IRequest } from '../requests/model/IRequest';

@Component({
  selector: 'app-empform',
  templateUrl: './empform.component.html',
  styleUrls: ['./empform.component.css']
})
export class EmpformComponent implements OnInit {

  constructor(public service :EmpService, public dialogRef: MatDialogRef<EmpformComponent>,public notificationService: NotificationService) { }

  departments =[
    {id:3 ,value:"Dep-1"},
    {id:2 ,value:"Dep-2"},
    {id:3 ,value:"Dep-3"}

  ]
  ngOnInit(){
  }
  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.notificationService.success(':: Submitted successfully');
  }
  onSubmit(){
    if(this.service.form.valid){
      debugger
      let x = this.service.form.value
      // let data :IRequest ={
      //   id : this.service.form.controls.$key.value,
      //   availability : this.service.form.controls.gender.value,
      // }
      // this.service.insertEmployee(data)
      this.service.form.reset();
    this.service.initializeFormGroup();
    this.notificationService.success(':: Submitted successfully');
    this.onClose();

    }
  }
  onClose(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();

  }

}
