import {Injectable} from '@angular/core';
import {ReqUser} from '../models/ReqUser';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    syncAPI: boolean;
    users: ReqUser[];
    data: Observable<any>;

    constructor() {
        this.users = [];
        this.syncAPI = false;
    }

    getUsers(): ReqUser[] {
        return this.users;
    }

    getUsersObs(): Observable<ReqUser[]> {
        return of(this.users);
    }

    setUser(user: ReqUser) {
        this.users.unshift(user)
    }

    getData() {
        this.data = new Observable(observer => {
            setTimeout(() => {
                observer.next(1)
            }, 1000);

            setTimeout(() => {
                observer.next(2)
            }, 2000);

            setTimeout(() => {
                observer.next(3)
            }, 3000);

            setTimeout(() => {
                observer.next({name: "Test"})
            }, 4000);
        });

        return this.data;
    }
}
