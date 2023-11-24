import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vol-slider',
  templateUrl: './vol-slider.component.html',
  styleUrls: ['./vol-slider.component.css']
})
export class VolSliderComponent {
  @Input() volume!: number;
  @Output() volumeNotify = new EventEmitter();

  notifyVolumeChange() {
    this.volumeNotify.emit(this.volume);
  }
}
