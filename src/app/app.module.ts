import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BigAutoComponent } from './big-auto/big-auto.component';
import { BigPlaneComponent } from './big-plane/big-plane.component';
import { BigShipComponent } from './big-ship/big-ship.component';

@NgModule({
  declarations: [
    AppComponent,
    BigAutoComponent,
    BigPlaneComponent,
    BigShipComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
