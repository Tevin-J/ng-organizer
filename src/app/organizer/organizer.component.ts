import { Task, TasksService } from './../shared/tasks.service';
import { DateService } from './../shared/date.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss'],
})
export class OrganizerComponent implements OnInit {
  form!: FormGroup;
  constructor(
    public dateService: DateService,
    private tasksService: TasksService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
    });
  }

  submit() {
    const { title } = this.form.value;
    const task: Task = {
      title,
      date: this.dateService.date$.value.format('DD-MM-YYYY'),
    };
    this.tasksService.create(task).pipe(
      tap(() => {
        this.form.reset;
      }),
      catchError((error) => of(`submit error: ${error}`))
    );
  }
}
