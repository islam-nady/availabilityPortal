import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { ICustomerInfo } from '../../model/ICustomerInfo';
import { CustomerinfoPerYearService } from '../../service/customerinfo-per-year.service';

@Component({
  selector: 'app-customer-info-per-month',
  templateUrl: './customer-info-per-month.component.html',
  styleUrls: ['./customer-info-per-month.component.css']
})
export class CustomerInfoPerMonthComponent implements OnInit {

  
  searchKey:string ='' ;
 
  month=new Date().toLocaleDateString('default',{month:'long'});
  customerinfo :ICustomerInfo []=[];
  @ViewChild(MatSort) sort?:MatSort ;
  @ViewChild(MatPaginator) paginator?:MatPaginator ;
  displayedColumns: string[] = [  'accountName','accountNumber','countNode','countRepeatedNode'];
  dataSource=new MatTableDataSource(this.customerinfo);
 
  
  
  constructor(private customerinfoservice:CustomerinfoPerYearService ,
    private dialog: MatDialog,
    private dialogService:DialogService 
    ,private router: Router,private _activatedRoute: ActivatedRoute , private titleService :Title)
     {
      this.titleService.setTitle("Availability | Customer Inf Per Month"); 
     
     
     

      }
     
  ngOnInit(): void {
   
   
    // if(this._activatedRoute.snapshot.queryParams.kind){
    //   this.kind = this._activatedRoute.snapshot.queryParams.kind;
    // }
    this.customerinfoservice.getCustomerInfoPerMonth().subscribe(res=>{
      this.customerinfo = res as ICustomerInfo[];
      //console.log(res);
      this.dataSource=new MatTableDataSource(this.customerinfo);
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
  



}
