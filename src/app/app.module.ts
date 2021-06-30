import { BrowserModule,Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule} from './material/material/material.module';
import {DefaultModule } from './layout/default/default.module';
import {AccountComponent} from './modules/requests/component/account/account.component';
import {AccountService} from './modules/requests/service/account.service';
import {FormsModule, ReactiveFormsModule, RequiredValidator} from '@angular/forms';
import { DefaultComponent } from './layout/default/default.component';
import { AuthInterceptor } from './interseptors/AuthInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,

  
   
    
    
   
    
    
    

 
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    NgbModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    
   
  
  ],
 
  providers: [
    Title,AccountService,{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
