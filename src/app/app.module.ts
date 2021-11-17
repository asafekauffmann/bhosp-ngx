import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxComponent } from './ngx/ngx.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgForm } from '@angular/forms';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';


/* 
import { ThemeDirective } from './theme/theme.directive';
import { ThemeModule } from './theme/theme.module';
import { lightTheme } from './theme/light-theme';
import { darkTheme } from './theme/dark-theme'; 
*/


@NgModule({
  declarations: [
    AppComponent,
    NgxComponent
    /* ThemeDirective */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgForm,
    TimepickerModule.forRoot()
    /* ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'light'
    }) */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
