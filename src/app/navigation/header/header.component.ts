import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
   userName = localStorage.getItem('userName');
   nodeId:any;
  constructor(private router :Router) { 
    
    
     

  }


  ngOnInit(): void {
  }
  logOut(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  
  NodeTicket(event: any){
  
    this.nodeId = event.target.value;
    console.log(this.nodeId);
    
    this.router.navigate(['/nodeticket'],{queryParams:{node:this.nodeId}})

  }

  
  // NodeTicket(nodeId:string){
  //   console.log(nodeId);
   
  //   this.router.navigate(['/nodeticket'],{queryParams:{node:nodeId}})

  // }
  public onToggleSidenav=()=> {
 this.sidenavToggle.emit();
  }
}
