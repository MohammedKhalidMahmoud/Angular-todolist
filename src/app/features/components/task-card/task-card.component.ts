import { Component, OnInit, Input } from '@angular/core';
import ITodo from '../../../model/todo.model';
import { TodoServices } from './../../../services/todo.service';
@Component({
    selector: 'app-task-card',
    standalone: true,
    templateUrl: 'task-card.component.html',
    styleUrls: ['task-card.component.css']
})

export class TaskCardComponent implements OnInit {
    constructor(public todoServices: TodoServices) { }

    ngOnInit() { }

    @Input() todo!:ITodo;

    edit(id: string | number){
        console.log("edit");
    }

    delete(id: string | number){
        this.todoServices.deleteTodoById(id);
    }
}