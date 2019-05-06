import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {ReqUserService} from "../../services/req-user.service";
import {ReqUser} from "../../models/ReqUser";

@Component({
    selector: 'app-userd',
    templateUrl: './userd.component.html',
    styleUrls: ['./userd.component.css']
})
export class UserdComponent implements OnInit {
    user: ReqUser;/*= {
        id: null,
        name: '',
        email: ''
    };*/

    constructor(
        private route: ActivatedRoute,
        private userService: ReqUserService,
        private location: Location) {
    }

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.userService.getUser(id).subscribe(response => this.user = response['data']);
    }

}
