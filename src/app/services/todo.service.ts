import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo';


// @Injectable - root вмонтирована в корень и можно использовать везде
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getData(): Promise<ITodo[]> {
    return fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then((response) => response.json())
    .then((todos) => todos.map((td) => ({
      id: td.id,
      status: td.completed,
      text: td.title,
      title: td.reqtitle ? td.reqtitle : `Untitled ${ td.id }`
    })));
  }
}
