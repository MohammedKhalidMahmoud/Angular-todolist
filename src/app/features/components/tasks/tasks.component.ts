import { Component, OnInit } from '@angular/core';
import { TasksColumnComponent } from '../tasks-column/tasks-column.component';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: 'tasks.component.html',
    styleUrls: ['tasks.component.css'],
    imports: [TasksColumnComponent]
})

export class TasksComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}