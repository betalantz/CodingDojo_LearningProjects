import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesAddComponent } from './notes/notes-add/notes-add.component'

const routes: Routes = [
  { path: 'add', component: NotesAddComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/add'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
