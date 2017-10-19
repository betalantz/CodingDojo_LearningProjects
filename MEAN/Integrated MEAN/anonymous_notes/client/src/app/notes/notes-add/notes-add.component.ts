import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"


import { Note } from './../note'
import { NoteService } from './../note.service'

@Component({
  selector: 'app-notes-add',
  templateUrl: './notes-add.component.html',
  styleUrls: ['./notes-add.component.css']
})
export class NotesAddComponent implements OnInit {
  new_note: Note

  constructor(private note_service: NoteService, private router: Router) { }

  ngOnInit() {
    this.new_note = new Note

  }
  create_note(formController) {
    this.note_service.create(this.new_note)
      .then(() => console.log('created'))
      .catch(err => console.log('note create error', err))
    formController.form.reset()
  }
}
