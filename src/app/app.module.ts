import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Compo1Component } from './component/compo1/compo1.component';
import { Pipe1Pipe } from './pipe/pipe1.pipe';
import { LoginpageComponent } from './component/loginpage/loginpage.component';
import { FbloginpageComponent } from './component/fb1/fbloginpage.component';
import { InterpolationComponent } from './component/interpolation/interpolation.component';


@NgModule({
  declarations: [
    AppComponent,
    Compo1Component,
    Pipe1Pipe,
    LoginpageComponent,
    FbloginpageComponent,
    InterpolationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
