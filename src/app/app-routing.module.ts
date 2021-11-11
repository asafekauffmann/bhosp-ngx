import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxComponent } from './ngx/ngx.component';

const routes: Routes = [
   {
      path: '', component: NgxComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
