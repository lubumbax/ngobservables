import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'zippy',
  template: `
  Emit event: 
  <button (click)="toggle()">Toggle</button>
  <div [hidden]="!visible">
    <ng-content></ng-content>
  </div>
  `
})
export class ZippyComponent {
  visible = true;
  @Output() open = new EventEmitter<Date>();
  @Output() close = new EventEmitter<Date>();

  toggle() {
    this.visible = !this.visible;
    this.visible? this.open.emit(new Date()) : this.close.emit(new Date())
  }
}
