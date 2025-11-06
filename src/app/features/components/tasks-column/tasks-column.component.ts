import { Component, Input, OnInit } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';
import { CommonModule } from '@angular/common';
import { TodoServices } from '../../../services/todo.service';
import {
  transferArrayItem,
  moveItemInArray,
  DragDropModule,
  CdkDragDrop,
} from '@angular/cdk/drag-drop';
import ITodo from '../../../model/todo.model';

@Component({
  selector: 'app-tasks-column',
  standalone: true,
  templateUrl: 'tasks-column.component.html',
  styleUrls: ['tasks-column.component.css'],
  imports: [CommonModule, TaskCardComponent, DragDropModule],
})
export class TasksColumnComponent implements OnInit {
  constructor(public todoServices: TodoServices) {}

  ngOnInit() {}

  @Input() title = '';
  @Input() backgroundColor = '';
  @Input() textColor = '';
  @Input() svgPath = '';
  @Input() data='';

  get filteredTodos() {
    // return this.todoServices.todos().filter((t) => t.status == this.title);
    if(this.data==='todoTodos'){
        return this.todoServices.todoTodos();
    }
    else if(this.data==='inProgressTodos'){
        return this.todoServices.inProgressTodos();
    }
    return this.todoServices.doneTodos();
  }

  onDrop(event: CdkDragDrop<ITodo[]>) {
    const fromList = event.previousContainer.id;
    const toList = event.container.id;
    const fromListIndex = event.previousIndex;
    const toListIndex = event.currentIndex;
    
    if (event.previousContainer === event.container) {
      // Reordering inside the same column
      moveItemInArray(event.container.data, fromListIndex, toListIndex);
    } else {
      // Moving between columns
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        fromListIndex,
        toListIndex
      );
    }
    const movedTodo = event.container.data[toListIndex];

    movedTodo.status = toList as 'todo' | 'inProgress' | 'done';

    // ✅ Optionally persist the change
    this.todoServices.updateTodo(movedTodo);
  }

}
