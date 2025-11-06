import { Component, OnInit } from '@angular/core';
import { TasksColumnComponent } from '../tasks-column/tasks-column.component';
import { FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TodoServices } from '../../../services/todo.service';
import { v4 as uuidv4 } from 'uuid';
import ITodo from '../../../model/todo.model';
@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: 'tasks.component.html',
    styleUrls: ['tasks.component.css'],
    imports: [TasksColumnComponent, ReactiveFormsModule, FormsModule]
})

export class TasksComponent implements OnInit {
    constructor(public todoServices: TodoServices) { }

    ngOnInit() { 
        this.todoServices.getTodos();
        
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
        this.todoServices.createTodo(newTodo);
        // this.toggleModal();
        // this.todoServices.getTodos()
        // console.log(status);
    }
}