import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { User } from '../../models';

@Injectable({ providedIn: 'root' })
export class UserService {
  url:string;
    constructor(private http: Http) { 
      this.url="http://localhost:8080";
    }

    getAll() {
        return this.http.get(this.url+`/users`);
    }

    getById(id: number) {
        return this.http.get(this.url+`/users/${id}`);
    }

    register(user: User) {
        return this.http.post(this.url+`/users/register`, user);
    }

    update(user: User) {
        return this.http.put(this.url+`/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(this.url+`/users/${id}`);
    }
}