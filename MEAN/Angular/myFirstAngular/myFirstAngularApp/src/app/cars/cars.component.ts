import { Component, OnInit } from '@angular/core';

import { Car } from "./car"

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  first_name: string
  cars: Array<Car>
  new_car: Car

  constructor() { }

  ngOnInit() {
    this.first_name = "Beelzebub"
    this.cars = [
      {
      make: "Ford",
      model: "Fiesta",
      year: 2005
      },
      {
        make: "Dodge",
        model: "Dart",
        year: 1968
      }
    ]
    this.new_car = new Car
  }
  create_car(new_car: Car) {
    console.log('something happened');
    this.cars.push(new_car)
    // this.new_car = new Car
  }
}
