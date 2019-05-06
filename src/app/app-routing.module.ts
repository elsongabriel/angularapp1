import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ReqUserComponent} from "./components/req-user/req-user.component";
import {UserdComponent} from "./components/userd/userd.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'usuarios', component: ReqUserComponent},
    {path: 'usuario/:id', component: UserdComponent},
    {path: '**', component: NotFoundComponent},
];

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {
}
