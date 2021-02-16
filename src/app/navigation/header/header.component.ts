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
  constructor(private router :Router) { 
    
    
     

  }


  ngOnInit(): void {
  }
  logOut(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  

  public onToggleSidenav=()=> {
 this.sidenavToggle.emit();
  }
}
