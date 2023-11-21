import { Component } from '@angular/core';
import { Keys, keys } from '../keys';

@Component({
  selector: 'app-drum-machine',
  templateUrl: './drum-machine.component.html',
  styleUrls: ['./drum-machine.component.css']
})
export class DrumMachineComponent {
  keys: Keys = keys;
}
