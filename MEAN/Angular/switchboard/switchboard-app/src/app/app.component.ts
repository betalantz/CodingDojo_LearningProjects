import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Switchboard';
  switches: Array<boolean> = []
  idx: number

  ngOnInit(){
    for(let x = 0; x < 10; x++){
      this.switches.push(false)
    }
  }
  toggle(idx){
    this.switches[idx] = !this.switches[idx]
  }
}
