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

    /*test(obj) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost/api_inventory/api/brands",
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBmYjE5NWIzNjI2MTcyZWU0N2FhN2FkY2U5MDhlY2U1NTJjZWNjNWRkNDRjNmYzM2FlZTVmZGFlNDhmN2E5NzJmZjM1YjAyZDhmNjJkN2NlIn0.eyJhdWQiOiIyIiwianRpIjoiMGZiMTk1YjM2MjYxNzJlZTQ3YWE3YWRjZTkwOGVjZTU1MmNlY2M1ZGQ0NGM2ZjMzYWVlNWZkYWU0OGY3YTk3MmZmMzViMDJkOGY2MmQ3Y2UiLCJpYXQiOjE1NTY3OTY3OTgsIm5iZiI6MTU1Njc5Njc5OCwiZXhwIjoxNTU2ODAzOTk0LCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.E7zi4kEQqfX60vyFtZvNbaJiZVWjyA0j8BLutN51B3QUUEsAg9GlxE-jIMLQa9a-UPiZRMNKX0r2yvYxZWi_l6hksLrhV5YWHnAIZOWcw7M0MshJuD5XAc0LawqfmA-WhbLnSyOxevmYFEYat_VuDoAlPd80Z7NZiWPCo5K7ZGSeTJC_RhNNM3pDeOkXpvzia4V1kjgI6uzGFD_CX3VUBqh-RUX_ijefpYt5qDD2ZIuARoT_b-3FFwn253tKk7AWDHvj7Ed68t5QM4kGPJI4t8JkGNw0arXXXYycERrHgmpry_RS1ykiD64JVahsiAFPkyB8o-05poIbrFfBfivZrNFSz0m-nyDXExUYXrjsmLpMAeJbMsM46eeRrnK3iZJfysCzJbc95szEbxAaH7qwqblsV7LwQKnu1_VKJcfdKLywS6oGju0bz1uKwaXm0fpGVHlV7phEDKdIRbkRqXlpf9YZpVLE9C8utHmHlJUOn_zGjcFvQwFDEHUiJTmMpti-p39KCxNMAfL03YKUJeKthU8NiNoPbPPA8J3lXH6oKojtn74K3ikJHK08Qkz5WxM_F8y2_hT9B9yZP8MUOTEIadqIeU3g7AAzFSU2ukZoDJZdleqTSH0VR2g_YIyf5g_Rbyq22_yxwqlKi6DcnxhlS8LT2RTV4inpNG5vXyPs9Uc",
                "cache-control": "no-cache",
                "Postman-Token": "ff180756-43e7-4713-9cc8-5b330a3b7580"
            },
            "processData": false,
            "data": "{name: " + obj.name + "}"
        };

        // $.ajax(settings).done(function (response) {
        //     console.log(response);
        // });

        // var data = JSON.stringify({
        //     "name": "Teste novo"
        // });
        //
        // var xhr = new XMLHttpRequest();
        // xhr.withCredentials = true;
        //
        // xhr.addEventListener("readystatechange", function () {
        //     if (this.readyState === 4) {
        //         console.log(this.responseText);
        //     }
        // });
        //
        // xhr.open("POST", "http://localhost/api_inventory/api/brands");
        // xhr.setRequestHeader("Content-Type", "application/json");
        // xhr.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBmYjE5NWIzNjI2MTcyZWU0N2FhN2FkY2U5MDhlY2U1NTJjZWNjNWRkNDRjNmYzM2FlZTVmZGFlNDhmN2E5NzJmZjM1YjAyZDhmNjJkN2NlIn0.eyJhdWQiOiIyIiwianRpIjoiMGZiMTk1YjM2MjYxNzJlZTQ3YWE3YWRjZTkwOGVjZTU1MmNlY2M1ZGQ0NGM2ZjMzYWVlNWZkYWU0OGY3YTk3MmZmMzViMDJkOGY2MmQ3Y2UiLCJpYXQiOjE1NTY3OTY3OTgsIm5iZiI6MTU1Njc5Njc5OCwiZXhwIjoxNTU2ODAzOTk0LCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.E7zi4kEQqfX60vyFtZvNbaJiZVWjyA0j8BLutN51B3QUUEsAg9GlxE-jIMLQa9a-UPiZRMNKX0r2yvYxZWi_l6hksLrhV5YWHnAIZOWcw7M0MshJuD5XAc0LawqfmA-WhbLnSyOxevmYFEYat_VuDoAlPd80Z7NZiWPCo5K7ZGSeTJC_RhNNM3pDeOkXpvzia4V1kjgI6uzGFD_CX3VUBqh-RUX_ijefpYt5qDD2ZIuARoT_b-3FFwn253tKk7AWDHvj7Ed68t5QM4kGPJI4t8JkGNw0arXXXYycERrHgmpry_RS1ykiD64JVahsiAFPkyB8o-05poIbrFfBfivZrNFSz0m-nyDXExUYXrjsmLpMAeJbMsM46eeRrnK3iZJfysCzJbc95szEbxAaH7qwqblsV7LwQKnu1_VKJcfdKLywS6oGju0bz1uKwaXm0fpGVHlV7phEDKdIRbkRqXlpf9YZpVLE9C8utHmHlJUOn_zGjcFvQwFDEHUiJTmMpti-p39KCxNMAfL03YKUJeKthU8NiNoPbPPA8J3lXH6oKojtn74K3ikJHK08Qkz5WxM_F8y2_hT9B9yZP8MUOTEIadqIeU3g7AAzFSU2ukZoDJZdleqTSH0VR2g_YIyf5g_Rbyq22_yxwqlKi6DcnxhlS8LT2RTV4inpNG5vXyPs9Uc");
        // xhr.setRequestHeader("cache-control", "no-cache");
        // xhr.setRequestHeader("Postman-Token", "9b90a97f-364e-412e-8567-81d0a2c5d9cd");
        //
        // xhr.send(data);

    }*/
}
