import { signal, computed } from "@angular/core"
import ITodo from "../model/todo.model"
import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from '@angular/core';
import { Observable } from "rxjs";

    @Injectable({ providedIn: 'root' })
export class TodoServices{
    private uri='http://localhost:4000/todos';
    private http= inject(HttpClient);
    todos=signal<ITodo[]>([]);

    todoTodos= computed(() => this.todos().filter(t => t.status === 'To do'));
    inProgressTodos = computed(() => this.todos().filter(t => t.status === 'In progress'));
    doneTodos = computed(() => this.todos().filter(t => t.status === 'Done'));

    getTodos(){
        this.http.get<ITodo[]>(this.uri).subscribe((data)=>{
            console.log(data);
            this.todos.set(data);
        });
    }

    getTodoById(id: string | number): Observable<ITodo>{
        return this.http.get<ITodo>(`${this.uri}/${id}`);
    }

    updateTodo(updatedData: ITodo){
        this.http.patch<ITodo>(`${this.uri}/${updatedData.id}`, updatedData).subscribe((data)=>{
            console.log(data);
            // this.todos.set(this.todos().filter(t.zzz))
        })
    }

    deleteTodoById(id: string | number){
        this.http.delete<ITodo>(`${this.uri}/${id}`).subscribe((data)=>{
            console.log(data);
            this.todos.set(this.todos().filter(t=>t.id !==id));
        });
    }

    createTodo(todoData: ITodo){
        this.http.post<ITodo>(this.uri, todoData).subscribe((data)=>{
            console.log(data);
        });
    }
}