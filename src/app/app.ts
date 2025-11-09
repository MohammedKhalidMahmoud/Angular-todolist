import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksPageComponent } from './features/pages/tasks-page/tasks-page.component';
// import { RouterOutlet } from "../../node_modules/@angular/router/router_module.d";
@Component({
  selector: 'app-root',
  imports: [TasksPageComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todolist');
}
