import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { INodeAvailability } from '../../model/INodeAvailability';
import { SafecustomerService } from '../../service/safecustomer.service';

@Component({
  selector: 'app-safe-customer',
  templateUrl: './safe-customer.component.html',
  styleUrls: ['./safe-customer.component.css']
})
export class SafeCustomerComponent implements OnInit {

  searchKey:string ='' ;
 
  
  nodeAvailability :INodeAvailability []=[];
  @ViewChild(MatSort) sort?:MatSort ;
  @ViewChild(MatPaginator) paginator?:MatPaginator ;
  displayedColumns: string[] = ['nodeID',  'availability'];
  dataSource=new MatTableDataSource(this.nodeAvailability);
 
  
  kind:string="";
  name:string="";
  constructor(private safecustomerService: SafecustomerService ,
    private dialog: MatDialog,
    private dialogService:DialogService 
    ,private router: Router,private _activatedRoute: ActivatedRoute,private titleService:Title)
     {
     
      this.titleService.setTitle("Availability | SafeCustomer"); 
     

      }
     
  ngOnInit(): void {
   
   
    if(this._activatedRoute.snapshot.queryParams.account){
      this.name = this._activatedRoute.snapshot.queryParams.account;
      this.kind=this._activatedRoute.snapshot.queryParams.kind;
console.log(this.name);
console.log(this.kind);

    }
    this.safecustomerService.getRequests(this.name,this.kind).subscribe(res=>{
      this.nodeAvailability = res as INodeAvailability[];
     /// console.log(res);
      this.dataSource=new MatTableDataSource(this.nodeAvailability);
      this.dataSource.paginator=this.paginator as MatPaginator;
      
     
      
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
    





}
