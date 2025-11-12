import { Component, OnInit } from '@angular/core';
import { TasksColumnComponent } from '../tasks-column/tasks-column.component';
import { FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TodoService } from '../../../services/todo.service';
import { v4 as uuidv4 } from 'uuid';
import ITodo from '../../../model/todo.model';
import { AdminOnly } from "../../../core/directives/admin-only";
@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: 'tasks.component.html',
    styleUrls: ['tasks.component.css'],
    imports: [TasksColumnComponent, ReactiveFormsModule, FormsModule, AdminOnly]
})

export class TasksComponent implements OnInit {
    constructor(public todoService: TodoService) { }

    ngOnInit() { 
        this.todoService.getTodos('todo');
        this.todoService.getTodos('inProgress');
        this.todoService.getTodos('done');
        
    }

    // applyForm=
    title= new FormControl<string>('');
    status=new FormControl<'todo' | 'inProgress'| 'done'>('todo');
    isModalOpen=false;

    toggleModal(){
        console.log("toggle");
        this.isModalOpen=!this.isModalOpen;
    }

    createNewTodo(){
        let id= uuidv4();
        
        let newTodo: ITodo={
            id, 
            title: this.title.value!,
            status: this.status.value!
        }
        this.todoService.createTodo(newTodo);
        this.toggleModal();
        // this.todoServices.getTodos()
        // console.log(status);
    }
}