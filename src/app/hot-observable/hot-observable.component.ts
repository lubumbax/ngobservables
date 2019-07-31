import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { ConnectableObservable } from 'rxjs';
//import { noop, Subscription } from 'rxjs';

@Component({
  selector: 'hot-observable',
  template: `
  Angular component using cold and hot observables: 
  <button (click)="cold()">Cold</button>
  <button (click)="hot()">Hot</button>
  <table width="100%">
  <tr><th width="50%">Cold</th><th width="50%">Hot</th></tr>
  <tr>
    <td>
      <div>Subscription A: <span *ngFor="let a of dataColdA">{{ a }} </span></div>
      <div>Subscription B: <span *ngFor="let b of dataColdB">{{ b }} </span></div>
    </td>
    <td>
      <div>Subscription A: <span *ngFor="let a of dataHotA">{{ a }} </span></div>
      <div>Subscription B: <span *ngFor="let b of dataHotB">{{ b }} </span></div>
    </td>
  </tr>
  </table>
  `
})
export class HotObservableComponent {
  private dataColdA: Array<number> = [];
  private dataColdB: Array<number> = [];
  private obsvCold: Observable<number>;

  private dataHotA: Array<number> = [];
  private dataHotB: Array<number> = [];
  private obsvHot: ConnectableObservable<number>;

  constructor() { 
    this.obsvCold = new Observable<number>(observer => {
      setTimeout(() => {observer.next(1)}, 1000);
      setTimeout(() => {observer.next(2)}, 2000);
      setTimeout(() => {observer.next(3)}, 3000);
      setTimeout(() => {observer.next(4)}, 4000);
    });
    this.obsvHot = new Observable<number>(observer => {
      setTimeout(() => {observer.next(1)}, 1000);
      setTimeout(() => {observer.next(2)}, 2000);
      setTimeout(() => {observer.next(3)}, 3000);
      setTimeout(() => {observer.next(4)}, 4000);
    }).publish();
  }

  cold() {
    this.dataColdA = []; this.dataColdB = [];
    setTimeout(() => {this.obsvCold.subscribe(a => this.dataColdA.push(a))}, 0);
    setTimeout(() => {this.obsvCold.subscribe(b => this.dataColdB.push(b))}, 2500); 
  }
  hot() {
    this.dataHotA = []; this.dataHotB = [];
    setTimeout(() => {this.obsvHot.subscribe(a => this.dataHotA.push(a))}, 0);
    setTimeout(() => {this.obsvHot.subscribe(b => this.dataHotB.push(b))}, 2500); 
    this.obsvHot.connect();
  }
}
