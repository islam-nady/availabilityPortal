import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CallSupportCenterService } from 'src/app/modules/requests/service/call-support-center.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
   userName = localStorage.getItem('userName');
   nodeId:any;
   dropdownsearch:string="nodeId";
  constructor(private router :Router,private callSupport:CallSupportCenterService) { 
    
    
     

  }


  ngOnInit(): void {

 setInterval(() => {
   
  this.callSupport.getTicketFromSupport().subscribe(res=>{
    
  });
 
}, 900000);
  }
  logOut(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  
  NodeTicket(event: any){
  
    this.nodeId = event.target.value;
   // this.router.navigate(['/nodeticket'],{queryParams:{node:this.nodeId}})
if(this.dropdownsearch=="nodeId")
{
  this.router.navigate(['/nodeticket'],{queryParams:{node:this.nodeId}})
}
else if(this.dropdownsearch=="accountName")
{
  this.router.navigate(['/safeCustomer'],{queryParams:{account:this.nodeId,kind:"vaiolate"}})

}
else if(this.dropdownsearch=="accountNumber")
{
  this.router.navigate(['/safeCustomer'],{queryParams:{accountNumber:this.nodeId,kind:"vaiolate"}})
}
else if(this.dropdownsearch=="orderId")
{
  this.router.navigate(['/nodeticket'],{queryParams:{orderId:this.nodeId}})
}

  }


  
  
  // NodeTicket(nodeId:string){
  //   console.log(nodeId);
   
  //   this.router.navigate(['/nodeticket'],{queryParams:{node:nodeId}})

  // }
  public onToggleSidenav=()=> {
 this.sidenavToggle.emit();
  }
}
