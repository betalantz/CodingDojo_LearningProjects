import { Component } from '@angular/core';
import { Http } from '@angular/http'
import "rxjs"
import "rxjs/add/operator/map"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor (private _http: Http) {
    let bikeObj = {
      name: "Trek",
      desc: "Ride hard, go far.",
      price: 150,
      city: "Here, US",
      img: "http://fake.net",
    }
    let bikeProm = this._http.post('/bikes', bikeObj).map(data => data.json()).toPromise()
    bikeProm.then(message => {
      console.log("Bike created", message);
    })
    bikeProm.catch(err => {
      console.log("Bike creation failed", err);
    })
  }
  title = 'app';
}
