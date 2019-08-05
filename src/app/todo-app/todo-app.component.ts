import { Component, OnInit } from '@angular/core';
import { ITodo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
  todosArray: ITodo[] = [];

  constructor(
    private todoService: TodoService
  ) { }

  onAddNew({ title, text }: { title: string, text: string }) {
    const newItem: ITodo = {
      id: (new Date()).toISOString(),
      status: false,
      text,
      title
    };
    this.todosArray.unshift(newItem);
  }

  onDeleteItem(id: string) {
    const index = this.todosArray.findIndex((todo) => todo.id === id);
    this.todosArray.splice(index, 1);
  }

  getData() {
    this.todoService.getData()
    .then((todos) => this.todosArray = todos);
  }

  ngOnInit(): void {
    this.getData();
  }

}
