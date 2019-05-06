import {Injectable} from '@angular/core';
import {ReqUser} from '../models/ReqUser';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {OauthToken} from "../models/OauthToken";

@Injectable({
    providedIn: 'root'
})
export class ReqUserService {

    url: string = 'http://localhost/api_inventory/api/users';
    accessToken: string;
    httpOptions = {};

    constructor(private http: HttpClient) {
    }

    getOauthToken(): Observable<OauthToken> {
        return this.http.post<OauthToken>(
            'http://localhost/api_inventory/oauth/token',
            {
                'grant_type': 'password',
                'client_id': '1',
                'client_secret': 'wWmd54Dqs2fSKfdumtCAiyyr7bKX2lXVwYOBySgs',
                'username': 'walter@recife.pe.gov.br',
                'password': 'p0sitiv0',
                'scope': '*'
            },
            {
                headers: new HttpHeaders({"Content-Type": "application/json"})
            });
    }

    putToken(token) {
        this.httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            })
        };
        this.accessToken = token;
    }

    getUsers(): Observable<ReqUser[]> {
        return this.http.get<ReqUser[]>(this.url, this.httpOptions);
    }

    addUser(user: ReqUser): Observable<ReqUser> {
        return this.http.post<ReqUser>(this.url, user, this.httpOptions);
    }

    updateUser(user: ReqUser): Observable<ReqUser> {
        let url = `${this.url}/${user.id}`;
        return this.http.put<ReqUser>(url, user, this.httpOptions);
    }

    removeUser(userId): Observable<ReqUser> {
        let url = `${this.url}/${userId}`;
        return this.http.delete<ReqUser>(url, this.httpOptions);
    }
}
