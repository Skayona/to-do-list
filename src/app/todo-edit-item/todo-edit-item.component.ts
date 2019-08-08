import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../models/todo';

@Component({
  selector: 'app-todo-edit-item',
  templateUrl: './todo-edit-item.component.html',
  styleUrls: ['./todo-edit-item.component.scss']
})
export class TodoEditItemComponent  {
  title = '';
  text = '';

  @Input() set todo(td: ITodo) {
    this.title = td.title;
    this.text = td.text;
  }

  @Output() save = new EventEmitter<{ title: string, text: string }>();
  @Output() cancel = new EventEmitter();

  onSave() {
    this.save.emit({
      title: this.title,
      text: this.text
    });
  }


  onCancel() {
    this.cancel.emit();
  }
}
