import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  currTime: number = Date.now()
  mstTime = this.currTime + 3.6e+6
  cstTime = this.currTime + 7.2e+6
  estTime = this.currTime + 1.08e+7
  switch: string
  time

  clickPST() {
    this.switch = 'PST'
    this.time = this.currTime
  }
  clickMST() {
    this.switch = 'MST'    
    this.time = this.mstTime
  }
  clickCST() {
    this.switch = 'CST'
    this.time = this.cstTime
  }
  clickEST() {
    this.switch = 'EST'
    this.time = this.estTime
  }
  clickClear() {
    this.switch = ''
    this.time = null
  }
}
