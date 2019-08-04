import { Component, OnInit } from '@angular/core';

export interface ITodoItem {
  id: string;
  status: boolean;
  text: string;
  title: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todosArray: ITodoItem[] = [];

  onAddNew({ title, text }: { title: string, text: string }) {
    const newItem: ITodoItem = {
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
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((todos) => todos.map((td) => ({
      id: td.id,
      status: td.completed,
      text: td.title,
      title: td.reqtitle ? td.reqtitle : `Untitled ${ td.id }`
    })))
    .then((todos) => {
      todos.length = 10;
      return todos;
    })
    .then((todos) => this.todosArray = todos);
  }

  ngOnInit(): void {
    this.getData();
  }
 }
