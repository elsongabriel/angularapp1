import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ReqUserComponent} from "./components/req-user/req-user.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'usuarios', component: ReqUserComponent}
];

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {
}
