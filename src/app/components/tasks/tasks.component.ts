import { Component, OnInit} from '@angular/core';
import { TodoApplication } from 'src/app/api-data/TodoApplication';
import { TASKS } from 'src/app/api-data/mock-task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:TodoApplication[] = new Array();

  constructor(private taskService: TaskService){}

  ngOnInit():void{
    this.taskService.getAll().subscribe(
      (response) =>{
        this.tasks = response;
    });
  }
}
