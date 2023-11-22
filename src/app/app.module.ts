import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrumMachineComponent } from './drum-machine/drum-machine.component';
import { KeyBtnComponent } from './components/key-btn/key-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    DrumMachineComponent,
    KeyBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
