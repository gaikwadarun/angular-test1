import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Compo1Component } from './component/compo1/compo1.component';
import { Pipe1Pipe } from './pipe/pipe1.pipe';


@NgModule({
  declarations: [
    AppComponent,
    Compo1Component,
    Pipe1Pipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
