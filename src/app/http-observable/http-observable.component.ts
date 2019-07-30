import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';

@Component({
  selector: 'http-observable',
  template: `
  Angular HTTP requests using RxJs Observables!
  <button (click)="launch()">Launch</button>
  <ul>
  <li *ngFor="let doctor of doctors">{{doctor.name}}</li>
  </ul>
  `
})
export class HttpObservableComponent {
  private doctors = [];
  constructor(private http: HttpClient) {}
  launch() {
    this.http
      .get('http://jsonplaceholder.typicode.com/users/')
      .subscribe((data:[]) => { this.doctors = data; },);
  }
}
