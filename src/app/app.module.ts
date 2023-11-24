import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrumMachineComponent } from './drum-machine/drum-machine.component';
import { KeyBtnComponent } from './components/key-btn/key-btn.component';
import { PowerBtnComponent } from './components/power-btn/power-btn.component';
import { VolSliderComponent } from './components/vol-slider/vol-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    DrumMachineComponent,
    KeyBtnComponent,
    PowerBtnComponent,
    VolSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
