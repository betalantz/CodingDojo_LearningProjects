import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  power = { level: 0}
  currPower: number

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    this.currPower = this.power.level
    console.log(this.currPower);
    this.power = { level: 0}
  }

}
