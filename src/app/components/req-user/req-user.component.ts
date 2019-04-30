import {Component, OnInit, ViewChild} from '@angular/core';
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
    @ViewChild('userForm') form: any;
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

    /* Old */
    // addSubmitUser() {
    //     this.user.image = `http://lorempixel.com/400/400/people/${this.countU}`;
    //     this.user.isActive = true;
    //     this.user.registered = new Date();
    //     if (this.syncUser()) {
    //         this.clearFields();
    //         this.countU++;
    //     }
    // }

    // syncUser() {
    //     if (!this.syncAPI) {
    //         this.users.unshift(this.value);
    //         return true;
    //     }
    //     return false;
    // }

    // clearFields() {
    //     this.user = {
    //         name: '',
    //         email: '',
    //         password: '',
    //         image: null,
    //         registered: null
    //     };
    // }

    onSubmit({value, valid}: { value: ReqUser, valid: boolean }) {
        if (!valid) {
            console.log('form not valid');
        } else {
            value.image = `http://lorempixel.com/400/400/people/${this.countU}`;
            value.isActive = true;
            value.registered = new Date();
            value.hide = true;
            if (this.syncUser(value)) {
                this.form.reset();
                this.countU++;
            }
        }
    }

    syncUser(obj) {
        if (!this.syncAPI) {
            this.users.unshift(obj);
            return true;
        }
        return false;
    }
}
