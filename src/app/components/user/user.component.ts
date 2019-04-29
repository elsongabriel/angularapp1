import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    // template: '<h2>Elson Costa</h2>'
    // styles: [`
    //     h2 {
    //         color: #f12f22;
    //     }
    // `]
})

export class UserComponent implements OnInit {
    user: User;

    // // Methods
    // constructor() {
    //     this.user = {
    //         firstName: 'Elson',
    //         lastName: 'Costa',
    //         age: 25,
    //         address: {
    //             street: 'Rua josé',
    //             city: 'Vitória',
    //             state: 'PE'
    //         }
    //     };
    // }

    constructor() {

    }

    ngOnInit() {
        this.user = {
            firstName: 'Elson',
            lastName: 'Costa',
            age: 25,
            address: {
                street: 'Rua josé',
                city: 'Vitória',
                state: 'PE'
            }
        };
    }
}

/*export class UserComponent {
    // Properties
    firstName = 'Elson';
    lastName = 'Costa';
    age = 25;
    address = {
        street: 'Rua josé',
        city: 'Vitória',
        state: 'PE'
    };
    foo: any;
    hasKids: boolean;
    numberArray: number[];
    stringArray: string[];
    mixedArray: any[];
    myTuple: [string, number, boolean];
    unusable: void;
    u: undefined;
    n: null;

    // Methods
    constructor() {
        // console.log('Hello User...');
        // this.sayHello();
        // console.log('initial: ' + this.age);
        // this.hasBirthday();
        // console.log('updated: ' + this.age);
        // this.initialize();
        // console.log(this.addNumbers(2, 3));
    }

    initialize() {
        // Initializers
        this.foo = 'test';
        this.hasKids = false;
        this.numberArray = [1, 2, 3];
        this.stringArray = ['1', '2', '3'];
        this.mixedArray = [true, 2, 'hello'];
        this.myTuple = ['hello', 1, true];
        this.unusable = undefined;
        this.u = undefined;
        this.n = null;
    }

    sayHello() {
        console.log(`Hello ${this.firstName}`);
    }

    hasBirthday() {
        this.age += 1;
    }

    addNumbers(num1: number, num2: number) {
        return num1 + num2;
    }
}*/
