import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxComponent } from './ngx/ngx.component';

const routes: Routes = [
   {
      path: '', component: NgxComponent
   },
   {
      path: 'dash', component: DashboardComponent
   },
   {
      path: 'login', component: LoginComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
