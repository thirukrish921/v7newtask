import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { RegisterComponent } from './pages/authentication/register/register.component';

import { LoginComponent } from './pages/authentication/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminhomeComponent } from './pages/adminhome/adminhome.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { AddusersComponent } from './pages/admin/users/addusers/addusers.component';
import { AddedusersComponent } from './pages/admin/users/addedusers/addedusers.component';
import { EdituserComponent } from './pages/admin/users/edituser/edituser.component';
import { AdminsComponent } from './pages/admin/admins/admins.component';
import { AddadminComponent } from './pages/admin/admins/addadmin/addadmin.component';
import { AddedadminComponent } from './pages/admin/admins/addedadmin/addedadmin.component';
import { PaymentComponent } from './pages/adminhome/payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    AdminhomeComponent,
    UsersComponent,
    AddusersComponent,
    AddedusersComponent,
    EdituserComponent,
    AdminsComponent,
    AddadminComponent,
    AddedadminComponent,
    PaymentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
