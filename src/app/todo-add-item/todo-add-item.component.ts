import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-add-item',
  templateUrl: './todo-add-item.component.html',
  styleUrls: ['./todo-add-item.component.scss']
})
export class TodoAddItemComponent {
  title = '';
  text = '';
  error = false;

  @Output() addNew = new EventEmitter<{ title: string, text: string }>();


  addNewTodo() {
    if (!this.title || !this.text) {
      this.error = true;
      return;
    }

    this.error = false;
    this.addNew.emit({
      title: this.title,
      text: this.text
    });

    this.text = '';
    this.title = '';
  }

}
