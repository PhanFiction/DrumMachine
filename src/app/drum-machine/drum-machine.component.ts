import { Component, HostListener } from '@angular/core';
import { Keys, keys } from '../keys';

@Component({
  selector: 'app-drum-machine',
  templateUrl: './drum-machine.component.html',
  styleUrls: ['./drum-machine.component.css']
})
export class DrumMachineComponent {
  keys: Keys[] = keys;
  toggle = true;
  message: string = 'Press a Button';
  volume: number = 50;

  handleVolume(vol: number) {
    this.volume = vol;
  }

  handlePowerToggle(toggle: boolean) {
    this.toggle = toggle;
  }

  handlePlayDrum() {
    const audio = new Audio();
    audio.volume = this.volume / 100;
    audio.src = `../../../assets/sounds/${this.message}.wav`;
    audio.load();
    audio.play();
  }

  handleDrumAudio(vol: number) {
    console.log(vol);
    //this.audio.volume = this.volume;
  }

  handleMessage(msg: string) {
    this.message = msg;
    this.handlePlayDrum();
  }

  handleKeyClick(event: { keyNote: string, keyName: string }) {
    this.handleMessage(event.keyName);
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    const foundKey = keys.find(item => item.keyName == event.key.toLocaleUpperCase());
    this.handleMessage(foundKey!.value);
  }
}
