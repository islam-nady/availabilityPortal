import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { ICustomer } from '../../model/ICustomer';
import { WarningService } from '../../service/warning.service';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {

  searchKey:string ='' ;
 
 
  customer :ICustomer []=[];
  @ViewChild(MatSort) sort?:MatSort ;
  @ViewChild(MatPaginator) paginator?:MatPaginator ;
  displayedColumns: string[] = ['accountName','accountNumber','countNode','action'];
  dataSource=new MatTableDataSource(this.customer);
 
  constructor(private warningService: WarningService ,
    private dialog: MatDialog,
    private dialogService:DialogService,
    private router: Router,private _activatedRoute: ActivatedRoute,private titleService:Title
    )
     {
      this.titleService.setTitle("Availability | Warning"); 
     
     

      }
     
  ngOnInit(): void {
   
   // this.dataSource.sort = this.sort as MatSort;
   
    this.warningService.getcustomer().subscribe(res=>{
      this.customer = res as ICustomer[];
     
      this.dataSource=new MatTableDataSource(this.customer);
      this.dataSource.paginator=this.paginator as MatPaginator;
     
      
    });
     
   
  
    
  }
 


  accountNode(accountName:string){
    //console.log(accountName);
    
    this.router.navigate(['/safeCustomer'],{queryParams:{account:accountName,kind:'warning'}})

  }



  


  ngAfterViewInit() { 
  
    this.dataSource.sort = this.sort as MatSort;
    this.dataSource.paginator = this.paginator as MatPaginator;}

    onSearchClear(){
      this.searchKey ='';
      this.applyFilter();
    }
    applyFilter(){
      this.dataSource.filter=this.searchKey.trim().toLowerCase();
    }


}
