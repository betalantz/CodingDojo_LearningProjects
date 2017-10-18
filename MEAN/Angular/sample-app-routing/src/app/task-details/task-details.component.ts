import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { TaskService } from './../task.service';
import { Task } from './../task';
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  task: Task;

  constructor(
    private _taskService: TaskService,
    private _route: ActivatedRoute,
    private _location: Location) { }

  ngOnInit() {
    this._route.paramMap
      .switchMap(params =>
        this._taskService.retrieveTask(params.get('id'))
      )
      .subscribe(task => this.task = task,
      console.log);
  }

  goBack(): void {
    this._location.back();
  }

}