import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { IRequest } from '../../model/IRequest';
import { NodeTicketsService } from '../../service/node-tickets.service';
import {FormGroup,FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-node-ticket',
  templateUrl: './node-ticket.component.html',
  styleUrls: ['./node-ticket.component.css']
})
export class NodeTicketComponent implements OnInit {

  searchKey:string ='' ;
 
  month=new Date().toLocaleDateString('default',{month:'long'});
  request :IRequest []=[];
  @ViewChild(MatSort) sort?:MatSort ;
  @ViewChild(MatPaginator) paginator?:MatPaginator ;
  displayedColumns: string[] = ['subject','category', 'request_Status','nodeID','ttr'];
  dataSource=new MatTableDataSource(this.request);
 
  sumTTR:number=0;
  nodeId:string="";
  nodeAvailability:number=0;
//form
form: FormGroup = new FormGroup({
  id: new FormControl(0),
  value: new FormControl('',[Validators.required]),
  orderInList: new FormControl(0),
      
});





  // bar chart 
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [this.month];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  colors: Color[] = [
    {
      backgroundColor: [
       'DarkBlue', 'blue', 'Salmon','red',
        'green',
        'yellow','pink','orange','purple','brown','DeepPink','DarkOrange'
      ]
    }]
  barChartData: ChartDataSets[] = [
    { data: [], label: 'Sum TTR For Ticket Per Node' }
  ];
  
// bar chart for node availability
barChartOptionsAvailability: ChartOptions = {
  responsive: true,
};
barChartLabelsAvailability: Label[] = [this.month];
barChartTypeAvailability: ChartType = 'bar';
barChartLegendAvailability = true;
barChartPluginsAvailability = [];

barChartDataAvailability: ChartDataSets[] = [
  { data: [], label: 'Node Availability Per Month' }
];


  constructor(private nodeTicketService: NodeTicketsService ,
    private dialog: MatDialog,
    private dialogService:DialogService 
    ,private router: Router,private _activatedRoute: ActivatedRoute,private titleService:Title)
     {
     
      this.titleService.setTitle("NodeTicket"); 
     

      }
     
  ngOnInit(): void {
   
   
    if(this._activatedRoute.snapshot.queryParams.node){
      this.nodeId = this._activatedRoute.snapshot.queryParams.node;
      this.nodeAvailability = this._activatedRoute.snapshot.queryParams.availabilityPercent;
    
//      console.log(this.nodeAvailability);

    }
    this.nodeTicketService.getRequests(this.nodeId).subscribe(res=>{
      this.request = res as IRequest[];
  //    console.log(res);
      this.dataSource=new MatTableDataSource(this.request);
      this.dataSource.paginator=this.paginator as MatPaginator;
     res.forEach(element => {
       this.sumTTR+=element.ttr;
       
     });
   
  this.barChartData= [
    { data: [this.sumTTR], label: 'Sum TTR For Ticket Per Node' }
  ];
     

  this.barChartDataAvailability = [
    { data: [ this.nodeAvailability], label: 'Node Availability Per Month' }
  ];
  
      
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
