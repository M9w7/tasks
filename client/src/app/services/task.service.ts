import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Task } from '../interfaces/task.interface';
import { Category } from '../interfaces/cat.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private baseUrl = 'http://localhost:3000/api';

  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getTasks();
  }

  getTasks(): void {
    this.http
      .get<Task[]>(`${this.baseUrl}/tasks`)
      .subscribe((tasks) => this.tasksSubject.next(tasks));
  }

  addTask(task: Task): Observable<Task> {
    return this.http
      .post<Task>(`${this.baseUrl}/tasks`, task)
      .pipe(tap(() => this.getTasks()));
  }

  changeTask(task: Task): Observable<Task> {
    return this.http
      .put<Task>(`${this.baseUrl}/tasks/${task.id}`, task)
      .pipe(tap(() => this.getTasks()));
  }

  deleteTask(id: number): Observable<void> {
    console.log(id);
    return this.http
      .delete<void>(`${this.baseUrl}/tasks/${id}`)
      .pipe(tap(() => this.getTasks()));
  }
}
