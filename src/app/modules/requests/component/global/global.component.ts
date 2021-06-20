import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { IRequest } from '../../model/IRequest';
import { GlobalService } from '../../service/global.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {
  searchKey:string ='' ;
  psdNumber:string='';
  Requests :IRequest []=[];
  @ViewChild(MatSort) sort?:MatSort ;
  @ViewChild(MatPaginator) paginator?:MatPaginator ;
  displayedColumns: string[] = ['request_ID','subject','category', 'subCategory','psdTicketNumber','orderId','item','creationDateTime','resolveDateTime','completeDateTime','psdRootCause','psdRemedyAction','request_Status','nodeID','hWdevice','group','ttrstring'];
  dataSource=new MatTableDataSource(this.Requests);
  constructor( private globalservice:GlobalService,private router: Router,private _activatedRoute: ActivatedRoute,private titleService:Title)
  {
  
   this.titleService.setTitle("Availability | Global Ticket"); 
  

   }
  

  ngOnInit(): void {
    debugger;
    this.psdNumber=this._activatedRoute.snapshot.queryParams.psdNumber;
    console.log(this.psdNumber);
    this.globalservice.getRequests(this.psdNumber).subscribe(res=>{
    this.Requests = res as IRequest[];
    this.Requests.forEach(element => {
      let minut:Number;
      let hour:Number;
      let day:Number;
        if(element.ttr<60)
        {
        minut=Math.floor(element.ttr) ;
        element.ttrstring=minut+' m ' ;
        }
        else if(element.ttr>=60)
        {
          hour=Math.floor(element.ttr/60);
          minut=Math.floor(element.ttr%60);
          if(hour<24)
          {
            element.ttrstring=hour+' h : '+minut+'m  ';
          }
          else if(hour>=24)
          {
            day=Math.floor(element.ttr/(60*24));
            hour=Math.floor((element.ttr/60)%24);
            element.ttrstring=day+' d : '+hour+' h : '+minut+' m ';
          }
        }
      });
       
    this.dataSource=new MatTableDataSource(this.Requests);
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
