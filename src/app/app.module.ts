import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {FormsModule} from "@angular/forms";
import {ReqUserComponent} from './components/req-user/req-user.component';
// import {DataService} from './services/data.service';
import {ReqUserService} from './services/req-user.service';
import {HttpClientModule} from "@angular/common/http";
import {UserFormComponent} from './components/user-form/user-form.component';

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UsersComponent,
        NavbarComponent,
        ReqUserComponent,
        UserFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [ReqUserService /*DataService*/],
    bootstrap: [AppComponent]
})
export class AppModule {
}
