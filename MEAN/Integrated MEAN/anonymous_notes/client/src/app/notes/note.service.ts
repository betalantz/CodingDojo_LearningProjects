import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import "rxjs"
import "rxjs/Rx"
import "rxjs/add/operator/map"

import { Note } from './note'

@Injectable()
export class NoteService {

  constructor(private http: Http) { }

  create(new_note: Note) {
    return this.http.post("/add", new_note).map(data => data.json()).toPromise()
  }
  get_all() {
    return this.http.get('/get_all').map(data => data.json()).toPromise()
  }
}
