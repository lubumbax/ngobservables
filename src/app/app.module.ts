import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Observable1Component } from './observable1/observable1.component';
import { HttpObservableComponent } from './http-observable/http-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    Observable1Component,
    HttpObservableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
