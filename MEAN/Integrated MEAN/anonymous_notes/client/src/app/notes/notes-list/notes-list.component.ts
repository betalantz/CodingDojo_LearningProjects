import { Component, OnInit } from '@angular/core';
import { Note } from './../note'
import { NoteService } from './../note.service'

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes: Array<Note>

  constructor(private note_service: NoteService) { }

  ngOnInit() {
    this.note_service.get_all()
      .then(notes => this.notes = notes)
      .catch(err => console.log('get all notes err', err))
  }

}
