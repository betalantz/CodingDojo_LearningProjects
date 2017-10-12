import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { CarsDetailComponent } from './cars/cars-detail/cars-detail.component';
import { CarsCreateComponent } from './cars/cars-create/cars-create.component'

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarsDetailComponent,
    CarsCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
