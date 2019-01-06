import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BusesComponent } from './buses/buses.component';
import { AuthenticationService,UserService} from './services'
import { User } from './models';
import { ChangeRouteComponent } from './change-route/change-route.component';
import {MatChipsModule} from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthGuard } from './guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BusesComponent,
    ChangeRouteComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    BrowserAnimationsModule
  ],
  providers: [AuthenticationService,UserService,AuthGuard],
  bootstrap: [AppComponent],
  exports:[MatChipsModule]
})
export class AppModule { }
