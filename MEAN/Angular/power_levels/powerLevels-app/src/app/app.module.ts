import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PowerComponent } from './power/power.component';
import { HumanComponent } from './power/human/human.component';
import { SaiyanComponent } from './power/saiyan/saiyan.component';
import { SuperSaiyanOneComponent } from './power/super-saiyan-one/super-saiyan-one.component';
import { SuperSaiyanTwoComponent } from './power/super-saiyan-two/super-saiyan-two.component';
import { SuperSaiyanThreeComponent } from './power/super-saiyan-three/super-saiyan-three.component';
import { SuperSaiyanFourComponent } from './power/super-saiyan-four/super-saiyan-four.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    HumanComponent,
    SaiyanComponent,
    SuperSaiyanOneComponent,
    SuperSaiyanTwoComponent,
    SuperSaiyanThreeComponent,
    SuperSaiyanFourComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
