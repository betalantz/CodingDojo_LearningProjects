import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesAddComponent } from './notes/notes-add/notes-add.component'
import { NotesListComponent } from './notes/notes-list/notes-list.component'

const routes: Routes = [
  { path: 'add', component: NotesAddComponent },
  { path: 'show', component: NotesListComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/add'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
