import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/authguard';
import {BusesComponent} from './buses/buses.component';

import {HomeComponent} from "./home/home.component"
import { ChangeRouteComponent } from './change-route/change-route.component';
const appRoutes: Routes = [
 // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
//  { path: 'buses', component: BusesComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo:"home" ,pathMatch:"full"},
  { path: "home" , component:HomeComponent },
  { path: 'buses', component: BusesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'change_route', component: ChangeRouteComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




