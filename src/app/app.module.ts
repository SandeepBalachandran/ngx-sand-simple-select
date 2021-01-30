import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SandSimpleSelectModule } from 'sand-simple-select'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SandSimpleSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
