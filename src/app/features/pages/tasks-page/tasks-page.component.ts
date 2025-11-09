import { Component, OnInit } from '@angular/core';
import { SideNavbarComponent } from '../../components/side-navbar/side-navbar.component';
import { SearchbarComponent } from '../../components/search-bar/search-bar.component';
import { TasksComponent } from '../../components/tasks/tasks.component';

@Component({
    selector: 'app-tasks-page',
    standalone: true,
    templateUrl: 'tasks-page.component.html',
    styleUrls: ['tasks-page.component.css'],
    imports: [SideNavbarComponent, SearchbarComponent, TasksComponent ]
})

export class TasksPageComponent implements OnInit {
    constructor() {
        console.log("Hello World");
     }

    ngOnInit() { }
}