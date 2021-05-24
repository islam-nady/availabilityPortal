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
import { INodeDetails } from '../../model/nodeDetails';
@Component({
  selector: 'app-node-ticket',
  templateUrl: './node-ticket.component.html',
  styleUrls: ['./node-ticket.component.css']
})
export class NodeTicketComponent implements OnInit {

  searchKey:string ='' ;
 
  month=new Date().toLocaleDateString('default',{month:'long'});
  //requests :IRequest []=[];
  nodeDetails=<INodeDetails>{};

  @ViewChild(MatSort) sort?:MatSort ;
  @ViewChild(MatPaginator) paginator?:MatPaginator ;
 
 
  displayedColumns: string[] = ['request_ID','subject','category', 'subCategory','psdTicketNumber','orderId','item','creationDateTime','resolveDateTime','completeDateTime','psdRootCause','psdRemedyAction','request_Status','nodeID','ttrstring','action'];
  dataSource=new MatTableDataSource(this.nodeDetails.requests);

  sumTTR:number=0;
  countTicket:number=0;
  MTTR:number=0;
  orderId:number=0;
  nodeId:string=" ";
  nodeAvailability:number=0;
  acccountName:string="";
  acccountNumber:string="";
  
  



//form
form: FormGroup = new FormGroup({
  id: new FormControl(0),
  value: new FormControl('',[Validators.required]),
  orderInList: new FormControl(0),
      
});





  // bar chart 
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        // Change here
      // barPercentage:0.5
    }]
  }
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
      
 //end of constructor 

      }
     
  ngOnInit(): void {
  
     
    this.dataSource.sort = this.sort as MatSort;
    if(this._activatedRoute.snapshot.queryParams.node){
      this.nodeId = this._activatedRoute.snapshot.queryParams.node;
   
    }
    if(this._activatedRoute.snapshot.queryParams.orderId){
      this.orderId = this._activatedRoute.snapshot.queryParams.orderId;
   
    }
    this.nodeTicketService.getRequests(this.nodeId,this.orderId).subscribe(res=>{
      this.nodeDetails = res as INodeDetails ;
      
      this.nodeDetails.requests.forEach(element => {
      let minut:Number;
      let hour:Number;
      let day:Number;
        if(element.ttr<60)
        {
        minut=Math.floor(element.ttr) ;
        element.ttrstring=minut+' :m' ;
        }
        else if(element.ttr>=60)
        {
          hour=Math.floor(element.ttr/60);
          minut=Math.floor(element.ttr%60);
          if(hour<24)
          {
            element.ttrstring=hour+' :h '+minut+':m ';
          }
          else if(hour>=24)
          {
            day=Math.floor(element.ttr/(60*24));
            hour=Math.floor((element.ttr/60)%24);
            element.ttrstring=day+' :d '+hour+' :h '+minut+' :m ';
          }
        }
        this.countTicket+=1;
        
  
         
       });
  
      console.log(this.nodeDetails.requests);
      this.dataSource=new MatTableDataSource(this.nodeDetails.requests);
      this.dataSource.paginator=this.paginator as MatPaginator;
      this.dataSource.sort = this.sort as MatSort;
      
      this.nodeDetails.requests.forEach(element => {
      this.sumTTR+=element.ttr;
      this.countTicket+=1;
      

       
     });

    this.MTTR=this.sumTTR/this.countTicket;

     
    this.nodeAvailability=res.availabilityNode;
     
    this.acccountName=res.accountName;
    this.acccountNumber=res.accountNumber;
  this.barChartData= [
    { data: [this.sumTTR], label: 'Sum TTR For Ticket Per Node' }
  ];
     

  this.barChartDataAvailability = [
    { data: [ this.nodeAvailability], label: 'Node Availability Per Month' }
  ];
  
      
    });
     
   
    
  }
 


  
  
  
  


  accountNode(){
 
    this.router.navigate(['/safeCustomer'],{queryParams:{account:this.acccountName,kind:"vaiolate"}})

  }
  

//
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
