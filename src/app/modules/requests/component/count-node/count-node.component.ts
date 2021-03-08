import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { ICountNode } from '../../model/ICountNode';
import { CountNodeService } from '../../service/count-node.service';

@Component({
  selector: 'app-count-node',
  templateUrl: './count-node.component.html',
  styleUrls: ['./count-node.component.css']
})
export class CountNodeComponent implements OnInit {

  searchKey:string ='' ;
 
  
  countNode :ICountNode []=[];
  @ViewChild(MatSort) sort?:MatSort ;
  @ViewChild(MatPaginator) paginator?:MatPaginator ;
  displayedColumns: string[] = ['nodeId',  'countTicket'];
  dataSource=new MatTableDataSource(this.countNode);
 
  
  
  constructor(private countnodeService: CountNodeService ,
    private dialog: MatDialog,
    private dialogService:DialogService 
    ,private router: Router,private _activatedRoute: ActivatedRoute , private titleService :Title)
     {
      this.titleService.setTitle("Availability |Count Ticket for Node"); 
     
     
     

      }
     
  ngOnInit(): void {
   
   
    // if(this._activatedRoute.snapshot.queryParams.kind){
    //   this.kind = this._activatedRoute.snapshot.queryParams.kind;
    // }
    this.countnodeService.getCountNodes().subscribe(res=>{
      this.countNode = res as ICountNode[];
      //console.log(res);
      this.dataSource=new MatTableDataSource(this.countNode);
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
