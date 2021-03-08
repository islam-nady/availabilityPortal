import {Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import {Chart, ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label,MultiDataSet } from 'ng2-charts';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { IAvailabilitySammury } from '../requests/model/IAvailabilitySammury';
import { SammuryService } from '../requests/service/sammury.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   safe:number=0;
   warnning:number=0;
   vaiolate:number=0;
  
  month=new Date().toLocaleDateString('default',{month:'long'});
  
   doughnutChartLabels: Label[] = ['warnning', 'vaiolate', 'safe'];
   doughnutChartData: MultiDataSet = [
     [this.warnning, this.vaiolate, this.safe]
   ];
   doughnutChartType: ChartType = 'doughnut';

   
/////////bar chart/////////////////////////
barChartOptions: ChartOptions = {
  responsive: true,
};
barChartLabels: Label[] =['warnning', 'vaiolate', 'safe'];
barChartType: ChartType = 'bar';
barChartLegend = true;
barChartPlugins = [];
barChartData: ChartDataSets[] = [
  { data:[this.warnning, this.vaiolate, this.safe], label: 'Node Availability' }
];





   

  constructor(private titleService :Title,private dialog: MatDialog,
    private dialogService:DialogService ,private sammuryService:SammuryService )
    {
      this.titleService.setTitle("Availability | Home"); 
   
      
    }
 ngOnInit():void
 {
  this.sammuryService.getSammuryAvailability().subscribe(res=>{
    this.safe = res.safe ;
    this.warnning=res.warnning;
    this.vaiolate=res.vaiolate;
    
   this.doughnutChartData = [
      [this.warnning, this.vaiolate, this.safe]
    ];

     this.barChartData = [
      { data:[this.warnning, this.vaiolate, this.safe], label: 'Node Availability' }
    ];    
    
    });
   
 
 } 

  /////////////////donut chart//////////////////
  

  
  // doughnutChartLabelsp: Label[] = ['Nessan', 'Jeep', 'Bejo'];
  // doughnutChartDatap: MultiDataSet = [
  //   [40, 25, 35]
  // ];
 


  
  // doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  // doughnutChartData: MultiDataSet = [
  //   [55, 25, 20]
  // ];
  
  colors: Color[] = [
    {
      backgroundColor: [
        'orange','red',
        'green',
        'blue','pink','orange','purple','brown','DeepPink', 'Salmon','DarkOrange'
      ]
    }
  ];

 
//////////line chart//////////////////////
lineChartData: ChartDataSets[] = [
  { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
];

lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

 lineChartOptions:ChartOptions = {
  responsive: true,
};

 lineChartColors: Color[] = [
  {
    borderColor: 'black',
    backgroundColor: 'rgba(255,255,0,0.28)',
  },
];

 lineChartLegend = true;
 lineChartPlugins = [];
 lineChartType:ChartType = 'line';



/////////bar chart/////////////////////////
// barChartOptions: ChartOptions = {
//   responsive: true,
// };
// barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
// barChartType: ChartType = 'bar';
// barChartLegend = true;
// barChartPlugins = [];

// barChartData: ChartDataSets[] = [
//   { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
// ];


  
   
   


 

}
