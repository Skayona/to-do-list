import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todo-add-item',
  templateUrl: './todo-add-item.component.html',
  styleUrls: ['./todo-add-item.component.scss']
})
export class TodoAddItemComponent {
  @Input() title = '';
  @Input() text = '';
  error = false;

  @Output() save = new EventEmitter<{ title: string, text: string }>();


  onSave() {
    if (!this.title || !this.text) {
      this.error = true;
      return;
    }

    this.error = false;
    this.save.emit({
      title: this.title,
      text: this.text
    });

    this.text = '';
    this.title = '';
  }

}
