import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ITodo } from '../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo: ITodo;

  @Output() deleteEvent = new EventEmitter<string>();

  deleteTodo(id: string) {
    this.deleteEvent.emit(id);
  }
}
