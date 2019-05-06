import {Component, OnInit} from '@angular/core';
import {ReqUser} from "../../models/ReqUser";
import {ReqUserService} from "../../services/req-user.service";

// import {DataService} from "../../services/data.service";

@Component({
    selector: 'app-req-user',
    templateUrl: './req-user.component.html',
    styleUrls: ['./req-user.component.css']
})
export class ReqUserComponent implements OnInit {

    users: ReqUser[];
    loaded: boolean = false;
    currentStyles = {};
    currentUser: ReqUser = {
        id: 0,
        name: '',
        email: '',
        password: '',
        image: null,
        registered: null
    };
    isNew: boolean = true;

    constructor(private userService: ReqUserService) {
    }

    ngOnInit() {
        this.setCurrentStyles();

        // this.data = this.dataService.getData().subscribe(data => {
        //     console.log(data);
        // });

        // setTimeout(() => {
        // this.users = this.dataService.getUsers();
        this.loadUsers();
        // }, 2000);
    }

    onNewUser() {
        this.loadUsers();
    }

    onUpdateUser(user: ReqUser) {
        this.loadUsers();
        // this.users.forEach((cur, index) => {
        //     if (user.id === cur.id) {
        //         this.users.splice(index, 1);
        //         this.users.unshift(user);
        //         this.isNew = true;
        //         this.currentUser = {
        //             id: 0,
        //             name: '',
        //             email: '',
        //             password: '',
        //             image: null,
        //             registered: null
        //         };
        //     }
        // });
    }

    setCurrentStyles() {
        this.currentStyles = {
            'padding-top': '5px'
        }
    }

    loadUsers() {
        this.userService.getOauthToken().subscribe(oauth => {
            this.userService.putToken(oauth['access_token']);
            this.userService.getUsers().subscribe(response => {
                this.transformUsers(response['data']);
            });
        });
    }

    transformUsers(users) {
        for (let user of users) {
            user.registered = user.created_at;
            user.image = `http://lorempixel.com/400/400/people/${user.id}`;
            user.isActive = true;
            user.hide = false;
        }
        this.users = users;
        this.loaded = true;
    }

    editUser(user: ReqUser) {
        this.isNew = false;
        this.currentUser = user;
    }

    removeUser(userId) {
        if (confirm("Você tem certeza que deseja remover este usuário?")) {
            this.userService.removeUser(userId).subscribe(() => {
                this.loadUsers();
            });
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

}
