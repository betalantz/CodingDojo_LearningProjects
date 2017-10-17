import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class TaskService {
 
  tasks = [];
 
  constructor(private _http: Http) { }
 
  retrieveTasks(callback){
    this._http.get('https://59e54039f99ad90012268266.mockapi.io/tasks').subscribe( 
      (response) => { 
        this.tasks = response.json();
        callback(this.tasks);
      }, // <— first method
      (error) => { console.log("error in http.get", error); } // <— second method
    );
  }
 
  createTask(task){
    this.tasks.push(task);
  }
 
}
