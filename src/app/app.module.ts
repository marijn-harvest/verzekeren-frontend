import {AppRoutingModule} from  './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AutoVerzekeringSaveComponent } from './auto-verzekering/auto-verzekering-save.component';
import { LoginComponent } from './login/login.component';
import { AuthorizationInterceptor } from './authorization.interceptor';
import { AuthGuardService } from './auth-guard.service';
import { RegisterComponent } from './user/register.component';
import { UserEditComponent } from './user/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoVerzekeringSaveComponent,
    LoginComponent,
    RegisterComponent,
    UserEditComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true },
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
