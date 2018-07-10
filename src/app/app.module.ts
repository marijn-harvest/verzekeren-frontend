import {AppRoutingModule} from  './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';

import { AppComponent } from './app.component';
import { AutoVerzekeringCreateComponent } from './auto-verzekering-create/auto-verzekering-create.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoVerzekeringCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
