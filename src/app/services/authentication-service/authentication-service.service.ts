import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../models'

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    url:string;

    constructor(private http: Http) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.url="http://103.249.82.140:9999/kcgtrack";
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post(this.url+'/authenticate.php', JSON.stringify({"username":username, "password":password }))
            .pipe(map(user => {
                if (user.json()==true) {
                    localStorage.setItem('currentUser', JSON.stringify({username:username}));
                    this.currentUserSubject.next({"id":1,"password":"","username":username,"firstName":"admin","lastName":username,"token":"12345"});
                    return true
                }
               else return false;
               
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}