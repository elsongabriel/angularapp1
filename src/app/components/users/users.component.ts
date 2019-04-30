import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    users: User[];
    showExtended: boolean = true;
    loaded: boolean = false;
    enableAdd: boolean = true;
    currentClasses = {};
    currentStyles = {};

    constructor() {
    }

    ngOnInit() {
        // console.log('init...')
        setTimeout(() => {
            this.users = [
                {
                    firstName: 'Elson',
                    lastName: 'Costa',
                    age: 25,
                    address: {
                        street: 'Rua josé',
                        city: 'Vitória',
                        state: 'PE'
                    },
                    image: 'http://lorempixel.com/400/400/people/3',
                    isActive: true,
                    balance: 62,
                    registered: new Date('05/14/2018 14:05:39'),
                },
                {
                    firstName: 'Danyllo',
                    lastName: 'Ferreira',
                    age: 33,
                    address: {
                        street: 'rua olinda',
                        city: 'Olinda',
                        state: 'PE'
                    },
                    image: 'http://lorempixel.com/400/400/people/2',
                    isActive: false,
                    balance: 90,
                    registered: new Date('02/10/2019 09:32:21'),
                },
                {
                    firstName: 'José',
                    lastName: 'Barbosa',
                    age: 42,
                    address: {
                        street: 'Rua marcolino, 223',
                        city: 'Recife',
                        state: 'PE'
                    },
                    image: 'http://lorempixel.com/400/400/people/1',
                    isActive: true,
                    balance: 110,
                    registered: new Date('04/20/2019 11:42:34'),
                }
            ];
            this.loaded = true;

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
            });

            this.setCurrentClasses();
            this.setCurrentStyles();
        }, 2000);
    }

    addUser(user: User) {
        this.users.push(user);
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
}
