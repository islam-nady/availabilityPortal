import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { INodeAvailability } from '../../model/INodeAvailability';
import { ViolatedNodesOfMonthService } from '../../service/violated-nodes-of-month.service';

@Component({
  selector: 'app-violated-nodes-of-month',
  templateUrl: './violated-nodes-of-month.component.html',
  styleUrls: ['./violated-nodes-of-month.component.css']
})
export class ViolatedNodesOfMonthComponent implements OnInit {

  searchKey:string ='' ;
 
  
  nodeAvailability :INodeAvailability []=[];
  @ViewChild(MatSort) sort?:MatSort ;
  @ViewChild(MatPaginator) paginator?:MatPaginator ;
  displayedColumns: string[] = ['nodeID',  'availability'];
  dataSource=new MatTableDataSource(this.nodeAvailability);

  
 
  constructor(private violatedNodesofMonthService: ViolatedNodesOfMonthService ,
    private dialog: MatDialog,
    private dialogService:DialogService 
    ,private router: Router,private _activatedRoute: ActivatedRoute , private titleService :Title)
     {
      this.titleService.setTitle("Availability | Violated Nodes"); 
     
     
     

      }
     
  ngOnInit(): void {
   
   
    this.violatedNodesofMonthService.getviolatedNodes().subscribe(res=>{
      this.nodeAvailability = res as INodeAvailability[];
      //console.log(res);
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



}
