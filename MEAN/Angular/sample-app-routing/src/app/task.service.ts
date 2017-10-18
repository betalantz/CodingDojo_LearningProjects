import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import { Task } from './task';
import { TASKS } from './mock-tasks';

@Injectable()
export class TaskService {

  tasks: Task[] = TASKS;

  constructor(private _http: Http) { }

  retrieveTasks(): Observable<Task[]> {
    return new Observable(subscriber => subscriber.next(this.tasks));
  }

  retrieveTask(id: string): Observable<Task> {
    return new Observable(subscriber => {
      const foundTask = this.tasks.find(task => task._id === parseInt(id, 10));
      if (foundTask) {
        return subscriber.next(foundTask);
      }
      subscriber.error(new Error(`Unable to find task with id ${ id }`));
    });
  }
 
  createTask(task){
    this.tasks.push(task);
  }
 
}
