import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ReqUser} from "../../models/ReqUser";
import {ReqUserService} from "../../services/req-user.service";

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

    user: ReqUser = {
        id: null,
        name: '',
        email: '',
        password: '',
        image: null,
        registered: null
    };
    @Output() newUser: EventEmitter<ReqUser> = new EventEmitter();
    @Output() updateUser: EventEmitter<ReqUser> = new EventEmitter();
    @Input() currentUser: ReqUser;
    @Input() isNew: boolean;

    showUserForm: boolean = false;
    @ViewChild('userForm') form: any;

    constructor(private userService: ReqUserService) {
    }

    ngOnInit() {
    }

    onSubmit({value, valid}: { value: ReqUser, valid: boolean }) {
        if (!valid) {
            console.log('form not valid');
        } else {
            if (this.isNew) {
                value.cpf = '';
                value.image = `http://lorempixel.com/400/400/people/${Math.random() * (100 - 1) + 1}`;
                value.user_type_id = 2;
                this.userService.addUser(value as ReqUser).subscribe(response => {
                    let user = response['data'];
                    alert(`Usuário ${user.name} criado com sucesso!`);
                    this.form.reset();
                    this.newUser.emit(user);
                });
                // if (this.syncUser(value)) {
                //     this.form.reset();
                //     this.countU++;
                // }
            } else {
                this.userService.updateUser(this.currentUser as ReqUser).subscribe(response => {
                    let user = response['data'];
                    alert(`Usuário ${user.name} alterado com sucesso!`);
                    this.form.reset();
                    this.isNew = true;
                    this.updateUser.emit(user);
                });
            }
        }
    }
}
