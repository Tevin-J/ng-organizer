import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Task {
  title: string;
  id?: string;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  static backendUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  create(task: Task): Observable<Task> {
    return this.http.post<any>(`${TasksService.backendUrl}/create`, task);
  }
}
