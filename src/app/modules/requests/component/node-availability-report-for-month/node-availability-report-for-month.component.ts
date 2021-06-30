import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ReportService } from '../../service/report.service';
import { saveAs } from 'file-saver';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-node-availability-report-for-month',
  templateUrl: './node-availability-report-for-month.component.html',
  styleUrls: ['./node-availability-report-for-month.component.css']

})
export class NodeAvailabilityReportForMonthComponent implements OnInit {

  
  loading=false;
  date :string='';
  dateTicket:string='';
  dateAvailability:string='';
  
  constructor(private reportService:ReportService,private notificationService:NotificationService, private titleService:Title
    ) {
      this.titleService.setTitle("Availability | Report");
      
     }

  ngOnInit(): void {
    
  }


  ExportTOExcelNodeAvailability()
{ this.loading=true;
  let datesplit= this.date.split("-",2);
  let mon=datesplit[1] as any ;
  let year=datesplit[0] as any ;
  this.reportService.ExportExcelForNodeAvailability(mon ,year).subscribe(res=>{

    const blob = new Blob([res], { type : 'application/vnd.ms.excel' });
    const file = new File([blob],  'NodeAvailability' + Date.now() +'.xlsx', { type: 'application/vnd.ms.excel' });
   
 saveAs(file,'NodeAvailability' + Date.now() +'.xlsx')
 setTimeout(()=> this.loading=false,1000) 
  },err=>{
    
   this.notificationService.warn("! Fail")

 });


}



ExportTOExcelTicketData()
{
  this.loading=true;
  let datesplit= this.dateTicket.split("-",2);
  let mon=datesplit[1] as any ;
  let year=datesplit[0] as any ;
  this.reportService.ExportExcelTicketdata(mon ,year).subscribe(res=>{

    const blob = new Blob([res], { type : 'application/vnd.ms.excel' });
    const file = new File([blob],  'TicketsData' + Date.now() +'.xlsx', { type: 'application/vnd.ms.excel' });
   
 saveAs(file,'TicketsData' + Date.now() +'.xlsx')
 setTimeout(()=> this.loading=false,1000)
  },err=>{
    
   this.notificationService.warn("! Fail")

 });

}

ExportTOExcelAvailabilityDataForSelectedMonth(kind:string)
{
 this.loading=true;
  let datesplit= this.dateAvailability.split("-",2);
  let mon=datesplit[1] as any ;
  let year=datesplit[0] as any ;
  this.reportService.ExportExcelAvailabilitydata(mon ,year,kind).subscribe(res=>{

    const blob = new Blob([res], { type : 'application/vnd.ms.excel' });
    const file = new File([blob],  'AvailabilityData' + Date.now() +'.xlsx', { type: 'application/vnd.ms.excel' });
   
 saveAs(file,'AvailabilityData' + Date.now() +'.xlsx')
 setTimeout(()=> this.loading=false,1000)
  },err=>{
    
   this.notificationService.warn("! Fail")

 });

}


}

