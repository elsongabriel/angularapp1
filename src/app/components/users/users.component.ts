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
            });

            this.setCurrentClasses();
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
}
