import { Component, OnInit, Input } from '@angular/core';
import ITodo from '../../../model/todo.model';
import { TodoService } from './../../../services/todo.service';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
@Component({
    selector: 'app-task-card',
    standalone: true,
    templateUrl: 'task-card.component.html',
    styleUrls: ['task-card.component.css'],
    imports: [FormsModule, ReactiveFormsModule, DragDropModule]
})

export class TaskCardComponent implements OnInit {
    constructor(public todoService: TodoService) { }

    ngOnInit() { }
    @Input() todo!:ITodo;

    title= new FormControl<string>('');


    showTextArea(todo: ITodo){
        todo.isEditing=true;
        this.title.setValue(this.todo.title)
    }

    delete(id: string | number){
        this.todoService.deleteTodoById(id);
    }

    edit(todo: ITodo){
        todo.isEditing= false;
        // console.log(this.title.value);
        // console.log({...todo, title: this.title.value!})
        this.todoService.updateTodo({...todo, title: this.title.value!});
        console.log("checkpoint")
        // this.todoServices.getTodos();
    }
}