import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import {BusesComponent} from './components/buses/buses.component';
import {HomeComponent} from "./components/home/home.component"
import { ChangeRouteComponent } from './components/change-route/change-route.component';
import { MobileAppComponent } from './components/mobile-app/mobile-app.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
const appRoutes: Routes = [
   { path: '', redirectTo:"home" ,pathMatch:"full"},
  { path: "home" , component:HomeComponent,canActivate:[AuthGuard]},
  { path: 'buses', component: BusesComponent,canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'change_route', component: ChangeRouteComponent,canActivate:[AuthGuard]},
  { path: 'feedback', component: FeedbackComponent,canActivate:[AuthGuard]},
  { path: 'download' , component:MobileAppComponent},
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




