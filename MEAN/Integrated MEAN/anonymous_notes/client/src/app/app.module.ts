import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NotesAddComponent } from './notes/notes-add/notes-add.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';

import { NoteService } from './notes/note.service'

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NotesAddComponent,
    NotesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
