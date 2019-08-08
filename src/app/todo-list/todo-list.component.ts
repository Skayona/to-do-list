import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todoList: ITodo[];

  @Output() deleteItem = new EventEmitter<ITodo>();
  @Output() editItem = new EventEmitter<ITodo>();

  deleteTodo(todo: ITodo) {
    this.deleteItem.emit(todo);
  }

  editTodo(todo: ITodo) {
    this.editItem.emit(todo);
  }
}
