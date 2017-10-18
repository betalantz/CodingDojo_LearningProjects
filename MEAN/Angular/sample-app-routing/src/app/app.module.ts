import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskDetailsComponent } from './task-details/task-details.component'
import { TaskService } from './task.service'
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskNewComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
