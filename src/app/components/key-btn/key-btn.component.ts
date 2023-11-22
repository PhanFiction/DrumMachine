import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-key-btn',
  templateUrl: './key-btn.component.html',
})
export class KeyBtnComponent {
  @Input() keys: Array<String> = [];
  @Input() startSlice: number = 0;
  @Input() endSlice: number = 0;
  @Output() keyNotify = new EventEmitter();
}
