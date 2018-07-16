import {AppRoutingModule} from  './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AutoVerzekeringCreateComponent } from './auto-verzekering-create/auto-verzekering-create.component';
import { LoginComponent } from './login/login.component';
import { AuthorizationInterceptor } from './authorization.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AutoVerzekeringCreateComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
