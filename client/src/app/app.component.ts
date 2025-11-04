import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { CatService } from './services/cat.service';
import { Task } from './interfaces/task.interface';
import { Category } from './interfaces/cat.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];
  cats: Category[] = [];

  constructor(
    private taskService: TaskService,
    private catService: CatService
  ) {}

  ngOnInit() {
    this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });

    this.catService.categories$.subscribe((cats) => {
      this.cats = cats;
    });
  }

  onAddCat() {
    const lastCatId = this.cats[this.cats.length - 1].id;
    const newCat: Category = {
      id: lastCatId + 1,
      name: '',
    };

    this.cats.push(newCat);
    console.log(this.cats);
  }
}
