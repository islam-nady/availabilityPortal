import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule} from '@angular/flex-layout';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { EmployeeComponent } from 'src/app/modules/employee/employee.component';
import { DefaultComponent } from './default.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { SidenavListComponent } from 'src/app/navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from 'src/app/navigation/header/header.component';
import { EmpformComponent } from 'src/app/modules/empform/empform.component';
import {  PanelComponent} from 'src/app/modules/panel/panel.component';
import {StepperComponent} from 'src/app/modules/stepper/stepper.component';
import {FormsModule, ReactiveFormsModule, RequiredValidator} from '@angular/forms';
import { EmpService } from 'src/app/shared/services/emp.service';
import { MatConfirmDialogComponent} from 'src/app/shared/components/mat-confirm-dialog/mat-confirm-dialog.component';
import { RequestComponent } from 'src/app/modules/requests/component/request/request.component';
import { RequestService } from 'src/app/modules/requests/service/request.service';
import { HttpClientModule } from '@angular/common/http';
import { SafeComponent } from 'src/app/modules/requests/component/safe/safe.component';
import { SafeService } from 'src/app/modules/requests/service/safe.service';
import { BrowserModule,Title } from '@angular/platform-browser';
import { WarningService } from 'src/app/modules/requests/service/warning.service';
import { WarningComponent } from 'src/app/modules/requests/component/warning/warning.component';
import { VaiolateService } from 'src/app/modules/requests/service/vaiolate.service';
import { VaiolataComponent } from 'src/app/modules/requests/component/vaiolata/vaiolata.component';
import { SafecustomerService } from 'src/app/modules/requests/service/safecustomer.service';
import { SafeCustomerComponent } from 'src/app/modules/requests/component/safe-customer/safe-customer.component';
import { AccountService } from 'src/app/modules/requests/service/account.service';
//import { AccountComponent } from 'src/app/modules/requests/component/account/account.component';
import { ChartsModule } from 'ng2-charts';  
import { CountNodeComponent } from 'src/app/modules/requests/component/count-node/count-node.component';
import { CountNodeService } from 'src/app/modules/requests/service/count-node.service';
import { CustomerinfoPerYearService } from 'src/app/modules/requests/service/customerinfo-per-year.service';
import { CustomerInfoPerYearComponent } from 'src/app/modules/requests/component/customer-info-per-year/customer-info-per-year.component';
import { CustomerInfoPerMonthComponent } from 'src/app/modules/requests/component/customer-info-per-month/customer-info-per-month.component';
import { SammuryService } from 'src/app/modules/requests/service/sammury.service';
import { NodeTicketsService } from 'src/app/modules/requests/service/node-tickets.service';
import { NodeTicketComponent } from 'src/app/modules/requests/component/node-ticket/node-ticket.component';
import { AllCustomerComponent } from 'src/app/modules/requests/component/all-customer/all-customer.component';
import { CallSupportCenterService } from 'src/app/modules/requests/service/call-support-center.service';
@NgModule({
  declarations: [
    DefaultComponent,
    HeaderComponent,
    SidenavListComponent,
    DashboardComponent,
    EmployeeComponent,
    StepperComponent,
    EmpformComponent,
    PanelComponent,
    RequestComponent,
    SafeComponent,
    WarningComponent,
    VaiolataComponent,
   SafeCustomerComponent,
  CountNodeComponent,
  CustomerInfoPerYearComponent,
  CustomerInfoPerMonthComponent,
  NodeTicketComponent,
  AllCustomerComponent,


    
   
   
   
    

  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
 
  ],
  providers:[
    EmpService,RequestService,SafeService,WarningService,VaiolateService
   ,SafecustomerService,Title,CountNodeService,SammuryService,NodeTicketsService,CustomerinfoPerYearService,CallSupportCenterService],
  entryComponents:[MatConfirmDialogComponent]


})
export class DefaultModule { }
