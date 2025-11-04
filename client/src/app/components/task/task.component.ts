import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task.interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  standalone: false,
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    console.log(this.task);
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe(() => {
      console.log('Task gelöscht!');
    });
  }
}
