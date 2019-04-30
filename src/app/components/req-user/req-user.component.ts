import {Component, OnInit} from '@angular/core';
import {ReqUser} from "../../models/ReqUser";

@Component({
    selector: 'app-req-user',
    templateUrl: './req-user.component.html',
    styleUrls: ['./req-user.component.css']
})
export class ReqUserComponent implements OnInit {

    user: ReqUser = {
        name: '',
        email: '',
        password: '',
        image: null,
        registered: null
    };

    users: ReqUser[];
    loaded: boolean = false;
    countU: number = 1;
    currentStyles = {};
    showUserForm: boolean = false;
    syncAPI: boolean = false;

    constructor() {
    }

    ngOnInit() {
        setTimeout(() => {
            this.users = [];
            this.loaded = true;
            this.setCurrentStyles();
        }, 2000);
    }

    setCurrentStyles() {
        this.currentStyles = {
            'padding-top': '5px'
        }
    }

    addSubmitUser() {
        this.user.image = `http://lorempixel.com/400/400/people/${this.countU}`;
        this.user.isActive = true;
        this.user.registered = new Date();
        if (this.syncUser()) {
            this.clearFields();
            this.countU++;
        }
    }

    syncUser() {
        if (!this.syncAPI) {
            this.users.unshift(this.user);
            return true;
        }
        return false;
    }

    clearFields() {
        this.user = {
            name: '',
            email: '',
            password: '',
            image: null,
            registered: null
        };
    }

    onSubmit(e) {
        e.preventDefault();
    }
}
