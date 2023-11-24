import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-power-btn',
  templateUrl: './power-btn.component.html',
  styleUrls: ['./power-btn.component.css']
})
export class PowerBtnComponent {
  @Input() toggle!: boolean;
  @Output() toggleNotify = new EventEmitter();

  handlePowerToggle() {
    this.toggleNotify.emit(!this.toggle);
  }
}
