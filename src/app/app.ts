import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksPageComponent } from './features/pages/tasks-page/tasks-page.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TasksPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todolist');
}
