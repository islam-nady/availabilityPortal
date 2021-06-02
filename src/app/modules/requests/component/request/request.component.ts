import { DataSource } from '@angular/cdk/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpformComponent } from 'src/app/modules/empform/empform.component';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { INodeAvailability } from '../../model/INodeAvailability';

import { RequestService } from '../../service/request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})


export class RequestComponent implements OnInit {

  searchKey:string ='' ;
 
  
  nodeAvailability :INodeAvailability []=[];
  @ViewChild(MatSort) sort?:MatSort ;
  @ViewChild(MatPaginator) paginator?:MatPaginator ;
  displayedColumns: string[] = ['nodeID',  'availability','action'];
  dataSource=new MatTableDataSource(this.nodeAvailability);

  
  kind:string="vaiolate";
  constructor(private requestService: RequestService ,
    private dialog: MatDialog,
    private dialogService:DialogService 
    ,private router: Router,private _activatedRoute: ActivatedRoute , private titleService :Title)
     {
      this.titleService.setTitle("Availability | Top 50 vaiolate"); 
     
     
     

      }
     
  ngOnInit(): void {
   
   
    // if(this._activatedRoute.snapshot.queryParams.kind){
    //   this.kind = this._activatedRoute.snapshot.queryParams.kind;
    // }
    this.requestService.getRequests(this.kind).subscribe(res=>{
      this.nodeAvailability = res as INodeAvailability[];
      console.log(res);
      this.dataSource=new MatTableDataSource(this.nodeAvailability);
      this.dataSource.paginator=this.paginator as MatPaginator;
      this.dataSource.sort = this.sort as MatSort;
      
    });
     
   
  
    
  }
 






  


  ngAfterViewInit() { 
  
    this.dataSource.sort = this.sort as MatSort;
    this.dataSource.paginator = this.paginator as MatPaginator;
  }

    onSearchClear(){
      this.searchKey ='';
      this.applyFilter();
    }
    applyFilter(){
      this.dataSource.filter=this.searchKey.trim().toLowerCase();
    }
    onCreate(){
      this.requestService.initializeFormGroup();
      const dialogGonfig = new MatDialogConfig();
      dialogGonfig.disableClose=true;
      dialogGonfig.autoFocus= true;
      dialogGonfig.width="50%";
      dialogGonfig.panelClass='modals-dialog';
      this.dialog.open(EmpformComponent,dialogGonfig);
    }

    onEdit(){
      this.requestService.initializeFormGroup();
      const dialogGonfig = new MatDialogConfig();
      dialogGonfig.disableClose=true;
      dialogGonfig.autoFocus= true;
      dialogGonfig.width="50%";
      dialogGonfig.panelClass='modals-dialog';
      this.dialog.open(EmpformComponent,dialogGonfig);

    }
    onDelete(){
      this.dialogService.openConfirmDialog();
    }


    NodeTicket(nodeId:string){
      console.log(nodeId);
     
      this.router.navigate(['/nodeticket'],{queryParams:{node:nodeId}})
  
    }

}
