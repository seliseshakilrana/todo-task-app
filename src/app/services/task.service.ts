import { Injectable } from '@angular/core';
import { TodoApplication } from '../api-data/TodoApplication';
import { TASKS } from '../api-data/mock-task';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends GenericService<TodoApplication> {
 
  constructor(private https: HttpClient) { 
    super(https, "https://localhost:7210/api/TodoApplication");
  }
}
