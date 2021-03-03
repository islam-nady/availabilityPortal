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
  templateUrl:'./safe-customer.component.html',
  styleUrls: ['./safe-customer.component.css']
})
export class SafeCustomerComponent implements OnInit {

  searchKey:string ='' ;
 
  
  nodeAvailability :INodeAvailability []=[];
  @ViewChild(MatSort) sort?:MatSort ;
  @ViewChild(MatPaginator) paginator?:MatPaginator ;
  displayedColumns: string[] = ['nodeID',  'availability','action'];
  dataSource=new MatTableDataSource(this.nodeAvailability);
 
  
  kind:string="";
  name:string=" ";
  accountNumber:string=" ";
  constructor(private safecustomerService: SafecustomerService ,
    private dialog: MatDialog,
    private dialogService:DialogService 
    ,private router: Router,private _activatedRoute: ActivatedRoute,private titleService:Title)
     {
     
      this.titleService.setTitle("Availability | SafeCustomer"); 
     

      }
     
  ngOnInit(): void {
    
  
    this.kind=this._activatedRoute.snapshot.queryParams.kind;
    if(this._activatedRoute.snapshot.queryParams.account)
    {
      this.name = this._activatedRoute.snapshot.queryParams.account;
      
// console.log(this.name);
// console.log(this.kind);

    }
    if(this._activatedRoute.snapshot.queryParams.accountNumber)
    {
      this.accountNumber=this._activatedRoute.snapshot.queryParams.accountNumber;
    //  console.log(this.accountNumber+"in customersafe component 1");
    }

    this.safecustomerService.getRequests(this.name,this.accountNumber,this.kind).subscribe(res=>{
      this.nodeAvailability = res as INodeAvailability[];
     /// console.log(res);
      this.dataSource=new MatTableDataSource(this.nodeAvailability);
      this.dataSource.paginator=this.paginator as MatPaginator;
      
     
      
    });
     
   
  
    
  }
 
  accountNode(accountName:string,state:string)
  {
   
    this.safecustomerService.getRequests(accountName,this.accountNumber,state).subscribe(res=>{
      this.nodeAvailability = res as INodeAvailability[];
     /// console.log(res);
      this.dataSource=new MatTableDataSource(this.nodeAvailability);
      this.dataSource.paginator=this.paginator as MatPaginator;
    });
  }
 


  
  NodeTicket(nodeId:string){
    console.log(nodeId);
   
    this.router.navigate(['/nodeticket'],{queryParams:{node:nodeId}})

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
