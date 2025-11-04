import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/cat.interface';
import { Task } from 'src/app/interfaces/task.interface';
import { TaskService } from 'src/app/services/task.service';
import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css'],
  standalone: false,
  animations: [
    trigger('blurFade', [
      transition(':enter', [
        style({
          opacity: 0,
          filter: 'blur(8px)',
          transform: 'translateY(-10px)',
        }),
        animate(
          '350ms ease-out',
          style({
            opacity: 1,
            filter: 'blur(0px)',
            transform: 'translateY(0)',
          })
        ),
      ]),
      transition(':leave', [
        animate(
          '250ms ease-in',
          style({
            opacity: 0,
            filter: 'blur(6px)',
            transform: 'translateY(-10px)',
          })
        ),
      ]),
    ]),
  ],
})
export class CatComponent implements OnInit {
  @Input() category!: Category;
  @Input() tasks!: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  onAddTask() {
    const lastTaskId = this.tasks[this.tasks.length - 1].id;
    const newTask: Task = {
      id: lastTaskId + 1,
      title: '',
      startDate: '',
      dueDate: '',
      creator: '',
      description: '',
      category: this.category.name,
    };

    this.tasks.push(newTask);
    console.log(this.tasks);
  }
}
