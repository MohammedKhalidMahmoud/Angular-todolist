import { signal, computed } from '@angular/core';
import ITodo from '../model/todo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private uri = 'http://localhost:4000/todos';
  private http = inject(HttpClient);
  todos = signal<ITodo[]>([]);

  // todoTodos= computed(() => this.todos().filter(t => t.status === 'todo'));
  // inProgressTodos = computed(() => this.todos().filter(t => t.status === 'inProgress'));
  // doneTodos = computed(() => this.todos().filter(t => t.status === 'done'));
  todoTodos = signal<ITodo[]>([]);
  inProgressTodos = signal<ITodo[]>([]);
  doneTodos = signal<ITodo[]>([]);

  getTodos(type: string) {
    this.http.get<ITodo[]>(this.uri).subscribe((data) => {
      this.todos.set(data);
      console.log(data);
      if(type==='todo'){
        this.todoTodos.set(data.filter(t=>t.status==='todo'))
      }
      else if(type==='inProgress'){
        this.inProgressTodos.set(data.filter(t=>t.status==='inProgress'))
      }
      else if(type==='done'){
        this.doneTodos.set(data.filter(t=>t.status==='done'))
      }
      // this.todos.set(data);
      // this.splitTodos(data);
    });
  }

  // private splitTodos(todos: ITodo[]) {
  //   this.todoTodos.set(todos.filter((t) => t.status === 'todo'));
  //   this.inProgressTodos.set(todos.filter((t) => t.status === 'inProgress'));
  //   this.doneTodos.set(todos.filter((t) => t.status === 'done'));
  // }

  getTodoById(id: string | number): Observable<ITodo> {
    return this.http.get<ITodo>(`${this.uri}/${id}`);
  }

  updateTodo(updatedData: ITodo) {
    this.http
      .patch<ITodo>(`${this.uri}/${updatedData.id}`, updatedData)
      .subscribe((data) => {
        if(data.status==='todo'){
          this.todoTodos.set(
          this.todoTodos().map((t) => (t.id === updatedData.id ? updatedData : t))
        );
        }
        else if(data.status==='inProgress'){
          this.inProgressTodos.set(
          this.inProgressTodos().map((t) => (t.id === updatedData.id ? updatedData : t))
        );
        }
        else if(data.status==='done'){
          this.doneTodos.set(
          this.doneTodos().map((t) => (t.id === updatedData.id ? updatedData : t))
        );
        }
        
      });
  }

  async deleteTodoById(id: string | number) {
    this.http.delete<ITodo>(`${this.uri}/${id}`).subscribe((data) => {
      console.log(data);
      // this.todos.set(this.todos().filter((t) => t.id !== id));
      if(data.status==='todo'){
        this.todoTodos.set(this.todoTodos().filter((t) => t.id !== id));
      }
      else if(data.status==='inProgress'){
        this.inProgressTodos.set(this.inProgressTodos().filter((t) => t.id !== id));
      }
      else if(data.status==='done'){
        this.doneTodos.set(this.doneTodos().filter((t) => t.id !== id));
      }
    });
  }

  createTodo(createdTodo: ITodo) {
    this.http.post<ITodo>(this.uri, createdTodo).subscribe((data) => {
      console.log(data);
      if(data.status==='todo'){
        this.todoTodos.update((t) => [...t, createdTodo]);
      }
      else if(data.status==='inProgress'){
        this.inProgressTodos.update(t=> [...t, createdTodo]);
      }
      else if(data.status==='done'){
        this.doneTodos.update(t=> [...t, createdTodo]);
      }
    });
    
  }

  search(searchWord: string) {
    
  const lower = searchWord.toLowerCase();

  const filteredTodos: ITodo[] = this.todos().filter(t =>
    t.title.toLowerCase().includes(lower)
  );

  this.todoTodos.set(filteredTodos.filter(t => t.status === 'todo'));
  this.inProgressTodos.set(filteredTodos.filter(t => t.status === 'inProgress'));
  this.doneTodos.set(filteredTodos.filter(t => t.status === 'done'));

  }
}
