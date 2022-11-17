import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap, catchError, of } from 'rxjs';

export interface Task {
  title: string;
  id?: string;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  static databaseUri = '';
  constructor(private http: HttpClient) {}

  create(task: Task): Observable<Task> {
    return this.http.post<any>(`${TasksService.databaseUri}`, task);
  }
}
