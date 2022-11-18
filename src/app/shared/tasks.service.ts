import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { map, Observable, tap } from 'rxjs';

export interface Task {
  title: string;
  id?: string;
  date: string;
}

interface CreateResponse {
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  static backendUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  get(date: moment.Moment): Observable<Task[]> {
    return this.http
      .get<any>(`${TasksService.backendUrl}/tasks/${date.format('DD-MM-YYYY')}`)
      .pipe(
        map((tasks) => {
          if (!tasks) {
            return [];
          }
          return tasks;
        })
      );
  }

  create(task: Task): Observable<Task> {
    return this.http
      .post<CreateResponse>(
        `${TasksService.backendUrl}/tasks/${task.date}`,
        task
      )
      .pipe(
        map((res) => {
          return { ...task, id: res.id };
        })
      );
  }

  remove(task: Task): Observable<void> {
    return this.http.delete<void>(
      `${TasksService.backendUrl}/tasks/${task.date}/${task.id}`
    );
  }
}
