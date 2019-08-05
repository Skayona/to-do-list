import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todoList: ITodo[];

  @Output() deleteItem = new EventEmitter<string>();

  deleteTodo(id: string) {
    this.deleteItem.emit(id);
  }
}
