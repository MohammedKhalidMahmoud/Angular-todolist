import { Component, OnInit, Input } from '@angular/core';
import ITodo from '../../../model/todo.model';
import { TodoServices } from './../../../services/todo.service';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
@Component({
    selector: 'app-task-card',
    standalone: true,
    templateUrl: 'task-card.component.html',
    styleUrls: ['task-card.component.css'],
    imports: [FormsModule, ReactiveFormsModule]
})

export class TaskCardComponent implements OnInit {
    constructor(public todoServices: TodoServices) { }

    ngOnInit() { }
    @Input() todo!:ITodo;

    title= new FormControl<string>('');


    showTextArea(todo: ITodo){
        todo.isEditing=true;
        this.title.setValue(this.todo.title)
    }

    delete(id: string | number){
        this.todoServices.deleteTodoById(id);
    }

    edit(todo: ITodo){
        todo.isEditing= false;
        // console.log(this.title.value);
        // console.log({...todo, title: this.title.value!})
        this.todoServices.updateTodo({...todo, title: this.title.value!});
        console.log("checkpoint")
        // this.todoServices.getTodos();
    }
}