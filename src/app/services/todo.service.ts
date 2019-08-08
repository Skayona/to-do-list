import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo';


// @Injectable - root вмонтирована в корень и можно использовать везде
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getList(limit: number = 10): Promise<ITodo[]> {
    return fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${ limit }`)
    .then((response) => response.json())
    .then((todos) => todos.map((td) => ({
      ...td,
      text: td.text ? td.text : '-'
    })));
  }

  getItem(id: string = '1'): Promise<ITodo> {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${ id }`)
      .then((response) => response.json())
      .then((todo) => ({
        ...todo,
        text: todo.text ? todo.text : '-'
      }));
  }

  createItem(todo: ITodo): Promise<ITodo> {
    return fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then((response) => response.json());
  }

  updateItem(todo: ITodo): Promise<ITodo> {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${ todo.id }`, {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then((response) => response.json())
    .then((td) => td);
  }

  deleteItem(id: string) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${ id }`, {
      method: 'DELETE'
    });
  }
}
