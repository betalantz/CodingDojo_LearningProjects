import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-one',
  templateUrl: './super-saiyan-one.component.html',
  styleUrls: ['./super-saiyan-one.component.css']
})
export class SuperSaiyanOneComponent implements OnInit {
  @Input() pLevel
  constructor() { }

  ngOnInit() {
  }

}
