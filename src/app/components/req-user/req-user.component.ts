import {Component, OnInit, ViewChild} from '@angular/core';
import {ReqUser} from "../../models/ReqUser";
import {ReqUserService} from "../../services/req-user.service";

// import {DataService} from "../../services/data.service";

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
    currentStyles = {};
    showUserForm: boolean = false;
    @ViewChild('userForm') form: any;

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
            value.cpf = '';
            value.image = `http://lorempixel.com/400/400/people/${this.users.length + 1}`;
            value.user_type_id = 2;
            this.userService.setUser(value as ReqUser).subscribe(response => {
                let user = response['data'];
                alert(`Usuário ${user.name} criado com sucesso!`);
                this.form.reset();
                this.loadUsers();
            });
            // if (this.syncUser(value)) {
            //     this.form.reset();
            //     this.countU++;
            // }
        }
    }
}
