import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
@Output() sidenavClose= new EventEmitter();
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
 
  public onSidenavClose =() =>{
    this.sidenavClose.emit();
  }

  //  RequestSafe() {
  //   this.router.navigate(['/request'],{queryParams:{kind:'safe'}})
  //   this.sidenavClose.emit();
  //  }

  //   RequestWarning() {
  //    this.router.navigate(['/request'],{queryParams:{kind:'warning'}})
  //    this.sidenavClose.emit();
  //    }
  //   RequestVaiolate() {
  //    this.router.navigate(['/request'],{queryParams:{kind:'vaiolate'}})
  //    this.sidenavClose.emit();
  //   }
 
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  



 
   
 




}
