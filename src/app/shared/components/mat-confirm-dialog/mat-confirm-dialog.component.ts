import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService} from 'src/app/shared/services/notification.service';


@Component({
  selector: 'app-mat-confirm-dialog',
  templateUrl: './mat-confirm-dialog.component.html',
  styleUrls: ['./mat-confirm-dialog.component.css']
})
export class MatConfirmDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MatConfirmDialogComponent>,public notificationService: NotificationService) { }

  ngOnInit(): void {
  }
  onClose(){
  
    this.dialogRef.close();

  }
  onDelete(){
    //if(confirm('Are you sure to delete this record ?')){
        this.onClose();
         this.notificationService.warn('! Deleted successfully');
    //}
  }

}
