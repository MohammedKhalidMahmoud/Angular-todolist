import { signal, computed } from '@angular/core';
import ITodo from '../model/todo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoServices {
  private uri = 'http://localhost:4000/todos';
  private http = inject(HttpClient);
  todos = signal<ITodo[]>([]);

  // todoTodos= computed(() => this.todos().filter(t => t.status === 'todo'));
  // inProgressTodos = computed(() => this.todos().filter(t => t.status === 'inProgress'));
  // doneTodos = computed(() => this.todos().filter(t => t.status === 'done'));
  todoTodos = signal<ITodo[]>([]);
  inProgressTodos = signal<ITodo[]>([]);
  doneTodos = signal<ITodo[]>([]);

  getTodos() {
    this.http.get<ITodo[]>(this.uri).subscribe((data) => {
      console.log(data);
      this.todos.set(data);
      this.splitTodos(data);
    });
  }

  private splitTodos(todos: ITodo[]) {
    this.todoTodos.set(todos.filter((t) => t.status === 'todo'));
    this.inProgressTodos.set(todos.filter((t) => t.status === 'inProgress'));
    this.doneTodos.set(todos.filter((t) => t.status === 'done'));
  }

  getTodoById(id: string | number): Observable<ITodo> {
    return this.http.get<ITodo>(`${this.uri}/${id}`);
  }

  updateTodo(updatedData: ITodo) {
    this.http
      .patch<ITodo>(`${this.uri}/${updatedData.id}`, updatedData)
      .subscribe((data) => {
        this.todos.set(
          this.todos().map((t) => (t.id === updatedData.id ? updatedData : t))
        );
      });
  }

  deleteTodoById(id: string | number) {
    this.http.delete<ITodo>(`${this.uri}/${id}`).subscribe((data) => {
      console.log(data);
      this.todos.set(this.todos().filter((t) => t.id !== id));
    });
  }

  createTodo(createdTodo: ITodo) {
    this.http.post<ITodo>(this.uri, createdTodo).subscribe((data) => {
      console.log(data);
    });
    this.todos.update((t) => [...t, createdTodo]);
  }

  search(searchWord: string) {
    const filtered= this.todos().filter((t)=>t.title.includes(searchWord.toLowerCase()));
    this.splitTodos(filtered);
  }
}
