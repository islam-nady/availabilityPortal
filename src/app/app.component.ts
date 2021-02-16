import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'G4-App';
  isLogin: boolean=true
  constructor() {
      this.userHasToken()

  }
  userHasToken() {
    let tocken = localStorage.getItem('token');
    if (tocken == undefined || tocken == null || tocken == "") {
      this.isLogin= false;
    }
    this.isLogin= true;
  }
}
