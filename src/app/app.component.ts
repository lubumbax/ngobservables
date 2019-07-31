import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '\"Angular Observables\"';

  onOpen(event: any) { console.log("Opening: " + event)}
  onClose(event: any) { console.log("Closing: " + event)}
}
