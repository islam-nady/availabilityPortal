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
 
 
  displayedColumns: string[] = ['request_ID','subject','category', 'subCategory','psdTicketNumber','orderId','item','creationDateTime','resolveDateTime','completeDateTime','psdRootCause','psdRemedyAction','request_Status','nodeID','hWdevice','group','ttrstring','action'];
  dataSource=new MatTableDataSource(this.nodeDetails.requests);

  sumTTR:number=0;
  countTicket:number=0;
  MTTR:number=0;
  sumTTrString:string='';
  MTTRString:string='';
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
  
      console.log(this.nodeDetails.requests);
      this.dataSource=new MatTableDataSource(this.nodeDetails.requests);
      this.dataSource.paginator=this.paginator as MatPaginator;
      this.dataSource.sort = this.sort as MatSort;
      
      this.nodeDetails.requests.forEach(element => {
      this.sumTTR+=element.ttr;
      this.countTicket+=1;
      

       
     });

// for sum TTR
let minutSumTTR:Number;
    let hourSumTTR:Number;
    let daySumTTR:Number;
      if(this.sumTTR<60)
      {
      minutSumTTR=Math.floor(this.sumTTR) ;
      this.sumTTrString=minutSumTTR+' m ' ;
      }
      else if(this.sumTTR>=60)
      {
        hourSumTTR=Math.floor(this.sumTTR/60);
        minutSumTTR=Math.floor(this.sumTTR%60);
        if(hourSumTTR<24)
        {
           this.sumTTrString=hourSumTTR+' h : '+minutSumTTR+'m  ';
        }
        else if(hourSumTTR>=24)
        {
          daySumTTR=Math.floor(this.sumTTR/(60*24));
          hourSumTTR=Math.floor((this.sumTTR/60)%24);
        this.sumTTrString= daySumTTR+' d : '+hourSumTTR+' h : '+minutSumTTR+' m ';
        }
      }




    this.MTTR=this.sumTTR/this.countTicket;
    // for MTTR 
    let minutMTTR:Number;
    let hourMTTR:Number;
    let dayMTTR:Number;
      if(this.MTTR<60)
      {
      minutMTTR=Math.floor(this.MTTR) ;
      this.MTTRString=minutMTTR+' m ' ;
      }
      else if(this.MTTR>=60)
      {
        hourMTTR=Math.floor(this.MTTR/60);
        minutMTTR=Math.floor(this.MTTR%60);
        if(hourMTTR<24)
        {
           this.MTTRString=hourMTTR+' h : '+minutMTTR+'m  ';
        }
        else if(hourMTTR>=24)
        {
          dayMTTR=Math.floor(this.MTTR/(60*24));
          hourMTTR=Math.floor((this.MTTR/60)%24);
        this.MTTRString= dayMTTR+' d : '+hourMTTR+' h : '+minutMTTR+' m ';
        }
      }



     
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

  GlobalTicket(psdNumber:number){
 
    this.router.navigate(['/global'],{queryParams:{psdNumber:psdNumber}})

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
