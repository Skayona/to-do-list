import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ITodo } from '../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  editMode = false;

  @Input() todo: ITodo;

  @Output() deleteEvent = new EventEmitter<ITodo>();
  @Output() editEvent = new EventEmitter<ITodo>();

  deleteTodo() {
    this.deleteEvent.emit(this.todo);
  }

  editTodo() {
    this.editMode = this.todo.completed === false;
  }

  updateEvent({title, text }: { title: string, text: string }) {
    const editedItem = {
      ...this.todo,
      title,
      text
    };
    this.editMode = false;
    this.editEvent.emit(editedItem);
  }

  cancelEdit() {
    this.editMode = false;
  }
}
