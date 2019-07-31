import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {HttpClient} from '@angular/common/http';

export interface IUser {
  id: number,
  name: string;
  username: string;
  email: string;
  address: any;
  phone: string;
  website: string;
  company: any;
}

@Component({
  selector: 'async-pipes',
  template: `
  Aynchronous Pipes handling Observables: 
  <button (click)="connect()">Connect</button>
  <button (click)="debug()">Debug</button>
  <ul *ngIf="(users$ | async)">
    <li *ngFor="let user of users$ | async">
      {{ user.id }} - {{ user.name }}
    </li>
  </ul>
  `
})
export class AsyncPipesComponent {
  public users$: Observable <IUser[]>;
  constructor(private http: HttpClient) { }
  connect() {
    this.users$ = this.http.get('http://jsonplaceholder.typicode.com/users/').map(json => json as IUser[]);
  }
  debug() {
    const u$ = this.http
      .get('http://jsonplaceholder.typicode.com/users/')
      .map(json => json as IUser[])
      .do(user => setTimeout(u => {console.log("- Timeout " + u.id); return u}, this.delay(5000)));
    u$.subscribe((data:IUser[]) => {console.log("* Receiving " + data.length + " users.")});
  }
  
  private delay(ms:number) {
    return Math.random() * ms;
  }
}
