import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    user: User = {
        firstName: '',
        lastName: '',
        age: null,
        address: {
            street: '',
            city: '',
            state: ''
        },
        registered: null
    };
    users: User[] = [];
    showExtended: boolean = true;
    loaded: boolean = false;
    enableAdd: boolean = true;
    currentClasses = {};
    currentStyles = {};
    countU: number = 0;
    showUserForm: boolean = false;

    constructor() {
    }

    ngOnInit() {
        // console.log('init...')
        setTimeout(() => {
            // this.users = [
            //     {
            //         firstName: 'Elson',
            //         lastName: 'Costa',
            //         age: 25,
            //         address: {
            //             street: 'Rua josé',
            //             city: 'Vitória',
            //             state: 'PE'
            //         },
            //         image: 'http://lorempixel.com/400/400/people/3',
            //         isActive: true,
            //         balance: 62,
            //         registered: new Date('05/14/2018 14:05:39'),
            //         hide: true,
            //     },
            //     {
            //         firstName: 'Danyllo',
            //         lastName: 'Ferreira',
            //         age: 33,
            //         address: {
            //             street: 'rua olinda',
            //             city: 'Olinda',
            //             state: 'PE'
            //         },
            //         image: 'http://lorempixel.com/400/400/people/2',
            //         isActive: false,
            //         balance: 90,
            //         registered: new Date('02/10/2019 09:32:21'),
            //         hide: true,
            //     },
            //     {
            //         firstName: 'José',
            //         lastName: 'Barbosa',
            //         age: 42,
            //         address: {
            //             street: 'Rua marcolino, 223',
            //             city: 'Recife',
            //             state: 'PE'
            //         },
            //         image: 'http://lorempixel.com/400/400/people/1',
            //         isActive: true,
            //         balance: 110,
            //         registered: new Date('04/20/2019 11:42:34'),
            //         hide: false,
            //     }
            // ];
            this.loaded = true;

            //this.addOthersUsersExample();

            this.setCurrentClasses();
            this.setCurrentStyles();
        }, 2000);
    }

    addOthersUsersExample() {
        this.addUser({
            firstName: 'Marcos',
            lastName: 'Antônio',
            age: 29,
            address: {
                street: 'Rua são paulo',
                city: 'São paulo',
                state: 'SP'
            },
            isActive: true,
            balance: 89,
            registered: new Date('03/30/2019 10:01:02'),
            hide: true,
        });

        this.addUser({
            firstName: 'Gustavo',
            lastName: 'Alexandre',
            // age: 22,
            // address: {
            //     street: 'Alexandria',
            //     city: 'Rio de janeiro',
            //     state: 'RJ'
            // }
            isActive: false,
            balance: 78,
            registered: new Date('04/30/2019 09:13:21'),
            hide: true,
        });
    }

    addUser(user: User) {
        this.users.push(user);
    }

    addSubmitUser() {
        this.user.isActive = true;
        this.user.registered = new Date();
        this.users.unshift(this.user);
    }

    setCurrentClasses() {
        this.currentClasses = {
            'btn-success': this.enableAdd,
            'big-text': this.showExtended
        }
    }

    setCurrentStyles() {
        this.currentStyles = {
            'padding-top': this.showExtended ? '5px' : '15px',
            'font-size': this.showExtended ? '' : '20px',
        }
    }

    btnAddUser(e) {
        this.countU++;
        //console.log(e);
        this.addUser({
            firstName: 'Teste',
            lastName: `${this.countU}`,
            image: `http://lorempixel.com/400/400/people/${this.countU + 3}`,
            isActive: true,
            hide: true,
        })
    }

    checkHideBtn(user) {
        return (user.age && user.address);
    }

    onSubmit(e) {
        e.preventDefault();
    }

    // fireEvent(e) {
    //     console.log(e.type);
    //     console.log(e.target.value);
    // }
}
