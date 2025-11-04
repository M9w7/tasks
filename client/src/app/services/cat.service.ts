import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Category } from '../interfaces/cat.interface';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private baseUrl = 'http://localhost:3000/api';

  private categoriesSubject = new BehaviorSubject<Category[]>([]);
  categories$ = this.categoriesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getCategories();
  }

  getCategories(): void {
    this.http
      .get<Category[]>(`${this.baseUrl}/categories`)
      .subscribe((categories) => this.categoriesSubject.next(categories));
  }

  addCategory(category: Category): Observable<Category> {
    return this.http
      .post<Category>(`${this.baseUrl}/categories`, category)
      .pipe(tap(() => this.getCategories()));
  }

  changeCategory(category: Category): Observable<Category> {
    return this.http
      .put<Category>(`${this.baseUrl}/categories/${category.id}`, category)
      .pipe(tap(() => this.getCategories()));
  }

  deleteCategory(id: number): Observable<void> {
    console.log(id);
    return this.http
      .delete<void>(`${this.baseUrl}/categories/${id}`)
      .pipe(tap(() => this.getCategories()));
  }
}
