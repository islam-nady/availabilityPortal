import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from './layout/default/default.component';
import { AuthGuardService } from './modules/AuthGuardService';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
//import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { EmployeeComponent } from './modules/employee/employee.component';
import {PanelComponent} from './modules/panel/panel.component';
import { AccountComponent } from './modules/requests/component/account/account.component';
import { AllCustomerComponent } from './modules/requests/component/all-customer/all-customer.component';
import { CountNodeComponent } from './modules/requests/component/count-node/count-node.component';
import { CustomerInfoPerMonthComponent } from './modules/requests/component/customer-info-per-month/customer-info-per-month.component';
import { CustomerInfoPerYearComponent } from './modules/requests/component/customer-info-per-year/customer-info-per-year.component';
import { GlobalComponent } from './modules/requests/component/global/global.component';
import { NodeAvailabilityReportForMonthComponent } from './modules/requests/component/node-availability-report-for-month/node-availability-report-for-month.component';
import { NodeTicketComponent } from './modules/requests/component/node-ticket/node-ticket.component';
import { RequestComponent } from './modules/requests/component/request/request.component';
import { SafeCustomerComponent } from './modules/requests/component/safe-customer/safe-customer.component';
import { SafeNodesOfMonthComponent } from './modules/requests/component/safe-nodes-of-month/safe-nodes-of-month.component';
import { SafeComponent } from './modules/requests/component/safe/safe.component';
import { VaiolataComponent } from './modules/requests/component/vaiolata/vaiolata.component';
import { ViolatedNodesOfMonthComponent } from './modules/requests/component/violated-nodes-of-month/violated-nodes-of-month.component';
import { WarningNodesOfMonthComponent } from './modules/requests/component/warning-nodes-of-month/warning-nodes-of-month.component';
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

    // {
    //   path:'safe',
    //   component:SafeComponent,
    //   canActivate:[AuthGuardService]
    // },
    {
      path:'countnode',
      component:CountNodeComponent,
      canActivate:[AuthGuardService]
    },

    {
      path:'allCustomer',
      component:AllCustomerComponent,
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
      path:'nodeAvailabilityReport',
      component:NodeAvailabilityReportForMonthComponent,
      canActivate:[AuthGuardService]
    },
    {
      path:'global',
      component:GlobalComponent,
      canActivate:[AuthGuardService]
    },
   
    {
      path:'safeCustomer',
      component:SafeCustomerComponent,
      canActivate:[AuthGuardService]
    },
    {
      path:'safeNodes',
      component:SafeNodesOfMonthComponent,
      canActivate:[AuthGuardService]
    },
    {
      path:'warningNodes',
      component:WarningNodesOfMonthComponent,
      canActivate:[AuthGuardService]
    },
    {
      path:'violatedNodes',
      component:ViolatedNodesOfMonthComponent,
      canActivate:[AuthGuardService]
    },
    {
      path:'nodeticket',
      component:NodeTicketComponent,
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
