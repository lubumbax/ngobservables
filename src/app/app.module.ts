import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Observable1Component } from './observable1/observable1.component';
import { HttpObservableComponent } from './http-observable/http-observable.component';
import { FormObservableComponent } from './form-observable/form-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    Observable1Component,
    HttpObservableComponent,
    FormObservableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
