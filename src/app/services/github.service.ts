import { Injectable } from '@angular/core';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor() { }

  getUser(): Promise<IUser> {
    return fetch('https://api.github.com/users/Skayona')
      .then((response) => response.json());
  }
}
