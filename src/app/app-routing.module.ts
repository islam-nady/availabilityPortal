import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from './layout/default/default.component';
import { AuthGuardService } from './modules/AuthGuardService';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
//import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { EmployeeComponent } from './modules/employee/employee.component';
import {PanelComponent} from './modules/panel/panel.component';
import { AccountComponent } from './modules/requests/component/account/account.component';
import { CountNodeComponent } from './modules/requests/component/count-node/count-node.component';
import { CustomerInfoPerMonthComponent } from './modules/requests/component/customer-info-per-month/customer-info-per-month.component';
import { CustomerInfoPerYearComponent } from './modules/requests/component/customer-info-per-year/customer-info-per-year.component';
import { RequestComponent } from './modules/requests/component/request/request.component';
import { SafeCustomerComponent } from './modules/requests/component/safe-customer/safe-customer.component';
import { SafeComponent } from './modules/requests/component/safe/safe.component';
import { VaiolataComponent } from './modules/requests/component/vaiolata/vaiolata.component';
import { WarningComponent } from './modules/requests/component/warning/warning.component';

import {StepperComponent} from './modules/stepper/stepper.component';
const routes: Routes = [
 
  
    {
      path:'login',
      component:AccountComponent,

    },
  
  { path:'',
    component:DefaultComponent,
    canActivate:[AuthGuardService],
    children:[
      {path:'',
       component:DashboardComponent,
       canActivate:[AuthGuardService]

      }
  ,
    {
      path:'request',
      component:RequestComponent,
      canActivate:[AuthGuardService]
    },

    {
      path:'safe',
      component:SafeComponent,
      canActivate:[AuthGuardService]
    },
    {
      path:'countnode',
      component:CountNodeComponent,
      canActivate:[AuthGuardService]
    },

    {
      path:'customerInfoPerYear',
      component:CustomerInfoPerYearComponent,
      canActivate:[AuthGuardService]
    },
    {
      path:'customerInfoPerMonth',
      component:CustomerInfoPerMonthComponent,
      canActivate:[AuthGuardService]
    },
    {
      path:'warning',
      component:WarningComponent,
      canActivate:[AuthGuardService]
    },
    {
      path:'vaiolate',
      component:VaiolataComponent,
      canActivate:[AuthGuardService]
    },
    {
      path:'safeCustomer',
      component:SafeCustomerComponent,
      canActivate:[AuthGuardService]
    },
    
    {
      path:'employee',
      component:EmployeeComponent,
      canActivate:[AuthGuardService]
    },
    {
      path:'panel',
      component:PanelComponent,
      canActivate:[AuthGuardService]
    },
    {
      path:'steps',
      component:StepperComponent,
      canActivate:[AuthGuardService]
    },]
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
