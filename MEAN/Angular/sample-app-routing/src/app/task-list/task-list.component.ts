import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
import { Task } from './../task';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private _taskService: TaskService) { }
  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this._taskService.retrieveTasks()
      .subscribe(tasks => this.tasks = tasks,
        console.error
      );
  }

}