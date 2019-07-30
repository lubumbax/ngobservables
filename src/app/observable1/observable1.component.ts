import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { noop, Subscription } from 'rxjs';

@Component({
  selector: 'observable1',
  template: `
  <b>Angular Component Using Observables! </b>
  <button (click)="launch()">Launch</button>
  <button (click)="alternate()">Alternate</button>
  <button (click)="stop()">Stop</button>

  <div>VALUES:   <span *ngFor="let value of values">{{ value }} </span></div>
  <div>ERRORs:   <span>{{ errors }}</span></div>
  <div>FINISHED: <span>{{ finished }}</span></div>
`
})
export class Observable1Component {
  private values: Array<number> = [];
  private errors: Error;
  private finished: boolean;

  private observable: Observable<number>;

  private subscription: Subscription;

  constructor() {
    this.observable = new Observable(observer => {
      let timeouts = [];
      timeouts.push(setTimeout( () => {observer.next(42);},   1000 ));  // 
      timeouts.push(setTimeout( () => {observer.next(43);},   2000 ));
      timeouts.push(setTimeout( () => {Math.round(Math.random())?observer.error(new Error("Can't take this BS")):noop}, 1500 ));
      timeouts.push(setTimeout( () => {observer.complete();}, 3000 ));

      return () => { 
        for (let timeout of timeouts) {
          console.log("Removing timeout: " + timeout);
          clearTimeout(timeout);
        }
      }
    });
  }

  launch() {
    this.values = []
    this.errors = null
    this.finished = false

    //let subscription = this.observable.subscribe(
    this.subscription = this.observable.subscribe(
        val => this.values.push(val),
        err => this.errors = err,
        ()  => this.finished = true
    );
  }

  stop() {
    this.subscription.unsubscribe();
  }

  alternate() {
    this.values = []
    this.errors = null
    this.finished = false

    let promise = this.observable
      .forEach(v => this.values.push(v))
      .then(() => this.finished = true);
  }
}