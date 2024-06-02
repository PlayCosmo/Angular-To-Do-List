import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';


@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {


constructor(private tasksService:TasksService){}

  @Input({required:true})  name?: string;
  @Input({required:true}) userId!:string
  isAddingTask = false

  
  get selectedUserTask(){
    return this.tasksService.getUserTasks(this.userId)
  }




  changeMakeOn(){
    this.isAddingTask = !this.isAddingTask;
  }
  onCloseAddTask(){
    this.isAddingTask = false
  }

  }


