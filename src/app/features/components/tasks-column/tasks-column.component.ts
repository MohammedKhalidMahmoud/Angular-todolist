import { Component, Input, OnInit } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tasks-column',
    standalone: true,
    templateUrl: 'tasks-column.component.html',
    styleUrls: ['tasks-column.component.css'],
    imports: [CommonModule ,TaskCardComponent]
})

export class TasksColumnComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    @Input() title='';
    @Input() backgroundColor='';
    @Input() textColor='';
    @Input() svgPath='';
}