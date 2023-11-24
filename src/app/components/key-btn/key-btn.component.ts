import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keys } from 'src/app/keys';

@Component({
  selector: 'app-key-btn',
  templateUrl: './key-btn.component.html',
})
export class KeyBtnComponent {
  @Input() keys: Keys[] = [];
  @Input() startSlice: number = 0;
  @Input() endSlice: number = 0;
  @Output() keyNotify = new EventEmitter<{keyNote: string, keyName: string}>();

  sendKeyName(keyNote: string, keyName: string) {
    this.keyNotify.emit({keyNote, keyName});
  }
}
