import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ReportService } from '../../service/report.service';
import { saveAs } from 'file-saver';



@Component({
  selector: 'app-node-availability-report-for-month',
  templateUrl: './node-availability-report-for-month.component.html',
  styleUrls: ['./node-availability-report-for-month.component.css']

})
export class NodeAvailabilityReportForMonthComponent implements OnInit {

  
  
  date :string='';
  dateTicket:string='';
  dateAvailability:string='';
  
  constructor(private reportService:ReportService,private notificationService:NotificationService
    ) { }

  ngOnInit(): void {
    
  }


  ExportTOExcelNodeAvailability()
{
  let datesplit= this.date.split("-",2);
  let mon=datesplit[1] as any ;
  let year=datesplit[0] as any ;
  this.reportService.ExportExcelForNodeAvailability(mon ,year).subscribe(res=>{

    const blob = new Blob([res], { type : 'application/vnd.ms.excel' });
    const file = new File([blob],  'NodeAvailability' + Date.now() +'.xlsx', { type: 'application/vnd.ms.excel' });
   
 saveAs(file,'NodeAvailability' + Date.now() +'.xlsx')
    
  },err=>{
    
   this.notificationService.warn("! Fail")

 });

 
}



ExportTOExcelTicketData()
{
  let datesplit= this.dateTicket.split("-",2);
  let mon=datesplit[1] as any ;
  let year=datesplit[0] as any ;
  this.reportService.ExportExcelTicketdata(mon ,year).subscribe(res=>{

    const blob = new Blob([res], { type : 'application/vnd.ms.excel' });
    const file = new File([blob],  'TicketsData' + Date.now() +'.xlsx', { type: 'application/vnd.ms.excel' });
   
 saveAs(file,'TicketsData' + Date.now() +'.xlsx')
    
  },err=>{
    
   this.notificationService.warn("! Fail")

 });

 
}

ExportTOExcelAvailabilityDataForSelectedMonth(kind:string)
{
 
  let datesplit= this.dateAvailability.split("-",2);
  let mon=datesplit[1] as any ;
  let year=datesplit[0] as any ;
  this.reportService.ExportExcelAvailabilitydata(mon ,year,kind).subscribe(res=>{

    const blob = new Blob([res], { type : 'application/vnd.ms.excel' });
    const file = new File([blob],  'AvailabilityData' + Date.now() +'.xlsx', { type: 'application/vnd.ms.excel' });
   
 saveAs(file,'AvailabilityData' + Date.now() +'.xlsx')
    
  },err=>{
    
   this.notificationService.warn("! Fail")

 });

 
}


}

