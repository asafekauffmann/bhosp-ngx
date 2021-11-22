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
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { MainRouterComponent } from './components/main-router/main-router.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoComponent } from './components/logo/logo.component';
import { LoginComponent } from './login/login.component';
import { ToggleSwitchComponent } from './login/toggle-switch/toggle-switch.component';
import { AberturaComponent } from './abertura/abertura.component';
import { MenuAberturaComponent } from './abertura/menu-abertura/menu-abertura.component';

/* 
import { ThemeDirective } from './theme/theme.directive';
import { ThemeModule } from './theme/theme.module';
import { lightTheme } from './theme/light-theme';
import { darkTheme } from './theme/dark-theme'; 
*/


@NgModule({
  declarations: [
    AppComponent,
    NgxComponent,
    HeaderComponent,
    NavComponent,
    MainRouterComponent,
    DashboardComponent,
    LogoComponent,
    LoginComponent,
    ToggleSwitchComponent,
    AberturaComponent,
    MenuAberturaComponent
    /* ThemeDirective */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    /* NgForm, */
    TimepickerModule.forRoot(),
    FontAwesomeModule
    /* ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'light'
    }) */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
