import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks = []

  constructor(private _taskService: TaskService) { 
    // this.tasks = this._taskService.retrieveTasks()
    this.tasks = this._taskService.tasks
  }

  ngOnInit() {
  }

}
