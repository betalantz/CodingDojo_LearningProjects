import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {
 
  tasks = ['drink coffee or tea', 'build a web app'];
 
  constructor() { }
 
  retrieveTasks(){
    return this.tasks;
  }
 
  createTask(task){
    this.tasks.push(task);
  }
 
}
