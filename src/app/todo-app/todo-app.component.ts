import { Component, OnInit } from '@angular/core';
import { ITodo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
  limit = 20;
  todosArray: ITodo[] = [];

  constructor(
    private todoService: TodoService
  ) { }


  deleteItem(todo: ITodo) {
    this.todoService.deleteItem(todo.id)
    .then(() => {
      const index = this.todosArray.findIndex((td) => td === todo);
      this.todosArray.splice(index, 1);
    });
  }

  getData() {
    this.todoService.getList(this.limit)
    .then((todos) => this.todosArray = todos);
  }

  createItem(todo: ITodo) {
    this.todoService.createItem(todo)
      .then((td) => {
        this.todosArray.unshift(td);
      });
  }

  updateItem(todo: ITodo) {
    this.todoService.updateItem(todo)
      .then((td) => {
        this.todosArray = this.todosArray.map((item) => {
          if (item.id === todo.id) {
            return td;
          }
          return item;
        });
      });
  }

  ngOnInit(): void {
    this.getData();

    this.todoService.getItem('100').then(console.log);
  }

}
